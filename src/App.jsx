import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Todo from "./components/Todo/Todo";
import Goal from "./components/Goal/Goal";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { key } from "../key";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelectedGoal = (id) => {
    setSelectedGoal(id);
  };

  const firebaseConfig = key;
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const syncTodoItemWithFirestore = () => {
    const q = query(collection(db, "todoItem"), orderBy("createdTime", "asc"));

    getDocs(q).then((querySnapshot) => {
      const firestoreTodoItemList = [];
      querySnapshot.forEach((doc) => {
        firestoreTodoItemList.push({
          id: doc.id,
          text: doc.data().text,
          isFinished: doc.data().isFinished,
          createdTime: doc.data().createdTime,
          goalId: doc.data().goalId,
        });
      });
      setTodos(firestoreTodoItemList);
    });
  };

  const syncGoalItemWithFirestore = () => {
    const q = query(collection(db, "goalItem"), orderBy("createdTime", "asc"));

    getDocs(q).then((querySnapshot) => {
      const firestoreGoalItemList = [];
      querySnapshot.forEach((doc) => {
        firestoreGoalItemList.push({
          id: doc.id,
          text: doc.data().text,
          createdTime: doc.data().createdTime,
          isFinished: doc.data().isFinished,
        });
      });
      setGoals(firestoreGoalItemList);
    });
  };

  useEffect(() => {
    syncTodoItemWithFirestore();
  }, []);

  useEffect(() => {
    syncGoalItemWithFirestore();
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.box}>
        <Goal
          db={db}
          goals={goals}
          setGoals={setGoals}
          syncGoalItemWithFirestore={syncGoalItemWithFirestore}
          onSelectGoal={handleSelectedGoal}
          selectedGoal={selectedGoal}
        />
        <Todo
          db={db}
          todos={todos}
          setTodos={setTodos}
          syncTodoItemWithFirestore={syncTodoItemWithFirestore}
          selectedGoal={selectedGoal}
        />
      </div>
    </div>
  );
};

export default App;
