import "./App.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import UsersTable from "./components/UsersTable";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/users" element={<UsersTable />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
