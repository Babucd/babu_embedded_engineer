import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ExperienceCard: React.FC<TExperience & { index: number }> = (experience) => {
  const isWhiteCard = ["Childhood", "Diploma", "Degree", "Current"].includes(experience.companyName);

  const contentStyle = isWhiteCard
    ? {
        background: "#ffffff",
        color: "#333",
        border: "1px solid #e5e7eb",
        boxShadow: "none",
        borderRadius: "8px",
        padding: "24px",
      }
    : {
        background: "#1d1836",
        color: "#fff",
      };

  const contentArrowStyle = isWhiteCard
    ? { borderRight: "7px solid #ffffff" }
    : { borderRight: "7px solid #232631" };

  return (
    <VerticalTimelineElement
      className={experience.sideImage ? "lg:!mb-[120px] xl:!mb-[180px]" : ""}
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        experience.icon ? (
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={experience.icon}
              alt={experience.companyName}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        ) : null
      }
    >
      {isWhiteCard ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-[20px] font-semibold text-black m-0 pr-4 leading-[28px]">
              {experience.title}
            </h3>
            <span className="font-mono bg-[#f4f4f5] text-[#52525b] border border-[#e4e4e7] rounded-md px-2 py-0.5 text-[12px] whitespace-nowrap mt-1">
              {experience.companyName}
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-4 relative">
            <div className="flex flex-1 flex-col gap-4">
              {experience.subtitle && (
                <p className="font-mono text-[#52525b] text-[14px] m-0 tracking-wide">
                  {experience.subtitle}
                </p>
              )}

              <div className="flex flex-col gap-4">
                {experience.points.map((paragraph, index) => (
                  <p key={index} className="text-[#3f3f46] text-[16px] leading-[26px] m-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {experience.highlight && (
                <div className="border-l-[3px] border-[#d4d4d8] pl-4 mt-2 mb-1">
                  <p className="text-[#3f3f46] text-[16px] italic leading-[26px] m-0">
                    {experience.highlight}
                  </p>
                </div>
              )}
            </div>

            {experience.sideImage && (
              <div
                className="hidden lg:block absolute overflow-hidden rounded-xl border-4 border-[#232631] shadow-2xl"
                style={{
                  [experience.index % 2 === 0 ? "left" : "right"]: "128%",
                  top: "0",
                  width: "100%",
                }}
              >
                <img
                  src={experience.sideImage}
                  alt="Memory"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

          {experience.tags && experience.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="font-mono bg-[#fcfcfc] text-[#52525b] border border-[#e4e4e7] rounded-sm px-2 py-1 text-[12px] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div>
            <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.companyName}
            </p>
          </div>

          <ul className="ml-5 mt-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      {config.sections.experience.content && (
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.experience.content}
        </motion.p>
      )}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
