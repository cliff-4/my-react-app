import FadeIn from "./FadeIn";

const themes = [
  {
    title: "Default",
    hexList: ["240115", "de3c4b", "87f5fb", "2f131e", "cec3c1"], // the first one
  },
  {
    title: "me.jpg",
    hexList: ["09017b", "8785d9", "03005b", "da9de6", "dddfed"], // from me.jpg
  },
  {
    title: "Minimalist",
    hexList: ["d1bce3", "c49bbb", "a1867f", "585481", "19297c"],
  },
  {
    title: "Cute",
    hexList: ["070707", "40434e", "c297b8", "fdcff3", "de89be"],
  },
];

function Theme() {
  return (
    <>
      <div
        className="
      md:h-full pt-8 pb-28 md:py-16
      grid md:grid-rows-3 grid-cols-1 md:grid-cols-2 grid-flow-row gap-8
      place-items-center
      "
      >
        {themes.map((theme, index) => (
          <FadeIn delay={`${200 * index}`} key={index}>
            <ThemeCard title={theme.title} hexList={theme.hexList} />
          </FadeIn>
        ))}
      </div>
    </>
  );
}

interface ThemeCardProps {
  title: string;
  hexList: string[];
}

function ThemeCard({ title, hexList }: ThemeCardProps) {
  return (
    <>
      <div
        className="
        group
        flex flex-col items-center
        max-w-fit
        "
        onClick={() => {
          SetTheme(hexList);
        }}
      >
        <span
          className="
          bg-secondary
          px-4 pt-1
          text-center text-2xl font-mono font-bold
          border-2 border-b-0 border-white
          rounded-t-3xl
          z-0 translate-y-1/4 group-hover:translate-y-0
          transition-all duration-200 ease-out
          "
        >
          {title}
        </span>
        <div
          className="
          bg-secondary
          p-4
          flex flex-row -space-x-8 overflow-hidden
          border-2 border-white rounded-3xl
          z-10
          "
        >
          {hexList.map((hex, index) => (
            <div
              key={index}
              className="
              group flex flex-col items-center justify-center
              w-20 h-20 rounded-full
              border-2 border-dashed hover:border-solid border-white
              hover:scale-110 hover:z-20
              transition-all duration-200 ease-out
              "
              style={{ backgroundColor: `#${hex}` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

function SetTheme(hexList: string[]) {
  localStorage.setItem("theme", hexList.join("")); // WiP
}

export default Theme;
