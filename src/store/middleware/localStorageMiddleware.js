import { setItemToLocalStorage } from "../../repository/localStorageRepository";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { todos } = store.getState();
  setItemToLocalStorage("todos", todos);

  return result;
};
