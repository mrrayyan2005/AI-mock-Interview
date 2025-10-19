import { db } from "@/utils/db";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    try {
        const { interviewId } = params;

        // Delete user answers first (due to foreign key constraint)
        await db.delete(UserAnswer).where(eq(UserAnswer.mockIdRef, interviewId));
        
        // Delete the mock interview
        const result = await db.delete(MockInterview).where(eq(MockInterview.mockId, interviewId));

        return NextResponse.json({ message: "Interview deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting interview:", error);
        return NextResponse.json({ error: "Failed to delete interview" }, { status: 500 });
    }
}
