import { FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

interface HeroProps {
    darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroProps) {
    return (
        <div
            className={`${
                darkMode ? "bg-bgdark" : "bg-bglight"
            } relative isolate overflow-hidden`}
        >
            <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                <div className="px-6 lg:px-0 lg:pt-4">
                    <div className="mx-auto max-w-2xl">
                        <div className="max-w-lg">
                            <div className="mt-24 sm:mt-32 lg:mt-16">
                                <span
                                    className={`${
                                        darkMode
                                            ? "bg-[#11333B] text-txtdark ring-[#7DCEDC]"
                                            : "bg-[#DCF5F6] text-txtlight ring-[#7DCEDC]"
                                    } rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset`}
                                >
                                    Hey there! I'm -
                                </span>
                            </div>
                            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-t from-[#079ABB] to-[#B7EBF0] bg-clip-text text-transparent">
                                Fabien Pinel
                            </h1>
                            <p
                                className={`${
                                    darkMode ? "text-txtdark" : "text-txtlight"
                                } mt-6 text-lg leading-8`}
                            >
                                <span className="font-bold">
                                    Web developer.
                                </span>
                                Third year student at the 'Institut G4'. I
                                specialized in web development and project
                                management. I am actively looking for an
                                internship as a developer or Product Owner.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6 flex-wrap mx-auto justify-center">
                                <a
                                    href="https://github.com/FabPinel"
                                    className={`transition-all ease-in duration-100 text-white ${
                                        darkMode
                                            ? "bg-primarydark hover:bg-primarydarkhover text-txtdarkbutton"
                                            : "bg-primarylight hover:bg-primarylighthover "
                                    } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5`}
                                >
                                    <FaGithub
                                        className="w-4 h-4 me-2"
                                        aria-hidden="true"
                                    />
                                    Github
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/fabien-pinel/"
                                    className={`transition-all ease-in duration-100 text-white ${
                                        darkMode
                                            ? "bg-primarydark hover:bg-primarydarkhover text-txtdarkbutton"
                                            : "bg-primarylight hover:bg-primarylighthover "
                                    } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5`}
                                >
                                    <FaLinkedinIn
                                        className="w-4 h-4 me-2"
                                        aria-hidden="true"
                                    />
                                    LinkedIn
                                </a>
                                <a
                                    href="mailto:fabien.pinel08@outlook.fr"
                                    className={`transition-all ease-in duration-100 text-white ${
                                        darkMode
                                            ? "bg-primarydark hover:bg-primarydarkhover text-txtdarkbutton"
                                            : "bg-primarylight hover:bg-primarylighthover "
                                    } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5`}
                                >
                                    <FaEnvelope
                                        className="w-4 h-4 me-2"
                                        aria-hidden="true"
                                    />
                                    fabien.pinel08@outlook.fr
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="w-96 mx-auto mt-10"
                        src="https://image.noelshack.com/fichiers/2024/11/2/1710252499-fabien-pinel.png"
                        alt=""
                    />
                    <p
                        className={`${
                            darkMode ? "text-primarydark" : "text-primarylight"
                        } text-center flex items-center justify-center`}
                    >
                        <FiMapPin className="inline-block w-5 h-5 mr-2" />
                        Marseille, France
                    </p>
                </div>
            </div>
        </div>
    );
}
