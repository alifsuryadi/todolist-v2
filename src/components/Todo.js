import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

export default function Todo(props) {
  const [newName, setNewName] = useState(props.name);
  const [newDescription, setNewDescription] = useState(props.description);
  const [isEditing, setEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName, newDescription);
    setEditing(false);
  }

  const editingTemplate = (
    <form className="todo" onSubmit={handleSubmit}>
      <input
        id={`${props.id}-name`}
        className="todoinput mb-2"
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Todo title"
      />
      <textarea
        id={`${props.id}-description`}
        className="todoinput"
        rows="4"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel flex items-center"
          onClick={() => {
            setNewName(props.name);
            setNewDescription(props.description);
            setEditing(false);
          }}
        >
          <FaTimes className="mr-2" /> Cancel
        </button>
        <button
          type="submit"
          className="btn btn__primary todo-edit flex items-center"
        >
          <FaSave className="mr-2" /> Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="todo">
      <div className="todo-content flex justify-between items-center">
        <div className="flex items-center flex-1">
          <input
            id={props.id}
            type="checkbox"
            className="checkbox"
            checked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label flex-grow" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="todo-actions flex">
          <button
            type="button"
            className="btn btn-edit mr-2"
            onClick={() => setEditing(true)}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => props.deleteTask(props.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      {props.description && (
        <div className="todo-description">{props.description}</div>
      )}
    </div>
  );

  return isEditing ? editingTemplate : viewTemplate;
}
