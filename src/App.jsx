import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectLogin from "./components/ProtectLogin";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/Homepage"
          element={
            <ProtectLogin>
              <Homepage />
            </ProtectLogin>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
