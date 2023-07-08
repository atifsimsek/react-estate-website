import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { MdOutlineArrowDropDown } from "react-icons/md";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import "./value.css";
import data from "../../utils/accordion";
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left ">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>

          {/* right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Valure We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              <br />
              We believe a good blace to live can make your life better.
            </span>
            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={index}
                    uuid={index}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
