export const localIsLogin = (getKey: string) => {
  return localStorage.getItem(getKey);
};

export const localSetKey = (setKey: string, value: any) => {
  let item = JSON.stringify(value);
  localStorage.setItem(setKey, item);
};
