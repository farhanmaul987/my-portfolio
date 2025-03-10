import Marquee from "react-fast-marquee";
import Status from "./status";
import skillData from "./skillList";

function ToolsAndSkills() {
  return (
    <section className="mt-16">
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
        <div className="mt-10 px-20">
          <Marquee
            autoFill
            speed={35}
            pauseOnClick
            gradient
            gradientColor="#04000a"
          >
            {skillData.map((skill, index) => (
              <div className="skill-icon" key={index}>
                <skill.icon color={skill.color} size={70} />
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
