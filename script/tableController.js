import { getGoods } from "./serviceAPI.js";
import { tableRender } from "./tableView.js";

export const tableController = async () => {

  // Получение товаров
  const goods = await getGoods();
  // Рендер таблицы
  tableRender(goods);
};