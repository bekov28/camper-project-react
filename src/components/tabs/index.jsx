import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  CarBrand,
  CarContainer,
  ContactLeft,
  CustomCon,
  EmailCon,
  IdCon,
  MainCarCon,
  MainCon,
  PhoneCon,
  PhoneEmailCon,
  PremiumBottom,
  PremiumCon,
  QuestionCon,
  QuestionConLeft,
  QuestionConright,
  SendContainer,
} from "./style";
import SelectBest from "./selectButton";
import { campcar } from "../mock/motor";
import QAForm from "./QAForm";
import SendButton from "./Button";
import QAForm2 from "./QAForm2";
import FAQ from "./QAForm2";
import map from "./assets/map.svg";
import { EmailComponent } from "../mail";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const data = campcar.maindata;
  console.log(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        fontFamily: "Montserrat",
        width: "1200px",
        fontSize: "18px",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "rgba(0, 109, 171, 0.20)",
          padding: "0 30px",
          display: "grid",
          gridTemplateAreas: "a",
          width: "100%",
        }}
      >
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Item reviews"
              {...a11yProps(0)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Q&A"
              {...a11yProps(1)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="FAQ"
              {...a11yProps(2)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Contact"
              {...a11yProps(3)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            />
          </Tabs>
        </div>
      </Box>

      <div>
        <CustomCon>
          <CustomTabPanel value={value} index={0}>
            <MainCon>
              <PremiumCon>
                <p>
                  Premium Review <strong>35</strong>
                </p>
                <SelectBest />
              </PremiumCon>
              <div>
                {data.slice(0, 6).map((item, index) => (
                  <div key={item.id}>
                    {" "}
                    <MainCarCon>
                      <CarContainer
                        style={{
                          overflow: "hidden",
                          width: "auto",
                          heigth: "100px",
                        }}
                      >
                        <div>
                          <img
                            src={item.car.photo}
                            style={{
                              width: "195px",
                              height: "100px",
                              transform: "translateX(-50%)",
                              objectPosition: "right",
                            }}
                          />
                        </div>

                        <CarBrand>
                          <p>{item.car.name}</p>
                          <h3>{item.car.company}</h3>
                          <h4>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                          </h4>
                        </CarBrand>
                      </CarContainer>
                      <IdCon>
                        <p>
                          ID: <strong>254</strong>
                        </p>
                        <p>
                          Date: <strong>{item.car.date}</strong>
                        </p>
                        <p>
                          Viewed: <strong>135</strong>
                        </p>
                      </IdCon>
                    </MainCarCon>
                    <p className="PElement"></p>
                  </div>
                ))}
              </div>
            </MainCon>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <QuestionCon>
              {" "}
              <QuestionConLeft>
                <QAForm />
              </QuestionConLeft>
              <QuestionConright>
                <p>Send a question</p>
                <SendContainer className="SendCon">
                  <EmailComponent />
                </SendContainer>
              </QuestionConright>
            </QuestionCon>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <QuestionCon>
              {" "}
              <QuestionConLeft>
                <FAQ />
              </QuestionConLeft>
              <QuestionConright>
                <p>Send a question</p>
                <SendContainer className="SendCon">
                  <EmailComponent />
                </SendContainer>
              </QuestionConright>
            </QuestionCon>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <QuestionCon>
              {" "}
              <QuestionConLeft>
                <ContactLeft>
                  <img src={map} />
                  <PhoneEmailCon>
                    <PhoneCon>
                      <p>Phone number:</p>
                      <h3 style={{ marginTop: "10px" }}>+7 237 181 181 </h3>
                      <h3>+7 210 181 191</h3>
                    </PhoneCon>
                    <EmailCon>
                      <p>E-mail:</p>
                      <h3 style={{ marginTop: "10px" }}>logo.uz</h3>
                    </EmailCon>
                  </PhoneEmailCon>
                </ContactLeft>
              </QuestionConLeft>
              <QuestionConright>
                <p>Send a question</p>
                <SendContainer className="SendCon">
                  <EmailComponent />
                </SendContainer>
              </QuestionConright>
            </QuestionCon>
          </CustomTabPanel>
        </CustomCon>
      </div>
    </Box>
  );
}
