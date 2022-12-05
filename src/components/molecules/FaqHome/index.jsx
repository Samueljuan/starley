import axios from "axios";
import React, { useState, useEffect } from "react";
import Accordion from "../../atoms/Accordion";
import AccordionItem from "../../atoms/AccordionItem";

const FaqHome = () => {
  const [select, setSelect] = useState(1);
  const [faqGeneral, setFaqGeneral] = useState([]);
  const [faqTreatment, setFaqTreatment] = useState([]);
  const [faqOrder, setFaqOrder] = useState([]);
  const [faqAcne, setFaqAcne] = useState([]);

  let allData = [];
  useEffect(() => {
    const LinkAPIGeneral =
      "https://6303aec40de3cd918b3c026a.mockapi.io/generalFAQ";
    const LinkAPITreatment =
      "https://6303aec40de3cd918b3c026a.mockapi.io/generalFAQ";
    const LinkAPIOrder =
      "https://6303aec40de3cd918b3c026a.mockapi.io/generalFAQ";
    const LinkAPIAcne =
      "https://6303aec40de3cd918b3c026a.mockapi.io/generalFAQ";

    axios
      .get(LinkAPIGeneral)
      .then((response) => {
        const convertData = Object.values(response.data);
        setFaqGeneral(convertData);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(LinkAPITreatment)
      .then((response) => {
        const convertData = Object.values(response.data);
        setFaqTreatment(convertData);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(LinkAPIOrder)
      .then((response) => {
        const convertData = Object.values(response.data);
        setFaqOrder(convertData);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(LinkAPIAcne)
      .then((response) => {
        const convertData = Object.values(response.data);
        setFaqAcne(convertData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataName = ["General", "Treatment", "Order", "Acne"];
  const data = [
    {
      id: 1,
      value: "General",
    },
    {
      id: 2,
      value: "Treatment",
    },
    {
      id: 3,
      value: "Order",
    },
    {
      id: 4,
      value: "Acne",
    },
  ];

  switch (select) {
    case 1:
      allData = faqGeneral;
      break;
    case 2:
      allData = faqTreatment;
      break;
    case 3:
      allData = faqOrder;
      break;
    case 4:
      allData = faqAcne;
      break;
    default:
      allData = allData = faqGeneral;
      break;
  }

  console.log();

  return (
    <div>
      <p className="text-center font-bold text-5xl">FAQ&apos;s</p>

      <div className="relative flex flex-1 flex-row overflow-x-scroll overflow-y-hidden md:justify-between text-[32px] text-white mt-[96px] font-playfair">
        {data.map((x, y) => {
          return (
            <div
              key={x.id}
              className={`px-10 py-10 mr-2 md:mr-0 md:w-[285px] md:h-[285px] hover:bg-[#1B3E6680] rounded-lg flex justify-center items-center cursor-pointer ${
                select === x.id ? "bg-[#1B3E6680]" : "bg-[#A3B7B380]"
              }`}
              onClick={() => setSelect(y + 1)}
            >
              {x.value}
            </div>
          );
        })}
      </div>
      <div className="mt-[47px] font-playfair">
        <p className="font-bold text-[32px]">{dataName[select - 1]}</p>
        <div className="w-full border-b-2 border-[#1B3E66]"></div>
      </div>

      <Accordion>
        {(allData || []).map((x) => {
          return (
            <AccordionItem
              title={x.title}
              content={<div className={"text-lg mt-[24px]"}>{x.des}</div>}
              key={x.id}
            />
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqHome;
