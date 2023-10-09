import React from "react";

const Question = () => {
  return (
    <form className="form-control flex flex-col gap-6">
      <div>
        <h3>Question Title</h3>
        <input name="" id="" className="input input-bordered"></input>
      </div>
      <div>
        <h3>Detailed explanation of your problem</h3>
        <textarea
          name=""
          id=""
          cols={50}
          className="textarea textarea-bordered textarea-md"
        ></textarea>
      </div>
    </form>
  );
};

export default Question;
