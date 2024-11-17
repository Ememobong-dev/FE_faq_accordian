import React, { useState } from "react";
import { BannerHeader } from "./components/BannerHeader";
import { Card } from "./components/Card";
import starIcon from "../src/assets/images/icon-star.svg";
import { Accordion } from "./components/_accordion";

const faqData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    response:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    response:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    response:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    response:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <>
      <BannerHeader />
      <Card title="FAQs" icon={starIcon}>
        {faqData.map((item, index) => {
          return (
            <>
              <Accordion
                key={index}
                index={index}
                currentIndex = {currentIndex}
                handleCurrentIndex={setCurrentIndex}
                question={item.question}
                response={item.response}
              />
              {
                faqData.length-1 !== index && (
                  <hr style={{ borderColor: "#eee" }} />

                ) 
              }
            </>

          );
        })}
      </Card>
    </>
  );
};

export default Page;
