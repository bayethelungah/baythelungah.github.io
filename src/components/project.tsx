import {
  forwardRef,
  //   ComponentProps,
  //   RefAttributes,
  //   ForwardRefExoticComponent,
  //   SVGProps,
} from "react";

export interface ProjectProps {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  rawTags: string;
}

const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ title, description, githubUrl, rawTags }, ref) => {
    const tags = rawTags.split(",");

    return (
      <div
        ref={ref}
        className="bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full hover:scale-105 transition"
      >
        <div>
          <span className="absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-10"></span>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-blue-500">{title}</h3>
          <p className="mt-2 text-base text-gray-300 flex-1">{description}</p>
          <div className="pt-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold transition tracking-wide hover:text-blue-400 hover:cursor-pointer"
            >
              See Code →
            </a>
            <div className="grid grid-cols-3 gap-3">
              {tags.map((tag) => (
                <Tag name={tag} key={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

type TagProps = {
  name: string;
  key: string;
};

function Tag({ name, key }: TagProps) {
  return (
    <div
      key={key}
      className=" p-1 text-center text-white border-blue-600 border-2 rounded-xl font-light"
    >
      {name}
    </div>
  );
}

export default Project;
