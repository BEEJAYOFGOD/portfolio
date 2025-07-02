import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </>
    );
}

export default App;
