import logo from "./logo.svg";
import "./App.css";
import Manager from "./Component/Manager";
import Land from "./Component/Land";
import { LandProvider } from "./Component/Moviecontext";
import Net from "./Component/Net";

function App() {
  return (
    <LandProvider>
      <div className="App">
        {/* <Manager /> */}
        {/* <Land /> */}
        <Net />
      </div>
    </LandProvider>
  );
}

export default App;
