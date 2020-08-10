import React from 'react';
import { nanoid } from 'nanoid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Form from './Form';
import Todo from './Todo';
import FilterButton from './FilterButton';

import { connect } from 'react-redux'
import { addTodoAction, deleteTodoAction } from './redux/actions'

const BUTTONS = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const BUTTONS_KEYS = Object.keys(BUTTONS);

function App(props) {
  const [tasks, setTasks] = React.useState([]);
  const [filter, setFilter] = React.useState('All');

  const date = new Date();
  const formatDate = date.toDateString();

  const buttonList = BUTTONS_KEYS.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const taskList = props.todoReducer
    .filter(BUTTONS[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        date={task.date}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    ))

  function addTask(name) {
    if (name !== '') {
      const addTodo = {
        id: 'todo-' + nanoid(),
        name: name,
        completed: false,
        date: formatDate
      };
      props.addTodoAction(addTodo)
    }
  }

  function deleteTask(id) {
    props.deleteTodoAction(id)
  }

  function editTask(id, newName, formatDateEdit) {
    const editTodo = tasks.map(task => {
      if (id === task.id && newName !== '') {
        return { ...task, name: newName, date: formatDateEdit }
      }
      return task;
    });
    setTasks(editTodo);
  }

  function toggleTaskCompleted(id) {
    const updateTask = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updateTask);
  }

  return (
    <Container maxWidth='xs'>
      <Grid container direction='column' spacing={4}>
        <Grid item>
          <Typography
            variant='h2'
            color='secondary'
          >
            todo
          </Typography>
        </Grid>
        <Grid item>
          <Form addTask={addTask} />
        </Grid>
        <Grid container justify='center' spacing={2}>
          {buttonList}
        </Grid>
        <List>
          {taskList}
        </List>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => ({
  todoReducer: state.todoReducer
})

const mapDispatchToProps = {
  addTodoAction,
  deleteTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

