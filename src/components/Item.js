export default function Item({ item, onItemClick }) {
  return (
    <li
      key={item.id}
      onClick={() => onItemClick(item.id)}
      className={item.isDone === true ? "item--is-done" : ""}
    >
      {item.todo} {item.id}
    </li>
  );
}
