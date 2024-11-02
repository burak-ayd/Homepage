import Settings from "./settings";

import { useSetEdit } from "~/stores/app/hooks";
import { setEdit } from "~/stores/app/actions";
import { useState } from "react";

export default function Icons() {
    const useEdit = useSetEdit();

    const [isEditing, setSetEdit] = useState(useEdit);

    const handleEditClick = () => {
        setSetEdit(!isEditing);
        setEdit(!isEditing);
    };

    console.log("isEditing2", isEditing);

    return (
        <div className="grid items-center justify-center grid-cols-2">
            <Settings />
            <>
                <div className="flex items-center">
                    <button
                        onClick={handleEditClick}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded ml-2 flex items-center"
                    >
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 11-6 0 3 3 0 016 0zM4 4v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </>
        </div>
    );
}
