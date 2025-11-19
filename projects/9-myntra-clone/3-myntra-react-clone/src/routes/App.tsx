import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
