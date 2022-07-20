// import logo from './logo.svg';
// import './App.css';

import ToDo from "./containers/ToDo";
import NestedComponent from "./containers/NestedComponent";

function App() {
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2em"}}>
      {/* <ToDo /> */}
      <NestedComponent />
    </div>
  );
}

export default App;
