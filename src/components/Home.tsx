import FadeIn from "./FadeIn";

const ImgSrc: string = "/me.jpg";
const Content: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae recusandae ipsam, consequuntur magnam neque placeat totam. Earum magni eveniet voluptates doloremque nulla, aperiam error quod corporis id, quisquam dolore.";

const Home = () => {
  return (
    <div className="flex flex-row justify-center min-h-screen">
      <FadeIn className="home-container text-pretty">
        <span
          className="
          pl-8
          text-7xl font-mono 
          text-quinternary
          "
        >
          Who am I?
        </span>
        <div className="border-solid border-2 border-quinternary rounded-xl bg-quarternary">
          <FadeIn delay="400">
            <p className="text-tertiary text-xl leading-relaxed overflow-hidden m-8">
              {Content}
            </p>
          </FadeIn>
        </div>
      </FadeIn>
      <FadeIn delay="200" className="home-container">
        <img
          className="
          object-cover h-full
          rounded-tl-[20vh] rounded-br-[20vh] rounded-tr-[8vh] rounded-bl-[8vh]
          hover:rounded-tl-[8vh] hover:rounded-br-[8vh] hover:rounded-tr-[20vh] hover:rounded-bl-[20vh]
          transition-all duration-200 ease-in-out
          "
          src={ImgSrc}
          alt="Aditya Mishra"
        />
      </FadeIn>
    </div>
  );
};

export default Home;
