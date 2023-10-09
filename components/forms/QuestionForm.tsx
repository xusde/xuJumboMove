"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, UserType } from "@/lib/validations";
import TinyEditor from "../shared/TinyEditor";

const Question = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      title: "",
      desc: "",
      tags: [],
    },
  });
  const onSubmit: SubmitHandler<UserType> = (data) => console.log(data);
  return (
    <form
      className="form-control flex w-full flex-col gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <label
          className="paragraph-semibold text-dark400_light800"
          htmlFor="title"
        >
          Question Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          {...register("title")}
          className="paragraph-regular background-light700_dark300 text-dark300_light700 input input-bordered"
        />
        <p className="text-red-500">{errors.title?.message}</p>
      </div>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="desc"
          className="paragraph-semibold text-dark400_light800"
        >
          Detailed explanation of your problem{" "}
          <span className="text-red-500">*</span>
        </label>
        {/* <textarea
          id="desc"
          {...register("desc")}
          className="paragraph-regular background-light700_dark300 text-dark300_light700 textarea  textarea-bordered textarea-lg"
        /> */}
        <TinyEditor />
        <p className="text-red-500">{errors.desc?.message}</p>
      </div>

      <div className="flex flex-col gap-4">
        <label
          className="paragraph-semibold text-dark400_light800"
          htmlFor="title"
        >
          Add Tags <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          {...register("tags")}
          placeholder="Enter up to 3 tags separated by commas "
          className="paragraph-regular background-light700_dark300 text-dark300_light700 input input-bordered"
        />
        <p className="text-red-500">{errors.tags?.message}</p>
      </div>
      <button className="btn w-fit">Submit</button>
    </form>
  );
};

export default Question;
