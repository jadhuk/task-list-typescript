import { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { List, Task } from "../store/types";
import { addTask, setNotification } from "../store/actions";

interface AddNewTaskProps {
  list: List;
}

const AddNewTask: FC<AddNewTaskProps> = ({ list }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName.trim() === "") {
      return alert("Task name is required!");
    }

    const newTask: Task = {
      name: taskName,
      id: `task-${new Date().getTime()}`,
      completed: false,
    };

    dispatch(addTask(newTask, list));
    dispatch(setNotification(`New task created("${newTask.name}")!`));
    setTaskName("");
  };

  return (
    <section>
      <h2>Add new task to selected field</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Task Name</label>
          <div>
            <input
              type="text"
              placeholder="Add Task"
              value={taskName}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input type="submit" value="Add New Task" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddNewTask;
