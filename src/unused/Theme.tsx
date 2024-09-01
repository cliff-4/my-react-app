import FadeIn from "../components/FadeIn";
import themesObject from "../themes.json";

const themes = themesObject.allThemes;

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
            <ThemeCard
              title={theme.title}
              hexList={theme.hexList}
              onClick={() => {
                SetTheme(index);
              }}
            />
          </FadeIn>
        ))}
      </div>
    </>
  );
}

interface ThemeCardProps {
  title: string;
  hexList: string[];
  onClick: () => void;
}

function ThemeCard({ title, hexList, onClick }: ThemeCardProps) {
  return (
    <>
      <div
        className="
        group
        flex flex-col items-right
        max-w-fit
        cursor-pointer
        "
        onClick={onClick}
      >
        <span
          className="
          bg-secondary
          group-hover:translate-y-0 group-hover:scale-110
          translate-y-3 
          transition-all duration-200 ease-in-out
          p-1
          text-center text-2xl font-mono font-bold
          border-2 border-white
          rounded-lg
          "
        >
          {title}
        </span>
        <div
          className="
          bg-[#7e7e7e]
          p-4
          flex flex-row overflow-hidden
          border-2 border-white rounded-b-lg
          z-10
          "
        >
          {hexList.map((hex, index) => (
            <div
              key={index}
              className="
              first:rounded-l-lg last:rounded-r-lg
              group flex flex-col items-center justify-center
              w-20 h-20
              hover:scale-125 hover:z-20 hover:rounded-lg
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

function SetTheme(index: number) {
  console.log(`Index: ${index}, WiP`);
}

export default Theme;
