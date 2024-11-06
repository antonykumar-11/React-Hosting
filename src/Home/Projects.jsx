import React from "react";
import Title from "./Title";
import projectOne from "../assets/images/massage3.png";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          className="text-2xl"
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="ഞങ്ങളുടെ സേവനങ്ങൾ "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Body Scrub & Wrap"
          des="Veda Wellness ൽ, നിങ്ങളുടെ ശരീരത്തിനും മനസ്സിനും സമ്പൂർണ്ണ വിശ്രമം നല്കുന്ന, Premium  ബോഡി സ്‌ക്രബ്, റാപ്പ് ചികിത്സകൾ കാത്തിരിക്കുന്നു. ഇവിടെ ഞങ്ങളുടെ ഓരോ സുഖചികിത്സയും തൽസമയ സംരക്ഷണം നൽകാൻ രൂപകൽപ്പന ചെയ്തതാണ്, നിങ്ങളുടെ മനസ്സിനെയും  ആരോഗ്യത്തെയും പരിഗണിച്ചുകൊണ്ടാണ് ഓരോ സേവനവും ഒരുക്കിയിരിക്കുന്നത്.  നിങ്ങളുടെ ദൈനംദിന സമ്മർദ്ദങ്ങളിൽ നിന്ന് മാറി, ആത്മവിശ്രമം പുനരുദ്ധരിക്കാനായി Veda Wellness സ്വാഗതം!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
