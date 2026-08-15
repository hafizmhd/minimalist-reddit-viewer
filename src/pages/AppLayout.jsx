import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import SubredditNav from "../components/SubredditNav/SubredditNav";

const AppLayout = () => {
  return (
    <>
      <div className="app-header">
        <Header />
      </div>
      <div className="app-layout">
        <SubredditNav />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;