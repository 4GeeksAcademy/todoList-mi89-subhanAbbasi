import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);

	const addTask = (e) => {
		if (e.key === "Enter" && task.trim() !== "") {
			setTodos([...todos, task]);
			setTask("");
		}
	};

	const deleteTask = (indexToDelete) => {
		setTodos(todos.filter((_, index) => index !== indexToDelete));
	};

	return (
		<div className="todo-wrapper">
			<h1>todos</h1>

			<div className="todo-container">
				<input
					type="text"
					placeholder="What needs to be done?"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyDown={addTask}
				/>

				{todos.length === 0 ? (
					<li className="empty">No tasks, add a task</li>
				) : (
					todos.map((item, index) => (
						<li key={index} className="todo-item">
							<span>{item}</span>
							<span
								className="delete-btn"
								onClick={() => deleteTask(index)}>
								x
							</span>
						</li>
					))
				)}

				<div className="footer">{todos.length} item left</div>
			</div>
		</div>
	);
};

export default Home;