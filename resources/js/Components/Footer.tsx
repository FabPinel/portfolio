interface FooterProps {
    darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
    return (
        <footer className="rounded-lg">
            <div className="w-full px-4 text-center">
                <span className="text-sm text-gray-500 sm:text-center">
                    © 2024{" "}
                    <a
                        href="https://www.linkedin.com/in/fabien-pinel/"
                        className="hover:underline"
                    >
                        Fabien Pinel
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
            <div className="w-full p-4 text-center">
                <span className="text-sm text-gray-500 sm:text-center">
                    Made with : React JS, TypeScript, Tailwind CSS, Laravel and
                    PhpUnit
                </span>
            </div>
        </footer>
    );
}
