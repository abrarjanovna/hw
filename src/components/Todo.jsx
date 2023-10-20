import { Link } from "react-router-dom";

export default function Todo({ id, title, url }) {
  return (
    <div className="todos">
      <h2 className="h2">{title}</h2>
      <img src={url} alt="" />
      <Link className="id-link" to={`/single/${id}`}>ID number</Link>
    </div>
  );
}
