import { FaGithub } from "react-icons/fa6";
import { maze } from "../../assets";
import { Link } from "../../components";
import StartButton from "./StartButton";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-dvw h-dvh gap-6 px-2">
      <img src={maze} className="h-1/6" />
      <article className="prose text-center">
        <h1 className="text-lavender-blush">React Maze AI ✨</h1>
        <h3 className="text-lavender-blush/60">
          Give me a maze and I'll try to solve it.
        </h3>
        <p className="text-lavender-blush/40">by Marcelo Ferreira</p>
      </article>
      <StartButton />
      <Link href="https://github.com/marceloferreira357" target="_blank">
        <FaGithub className="text-xl" />
        <span>marceloferreira357</span>
      </Link>
    </div>
  );
}

export default Home;
