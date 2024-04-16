import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth, stacks, projects }: PageProps) {
    stacks = stacks ?? [];
    projects = projects ?? [];

    const handleDelete = async (stackId: number) => {
        if (confirm("Are you sure you want to delete this stack?")) {
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

                const response = await fetch(`/admin/stacks/${stackId}`, {
                    method: "DELETE",
                    headers: headers,
                });

                if (response.ok) {
                    window.location.href = "/dashboard";
                } else {
                    console.error("Failed to delete stack");
                }
            } catch (error) {
                console.error("Error deleting stack:", error);
            }
        }
    };

    const handleDeleteProject = async (projectId: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
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

                const response = await fetch(`/admin/projects/${projectId}`, {
                    method: "DELETE",
                    headers: headers,
                });

                if (response.ok) {
                    window.location.href = "/dashboard";
                } else {
                    console.error("Failed to delete stack");
                }
            } catch (error) {
                console.error("Error deleting stack:", error);
            }
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                {/* Project section */}
                <div className="px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">
                                Project
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the projects in the portfolio.
                            </p>
                        </div>
                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <a
                                href="/admin/projects/create"
                                className="block rounded-md bg-primarylight px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primarylighthover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add projects
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                Id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Description
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Start
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                End
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {projects.map((project) => (
                                            <tr key={project.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {project.id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {project.title}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {project.desc}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {project.start}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {project.end}
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <a
                                                        href={`/admin/stacks/${project.id}/edit`}
                                                        className="text-txtlight hover:text-primarylighthover"
                                                    >
                                                        Edit
                                                        <span className="sr-only">
                                                            , {project.title}
                                                        </span>
                                                    </a>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteProject(
                                                                project.id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-900 ml-5 cursor-pointer"
                                                    >
                                                        Delete
                                                        <span className="sr-only">
                                                            , {project.title}
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                {/* Stack section */}
                <div className="px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">
                                Stacks
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the stacks in the portfolio
                                including their id and name.
                            </p>
                        </div>
                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <a
                                href="/admin/stacks/create"
                                className="block rounded-md bg-primarylight px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primarylighthover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add stacks
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                Id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                            >
                                                <span className="sr-only">
                                                    Actions
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {stacks.map((stack) => (
                                            <tr key={stack.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {stack.id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {stack.name}
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <a
                                                        href={`/admin/stacks/${stack.id}/edit`}
                                                        className="text-txtlight hover:text-primarylighthover"
                                                    >
                                                        Edit
                                                        <span className="sr-only">
                                                            , {stack.name}
                                                        </span>
                                                    </a>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                stack.id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-900 ml-5 cursor-pointer"
                                                    >
                                                        Delete
                                                        <span className="sr-only">
                                                            , {stack.name}
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
