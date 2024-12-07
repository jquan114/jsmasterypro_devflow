import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to worship God?",
    description: " I want become closer to God",
    tags: [
      {
        _id: "1",
        name: "Christ",
      },
      {
        _id: "2",
        name: "God",
      },
    ],
    author: { _id: "1", name: "JQUAN COLLINS" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to pay your tithes",
    description: " I want become closer to the church",
    tags: [
      {
        _id: "1",
        name: "Bible",
      },
      {
        _id: "2",
        name: "God",
      },
    ],
    author: { _id: "1", name: "Ezra G Collins" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((questions) =>
    questions.title.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}> ASK A QUESTION</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
      </section>
      {/* Home Filter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}> {question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
