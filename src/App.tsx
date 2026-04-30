import Login from "./pages/Login";
import Register from "./pages/Register";
import Register_Event from "./pages/Register_Event";

function App() {
  return (

  <div className= "container mx-auto grid grid-cols-2 gap-6">
    <Login />

  <Register />

  <Register_Event />

  </div> 

  );
}

export default App;