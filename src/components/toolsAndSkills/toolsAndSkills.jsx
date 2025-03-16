import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Status from "./status";
import skillData from "./skillList";

function ToolsAndSkills() {
  const [gradientWidth, setGradientWidth] = useState(50);
  const [iconSize, setIconSize] = useState(50);

  useEffect(() => {
    const updateIcon = () => {
      if (window.innerWidth >= 1024) {
        setGradientWidth(300);
        setIconSize(70);
      } else if (window.innerWidth >= 768) {
        setGradientWidth(200);
        setIconSize(70);
      } else {
        setGradientWidth(0);
        setIconSize(60);
      }
    };

    updateIcon();
    window.addEventListener("resize", updateIcon);

    return () => window.removeEventListener("resize", updateIcon);
  }, []);

  return (
    <section className="mt-10">
      {/* Status */}
      <Status />
      {/* End Status */}

      {/* Skills and Tools */}
      <section className="mt-16 px-14">
        <div className="relative">
          <h3 className="heading-3 text-center">My Skills and Tools</h3>
          <h5 className="heading-5 pt-2 text-center italic text-prGrey">
            These are the technologies I used
          </h5>
        </div>
        <div className="mt-10 px-0 md:px-12 lg:px-20">
          <Marquee
            autoFill
            speed={35}
            pauseOnClick
            gradient
            gradientColor="#04000a"
            gradientWidth={gradientWidth} // Menggunakan state
          >
            {skillData.map((skill, index) => (
              <div className="skill-icon" key={index}>
                <skill.icon color={skill.color} size={iconSize} />
                <span className="skill-text">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      {/* End Skills and Tools */}
    </section>
  );
}

export default ToolsAndSkills;
