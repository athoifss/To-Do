export const getTasks = () => {
  return fetch(`http://localhost:10010/getTasks/1`, {}).then(res => res.json());
};

export const formatGetTasks = data => {
  console.log("Api called: getTasks()");
  console.log(data);
  return data;
};
