import { useState, useEffect } from "react";
import { PageProps } from "@inertiajs/inertia";

interface Stack {
    id: number;
    name: string;
}

export default function EditStack({
    auth,
    stack,
}: PageProps & { stack: Stack }) {
    const [formData, setFormData] = useState({ name: "" });

    useEffect(() => {
        if (stack) {
            setFormData({ name: stack.name });
        }
    }, [stack]);

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

        try {
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

            const response = await fetch(`/admin/stacks/${stack.id}`, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                window.location.href = "/dashboard";
                console.log("Stack mis à jour avec succès !");
            } else {
                console.error("Erreur lors de la mise à jour de la stack");
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la stack:", error);
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
                                        htmlFor="name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Nom
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primarylight sm:max-w-md">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
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
