import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    console.log(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          id="newtodobox"
          className="todoinput"
          name="text"
          autoComplete="off"
          placeholder="New todo..."
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="submitButton btn">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
