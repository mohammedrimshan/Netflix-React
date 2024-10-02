import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/NavBar.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Rawpost from "./Components/Rawpost/Rawpost.jsx";
import { orginals, action, comedy, toprated, upcoming } from "./Urls";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Rawpost url={orginals} title="Netflix Orginals" />
            <Rawpost url={toprated} title="Top-rated" isSmall />
            <Rawpost url={action} title="Action" isSmall />
            <Rawpost url={comedy} title="comedy" isSmall />

            <Rawpost url={upcoming} title="Up-coming" isSmall />
            <Footer />
        </>
    );
}

export default App;
