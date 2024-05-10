import './App.css'
import Wrapper from "./components/Wrapper.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Sub from "./pages/Sub.tsx";



function App() {

  return (
      <>
          <Wrapper>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/register" element={<Register/>} />
                      <Route path="/login" element={<Login/>} />
                      <Route path="/sub" element={<Sub/>} />
                  </Routes>
              </BrowserRouter>
          </Wrapper>
      </>
  )
}

export default App
