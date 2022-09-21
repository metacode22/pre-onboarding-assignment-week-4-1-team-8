export const getStorageItem = key => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const setStorageItem = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeStorageItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
