const Task = require('./task.model');

const tasks = [
  {
    id: '1',
    title: 'Task1',
    order: '1',
    description: 'Desc1',
    userId: '11',
    boardId: '11',
    columnId: '11'
  },
  {
    id: '2',
    title: 'Task2',
    order: '2',
    description: 'Desc2',
    userId: '12',
    boardId: '12',
    columnId: '12'
  },
  {
    id: '3',
    title: 'Task3',
    order: '3',
    description: 'Desc3',
    userId: '13',
    boardId: '13',
    columnId: '13'
  },
  {
    id: '4',
    title: 'Task4',
    order: '4',
    description: 'Desc4',
    userId: '14',
    boardId: '14',
    columnId: '14'
  },
  {
    id: '5',
    title: 'Task5',
    order: '5',
    description: 'Desc5',
    userId: '15',
    boardId: '15',
    columnId: '15'
  }
];

const getAll = async () => {
  return tasks;
};

const getTaskById = async params => {
  return tasks.find(t => t.id === params.id);
};

const getTasksByBoard = async params => {
  return tasks.filter(t => t.boardId === (params.boardId || params));
};

const createTask = async (params, details) => {
  const { title, order, description, userId, columnId } = details;
  const boardId = params.boardId;

  const newTask = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });

  tasks.push(newTask);

  return newTask;
};

const updateTask = async (params, newParams) => {
  const task = tasks.find(t => t.id === params.id);

  if (task) {
    Object.assign(task, newParams);

    return task;
  }

  return false;
};

const deleteTask = async params => {
  const index = tasks.findIndex(t => t.id === params.id);

  if (index !== -1) {
    tasks.splice(index, 1);

    return true;
  }

  return false;
};

module.exports = {
  getAll,
  getTaskById,
  getTasksByBoard,
  createTask,
  updateTask,
  deleteTask
};
