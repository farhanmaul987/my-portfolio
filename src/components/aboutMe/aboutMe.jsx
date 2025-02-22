import CustomSlider from "./customSlider";

function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="container max-w-full px-16 pt-16">
        {/* Text */}
        <h6 className="heading-6 italic text-prGrey text-center">
          What Do I Offer
        </h6>
        <h4 className="heading-4 text-white text-center pt-3">
          Creating Discord Bots and Web <br />
          Development As You Wish
        </h4>
        {/* End Text */}

        {/* Slider */}
        <div>
          <CustomSlider />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
