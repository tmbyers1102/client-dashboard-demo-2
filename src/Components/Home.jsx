import React, { useEffect, useState } from 'react'
import TaskCard from "./TaskCard";
import Airtable from "airtable";
import CreateButton from './CreateButton';
import CreateTask from './CreateTask';

const base = new Airtable({ apiKey: import.meta.env.VITE_API_KEY }).base(import.meta.env.VITE_BASE_ID)


const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        base("tasks")
            .select({ 
                view: "Fake Tasks",
                //filterByFormula: `AND({client_from_new_client}='Made Up Lamps', {client_visible})`,
                // filterByFormula: `{status}='Todo'`,
            })
            .eachPage((records, fetchNextPage) => {
                //console.log(records)
                setTasks(records);
                fetchNextPage();
            });
    }, []);

    return (
        <>
                <h1 className='text-2xl font-bold'>Create Task</h1>
            <div className='flex justify-center p-3'>
                <CreateTask />
            </div>
            <div className="grid grid-cols-6 items-center justify-center m-3 gap-4 flex">
                <div className='flex justify-center w-full'>
                    <CreateButton />
                </div>
                {tasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
            </div>
        </>
    )
};

export default Home;