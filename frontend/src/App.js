import "./App.css";
import Crisp from "./components/Crisp";
import AuthForm from "./pages/Auth/AuthForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home/Home";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
          <Route
            path="/auth"
            element={!user ? <AuthForm /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>

      <Crisp />
    </>
  );
}

export default App;
