import certificationsData from "../data/certificationsData";

const Certifications = () => {
  return (
    <section>
      <h1 className="my-12 text-6xl font-semibold text-center lg:text-left">
        <span className="font-light opacity-30">Company</span>
        <br />
        Certifications
      </h1>

      <div className="p-8 pb-24 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map(({ id, url, title }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-center gap-y-4 text-center"
            >
              <img className="w-40" src={url} alt="Icon" />
              <h2 className="w-min text-4xl font-semibold">{title}</h2>
              <p className="text-xl">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, in commodi.
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full p-4">
        <p className="w-fit ml-auto italic">Images sourced from Vecteezy.com</p>
      </div>
    </section>
  );
};

export default Certifications;
