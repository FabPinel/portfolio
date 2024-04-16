import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

interface ContactProps {
    darkMode: boolean;
}

export default function ContactSection({ darkMode }: ContactProps) {
    return (
        <div
            id="contact"
            className="mx-auto w-full py-10 md:py-20 lg:md:py-20 px-2 md:px-60"
        >
            <div
                className={`${
                    darkMode ? "text-txtdark" : "text-txtlight"
                } mx-auto text-center font-semibold text-4xl`}
            >
                <h2>Contact</h2>
            </div>
            <p
                className={`${
                    darkMode ? "text-txtdark" : "text-txtlight"
                } mx-auto text-center mt-10 text-lg`}
            >
                Feel free to contact me by email or through my social networks.
            </p>
            <div className="mt-5 flex items-center gap-x-6 flex-wrap mx-auto justify-center">
                <a
                    href="https://github.com/FabPinel"
                    className={`${
                        darkMode
                            ? "bg-primarydark hover:bg-primarydarkhover text-bgdark"
                            : "bg-primarylight hover:bg-primarylighthover text-bglight"
                    } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5 transition-all ease-in duration-100`}
                >
                    <FaGithub className="w-4 h-4 me-2" aria-hidden="true" />
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/fabien-pinel/"
                    className={`${
                        darkMode
                            ? "bg-primarydark hover:bg-primarydarkhover text-bgdark"
                            : "bg-primarylight hover:bg-primarylighthover text-bglight"
                    } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5 transition-all ease-in duration-100`}
                >
                    <FaLinkedinIn className="w-4 h-4 me-2" aria-hidden="true" />
                    LinkedIn
                </a>
                <a
                    href="mailto:fabien.pinel08@outlook.fr"
                    className={`${
                        darkMode
                            ? "bg-primarydark hover:bg-primarydarkhover text-bgdark"
                            : "bg-primarylight hover:bg-primarylighthover text-bglight"
                    } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5 transition-all ease-in duration-100`}
                >
                    <FaEnvelope className="w-4 h-4 me-2" aria-hidden="true" />
                    fabien.pinel08@outlook.fr
                </a>
            </div>
        </div>
    );
}
