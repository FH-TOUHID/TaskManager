import React from "react";
import Form from "./Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Tasklist from "./Tasklist";

const Body = () => {
  const [task, settask] = useState([]);
  useEffect(() => {
    const gettask = async () => {
      try {
        const res = await axios.get("https://taskmanager-angf.onrender.com/api/tasks");
        settask(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    gettask();
  }, []);

  return (
    <>
      {/*hero-intr*/}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 ">Get Things Done</h1>

        <p className="mt-4 text-lg text-gray-500 mb-10">
          Add your tasks, stay organized, and be more productive.
        </p>
      </div>
      {/*form */}
      <Form task={task} settask={settask} />

      {/*task*/}
      <Tasklist task={task} settask={settask}/>
    </>
  );
};

export default Body;
