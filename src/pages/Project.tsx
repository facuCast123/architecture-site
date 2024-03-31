import { useParams } from "react-router-dom";
import projectsData from "../projectsData";

const Project = () => {
  const params = useParams<{ projectId: string }>();
  return (
    <div className="pb-20">
      <h1 className="text-6xl font-semibold my-12">
        <span className="font-light opacity-30">Sample</span>
        <br />
        Project {params.projectId}
      </h1>

      {projectsData.map(({ id, title, url }) => {
        if (id.toString() === params.projectId)
          return (
            <div
              key={id}
              className="w-full grid grid-cols-4 grid-rows-3 gap-8 [&>*]:size-full"
            >
              <img
                className="w-full max-h-[400px] col-span-4 object-cover"
                src={url}
                alt={title}
              />

              <img
                className="object-cover"
                src="/assets/images/building-1.jpg"
                alt="Building in construction"
              />

              <p className="col-span-3 py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with.
              </p>

              <img
                className="w-full max-h-[400px] col-span-4 object-fill"
                src="/assets/images/building-2.png"
                alt="Building plans"
              />
            </div>
          );
      })}
    </div>
  );
};

export default Project;
