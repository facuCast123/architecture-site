import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

import projectsData from "../data/projectsData";
import { useState } from "react";

const Projects = () => {
  const [projectPage, setProjectPage] = useState(1);

  return (
    <div className="w-full flex flex-col gap-y-8 pb-20">
      <h1 className="text-6xl font-semibold my-12">
        <span className="font-light opacity-30">Our</span>
        <br />
        Projects
      </h1>

      {/* May God forgive me for the following code. */}
      {projectsData.map(({ id, title, url }) => {
        if (projectPage === 1 && id < 4) {
          window.scrollTo(0, 0);
          return (
            <div key={id} className="grid grid-cols-1">
              <div className="flex">
                <img
                  className="basis-4/6 max-h-[450px] object-cover"
                  src={url}
                  alt={title}
                />
                <div className="basis-2/6 p-8 flex flex-col justify-around bg-gray-50">
                  <h2 className="font-light text-4xl opacity-30">{title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere repellat incidunt recusandae ipsam repellendus dicta
                    esse facilis eos, natus officia quasi, voluptatem
                    repudiandae veritatis maiores perferendis iure ut. Placeat,
                    temporibus?
                  </p>
                  <Link
                    to={`/projects/${id}`}
                    className="w-fit flex items-center gap-x-4 uppercase px-8 py-4 bg-white shadow-sm hover:shadow-md"
                  >
                    View More{" "}
                    <span className="text-2xl">
                      <GoArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        } else if (projectPage === 2 && id > 3 && id < 7) {
          window.scrollTo(0, 0);
          return (
            <div key={id} className="grid grid-cols-1">
              <div className="flex">
                <img
                  className="basis-4/6 max-h-[450px] object-cover"
                  src={url}
                  alt={title}
                />
                <div className="basis-2/6 p-8 flex flex-col justify-around bg-gray-50">
                  <h2 className="font-light text-4xl opacity-30">{title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere repellat incidunt recusandae ipsam repellendus dicta
                    esse facilis eos, natus officia quasi, voluptatem
                    repudiandae veritatis maiores perferendis iure ut. Placeat,
                    temporibus?
                  </p>
                  <Link
                    to={`/projects/${id}`}
                    className="w-fit flex items-center gap-x-4 uppercase px-8 py-4 bg-white shadow-sm hover:shadow-md"
                  >
                    View More{" "}
                    <span className="text-2xl">
                      <GoArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className="hidden items-center gap-x-6 text-3xl text-gray-400 md:flex">
        <p className="text-black">0{projectPage}</p>{" "}
        <span className="text-5xl text-gray-300 font-thin">/</span> <p>02</p>
        <div className="flex items-center gap-x-6">
          <button
            className={`border-gray-100 border-2 p-4 text-2xl ${
              projectPage === 1 ? "bg-gray-200 cursor-default" : "bg-white"
            }`}
            onClick={() => setProjectPage(1)}
          >
            <GoArrowLeft />
          </button>
          <button
            className={`border-gray-100 border-2 p-4 text-2xl ${
              projectPage === 2 ? "bg-gray-200 cursor-default" : "bg-white"
            }`}
            onClick={() => setProjectPage(2)}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
