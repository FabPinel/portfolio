import { useState } from "react";
import { PageProps } from "@inertiajs/inertia";

export default function CreateProject({ auth }: PageProps) {
    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        start: "",
        end: "",
        context: "",
        tasks: "",
        conclusion: "",
        url: "",
        github: "",
        category: "",
        img: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        if (csrfToken) {
            headers["X-CSRF-Token"] = csrfToken;
        }

        try {
            const response = await fetch("/admin/projects", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    title: "",
                    desc: "",
                    start: "",
                    end: "",
                    context: "",
                    tasks: "",
                    conclusion: "",
                    url: "",
                    github: "",
                    category: "",
                    img: "",
                });
                window.location.href = "/dashboard";
            } else {
                console.error("Erreur lors de la sauvegarde du projet");
            }
        } catch (error) {
            console.error("Erreur lors de la sauvegarde du projet:", error);
        }
    };

    return (
        <div>
            <div className="space-y-10 divide-y divide-gray-900/10 mt-20">
                <div className="w-1/4 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                    >
                        <div className="px-4 py-6 sm:p-8">
                            <div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="desc"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <textarea
                                                name="desc"
                                                id="desc"
                                                value={formData.desc}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="start"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Start
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="date"
                                                name="start"
                                                id="start"
                                                value={formData.start}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="end"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        End
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="date"
                                                name="end"
                                                id="end"
                                                value={formData.end}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="context"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Context
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <textarea
                                                name="context"
                                                id="context"
                                                value={formData.context}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="tasks"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Tasks
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <textarea
                                                name="tasks"
                                                id="tasks"
                                                value={formData.tasks}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="conclusion"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Conclusion
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <textarea
                                                name="conclusion"
                                                id="conclusion"
                                                value={formData.conclusion}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="url"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Url
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="text"
                                                name="url"
                                                id="url"
                                                value={formData.url}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="github"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Github
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="text"
                                                name="github"
                                                id="github"
                                                value={formData.github}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Category
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="text"
                                                name="category"
                                                id="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="img"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Img
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="file"
                                                name="img"
                                                id="img"
                                                value={formData.img}
                                                onChange={handleChange}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                            <button
                                type="submit"
                                className="rounded-md bg-primarylight px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primarylighthover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primarylight"
                            >
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
