import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import AboutMe from "./aboutMe/aboutMe";
import ToolsAndSkills from "./toolsAndSkills/toolsAndSkills";
import Project from "./project/project";
import ContactPerson from "./contactPerson/contactPerson";
import Detail from "./moreDetail/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutMe />
              <ToolsAndSkills />
              <Project />
              <ContactPerson />
            </>
          }
        />
        <Route path="/more" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
