import React from "react";
import QuestionForm from "@/components/forms/QuestionForm";

const page = () => {
  return (
    <div>
      <h1 className="text-dark100_light900 h1-bold">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default page;
