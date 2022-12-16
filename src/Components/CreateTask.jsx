import React, { useRef } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)


function CreateTask() {
    const nameRef = useRef();
    const dueDateRef = useRef();
    // const statusRef = useRef();
    // const clientVisibleRef = useRef();
    // const newClientRef = useRef();

    const createTask = (e) => {
        e.preventDefault();
        const Name = nameRef.current.value;
        const due_date = dueDateRef.current.value;
        // const Status = statusRef.current.value;
        // const client_visible = clientVisibleRef.current.value;
        // const new_client = newClientRef.current.value;

        base('Tasks').create(
            { Name, due_date },
            function(err, record) {
                if (err) {
                    console.error(err);
                    return;
                }
                prompt('Created record', record.getId());
            });
    };
    return (
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Task Name"
                        ref={nameRef}
                    ></input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Due Date 2022-12-25
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="date"
                        placeholder="Task Due Date"
                        ref={dueDateRef}
                    ></input>
                </div>
                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Status
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Todo"
                        ref={statusRef}
                    ></input>
                </div> */}
                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Client Visibility
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="checkbox"
                        placeholder="true"
                        ref={clientVisibleRef}
                    ></input>
                </div> */}
                {/* <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                        <input
                            class="mr-2 leading-tight"
                            type="checkbox"
                            ref={clientVisibleRef}
                        ></input>
                        <span class="text-sm">
                            Make Visible to Client
                        </span>
                    </label>
                </div> */}
                                {/* <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Client reca1BIsqZ4IMpsHY
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="reca1BIsqZ4IMpsHY"
                        ref={newClientRef}
                    ></input>
                </div> */}
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={createTask}
                    >
                        Create Task
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    );
}

export default CreateTask;