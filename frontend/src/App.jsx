import { Routes, Route } from'react-router-dom';
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
    <div>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/create" element={<Createpage/>} />
        </Routes>
    </div>
    </>
  )
}

export default App
