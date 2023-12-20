import "./App.css";
import UserDirectory from "./directory/Directory";
import UserProfile from "./user/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <UserDirectory />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <UserProfile/>
          </>
        }
      />
    </Routes>
  );
}

export default App;
