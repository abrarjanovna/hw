import { Link, useParams } from "react-router-dom";

let url = "https://jsonplaceholder.typicode.com/users/1/posts";

export default function Single({ list }) {
  const { sid } = useParams();

  const product = list.find((product) => product.id === sid);

  return (
    <div className="container">
      <br />
      <h2>This is Signle page</h2>
      <p className="p">ID number: {sid}</p>
      <Link className="link" to="/">
        <li>Back home</li>
      </Link>
      <br />
    </div>
  );
}
