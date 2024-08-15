import Home from "./component/page/home/Home";
import Header from "./component/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./component/page/authentication/SignUp";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/jobscope-ui-v1" element={<Home />}/>
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
