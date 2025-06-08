import { useState } from "react";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";
import Maincontent from "../components/Home/Maincontent";

const Homepage = () => {

  const [active,setActive] = useState("Inbox");

  return (
    <div>
      <Navbar />
      <div style={{display:'flex'}}>
      <Sidebar onMenuClick={setActive} />
      <Maincontent activeMenu={active} />
      </div>
    </div>
  );
};

export default Homepage;
