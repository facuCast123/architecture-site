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
      <p className="w-min text-6xl text-white font-semibold z-10 pl-12">
        Sample Project
      </p>
      <p className="flex items-center gap-x-4 text-xl text-white z-10 pl-12">
        View more <GoArrowRight />
      </p>
    </span>
  );

  return (
    <>
      <div className="h-screen py-6 mb-24 flex items-center justify-between gap-4 flex-nowrap">
        <div className="w-2/6 h-full flex flex-col justify-center gap-y-16 relative">
          <h1 className="text-8xl font-semibold relative">
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
            {/* {projectView === 1 ? "Lorem" : "Ipsum"} */}
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
          <div className="flex items-center gap-x-6 text-3xl text-gray-400">
            <p>0{projectView}</p>{" "}
            <span className="text-5xl text-gray-300 font-thin">/</span>{" "}
            <p>02</p>
          </div>
        </div>
        <div
          className={`w-4/6 h-full ${projectViewBg} bg-center bg-cover bg-no-repeat relative`}
        >
          <div className="absolute bottom-0 left-0 flex items-center gap-5 bg-white py-6 px-12 text-lg underline-offset-8 uppercase tracking-widest cursor-pointer hover:underline">
            View project{" "}
            <span className="text-2xl">
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="relative mb-20 flex gap-x-16">
        <div className="w-full h-[90%] bg-gray-50 absolute top-0 left-0"></div>

        <div className="w-2/4 h-[500px] relative">
          <img
            className="w-[47%] h-[265px] absolute top-6 left-0"
            src="/assets/images/image-1.jpg"
          />
          <img
            className="w-2/4 h-[90%] absolute top-10 right-0"
            src="/assets/images/image-2.jpg"
          />
          <img
            className="w-[47%] h-[180px] absolute bottom-0 left-0"
            src="/assets/images/image-3.jpg"
          />
        </div>

        <div className="w-1/3 h-[450px] z-10 flex flex-col justify-around">
          <h2 className="text-7xl font-light opacity-30">About</h2>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="w-fit flex items-center gap-x-4 uppercase tracking-widest cursor-pointer underline-offset-8 hover:underline">
            Read more <GoArrowRight />
          </button>
        </div>
      </div>

      <div className="mb-7">
        <h2 className="text-7xl font-light opacity-30">
          Main Focus/Mission Statement
        </h2>

        <div className="flex items-center gap-x-8">
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-[10rem] font-bold opacity-10">1</span>
            <p className="pr-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              illo sit, esse omnis adipisci animi quam dignissimos eligendi
              voluptates veritatis optio quae tenetur quibusdam aspernatur fuga
              dolorem quos consequuntur excepturi!
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <span className="text-[10rem] font-bold opacity-10">2</span>
            <p className="pr-20">
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

        <div className="grid grid-cols-4 gap-4 [&>*]:h-72 [&>*]:w-full [&>*]:bg-cover [&>*]:bg-center [&>*]:relative [&>*]:cursor-pointer">
          {/* Top two images */}
          <div
            className="bg-project-1 col-span-2"
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 1 ? projectHover : null}
          </div>

          <div
            className="bg-project-2 col-span-2"
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
            className="bg-project-4 col-span-2"
            onMouseEnter={() => setIsHovered(4)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 4 ? projectHover : null}
          </div>

          <div
            className="bg-project-5"
            onMouseEnter={() => setIsHovered(5)}
            onMouseLeave={() => setIsHovered(0)}
          >
            {isHovered === 5 ? projectHover : null}
          </div>
        </div>

        <button className="w-fit flex items-center gap-x-4 bg-neutral-800 text-white px-10 py-7 self-end uppercase tracking-widest cursor-pointer group">
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
          <form className="flex flex-col gap-y-4 basis-1/3 h-full">
            <input
              type="text"
              name="name"
              className=" px-4 py-3 bg-gray-200 border border-transparent placeholder-gray-500 focus:outline-none focus:border-gray-500"
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

          <div className="bg-[url('/assets/images/contact-image.jpg')] basis-2/3 h-full bg-no-repeat bg-cover bg-center"></div>
        </div>

        <button className="w-fit px-14 py-7 flex items-center gap-x-4 bg-neutral-800 text-white uppercase tracking-widest cursor-pointer group">
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
