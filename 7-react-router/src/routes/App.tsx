import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "../store/Post-list-store";

function App() {
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
