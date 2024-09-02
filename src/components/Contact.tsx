const ContactPage = () => {
  return (
    <div className="min-h-screen min-w-screen grid h-screen place-items-center">
      <div
        className="
            w-1/2 h-min
            flex flex-col
            p-4
            bg-quarternary
            border-2 border-quinternary rounded-xl
          "
      >
        <div className="text-2xl bg-secondary rounded-xl px-4 py-2 w-fit">
          You can contact me at any
        </div>
        <div
          className="
            m-4 h-max
            flex flex-col gap-4
            text-xl font-mono justify-between
          "
        >
          <div className="group">
            <div
              className="
              bg-quinternary rounded-xl
              w-fit inline-block mr-3 px-2
              group-hover:scale-110
              "
            >
              Email
            </div>
            <a
              href="mailto:adityamishra0700@gmail.com"
              className="text-quinternary group-hover:underline"
            >
              adityamishra0700@gmail.com
            </a>
          </div>
          <div className="group">
            <div
              className="
              bg-quinternary rounded-xl
              w-fit inline-block mr-3 px-2
              group-hover:scale-110
              "
            >
              LinkedIn
            </div>
            <a
              href="https://www.linkedin.com/in/adityamishra42/"
              className="text-quinternary group-hover:underline"
            >
              Aditya Mishra
            </a>
          </div>
          <div className="group">
            <div
              className="
              bg-quinternary rounded-xl
              w-fit inline-block mr-3 px-2
              group-hover:scale-110
              "
            >
              GitHub
            </div>
            <a
              href="https://www.github.com/cliff-4"
              className="text-quinternary group-hover:underline"
            >
              cliff-4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
