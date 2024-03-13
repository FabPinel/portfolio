import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SwitchMode from "./SwitchMode";

interface NavBarProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export default function NavBarSection({ darkMode, setDarkMode }: NavBarProps) {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="flex h-16 items-center justify-between">
                            <div className="hidden ml-auto sm:flex ">
                                <div className="flex space-x-4">
                                    <a
                                        href="#skills"
                                        className={`${
                                            darkMode
                                                ? "text-txtdark hover:text-primarydark"
                                                : "text-txtlight hover:text-primarylight"
                                        } rounded-md px-3 py-2 text-md font-medium duration-300 ease-in-out`}
                                    >
                                        Skills
                                    </a>
                                    <a
                                        href="#projects"
                                        className={`${
                                            darkMode
                                                ? "text-txtdark hover:text-primarydark"
                                                : "text-txtlight hover:text-primarylight"
                                        } rounded-md px-3 py-2 text-md font-medium duration-300 ease-in-out`}
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#education"
                                        className={`${
                                            darkMode
                                                ? "text-txtdark hover:text-primarydark"
                                                : "text-txtlight hover:text-primarylight"
                                        } rounded-md px-3 py-2 text-md font-medium duration-300 ease-in-out`}
                                    >
                                        Education
                                    </a>
                                    <a
                                        href="#contact"
                                        className={`${
                                            darkMode
                                                ? "text-txtdark hover:text-primarydark"
                                                : "text-txtlight hover:text-primarylight"
                                        } rounded-md px-3 py-2 text-md font-medium duration-300 ease-in-out`}
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <SwitchMode
                                    setDarkMode={setDarkMode}
                                    darkMode={darkMode}
                                />
                            </div>

                            <div className="-mr-2 flex sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <div className="hidden sm:ml-6 sm:block">
                                <SwitchMode
                                    setDarkMode={setDarkMode}
                                    darkMode={darkMode}
                                />
                            </div>
                            <a
                                href="#skills"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            >
                                Skills
                            </a>
                            <a
                                href="#projects"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Projects
                            </a>
                            <a
                                href="#education"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Education
                            </a>
                            <a
                                href="#contact"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Contact
                            </a>
                        </div>
                    </Disclosure.Panel>
                    <style>
                        {`
                    html {
                        scroll-behavior: smooth;
                    }
                `}
                    </style>
                </>
            )}
        </Disclosure>
    );
}
