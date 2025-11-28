import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

export default function Layout() {
  return (
    <div className="app-shell">
      <Nav />

      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
