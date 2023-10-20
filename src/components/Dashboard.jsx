export default function Dashboard({ user }) {
  return (
    <div className="container">
      <h2 className="h2 text">{user.name}, welcome to the Dashboard page</h2>
      <p className="p">This is Dashboard page :)</p>
    </div>
  );
}
