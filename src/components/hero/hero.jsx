// Flex Left
import fileFill from "../../assets/file-text-fill.svg";

// Flex Right
import myPhoto from "../../assets/my-photo.png";
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiWhatsappLine,
} from "@remixicon/react";

function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col px-6 md:px-12 lg:h-screen lg:flex-row lg:pl-16 lg:pr-0">
        {/* Flex Left */}
        <div className="w-full lg:w-1/2">
          <div className="flex w-full flex-col">
            {/* Intro */}
            <div className="h-[35%] pt-24 md:pt-28 lg:pt-32">
              <h2 className="heading-3 md:heading-2 text-white">Hi!</h2>
              <h1 className="heading-2 md:heading-1 text-white">
                I am <span className="text-prLavender">Farhan Maulana</span>
              </h1>
              <p className="pt-1 text-gray-300 md:text-xl lg:text-base">
                Web Developer | Discord Bot Developer
              </p>
            </div>
            <div className="h-[45%] pt-6">
              <div className="line-1 mt-1"></div>
              <p className="mt-3 text-justify text-gray-300 md:text-lg lg:text-base">
                Bachelor of Informatics from Universitas Pembangunan Nasional
                &quot;Veteran&quot; Jawa Timur who has a strong interest in Web
                Development and Discord Bot Development. I am an individual with
                a passion for learning new things. I have experience working in
                a team and have a commitment to be able to contribute my best.
              </p>
            </div>
            {/* End Intro */}

            {/* Button */}
            <div className="h-[20%] pt-9">
              <div className="left-0 flex h-fit flex-col space-y-5 text-center md:flex-row md:items-center md:space-y-0">
                <a
                  href="https://link.farhanmaul.my.id/cv"
                  target="_blank"
                  className="downloadCV mr-4 flex"
                >
                  <img
                    src={fileFill}
                    alt="file-icon"
                    className="mr-2 scale-125 invert lg:scale-100"
                  />
                  Download CV
                </a>
                <a href="#" className="moreAboutMe">
                  More
                </a>
              </div>
            </div>
            {/* End Button */}
          </div>
        </div>
        {/* End Flex Left */}

        {/* Flex Right */}
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
          {/* Photo */}
          <div className="pt-14 md:pt-20 lg:pt-20">
            <img
              src={myPhoto}
              alt="Farhan Maulana's Photo"
              className="h-auto w-72 rounded-lg shadow-lg md:w-[590px] lg:w-96"
            />
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center space-x-2 pt-6 md:space-x-5 md:pt-8 lg:space-x-3 lg:pt-8">
            <h6 className="text-sm font-semibold md:text-2xl lg:text-lg">
              Find Me On
            </h6>
            {[
              {
                href: "https://github.com/farhanmaul987",
                icon: <RiGithubFill className="iconSocmed" />,
              },
              {
                href: "https://www.instagram.com/farhan.maul/",
                icon: <RiInstagramLine className="iconSocmed" />,
              },
              {
                href: "https://www.linkedin.com/in/farhanmaul987/",
                icon: <RiLinkedinFill className="iconSocmed" />,
              },
              {
                href: "https://wa.me/6282272447647",
                icon: <RiWhatsappLine className="iconSocmed" />,
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="socmed">{item.icon}</div>
              </a>
            ))}
          </div>
        </div>
        {/* End Flex Right */}
      </div>
    </section>
  );
}

export default Hero;
