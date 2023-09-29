import LocalSearch from "@/components/shared/search/LocalSearch";
import Link from "next/link";

export default function Home() {
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
      </div>
    </>
  );
}
