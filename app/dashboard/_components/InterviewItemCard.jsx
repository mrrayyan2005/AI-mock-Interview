import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
    const router = useRouter()
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedbackPress=()=>{
        router.push('dashboard/interview/'+interview.mockId+"/feedback")
    }
  return (
    <div className="interview-card rounded-xl p-4">
      <h2 className="font-bold text-primary text-lg">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-green-600 font-medium">{interview?.jobExperience} years experience</h2>
      <h2 className="text-xs text-green-500 mt-1">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between gap-3 mt-4">
        <Button size="sm" variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50" onClick={onFeedbackPress} >
          Feedback
        </Button>
        <Button className="w-full primary-button" size="sm" onClick={onStart}>Start</Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
