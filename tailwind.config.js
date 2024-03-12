import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                bglight: "#F4FAFB",
                txtlight: "#0D3E4A",
                primarylight: "#079ABB",
                primarylighthover: "#1eb6d8",
                secondarylight: "#B7EBF0",
                accentlight: "#00A2C7",
                bgdark: "#040A0B",
                txtdark: "#B5E6F2",
                txtdarkbutton: "#0D1516",
                primarydark: "#44D7F8",
                primarydarkhover: "#3dbedb",
                secondarydark: "#0F4348",
                accentdark: "#38DBFF",
            },
        },
    },

    plugins: [forms],
};
