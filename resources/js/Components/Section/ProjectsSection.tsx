import { FaLaravel } from "react-icons/fa";
import ecoservice from "../../../../assets/img/mockup-eco-service.webp";

interface ProjectsProps {
    darkMode: boolean;
}

export default function ProjectsSection({ darkMode }: ProjectsProps) {
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
                <a
                    href="{{ route('diy.diyName', $diy->id) }}"
                    className={`${
                        darkMode ? "hover:bg-[#061517]" : "hover:bg-[#E8F5F7]"
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
                        Eco-Service
                    </h3>
                    <p
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-2 text-sm`}
                    >
                        Description
                    </p>
                    <div className="flex">
                        <div className="mt-5 sm:mt-5 lg:mt-5 mr-2">
                            <span
                                className={`${
                                    darkMode
                                        ? "bg-[#11333B] text-txtdark ring-[#7DCEDC]"
                                        : "bg-[#DCF5F6] text-txtlight ring-[#7DCEDC]"
                                } rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset`}
                            >
                                Laravel
                            </span>
                        </div>
                        <div className="mt-5 sm:mt-5 lg:mt-5 mr-2">
                            <span
                                className={`${
                                    darkMode
                                        ? "bg-[#11333B] text-txtdark ring-[#7DCEDC]"
                                        : "bg-[#DCF5F6] text-txtlight ring-[#7DCEDC]"
                                } rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset`}
                            >
                                Tailwind
                            </span>
                        </div>
                        <div className="mt-5 sm:mt-5 lg:mt-5 mr-2">
                            <span
                                className={`${
                                    darkMode
                                        ? "bg-[#11333B] text-txtdark ring-[#7DCEDC]"
                                        : "bg-[#DCF5F6] text-txtlight ring-[#7DCEDC]"
                                } rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset`}
                            >
                                AlpineJs
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
