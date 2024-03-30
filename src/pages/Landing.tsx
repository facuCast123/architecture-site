import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Landing = () => {
  // Toggle hero image view
  const [projectView, setProjectView] = useState(1);

  const handleProjectView = (value: number) => {
    setProjectView(value);
    if (value === 1) {
      setProjectView(1);
    } else {
      setProjectView(2);
    }
  };

  const projectViewBg =
    projectView === 1
      ? 'bg-[url("assets/images/hero-image.jpg")]'
      : 'bg-[url("assets/images/hero-image-alt.jpg")]';

  // Project hover effect
  const [isHovered, setIsHovered] = useState(0);

  const projectHover = (
    <span className="absolute top-0 left-0 size-full flex flex-col justify-center gap-4 animate-fade-in">
      <div className="bg-black opacity-50 size-full absolute"></div>
      <p className="w-min pl-6 text-4xl text-white font-semibold z-10 sm:pl-12 sm:text-6xl">
        Sample Project
      </p>
      <p className="pl-6 flex items-center gap-x-4 text-xl text-white z-10 sm:pl-12">
        View more <GoArrowRight />
      </p>
    </span>
  );

  return (
    <>
      <div className="h-screen mb-24 flex flex-col gap-4 flex-nowrap md:py-3 md:flex-row md:justify-between lg:py-6 lg:items-center 2xl:max-h-[80vh]">
        <div className="items-center text-center gap-y-8 h-fit 2xl:h-[900px] flex flex-col relative order-2 md:self-center md:order-1 lg:w-2/6 lg:items-start lg:justify-center lg:gap-y-16 lg:text-left">
          <h1 className="text-6xl font-semibold relative xl:text-8xl">
            <span className="uppercase font-light opacity-30">Project</span>{" "}
            <br />
            <span
              className={`${
                projectView === 1 ? "block animate-fade-in-left" : "hidden"
              }`}
            >
              Lorem
            </span>
            <span
              className={`${
                projectView === 2 ? "block" : "hidden"
              } animate-fade-in-left`}
            >
              Ipsum
            </span>
          </h1>

          <div className="flex items-center gap-x-6">
            <button
              className={`border-gray-100 border-2 p-4 text-2xl ${
                projectView === 1 ? "bg-gray-100 cursor-default" : ""
              }`}
              onClick={() => handleProjectView(1)}
            >
              <GoArrowLeft />
            </button>
            <button
              className={`border-gray-100 border-2 p-4 text-2xl ${
                projectView === 2 ? "bg-gray-100 cursor-default" : ""
              }`}
              onClick={() => handleProjectView(2)}
            >
              <GoArrowRight />
            </button>
          </div>

          <div className="hidden items-center gap-x-6 text-3xl text-gray-400 md:flex">
            <p>0{projectView}</p>{" "}
            <span className="text-5xl text-gray-300 font-thin">/</span>{" "}
            <p>02</p>
          </div>
        </div>
        <div
          className={`w-full h-full order-1 ${projectViewBg} bg-center bg-cover bg-no-repeat relative shadow-sm md:order-2 xl:w-4/6`}
        >
          <div className="absolute bottom-0 left-0 flex items-center gap-5 bg-white py-4 px-6 md:py-6 md:px-12 md:text-lg underline-offset-8 uppercase tracking-widest cursor-pointer hover:underline">
            View project{" "}
            <span className="text-2xl">
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="relative mb-20 flex flex-col gap-x-16 gap-y-6 md:flex-row">
        <div className="w-full h-full bg-gray-50 absolute top-0 left-0 xl:shadow-lg 2xl:h-[90%]"></div>

        <div className="w-full grid grid-cols-2 grid-rows-4 gap-4 [&>*]:object-cover [&>*]:shadow-md [&>*]:z-10 md:basis-4/6 xl:h-[500px]">
          <img
            className="w-full h-full row-span-2"
            src="/assets/images/image-1.jpg"
          />

          <img
            className="w-full h-full row-span-4"
            src="/assets/images/image-2.jpg"
          />

          <img
            className="w-full h-full row-span-2"
            src="/assets/images/image-3.jpg"
          />
        </div>

        <div className="w-full px-4 flex flex-col justify-around gap-y-8 text-center z-10 md:w-2/6 md:p-4 md:text-start lg:h-1/6">
          <h2 className="text-6xl font-light opacity-30 md:text-7xl">About</h2>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="w-fit py-4 flex items-center gap-x-4 self-center uppercase tracking-widest cursor-pointer underline-offset-8 hover:underline md:self-start md:py-0">
            Read more <GoArrowRight />
          </button>
        </div>
      </div>

      <div className="mb-7">
        <h2 className="text-5xl text-center xl:text-7xl font-light opacity-30 md:text-start">
          Main Focus / Mission Statement
        </h2>

        <div className="flex flex-col items-center gap-x-8 lg:flex-row">
          <div className="px-4 flex items-center justify-center gap-x-4">
            <span className="text-[10rem] font-bold opacity-10">1</span>
            <p className="md:pr-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              illo sit, esse omnis adipisci animi quam dignissimos eligendi
              voluptates veritatis optio quae tenetur quibusdam aspernatur fuga
              dolorem quos consequuntur excepturi!
            </p>
          </div>

          <div className="px-4 flex items-center justify-center gap-x-4">
            <span className="text-[10rem] font-bold opacity-10">2</span>
            <p className="md:pr-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              illo sit, esse omnis adipisci animi quam dignissimos eligendi
              voluptates veritatis optio quae tenetur quibusdam aspernatur fuga
              dolorem quos consequuntur excepturi!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20 flex flex-col gap-y-8">
        <h2 className="text-7xl font-light opacity-30">Our Projects</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 [&>*]:h-72 [&>*]:w-full [&>*]:bg-cover [&>*]:bg-center [&>*]:relative [&>*]:cursor-pointer">
          {/* Top two images */}
          <div
            className="bg-project-1 col-span-1 sm:col-span-2"
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 1 ? projectHover : null}
          </div>

          <div
            className="bg-project-2 col-span-1 sm:col-span-2"
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 2 ? projectHover : null}
          </div>
          {/* Bottom three */}
          <div
            className="bg-project-3"
            onMouseEnter={() => setIsHovered(3)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 3 ? projectHover : null}
          </div>

          <div
            className="bg-project-4 col-span-1 sm:col-span-2"
            onMouseEnter={() => setIsHovered(4)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 4 ? projectHover : null}
          </div>

          <div
            className="bg-project-5 col-span-2 sm:col-span-1"
            onMouseEnter={() => setIsHovered(5)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 5 ? projectHover : null}
          </div>
        </div>

        <button className="w-fit flex items-center gap-x-4 bg-neutral-800 text-white px-10 py-7 self-center uppercase tracking-widest cursor-pointer group sm:self-end">
          <p className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] group-hover:ease-out duration-300">
            All projects
          </p>{" "}
          <span className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] group-hover:ease-out duration-300">
            <GoArrowRight />
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-y-8 mb-20">
        <h2 className="text-7xl font-light opacity-30">Contact us</h2>

        <div className="h-[500px] flex items-center gap-8 mb-10">
          <form className="w-full h-full px-4 flex flex-col gap-y-4 md:basis-1/3">
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 bg-gray-200 border border-transparent placeholder-gray-500 focus:outline-none focus:border-gray-500"
              placeholder="Name"
            />

            <input
              required
              type="tel"
              name="phone"
              className=" px-4 py-3 bg-gray-200 border border-transparent placeholder-gray-500 focus:outline-none focus:border-gray-500"
              placeholder="Phone Number"
            />

            <input
              required
              type="email"
              name="email"
              className=" px-4 py-3 bg-gray-200 border border-transparent placeholder-gray-500 focus:outline-none focus:border-gray-500"
              placeholder="E-mail"
            />

            <input
              type="text"
              name="interest"
              className=" px-4 py-3 bg-gray-200 border border-transparent placeholder-gray-500 focus:outline-none focus:border-gray-500"
              placeholder="Interested In"
            />

            <textarea
              required
              className="h-full bg-gray-200 border border-transparent placeholder-gray-500 focus:outline-none focus:border-gray-500"
              placeholder="   Message"
            ></textarea>
          </form>

          <div className="hidden bg-[url('/assets/images/contact-image.jpg')] basis-2/3 h-full bg-no-repeat bg-cover bg-center md:block"></div>
        </div>

        <button className="w-fit px-14 py-7 flex items-center gap-x-4 bg-neutral-800 text-white uppercase tracking-widest cursor-pointer self-center group md:self-start">
          <p className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] group-hover:ease-out duration-300">
            Send email
          </p>{" "}
          <span className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] group-hover:ease-out duration-300">
            <GoArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default Landing;
