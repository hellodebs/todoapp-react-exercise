export default function InputBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="toDoInput"
        id="toDoInput"
        type="text"
        placeholder="My to-do..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
