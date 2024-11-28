import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1 className=" h1-bold  background-light850_dark100">
        Welcome to the world of next js
      </h1>
    </>
  );
};

export default Home;
