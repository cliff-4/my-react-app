import FadeIn from "./FadeIn";

const ImgSrc: string = "/me.jpg";
const Content: string =
  "Hello there! I am Aditya Mishra, a Physics student at the Indian Institute of Technology Kharagpur. I am a passionate programmer and tech enthusiast. I love to fiddle around with new technologies (one big example is the very website you see!) aaaand to spend countless hours to automate my teensy tasks, like a true OCD-haver. On most days I can be found sleeping, but once in a blue moon, when I wake up, I am found doom scrolling on Instagram (damn you Meta algorithm). Jokes aside, I love to work on developing softwares, high-performance data pipelines and generative AI projects. Please visit Projects page to learn more about my ventures!";

const Home = () => {
  return (
    <div
      className="
      flex flex-col md:flex-row justify-center
      md:ml-12
      md:min-h-screen
      pb-28 md:pb-0
      "
    >
      <FadeIn className="home-container text-pretty">
        <span
          className="
          pl-8
          text-5xl mt-4 md:mt-0 md:text-7xl font-mono 
          text-quinternary
          animate-pulse 
          "
        >
          Who am I?
        </span>
        <div className="md:border-solid md:border-2 md:border-quinternary rounded-xl bg-quarternary">
          <FadeIn delay="400">
            <p className="text-tertiary text-xl leading-relaxed overflow-hidden m-4 md:m-8">
              {Content}
            </p>
          </FadeIn>
        </div>
      </FadeIn>
      <FadeIn delay="200" className="home-container py-0">
        <img
          className="
          h-[80vh] lg:h-full md:p-4
          object-cover rounded-[8vh]
          "
          src={ImgSrc}
          alt="Aditya Mishra"
        />
      </FadeIn>
    </div>
  );
};

export default Home;
