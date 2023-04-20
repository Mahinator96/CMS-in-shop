import { API_URI } from "./const.js";

export const getGoods = () => {

  // Возвращем запрос с отключенной пагинацией в API в 8 товаров (/?nopage=true)
  return fetch(`${API_URI}goods/?nopage=true`)
    .then(response => response.json());
};

export const getCategory = () => {

  // Возвращем запрос с отключенной пагинацией в API в 8 товаров (/?nopage=true)
  return fetch(`${API_URI}category`)
    .then(response => response.json());
};