import React from 'react';
import QuestionItem from './QuestionItem';
import styles from './QuestionItems.module.css';

const QuestionItems = ({
  todos,
  onTodoCheck,
  onTodoDelete,
  onTodoEdit,
  selectedGoal,
  db,
  currentUser,
}) => {
  const handleTodoDelete = (id) => onTodoDelete(id);

  const handleTodoEdit = (updatedText, id) => onTodoEdit(updatedText, id);

  const handleTodoCheck = (id) => onTodoCheck(id);

  const selectedTodos = todos.filter((todo) => todo.goalId === selectedGoal);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {selectedTodos.map((todo) => (
          <QuestionItem
            todo={todo}
            onTodoDelete={handleTodoDelete}
            key={todo.id}
            onTodoEdit={handleTodoEdit}
            onTodoCheck={handleTodoCheck}
            db={db}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionItems;