import React from "react";
import SkillBox from "./SkillBox";
import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiPostgresql,
  SiBootstrap,
  SiExpress,
  SiNodedotjs,
  SiJquery,
  SiRedux,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className="linear-gradient(120deg, #3498db, #8e44ad)">
      <div className="container mx-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl  justify-center ">
            My Skills
          </h3>
          <span className="h-[1.1px] absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex flex-wrap justify-center gap-10">
          <SkillBox
            logo={<SiReact />}
            black={"black"}
            white={"white"}
            skill={"ReactJS"}
          />
          <SkillBox
            logo={<SiJavascript />}
            black={"white"}
            white={"black"}
            skill={"Javascript"}
          />
          <SkillBox
            logo={<SiCss3 />}
            black={"black"}
            white={"white"}
            skill={"CSS"}
          />
          <SkillBox
            logo={<SiHtml5 />}
            black={"white"}
            white={"black"}
            skill={"HTML"}
          />
          <SkillBox
            logo={<SiPostgresql />}
            black={"black"}
            white={"white"}
            skill={"PostgreSQL"}
          />
          <SkillBox
            logo={<SiBootstrap />}
            black={"white"}
            white={"black"}
            skill={" Bootstrap"}
          />
          <SkillBox
            logo={<SiMongodb />}
            black={"black"}
            white={"white"}
            skill={"MongoDb"}
          />
          <SkillBox
            logo={<SiExpress />}
            black={"white"}
            white={"black"}
            skill={"ExpressJS"}
          />
          <SkillBox
            logo={<SiNodedotjs />}
            black={"  black"}
            white={"white"}
            skill={" NodeJS"}
          />
           <SkillBox
            logo={<SiJquery />}
            black={"  white"}
            white={"black"}
            skill={" Jquery"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
