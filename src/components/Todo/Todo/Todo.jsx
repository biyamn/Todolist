import React from "react";
import { useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.css";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

const Todo = ({ db, displayInputs, setDisplayInputs }) => {
  const submitEditedContent = (updatedText, id) => {
    setDisplayInputs(
      displayInputs.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: updatedText,
          };
        }
        return todo;
      })
    );
  };

  const onSaveTodo = async (todo) => {
    const docRef = await addDoc(collection(db, "todoItem"), {
      text: todo.text,
    });

    setDisplayInputs([
      ...displayInputs,
      {
        id: docRef.id,
        text: todo.text,
      },
    ]);
  };

  const onDelete = async (id) => {
    const todoItemRef = doc(db, "todoItem", id);
    await deleteDoc(todoItemRef);

    setDisplayInputs(displayInputs.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Todo list</h1>
        </div>
        <TodoInput onSaveTodo={onSaveTodo} />
      </div>
      <TodoList
        item={displayInputs}
        onDelete={onDelete}
        submitEditedContent={submitEditedContent}
      />
    </div>
  );
};

export default Todo;
