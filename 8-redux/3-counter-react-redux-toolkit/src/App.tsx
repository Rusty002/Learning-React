import "./App.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Controls from "./components/Controls";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacyVal = useSelector((store) => store.privacy);

  return (
    <div className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacyVal ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Container>
    </div>
  );
}

export default App;
