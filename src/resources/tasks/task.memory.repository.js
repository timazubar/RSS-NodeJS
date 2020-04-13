const tasks = [];

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
