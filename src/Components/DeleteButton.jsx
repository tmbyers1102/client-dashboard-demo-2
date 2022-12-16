import React from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)


function DeleteButton({ taskID }) {
    const deleteTask = () => {
        base('Tasks').destroy(taskID, function (err, deleteTask) {
            if (err) {
                console.error(err);
                return;
            }
            prompt('Deleted record', deleteTask.id);
        });
    };
    return (
        <div>
            <button
                onClick={deleteTask}
                type="button"
                className="bg-indigo-300 m-3 p-3 text-indigo-600 hover:bg-indigo-400 rounded-md"
            >
            Delete
                <i></i>
            </button>
        </div>

    );
}

export default DeleteButton;