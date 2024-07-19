import FadeIn from "./FadeIn";

const ImgSrc: string = "/me.jpg";
const Content: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae recusandae ipsam, consequuntur magnam neque placeat totam. Earum magni eveniet voluptates doloremque nulla, aperiam error quod corporis id, quisquam dolore.";

const Home = () => {
  return (
    <div
      className="
      flex flex-col md:flex-row justify-center
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
