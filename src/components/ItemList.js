import "./ItemList.css";
import Item from "./Item.js";

export default function ItemList({ items, onItemClick }) {
  const liItems = items.map((item) => {
    return <Item key={item.id} onItemClick={onItemClick} item={item} />;
  });
  return <ul>{liItems}</ul>;
}
