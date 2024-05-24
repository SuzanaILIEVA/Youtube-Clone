import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Feed from "./Pages/Feed"
import VideoDetail from "./Pages/VideoDetail/index"
import Results from "./Pages/Results"
import Undefined from "./Pages/Undefined"


function App() {
  

  return (
   <BrowserRouter>
   <Header/>

    <Routes>
    <Route path="/" element={<Feed/>}/>
    <Route path="/watch" element={<VideoDetail/>}/>
    <Route path="/results"  element={<Results/>}/>
    <Route path="*" element={<Undefined/>}/>

    </Routes>
   
   </BrowserRouter>
  )
}

export default App
