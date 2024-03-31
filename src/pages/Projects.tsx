import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

import projectsData from "../projectsData";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-y-8 pb-20">
      <h1 className="text-6xl font-semibold my-12">
        <span className="font-light opacity-30">Our</span>
        <br />
        Projects
      </h1>

      {projectsData.map(({ id, title, url }) => {
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
                  esse facilis eos, natus officia quasi, voluptatem repudiandae
                  veritatis maiores perferendis iure ut. Placeat, temporibus?
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
      })}
    </div>
  );
};

export default Projects;
