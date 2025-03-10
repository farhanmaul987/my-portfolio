import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import AboutMe from "./aboutMe/aboutMe";
import ToolsAndSkills from "./toolsAndSkills/toolsAndSkills";
import Project from "./project/project";
import HireMe from "./hireMe/hireMe";
import ContactPerson from "./contactPerson/contactPerson";

// import CustomCursor from "./customCursor.jsx";

function App() {
  return (
    <div>
      {/* <CustomCursor /> */}
      <Navbar />
      <Hero />
      <AboutMe />
      <ToolsAndSkills />
      <Project /> 
      <HireMe />
      <ContactPerson />
    </div>
  );
}

export default App;
