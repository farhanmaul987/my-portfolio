import ProjectBase from "./projectBase";
import ProjectSm from "./projectSm";

function Project() {
  return (
    <section id="project">
      {/* Text */}
      <div className="pt-14 md:pt-8">
        <div className="text-outline">MY PROJECT</div>
        <div className="mt-[13px] md:mt-[70px] md:px-16 lg:mt-[88px]">
          <div className="relative items-center justify-center text-center text-white">
            <h2 className="heading-4 md:heading-2">Latest Project</h2>
          </div>
        </div>
      </div>
      {/* End Text */}

      {/* Md and Lg */}
      <ProjectBase />
      {/* Sm */}
      <ProjectSm />
    </section>
  );
}

export default Project;
