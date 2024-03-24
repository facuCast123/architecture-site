const Landing = () => {
  return (
    <div className="h-screen px-20 flex items-center justify-between gap-4 flex-nowrap">
      <div className="w-2/6 h-full flex items-center justify-center">
        <h1 className="text-8xl font-semibold">
          <span className="uppercase font-light opacity-30">Project</span>{" "}
          <br />
          Lorem
        </h1>
      </div>

      <div className="bg-[url('/hero-image.png')] w-4/6 h-full bg-center bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Landing;
