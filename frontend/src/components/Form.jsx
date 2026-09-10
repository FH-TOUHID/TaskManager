import { useForm } from "react-hook-form";
import axios from "axios";
const Form = ({ task, settask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://taskmanager-angf.onrender.com/api/tasks", data);
      settask([...task, res.data]);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[910px]">
        <div className="flex gap-3">
          {/* Input */}
          <input
            {...register("text", {
              required: "Task is required",
            })}
            type="text"
            placeholder="Enter a new task..."
            className="
              flex-1
              h-14
              px-5
              border
              border-slate-300
              rounded-lg
              text-base
              text-slate-800
              placeholder:text-slate-400
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              h-14
              px-10
              bg-blue-600
              text-white
              text-lg
              font-medium
              rounded-lg
              cursor-pointer
              transition-all
              duration-150
              hover:bg-blue-700
              active:translate-y-1
            "
          >
            Add Task
          </button>
        </div>

        {/* Error */}
        {errors.text && (
          <p className="mt-2 text-sm text-red-500">{errors.text.message}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
