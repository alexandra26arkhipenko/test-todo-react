export const setItemToLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getItemFromLocalStorage = (name) => {
    return localStorage.getItem(name);
}