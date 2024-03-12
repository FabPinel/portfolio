import { Switch } from "@headlessui/react";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

interface SwitchModeProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function SwitchMode({ darkMode, setDarkMode }: SwitchModeProps) {
    return (
        <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={classNames(
                darkMode
                    ? "bg-bglight focus:ring-primarydark"
                    : "bg-bgdark focus:ring-primarylight",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    darkMode
                        ? "bg-bgdark translate-x-5"
                        : "bg-bglight translate-x-0",
                    "pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
                )}
            >
                <span
                    className={classNames(
                        darkMode
                            ? "opacity-0 duration-100 ease-out"
                            : "opacity-100 duration-200 ease-in",
                        "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                ></span>
            </span>
        </Switch>
    );
}
