import Marquee from "react-fast-marquee";
import {
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiMysql,
  SiNodedotjs,
  SiCodeigniter,
  SiNpm,
  SiGit,
  SiNotion,
} from "@icons-pack/react-simple-icons";

function skillList() {
  return (
    <div className="mt-10 px-32">
      <Marquee
        autoFill
        speed={35}
        pauseOnClick
        gradient
        gradientColor="#04000a"
        gradientWidth={400}
      >
        <div className="skill-icon">
          <SiJavascript color="#F7DF1E" size={70} />
          <span className="skill-text">Javascript</span>
        </div>
        <div className="skill-icon">
          <SiPhp color="#777BB4" size={70} />
          <span className="skill-text">PHP</span>
        </div>
        <div className="skill-icon">
          <SiTailwindcss color="#06B6D4" size={70} />
          <span className="skill-text">Tailwind CSS</span>
        </div>
        <div className="skill-icon">
          <SiBootstrap color="#7952B3" size={70} />
          <span className="skill-text">Bootstrap</span>
        </div>
        <div className="skill-icon">
          <SiReact color="#61DAFB" size={70} />
          <span className="skill-text">React JS</span>
        </div>
        <div className="skill-icon">
          <SiMysql color="#4479A1" size={70} />
          <span className="skill-text">MySQL</span>
        </div>
        <div className="skill-icon">
          <SiNodedotjs color="#5FA04E" size={70} />
          <span className="skill-text">Node JS</span>
        </div>
        <div className="skill-icon">
          <SiCodeigniter color="#EF4223" size={70} />
          <span className="skill-text">CodeIgniter</span>
        </div>
        <div className="skill-icon">
          <SiNpm color="#CB3837" size={70} />
          <span className="skill-text">NPM</span>
        </div>
        <div className="skill-icon">
          <SiGit color="#F05032" size={70} />
          <span className="skill-text">Git</span>
        </div>
        <div className="skill-icon">
          <SiNotion color="#FFFFFF" size={70} />
          <span className="skill-text">Notion</span>
        </div>
      </Marquee>
    </div>
  );
}

export default skillList;
