import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const AlertDialogDemo = ({ mode, todos, setTodos, open, setOpen }) => {
  const [todo, setTodo] = useState();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCreate = (e) => {
    if (todo) {
      let newTodo = {
        id: todos.length + 1,
        content: todo.trim(),
        isCompleted: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([newTodo, ...todos]);
    } else {
      return;
    }
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sx"));

  const handleClose = () => {
    setOpen(false);
  };

  const applySX = {
    border: 1,
    backgroundColor: "#6C63FF",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#6C63FF",
    },
  };
  const cancelSX = {
    border: 1,
    backgroundColor: "white",
    color: "#6C63FF",
    "&:hover": {
      backgroundColor: "#6C63FF",
      color: "white",
    },
  };
  return (
    <>
      <Dialog
        className={`${mode && "dark"}`}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="uppercase text-center dark:text-white dark:bg-blackColor"
        >
          {"add note"}
        </DialogTitle>
        <DialogContent className="dark:bg-blackColor flex justify-center">
          <DialogContentText>
            <textarea
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Input your note..."
              className="border outline-none dark:text-white border-purpleColor dark:border-whiteColor rounded-md pl-3 pr-5 md:w-96 py-2 bg-transparent"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className="dark:bg-blackColor "
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "25px",
            paddingBottom: "30px",
          }}
        >
          <Button className="dark:bg-transparent" sx={cancelSX} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
          className="dark:border-none"
            disabled={(todo === undefined || todo === "") && true}
            onClickCapture={handleCreate}
            sx={applySX}
            onClick={handleClose}
            autoFocus
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialogDemo;
