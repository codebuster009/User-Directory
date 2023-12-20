import "./App.css";
import UserDirectory from "./directory/Directory";
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
    </Routes>
  );
}

export default App;
