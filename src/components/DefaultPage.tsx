interface PageProps {
  content: string;
}

const DefaultPage = ({ content }: PageProps) => {
  return (
    <div className="bg-tertiary min-h-screen flex flex-row justify-center">
      <div className="min-w-[100vw] flex flex-col justify-center items-center">
        <p className="flex flex-row justify-center text-7xl max-w-[40vw] bg-primary text-secondary m-4 p-8 rounded-full">
          Default page
        </p>
        <p className="italic p-4 my-2 bg-primary text-tertiary rounded-full">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DefaultPage;
