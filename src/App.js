import { useEffect, useState } from "react";
import addIcon from "./Assets/Images/add-outline.svg";
import detectiveIcon from "./Assets/Images/detective.svg";
import Note from "./components/Note";
import AlertDialogDemo from "./components/AlertDialogDemo";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "complete") {
        return todo.isCompleted;
      } else if (filter === "incomplete") {
        return !todo.isCompleted;
      } else {
        return true;
      }
    })
    .filter((todo) => {
      return todo.content.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className={`${mode && "dark"}`}>
      <div className="min-h-screen md:flex justify-center items-center duration-200 dark:bg-blackColor pb-10">
        <div className="md:container">
          <div className="relative flex flex-col md:items-center pt-24 gap-5">
            <div className="title uppercase font-bold text-2xl font-quicksand-bold duration-200 dark:text-white text-center">
              todo list
            </div>
            <Search
              mode={mode}
              setMode={setMode}
              setFilter={setFilter}
              setSearchQuery={setSearchQuery}
            />
            <div className="notes md:w-[50%]">
              {filteredTodos.length ? (
                filteredTodos.map((todo) => {
                  return (
                    <Note
                      mode={mode}
                      key={todo.id}
                      content={todo.content}
                      id={todo.id}
                      todos={todos}
                      setTodos={setTodos}
                      checked={todo.isCompleted}
                      date={todo.createdAt}
                    />
                  );
                })
              ) : (
                <div className="flex flex-col items-center gap-5 font-quicksand-medium">
                  <img src={detectiveIcon} alt="detective" />
                  <p className="dark:text-white duration-200">Empty...</p>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <AlertDialogDemo
                mode={mode}
                todos={todos}
                setTodos={setTodos}
                open={open}
                setOpen={setOpen}
              />
              <img
                src={addIcon}
                alt="add"
                className="cursor-pointer"
                onClick={handleClickOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
