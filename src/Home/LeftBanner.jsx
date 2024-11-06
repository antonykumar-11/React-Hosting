import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "മനസിനും ശരീരത്തിനും ഒരുപോലെ സുഖം",
      "ആനന്ദം വിരൽ തുമ്പിൽ",
      "ഓരോ തലോടലും ആനന്ദകരം ,ആശ്വാസകരം",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">ഒരു അടി പൊളി മസ്സാജ് ആയാലോ ?</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">VEDA WELLNESS</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          തിരുവനന്തപുരത്തെ veda wellness സെൻററിൽ ഓരോ വ്യക്തികൾക്കും അവരുടെ
          ആവശ്യത്തിന് അനുയോജ്യമായ രീതിയിൽ മസ്സാജ് ചികിത്സകൾ പ്രദാനം ചെയ്യുന്നു ,
          ജീവിതത്തിന്റ തിരക്ക് പിടിച്ച സമയത്തിനിടയിൽ മനസ്സും ശരീരവും
          പൂർണ്ണതൃപ്തപിയും തിരക്കുകളിൽ നിന്നും ഒരു മോചനം ലഭിക്കാൻ ഇവിടെ വരൂ.
        </p>
      </div>
      {/* Media */}
      {/* <Media /> */}
    </div>
  );
};

export default LeftBanner;
