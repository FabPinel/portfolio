import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState } from "react";
import HeroSection from "@/Components/Section/HeroSection";
import SkillsSection from "@/Components/Section/SkillsSection";
import ContactSection from "@/Components/Section/ContactSection";
import EducationSection from "@/Components/Section/EducationSection";
import ProjectsSection from "@/Components/Section/ProjectsSection";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function Welcome({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <div className={`${darkMode ? "bg-bgdark" : "bg-bglight"} `}>
                <NavBar setDarkMode={setDarkMode} darkMode={darkMode}></NavBar>
                <Head title="Welcome" />
                <HeroSection darkMode={darkMode}></HeroSection>
                <SkillsSection darkMode={darkMode}></SkillsSection>
                <ProjectsSection darkMode={darkMode}></ProjectsSection>
                <EducationSection darkMode={darkMode}></EducationSection>
                <ContactSection darkMode={darkMode}></ContactSection>
                <Footer darkMode={darkMode}></Footer>
            </div>
        </>
    );
}
