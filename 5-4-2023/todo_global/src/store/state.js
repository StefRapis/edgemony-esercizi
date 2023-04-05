export const initialState = {
  // TODO LIST LOCALE
  tasksListData: [
    {
      id: 1,
      todo: "This is a local todoList!",
      completed: true,
      userId: 26,
      image: "https://robohash.org/orol",
      username: "ammore",
    },
    {
      id: 2,
      todo: "Organize the weekend",
      completed: false,
      userId: 12,
      image: "https://robohash.org/mica",
      username: "Gurly",
    },
    {
      id: 3,
      todo: "Planning for the week ahead",
      completed: false,
      userId: 15,
      image: "https://robohash.org/gemma",
      username: "Planner",
    },
    {
      id: 4,
      todo: "Fix light in the kitchen",
      completed: true,
      userId: 4,
      image: "https://robohash.org/master",
      username: "Repairer",
    },
  ],
  // MODALE
  isModalVisible: false,
  // AGGIUNTA NUOVO TODO IN LISTA
  newTodo: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },
};
