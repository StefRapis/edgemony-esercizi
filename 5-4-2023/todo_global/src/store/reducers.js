export const mainReducer = (state, action) => {
  switch (action.type) {
    /////// TASK TODO
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
    ////// MODALE
    case "SET_MODAL_TRUE":
      return {
        ...state,
        isModalVisible: true,
      };
    case "SET_MODAL_FALSE":
      return {
        ...state,
        isModalVisible: false,
      };
    case "MODAL_TOGGLE":
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      };
    ////// CONTROLLED COMPONENTS
    case "SAVE_USERNAME":
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          username: action.payload,
        },
      };
    case "SAVE_TODO":
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          todo: action.payload,
        },
      };
    case "SAVE_IMAGE":
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          image: action.payload,
        },
      };
    ///// AGGIUNTA DI ID TEMPORANEO ALLA TASK
    case "ADD_ID":
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          id: action.payload,
        },
      };
  }
};
