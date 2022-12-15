import React from "react";

const TaskCard = ({task}) => {

    return (
        <div className="col-span-1">

                <div className="bg-teal-600 h-36 rounded-lg p-3 hover:bg-teal-500">
                    <h2 className="m-3">{task.fields.Name}</h2>
                    <p>testing push</p>
                </div>
        </div>
    )
};

export default TaskCard;