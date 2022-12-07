import Link from "next/link";
import React from "react";
import db from "../../database"


function AllTasks(props) {
    const tasks = props.tasks
    
    return (
        <div>
            <h1>page to see all tasks around</h1>
            {tasks.map(task =>
            (<li key={task.id}>
                <Link href={`/tasks/${task.id}`}>{task.title} at {task.time}  in {task.address}</Link>
            </li>))}

        </div>
    );
}


export async function getServerSideProps(req, res) {
    const tasks = JSON.parse(JSON.stringify(await db.Task.findAll()))
    return {
        props: { tasks }
    }
}

export default AllTasks;
