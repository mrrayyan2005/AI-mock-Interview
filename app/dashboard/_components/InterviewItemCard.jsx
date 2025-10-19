import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const InterviewItemCard = ({ interview, onDelete }) => {
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState(false);
    
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedbackPress=()=>{
        router.push('dashboard/interview/'+interview.mockId+"/feedback")
    }

    const onDeletePress = async () => {
        if (window.confirm('Are you sure you want to delete this mock interview?')) {
            setIsDeleting(true);
            try {
                const response = await fetch(`/api/interview/${interview.mockId}`, {
                    method: 'DELETE',
                });
                
                if (response.ok) {
                    toast.success('Interview deleted successfully!');
                    onDelete(interview.mockId);
                } else {
                    toast.error('Failed to delete interview');
                }
            } catch (error) {
                console.error('Error deleting interview:', error);
                toast.error('Failed to delete interview');
            } finally {
                setIsDeleting(false);
            }
        }
    }

  return (
    <div className="interview-card rounded-xl p-4 relative">
      <Button 
        size="sm" 
        variant="outline"
        className="absolute top-2 right-2 w-8 h-8 p-0 text-red-500 border-red-300 hover:bg-red-50"
        onClick={onDeletePress}
        disabled={isDeleting}
      >
        {isDeleting ? '...' : '×'}
      </Button>
      
      <h2 className="font-bold text-primary text-lg pr-10">{interview?.jobPosition}</h2>
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
