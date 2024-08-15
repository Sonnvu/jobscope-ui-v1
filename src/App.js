import Home from "./component/page/home/Home";
import Header from "./component/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./component/page/authentication/SignUp";
import Explore from "./component/page/explore/Explore";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/jobscope-ui-v1" element={<Home />}/>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/jobscope-ui-v1/explore" element={<Explore />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
