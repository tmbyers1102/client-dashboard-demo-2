import React from "react";
import DeleteButton from "./DeleteButton";

const TaskCard = ({task}) => {
    const taskId = task.id

    return (
        <div className="col-span-1">
                <div className="border border-teal-600 h-24 rounded-lg p-1 text-xs hover:bg-teal-500">
                    <h2 className="m-3">Name: {task.fields.Name}</h2>
                    <p className="m-3">Status: {task.fields.Status}</p>
                    {/* <div className="flex">
                        <DeleteButton taskID={taskId} />
                    </div> */}
                </div>
        </div>
    )
};

export default TaskCard;