import React, { useState, useEffect } from "react";
import ecoservice from "../../../../assets/img/mockup-eco-service.webp";

interface Project {
    id: number;
    title: string;
    desc: string;
    stacks: { name: string }[]; // Mettez à jour le type des stacks
}

interface ProjectsProps {
    darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsProps> = ({ darkMode }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects));
    }, []);

    return (
        <div
            id="projects"
            className="mx-auto max-w-xl px-4 pt-32 lg:max-w-7xl lg:px-8 py-10 md:py-20 lg:md:py-20"
        >
            <div
                className={`${
                    darkMode ? "text-txtdark" : "text-txtlight"
                } mx-auto text-center font-semibold text-4xl`}
            >
                <h2>Projects</h2>
            </div>
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={`/project/${project.id}`}
                        className={`${
                            darkMode
                                ? "lg:hover:bg-[#061517]"
                                : "lg:hover:bg-[#E8F5F7]"
                        } p-4 rounded-2xl duration-300 ease-in-out`}
                    >
                        <div
                            aria-hidden="true"
                            className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                        >
                            <img
                                src={ecoservice}
                                alt="Project"
                                className="h-52 w-96 object-cover object-center"
                            />
                        </div>
                        <h3
                            className={`${
                                darkMode ? "text-txtdark" : "text-txtlight"
                            } mt-4 text-base text-2xl font-bold`}
                        >
                            {project.title}
                        </h3>
                        <p
                            className={`${
                                darkMode ? "text-txtdark" : "text-txtlight"
                            } mt-2 text-sm`}
                        >
                            {project.desc}
                        </p>
                        <div className="flex">
                            {project.stacks.map((stack, index) => (
                                <div
                                    key={index}
                                    className="mt-5 sm:mt-5 lg:mt-5 mr-2"
                                >
                                    <span
                                        className={`${
                                            darkMode
                                                ? "bg-[#11333B] text-txtdark ring-[#7DCEDC]"
                                                : "bg-[#DCF5F6] text-txtlight ring-[#7DCEDC]"
                                        } rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset`}
                                    >
                                        {stack.name}{" "}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
