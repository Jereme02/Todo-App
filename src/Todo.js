import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
  makeStyles,
  Input,
} from "@material-ui/core";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Update Your Todo</h1>
          <Input
            value={input}
            placeholder={props.todo.todo}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => setOpen(true)}
        >
          Edit
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          ⛔️Delete Me
        </Button>
      </List>
    </>
  );
}

export default Todo;
