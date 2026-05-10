import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Register_Event from "./pages/Register_Event";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import CreateCategory from "./pages/dashboard/categories/CreateCategory";
import EventList from "./pages/dashboard/categories/events/EventList";
import CreateNewSpeaker from "./pages/dashboard/categories/speakers/CreateNewSpeaker";
import CreateNewEvent from "./pages/dashboard/categories/events/CreateNewEvent";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/talkshow" element={<Talkshow />} />
        <Route path="/workshop" element={<Workshop />} />

        <Route path="/category"element={<CreateCategory />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/speakers" element={<CreateNewSpeaker />} />
        <Route path="/create/events" element={<CreateNewEvent />} />

      </Route>

        
      
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-event" element={<Register_Event />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}


export default App;