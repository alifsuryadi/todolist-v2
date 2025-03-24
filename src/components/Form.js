import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name, description);
    setName("");
    setDescription("");
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="todo">
          <input
            type="text"
            id="newtodobox"
            className="todoinput"
            name="text"
            autoComplete="off"
            placeholder="New todo title..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            id="newdescription"
            className="todoinput mt-2"
            placeholder="Description (optional)"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="btn-group">
            <button
              type="submit"
              className="submitButton btn flex items-center"
            >
              <FaPlus className="mr-2" /> Add Todo
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
