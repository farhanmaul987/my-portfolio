import { RiWhatsappLine, RiMailLine, RiMapPinLine } from "@remixicon/react";

import imgVector from "../../assets/contact-vector.png";

function ContactPerson() {
  return (
    <section
      id="contactPerson"
      className="mt-16 bg-srBlack px-6 py-9 md:px-12 md:py-11 lg:px-16"
    >
      <div className="justify-center md:flex md:flex-row">
        <div className="md:w-1/2">
          <div className="heading-4 font-semibold">Get in Touch</div>
          <div className="my-5 text-sm md:text-base">
            For business and partnership inquiry please contact me below!
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-3">
              <a href="https://wa.me/6282272447647" target="_blank">
                <div className="contact-icon-box">
                  <RiWhatsappLine className="contact-icon" />
                </div>
              </a>
              <div>
                <div className="text-sm text-prGrey md:text-base">Whatsapp</div>
                <div className="text-sm text-white md:text-base">
                  0822-7244-7647
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <a href="mailto:farhanmaul987@gmail.com">
                <div className="contact-icon-box">
                  <RiMailLine className="contact-icon" />
                </div>
              </a>
              <div>
                <div className="text-sm text-prGrey md:text-base">Email</div>
                <div className="text-sm text-white md:text-base">
                  farhanmaul987@gmail.com
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <a
                href="https://maps.app.goo.gl/q8ouVfTQCF5Zw1Bz7"
                target="_blank"
              >
                <div className="contact-icon-box">
                  <RiMapPinLine className="contact-icon" />
                </div>
              </a>
              <div>
                <div className="text-sm text-prGrey md:text-base">Address</div>
                <div className="text-sm text-white md:text-base">
                  Medokan Ayu, Rungkut, Surabaya
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <img
            src={imgVector}
            alt={imgVector}
            className="md:size-56 lg:size-64"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactPerson;
