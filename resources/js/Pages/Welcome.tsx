import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import SwitchMode from "@/Components/SwitchMode";
import { useState } from "react";
import HeroSection from "@/Components/HeroSection";
import SkillsSection from "@/Components/SkillsSection";
import ContactSection from "@/Components/ContactSection";

export default function Welcome({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <Head title="Welcome" />
            <div
                className={`${
                    darkMode ? "bg-bgdark" : "bg-bglight"
                } relative sm:flex sm:justify-center sm:items-center min-h-screen`}
            >
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end flex">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                    <div className="ml-4">
                        <SwitchMode
                            setDarkMode={setDarkMode}
                            darkMode={darkMode}
                        />
                    </div>
                </div>
                <HeroSection darkMode={darkMode}></HeroSection>
            </div>
            <SkillsSection darkMode={darkMode}></SkillsSection>
            <ContactSection darkMode={darkMode}></ContactSection>
        </>
    );
}
