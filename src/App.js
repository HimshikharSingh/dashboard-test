import "./App.css";
import Freeslot from "./components/Freeslot";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pro from "./components/Pro";
import ProjectDetails from "./components/ProjectDetails";
import Revenue from "./components/Revenue";
import Travel from "./components/Travel";
import Hotel from "./components/Hotel";
import Transaction from "./components/Transaction";
import Dearclient from "./components/Dearclient";
import ProjectProgress from "./components/ProjectProgress";
// projectFile.js
function App() {
  return (
    <div className="App">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Navbar />
      </div>
      <div className="div3">
        <Pro />
      </div>
      <div className="div4">
        <Revenue />
      </div>
      <div className="div5">
        <Travel />
      </div>
      <div className="div6">
        <Hotel />
      </div>
      <div className="div7">
        <Freeslot />
      </div>
      <div className="div8">
        <Dearclient />
      </div>
      <div className="div9">
        <Transaction />
      </div>
      <div className="div10">
        <ProjectDetails />
      </div>
      <div className="div11">
        <ProjectProgress />
      </div>
    </div>
  );
}

export default App;
