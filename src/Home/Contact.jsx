import React from "react";
import Title from "./Title";

const Contact = () => {
  const handleCall = () => {
    window.location.href = `tel:8129124809`;
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Book Your Appointment" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <div className="w-full">
              <button
                type="button"
                onClick={handleCall}
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
