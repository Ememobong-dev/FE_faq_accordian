import React from "react";
import accord_plus from "../assets/images/icon-plus.svg";
import accord_minus from "../assets/images/icon-minus.svg";

export const Accordion = ({ question, response, index, currentIndex, handleCurrentIndex  }) => {
  
  return (
    <div>
      <div className="accord_faq"  
        onClick={ () => {
          if(currentIndex === index ) {
              handleCurrentIndex(-1);
              return;
          } 
          handleCurrentIndex(index)
        }}
      >
        <p className="faq_quest">{question}</p>
        <span>
          <img
            src={currentIndex === index  ? accord_minus : accord_plus}
            className="accrd_img"
            alt="toggle icon"
           
          />
        </span>
      </div>
      <div
        className={` ${
            currentIndex === index ? "showAccord" : "hideAccord"
        }  accord_response`}
      >
        <p className="faq_resp">{response}</p>
      </div>
    </div>
  );
};
