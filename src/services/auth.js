import db from "../models/index.js";
// register , login , logout
export const register = () => {
  new Promise((resolve, reject) => {
    try {
      resolve("register success");
    } catch (error) {
      reject(error);
    }
  });
};
