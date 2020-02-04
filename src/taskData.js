const taskData = [
  {
    id: 1,
    title: "Coffee",
    subtitle: "STask1"
  },
  {
    id: 2,
    title: "Workout",
    subtitle: "STask2"
  },
  {
    id: 3,
    title: "Play Fifa",
    subtitle: "STask3"
  },
  {
    id: 4,
    title: "Smoke Shisha",
    subtitle: "STask4"
  },
  {
    id: 5,
    title: "Yoga",
    subtitle: "STask5"
  },
  {
    id: 6,
    title: "Play Pubg",
    subtitle: "STask6"
  },
  {
    id: 7,
    title: "Nap",
    subtitle: "STask7"
  }
];

export function getNewId() {
  return taskData[taskData.length - 1].id + 1;
}
export function getTasks() {
  return taskData;
}

export function addTask(task) {
  taskData.push(task);
}

export function removeTask(id) {
  taskData.forEach((item, index) => {
    if (item.id === id) {
      taskData.splice(index, 1);
    }
  });
}
