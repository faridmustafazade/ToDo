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
import { useEffect, useState } from "react";

const UpdateDialogDemo = ({
  mode,
  todos,
  setTodos,
  content,
  open,
  setOpen,
  id,
}) => {
  const [newContent, setNewContent] = useState();
  useEffect(() => {
    setNewContent(content);
  }, [content]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sx"));
  const handleSubmit = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, content: newContent.trim() } : todo
    );
    setTodos(updatedTodos);
  };
  const handleChange = (e) => {
    setNewContent(e.target.value);
  };
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
          className="uppercase text-center dark:bg-blackColor dark:text-white"
        >
          {"edit note"}
        </DialogTitle>
        <DialogContent className="dark:bg-blackColor flex justify-center">
          <DialogContentText>
            <textarea
              onChange={(e) => {
                handleChange(e);
              }}
              value={newContent}
              placeholder="Input your note..."
              className="border outline-none border-purpleColor rounded-md pl-3 pr-5 md:w-96 py-2 dark:bg-transparent dark:text-white"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className="dark:bg-blackColor"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "25px",
            paddingBottom: "30px",
          }}
        >
          <Button
            className="dark:bg-transparent"
            sx={cancelSX}
            autoFocus
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="dark:border-none"
            disabled={newContent === "" && true}
            sx={applySX}
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            autoFocus
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateDialogDemo;
