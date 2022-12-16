import React from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)


function CreateButton({ taskID }) {
    const createTask = () => {

        base('Tasks').create([
            {
                "fields": {
                    "Name": "api created task 00005",
                    "due_date": "2022-12-25",
                    "Status": "Todo",
                    "client_visible": true,
                    "new_client": [
                        "reca1BIsqZ4IMpsHY"
                    ]
                }
            }
        ], function(err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
            prompt('Created record', createTask.id);
        });
    };
    return (
        <div>
            <button
                onClick={createTask}
                type="button"
                className="bg-green-300 m-3 p-3 text-green-600 hover:bg-green-400 rounded-md"
            >
            Create
                <i></i>
            </button>
        </div>

    );
}

export default CreateButton;