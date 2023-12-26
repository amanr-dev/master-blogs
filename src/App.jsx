import { Outlet } from "react-router-dom";
import "./App.css";
// import authService from "./appwrite/auth";

// console.log(authService);
function App() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
