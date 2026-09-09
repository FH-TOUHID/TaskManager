import React from "react";
import TaskItem from "./TaskItem";

const Tasklist = ({ task, settask }) => {
  return (
    <div
      className="
    w-full 
    max-w-4xl 
    mx-auto 
    mt-8 
    space-y-3
    max-h-[60vh]
    overflow-y-auto
    pr-3
  "
    >
      {task.map((item) => (
        <TaskItem key={item._id} item={item} task={task} settask={settask} />
      ))}
    </div>
  );
};

export default Tasklist;
