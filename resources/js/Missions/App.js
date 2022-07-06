import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MissionEditForm from "./MissionEditForm";
import MissionList from "./MissionList";
import Register from "./Register";

function App() {

return (

    <BrowserRouter>
    
    <h1>Mission from React:</h1>
    <p>Mission Impossible</p>

    <Routes>

        <Route exact path="/missions" element={<MissionList />} />
        <Route exact path="/missions/create" element={<MissionEditForm />} />
        <Route exact path="/missions/register" element={<Register />} />
        

    </Routes>
    
    </BrowserRouter>
)

}


export default App;