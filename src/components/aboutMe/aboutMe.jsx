import CustomSlider from "./customSlider";

function AboutMe() {
  return (
    <section id="aboutMe" className="mt-16">
      <div className="max-w-full px-16">
        {/* Text */}
        <h6 className="heading-6 text-center italic text-prGrey">
          What Do I Offer
        </h6>
        <h4 className="heading-4 pt-3 text-center text-white">
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
