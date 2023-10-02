import HomeFiltertags from "@/components/home/HomeFiltertags";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "Cascading Deletes in SQLAlchemy?",
      tags: [
        { _id: "1", name: "python" },
        { _id: "2", name: "sql" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        picture: "john-doe.jpg",
      },
      upvotes: 1500000,
      views: 500552,
      answers: [],
      createdAt: new Date("2023-09-01T12:00:00.000Z"),
    },
    {
      _id: "2",
      title: "How to center a div?",
      tags: [
        { _id: "3", name: "css" },
        { _id: "4", name: "html" },
      ],
      author: {
        _id: "2",
        name: "Jane Smith",
        picture: "jane-smith.jpg",
      },
      upvotes: 5,
      views: 50,
      answers: [],
      createdAt: new Date("2021-09-02T10:30:00.000Z"),
    },
  ];
  return (
    <>
      <div className="flex flex-col-reverse justify-between  sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end">
          <button className="primary-gradient btn min-h-[45px] px-4 py-3 text-light-900">
            Ask a question
          </button>
        </Link>
      </div>
      <div className="mt-10 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconSrc="/assets/icons/search.svg"
          iconPosition="left"
          placeholder="Search questions"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses={`sm:min-w-[165px] min-h-[56px]`}
          containerClasses={"hidden max-md:flex"}
        />
      </div>
      <HomeFiltertags />
      <div className="mt-10 flex w-full flex-col">
        {questions.length > 0 ? (
          questions.map((que) => (
            <QuestionCard
              key={que._id}
              _id={que._id}
              title={que.title}
              tags={que.tags}
              author={que.author}
              votes={que.upvotes}
              views={que.views}
            />
          ))
        ) : (
          <NoResult
            title="There's no result found"
            desc="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkText="Ask a question"
          />
        )}
      </div>
    </>
  );
}
