import { useRef } from "react";

interface SkillsProps {
    darkMode: boolean;
}

export default function SkillsSection({ darkMode }: SkillsProps) {
    const skillsRef = useRef<HTMLDivElement>(null);

    return (
        <div
            id="skills"
            className="mx-auto max-w-7xl mt-20 py-10 md:py-20 lg:md:py-20"
        >
            <div
                className={`${
                    darkMode ? "text-txtdark" : "text-txtlight"
                } mx-auto text-center font-semibold text-4xl`}
            >
                <h2>Skills</h2>
            </div>
            <div className="w-full mt-10 lg:justify-center flex flex-wrap mx-auto px-5">
                <div className="mr-5 md:mr-32 lg:mr-32">
                    <h3
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-6 text-xl font-bold mb-5`}
                    >
                        Design
                    </h3>
                    <p
                        className={`${
                            darkMode
                                ? "bg-gradient-to-t from-[#079ABB] to-[#44D7F8] bg-clip-text text-transparent"
                                : "bg-gradient-to-t from-[#079ABB] to-[#B7EBF0] bg-clip-text text-transparent"
                        } mt-2 text-lg font-bold flex items-center`}
                    >
                        photoshop
                    </p>
                    <p
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-2 text-lg font-semibold`}
                    >
                        figma
                    </p>
                </div>
                <div className="mr-5 md:mr-32 lg:mr-32">
                    <h3
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-6 text-xl font-bold mb-5`}
                    >
                        Frontend
                    </h3>
                    <p
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-2 text-lg font-semibold`}
                    >
                        react
                    </p>
                    <p
                        className={`${
                            darkMode
                                ? "bg-gradient-to-t from-[#079ABB] to-[#44D7F8] bg-clip-text text-transparent"
                                : "bg-gradient-to-t from-[#079ABB] to-[#B7EBF0] bg-clip-text text-transparent"
                        } mt-2 text-lg font-bold`}
                    >
                        tailwind
                    </p>
                </div>
                <div className="mr-5 md:mr-32 lg:mr-32">
                    <h3
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-6 text-xl font-bold mb-5`}
                    >
                        Backend
                    </h3>
                    <p
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-2 text-lg font-semibold`}
                    >
                        laravel
                    </p>
                    <p
                        className={`${
                            darkMode
                                ? "bg-gradient-to-t from-[#079ABB] to-[#44D7F8] bg-clip-text text-transparent"
                                : "bg-gradient-to-t from-[#079ABB] to-[#B7EBF0] bg-clip-text text-transparent"
                        } mt-2 text-lg font-bold`}
                    >
                        mysql
                    </p>
                </div>
                <div className="mr-5 md:mr-32 lg:mr-32">
                    <h3
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-6 text-xl font-bold mb-5`}
                    >
                        Management
                    </h3>
                    <p
                        className={`${
                            darkMode
                                ? "bg-gradient-to-t from-[#079ABB] to-[#44D7F8] bg-clip-text text-transparent"
                                : "bg-gradient-to-t from-[#079ABB] to-[#B7EBF0] bg-clip-text text-transparent"
                        } mt-2 text-lg font-bold`}
                    >
                        planning
                    </p>
                    <p
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-2 text-lg font-semibold`}
                    >
                        specification
                    </p>
                </div>
                <div>
                    <h3
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-6 text-xl font-bold mb-5`}
                    >
                        Other
                    </h3>
                    <p
                        className={`${
                            darkMode
                                ? "bg-gradient-to-t from-[#079ABB] to-[#44D7F8] bg-clip-text text-transparent"
                                : "bg-gradient-to-t from-[#079ABB] to-[#B7EBF0] bg-clip-text text-transparent"
                        } mt-2 text-lg font-bold`}
                    >
                        git & github
                    </p>
                    <p
                        className={`${
                            darkMode ? "text-txtdark" : "text-txtlight"
                        } mt-2 text-lg font-semibold`}
                    >
                        postman
                    </p>
                </div>
            </div>
        </div>
    );
}
