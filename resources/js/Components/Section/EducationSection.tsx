interface ContactProps {
    darkMode: boolean;
}

export default function ContactSection({ darkMode }: ContactProps) {
    return (
        <div className={`${darkMode ? "bg-bgdark" : "bg-bglight"}`}>
            <div className="mx-auto w-full pt-32">
                <div
                    className={`${
                        darkMode ? "text-txtdark" : "text-txtlight"
                    } mx-auto text-center font-semibold text-4xl`}
                >
                    <h2>Education</h2>
                </div>
                <div className="mt-14 flex items-center justify-center px-6 md:px-60">
                    <div
                        className={`${
                            darkMode
                                ? "border-primarydark"
                                : "border-primarylight"
                        } space-y-6 border-l-2 border-dashed border-opacity-30`}
                    >
                        <div className="relative w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`${
                                    darkMode
                                        ? "text-primarydark"
                                        : "text-primarylight"
                                } absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full`}
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <div className="ml-6">
                                <h4
                                    className={`${
                                        darkMode
                                            ? "text-primarydark"
                                            : "text-primarylight"
                                    } font-bold`}
                                >
                                    Application developer
                                </h4>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-2 max-w-screen-sm text-sm`}
                                >
                                    Institut G4, Marseille - Professional title
                                    of application developer in progress. (Bac
                                    +3)
                                </p>
                                <span
                                    className={`${
                                        darkMode
                                            ? "text-primarydark"
                                            : "text-primarylight"
                                    } mt-1 block text-sm font-semibold`}
                                >
                                    2023 - 2024
                                </span>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`${
                                    darkMode
                                        ? "text-primarydark"
                                        : "text-primarylight"
                                } absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full`}
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <div className="ml-6">
                                <h4
                                    className={`${
                                        darkMode
                                            ? "text-primarydark"
                                            : "text-primarylight"
                                    } font-bold`}
                                >
                                    Web developer
                                </h4>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-2 max-w-screen-sm text-sm`}
                                >
                                    Institut G4, Marseille - Professional title
                                    web and mobile web developer obtained. (Bac
                                    +2)
                                </p>
                                <span
                                    className={`${
                                        darkMode
                                            ? "text-primarydark"
                                            : "text-primarylight"
                                    } mt-1 block text-sm font-semibold`}
                                >
                                    2021 - 2023
                                </span>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`${
                                    darkMode
                                        ? "text-primarydark"
                                        : "text-primarylight"
                                } absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full`}
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <div className="ml-6">
                                <h4
                                    className={`${
                                        darkMode
                                            ? "text-primarydark"
                                            : "text-primarylight"
                                    } font-bold`}
                                >
                                    DAEU
                                </h4>
                                <p
                                    className={`${
                                        darkMode
                                            ? "text-txtdark"
                                            : "text-txtlight"
                                    } mt-2 max-w-screen-sm text-sm`}
                                >
                                    Avignon university - Degree to start
                                    university studies.
                                </p>
                                <span
                                    className={`${
                                        darkMode
                                            ? "text-primarydark"
                                            : "text-primarylight"
                                    } mt-1 block text-sm font-semibold`}
                                >
                                    2020 - 2021
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
