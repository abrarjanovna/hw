import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/Error";

let url = "https://jsonplaceholder.typicode.com/users/1/posts";

function App() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);

  const fetchUrl = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setList(data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos list={list} />} />
        <Route path="/single/:sid" element={<Single list={list} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
