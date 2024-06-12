import React, { useState } from "react";
import editIcon from "../Assets/Images/edit-outline.svg";
import trashIcon from "../Assets/Images/trash-outline.svg";
import UpdateDialogDemo from "./UpdateDialogDemo";
import DeleteDialogDemo from "./DeleteDialogDemo";
const Note = ({ mode, content, todos, setTodos, id, checked, date }) => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleSubmit = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div
      id="notes"
      className="px-4 md:px-0 flex items-center md:justify-evenly justify-between mb-4 font-quicksand-semibold dark:text-white duration-200"
    >
      <div className="flex items-center w-[80%]">
        <div className="w-[65%] flex gap-3 items-center">
          <input
            type="checkbox"
            checked={checked}
            onClick={(e) => handleSubmit(e)}
            className="w-[10%] h-7"
          />
          <p
            className={`w-[80%] md:text-xl text-base break-words overflow-wrap word-break
            duration-200
                ${checked && "text-[#25252580] dark:text-purpleColor"}
          `}
          >
            {content}
          </p>
        </div>
        <p
          className={`text-center w-[35%] md:text-xl text-base 
          duration-200
              ${checked && "text-[#25252580] dark:text-purpleColor"}
        `}
        >
          {new Date(date).toLocaleString("en-US", {
            hour12: false,
            minute: "numeric",
            hour: "numeric",
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="flex items-center justify-end gap-3 md:w-auto w-[20%]">
        <UpdateDialogDemo
          id={id}
          mode={mode}
          date={date}
          todos={todos}
          content={content}
          setTodos={setTodos}
          open={open}
          setOpen={setOpen}
        />
        <DeleteDialogDemo
          id={id}
          mode={mode}
          todos={todos}
          setTodos={setTodos}
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
        />
        <img
          onClick={handleClickOpen}
          id="note-icon"
          src={editIcon}
          className="w-5 cursor-pointer color"
          alt="edit"
        />
        <img
          onClick={handleClickOpenDelete}
          id="note-icon"
          src={trashIcon}
          className="w-5 cursor-pointer"
          alt="trash"
        />
      </div>
    </div>
  );
};

export default Note;
