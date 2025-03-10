import { RiWhatsappLine, RiMailLine, RiMapPinLine } from "@remixicon/react";

import imgVector from "../../assets/contact-vector.png";

function ContactPerson() {
  return (
    <section id="contactPerson" className="mt-16 bg-srBlack px-16 py-11">
      <div className="flex flex-row justify-center">
        <div className="w-1/2">
          <div className="text-3xl font-semibold">Get in Touch</div>
          <div className="my-5 text-base">
            For business and partnership inquiry please contact me below!
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center space-x-3">
              <a href="https://wa.me/6282272447647" target="_blank">
                <div className="contact-icon-box">
                  <RiWhatsappLine className="contact-icon" />
                </div>
              </a>
              <div>
                <div className="text-prGrey">Whatsapp</div>
                <div className="text-white">0822-7244-7647</div>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <a href="mailto:farhanmaul987@gmail.com">
                <div className="contact-icon-box">
                  <RiMailLine className="contact-icon" />
                </div>
              </a>
              <div>
                <div className="text-prGrey">Email</div>
                <div className="text-white">farhanmaul987@gmail.com</div>
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
                <div className="text-prGrey">Address</div>
                <div className="text-white">Medokan Ayu, Rungkut, Surabaya</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-80">
          <img src={imgVector} alt={imgVector} className="size-64" />
        </div>
      </div>
    </section>
  );
}

export default ContactPerson;
