// zod nicemodal react hook form

import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Todo from './components/Todo/Todo';
import Goal from './components/Goal/Goal';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDERID,
  VITE_APP_ID,
  VITE_MEASUREMENT_ID,
} = import.meta.env;

const config = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDERID,
  appId: VITE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseConfig = config;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const today = new Date();
const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = WEEKDAY[today.getDay()];
const todayString = `${year}년 ${month}월 ${date}일 (${day})`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isCompleted, setIsCompleted] = useState([]);

  const handleSelectedGoal = (id) => {
    if (id === selectedGoal) {
      setSelectedGoal(null);
    } else {
      setSelectedGoal(id);
    }
  };

  const initialGoals = [
    {
      id: '1',
      text: '[기술면접] JavaScript',
      createdTime: new Date(),
      isCompleted: false,
      userId: currentUser,
    },
    {
      id: '2',
      text: '[기술면접] React',
      createdTime: new Date(),
      isCompleted: false,
      userId: currentUser,
    },
  ];

  const syncGoalItemWithFirestore = () => {
    const q = query(
      collection(db, 'goalItem'),
      where('userId', '==', currentUser),
      orderBy('createdTime', 'desc')
    );
    getDocs(q).then((querySnapshot) => {
      const firestoreGoalItemList = initialGoals;
      querySnapshot.forEach((doc) => {
        firestoreGoalItemList.push({
          id: doc.id,
          text: doc.data().text,
          createdTime: doc.data().createdTime,
          isCompleted: doc.data().isCompleted,
          userId: doc.data().userId,
        });
      });
      setGoals(firestoreGoalItemList);
    });
  };

  const initialTodos = [
    {
      id: '1_1',
      text: '호이스팅에 대해 설명해 주세요.',
      answer: '호이스팅이란~',
      isFinished: false,
      createdTime: new Date(),
      goalId: '1',
      userId: currentUser,
    },
    {
      id: '1_2',
      text: '클로저에 대해 설명해 주세요.',
      answer: '클로저란~',
      isFinished: false,
      createdTime: new Date(),
      goalId: '1',
      userId: currentUser,
    },
    {
      id: '2_1',
      text: 'DOM과 Virtual DOM의 차이점에 대해 설명해 주세요.',
      answer: 'DOM이란~',
      isFinished: false,
      createdTime: new Date(),
      goalId: '2',
      userId: currentUser,
    },
  ];

  const syncTodoItemWithFirestore = () => {
    const q = query(
      collection(db, 'todoItem'),
      where('userId', '==', currentUser),
      orderBy('createdTime', 'desc')
    );
    getDocs(q).then((querySnapshot) => {
      const firestoreTodoItemList = initialTodos;
      querySnapshot.forEach((doc) => {
        firestoreTodoItemList.push({
          id: doc.id,
          text: doc.data().text,
          answer: doc.data().answer,
          isFinished: doc.data().isFinished,
          createdTime: doc.data().createdTime,
          goalId: doc.data().goalId,
          userId: doc.data().userId,
        });
      });
      setTodos(firestoreTodoItemList);
    });
  };

  // useEffect(() => {
  //   initialGoals.forEach(async (goal) => {
  //     await addDoc(collection(db, 'goalItem'), goal);
  //   });
  // }, []);

  // useEffect(() => {
  //   initialTodos.forEach(async (todo) => {
  //     await addDoc(collection(db, 'todoItem'), todo);
  //   });
  // }, []);

  useEffect(() => {
    syncTodoItemWithFirestore();
  }, [currentUser]);

  useEffect(() => {
    syncGoalItemWithFirestore();
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.uid);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.App}>
      <Navbar
        provider={provider}
        auth={auth}
        currentUser={currentUser}
        todayString={todayString}
      />
      <div className={styles.box}>
        <Goal
          db={db}
          goals={goals}
          todos={todos}
          setGoals={setGoals}
          syncGoalItemWithFirestore={syncGoalItemWithFirestore}
          syncTodoItemWithFirestore={syncTodoItemWithFirestore}
          onSelectGoal={handleSelectedGoal}
          selectedGoal={selectedGoal}
          currentUser={currentUser}
          year={year}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />
        {selectedGoal ? (
          <Todo
            db={db}
            todos={todos}
            goals={goals}
            setTodos={setTodos}
            syncTodoItemWithFirestore={syncTodoItemWithFirestore}
            syncGoalItemWithFirestore={syncGoalItemWithFirestore}
            selectedGoal={selectedGoal}
            currentUser={currentUser}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
          />
        ) : (
          <Main />
        )}
      </div>
    </div>
  );
};

export default App;
