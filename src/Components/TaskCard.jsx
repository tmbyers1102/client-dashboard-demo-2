import React from "react";
import DeleteButton from "./DeleteButton";

const TaskCard = ({task}) => {
    const taskId = task.id

    return (
        <div className="col-span-1">

                <div className="bg-teal-600 h-48 rounded-lg p-3 hover:bg-teal-500">
                    <h2 className="m-3 h-24 text-sm">{task.fields.Name}</h2>
                    <h2 className="m-3 h-24 text-sm">{task.fields.Status}</h2>
                    <div className="flex">
                        <DeleteButton taskID={taskId} />
                    </div>
                </div>
        </div>
    )
};

export default TaskCard;