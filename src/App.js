// import logo from './logo.svg';
// import './App.css';

// import ToDo from "./containers/ToDo";
// import NestedComponent from "./containers/NestedComponent";
import NestedComponentWithContext from "./containers/NestedComponentWithContext";

function App() {
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2em"}}>
      {/* <ToDo /> */}
      {/* <NestedComponent /> */}
      <NestedComponentWithContext />
    </div>
  );
}

export default App;
