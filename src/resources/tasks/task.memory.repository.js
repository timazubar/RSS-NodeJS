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

const getAll = () => {
  return tasks;
};

const createTask = task => {
  tasks.push(task);
};

const updateTask = (taskId, boardId, params) => {
  const taskIndex = tasks.findIndex(
    task => task.id === taskId && task.boardId === boardId
  );
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...params };
  }
};

const deleteTask = (taskId, boardId) => {
  const taskIndex = tasks.findIndex(
    task => task.id === taskId && task.boardId === boardId
  );

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask
};
