import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "./localStorageRepository";

describe("localStorageRepository", () => {
  it("should save and get items from local storage", () => {
    const value = 45;
    const name = "test";

    setItemToLocalStorage(name, value);

    const item = JSON.parse(getItemFromLocalStorage(name));
    expect(item).toEqual(value);
  });
});
