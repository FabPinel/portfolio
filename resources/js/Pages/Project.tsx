import { useState } from "react";
import { FaGithub, FaLaptop } from "react-icons/fa";
import ecoservice from "../../../assets/img/mockup-eco-service.webp";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function Project() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`${darkMode ? "bg-bgdark" : "bg-bglight"} `}>
            <NavBar setDarkMode={setDarkMode} darkMode={darkMode}></NavBar>
            <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-accentdark"
                                            : "text-accentlight"
                                    } text-base font-semibold leading-7`}
                                >
                                    School project
                                </p>
                                <h1
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-2 text-3xl font-bold tracking-tight sm:text-4xl`}
                                >
                                    Eco-Service
                                </h1>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-6 text-xl leading-8`}
                                >
                                    Description
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
                        <img
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src={ecoservice}
                            alt=""
                        />
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
                        <div className="flex gap-x-6 flex-wrap mx-auto">
                            <a
                                href="https://github.com/FabPinel"
                                className={`transition-all ease-in duration-100 text-white ${
                                    darkMode
                                        ? "bg-primarydark hover:bg-primarydarkhover text-black"
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
                                        ? "bg-primarydark hover:bg-primarydarkhover text-black"
                                        : "bg-primarylight hover:bg-primarylighthover "
                                } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5`}
                            >
                                <FaLaptop
                                    className="w-4 h-4 me-2"
                                    aria-hidden="true"
                                />
                                See the project
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <h2
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-16 text-2xl font-bold tracking-tight`}
                                >
                                    Context
                                </h2>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } `}
                                >
                                    Context
                                </p>
                                <h2
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-16 text-2xl font-bold tracking-tight`}
                                >
                                    My tasks
                                </h2>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } `}
                                >
                                    Tasks
                                </p>
                                <h2
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-16 text-2xl font-bold tracking-tight`}
                                >
                                    Conclusion
                                </h2>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } `}
                                >
                                    Conclusion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer darkMode={darkMode}></Footer>
        </div>
    );
}
