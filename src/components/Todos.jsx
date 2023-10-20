import Todo from "./Todo";

export default function Todos({ list }) {
  return (
    <div>
      {list.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </div>
  );
}
