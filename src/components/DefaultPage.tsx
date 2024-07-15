import { FaHouseChimneyWindow } from "react-icons/fa6";
import FadeIn from "./FadeIn";

interface PageProps {
  content: string;
}

const DefaultPage = ({ content }: PageProps) => {
  return (
    <div className="min-h-screen flex flex-row justify-center">
      <div className="min-w-[100vw] flex flex-col justify-center items-center">
        <FadeIn delay="0">
          <p
            className="
            flex flex-row justify-center
            text-7xl max-w-[40vw] m-4 p-8 rounded-2xl
            bg-quarternary text-secondary
            border-solid border-2 border-quinternary
            "
          >
            Default page
          </p>
        </FadeIn>
        <FadeIn delay="200">
          <p className="italic p-4 my-2 bg-quarternary text-secondary rounded-2xl border-solid border-2 border-quinternary">
            {content}
          </p>
        </FadeIn>
        <FadeIn delay="400">
          <div className="my-10 animate-bounce text-quinternary">
            <FaHouseChimneyWindow size="64" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default DefaultPage;
