import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";

const TaskItem = ({ item, task, settask }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.text);

  // Checkbox toggle
  const checkbox = async () => {
    try {
      const res = await axios.patch(
        `https://taskmanager-angf.onrender.com/api/tasks/${item._id}`,
        {
          completed: !item.completed,
        },
      );

      settask(task.map((t) => (t._id === item._id ? res.data : t)));
    } catch (error) {
      console.log(error);
    }
  };

  // Delete task
  const del = async () => {
    try {
      await axios.delete(`https://taskmanager-angf.onrender.com/api/tasks/${item._id}`);

      settask(task.filter((t) => t._id !== item._id));
    } catch (error) {
      console.log(error);
    }
  };

  // Edit task
  const editTask = async () => {
    if (text.trim() === "") {
      setText(item.text);
      setEditing(false);
      return;
    }

    try {
      const res = await axios.patch(
        `https://taskmanager-angf.onrender.com/api/tasks/${item._id}`,
        {
          text: text,
        },
      );

      settask(task.map((t) => (t._id === item._id ? res.data : t)));

      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Enter and Escape in input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editTask();
    }

    if (e.key === "Escape") {
      setText(item.text);
      setEditing(false);
    }
  };

  return (
    <div
      className="
        flex items-center justify-between
        gap-4
        w-full
        min-w-0
        border border-slate-300
        rounded-xl
        px-6 py-4
        bg-white
        hover:bg-slate-50
        transition
      "
    >
      {/* Left Side */}
      <div className="flex items-center gap-5 flex-1 min-w-0">
        {/* Checkbox */}
        <button
          type="button"
          onClick={checkbox}
          className={`
            w-7 h-7 rounded-md border
            flex items-center justify-center
            shrink-0
            cursor-pointer
            ${
              item.completed
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-slate-300"
            }
          `}
        >
          {item.completed && "✓"}
        </button>

        {/* Text / Input */}

        {editing ? (
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="
              flex-1
              border
              border-blue-400
              rounded
              px-3
              py-1
              text-lg
              font-bold
              outline-none
            "
          />
        ) : (
          <p
            className={`
              flex-1
              text-lg
              font-bold
              break-all
              leading-relaxed
              ${
                item.completed
                  ? "line-through text-slate-400"
                  : "text-slate-800"
              }
            `}
          >
            {item.text}
          </p>
        )}
      </div>

      {/* Right Side */}
      <div
        className="
          flex
          items-center
          gap-8
          shrink-0
        "
      >
        {/* Date */}
        <span className="text-slate-400 whitespace-nowrap">
          {new Date(item.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        {/* Edit Button */}

        <button
          type="button"
          onClick={() => {
            if (editing) {
              editTask();
            } else {
              setEditing(true);
            }
          }}
        >
          <Pencil
            size={22}
            className="
              text-slate-500
              hover:text-blue-600
              cursor-pointer
            "
          />
        </button>

        {/* Delete Button */}

        <button type="button" onClick={del}>
          <Trash2
            size={22}
            className="
              text-red-500
              hover:text-red-700
              cursor-pointer
            "
          />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
