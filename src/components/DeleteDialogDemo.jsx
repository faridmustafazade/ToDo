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
import React from "react";

const DeleteDialogDemo = ({
  id,
  mode,
  todos,
  setTodos,
  openDelete,
  setOpenDelete,
}) => {
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClose = () => {
    setOpenDelete(false);
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
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="uppercase text-center dark:bg-blackColor dark:text-white"
        >
          {"delete note"}
        </DialogTitle>
        <DialogContent className="dark:bg-blackColor flex justify-center">
          <DialogContentText className="text-center text-2xl dark:text-white">
            {"Are you sure you want to delete this note?"}
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
            sx={applySX}
            onClick={() => {
              handleDelete();
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

export default DeleteDialogDemo;
