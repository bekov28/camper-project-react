import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "../styles/style";
import {
  BrandCon,
  ButtonCon,
  CompanyCon,
  CostOfCar,
  LicenseCon,
  LocationCon,
  NumberCon,
} from "../styles/style";
import { Height, LinkedCameraOutlined } from "@mui/icons-material";
import IconLabelButtons from "../motor/Button";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion defaultExpanded sx={{ width: "240px" }}>
        <AccordionSummary
          sx={{ margin: "0px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Cost of car
        </AccordionSummary>

        <AccordionDetails>
          <CostOfCar>
            <div className="FromTwoCon">
              <div>
                <h4>from</h4>
                <input type="text" className="CostInput" />
              </div>
              <div>
                <h4>to</h4>
                <input type="text" className="CostInput" />
              </div>
            </div>
          </CostOfCar>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ width: "240px" }}>
        <AccordionSummary
          sx={{ margin: "0px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Brand
        </AccordionSummary>

        <AccordionDetails>
          <BrandCon>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>Aidal</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>Knal</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>escape</p>
            </div>
          </BrandCon>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ width: "240px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Company
        </AccordionSummary>
        <AccordionDetails>
          <CompanyCon>
            <div class="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>escape</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>Aidal</p>
            </div>
          </CompanyCon>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ width: "240px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          License type
        </AccordionSummary>
        <AccordionDetails>
          <LicenseCon>
            <div class="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>1 year</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>2 year</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>1.5year</p>
            </div>
          </LicenseCon>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ width: "240px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Number of travelers
        </AccordionSummary>
        <AccordionDetails>
          <NumberCon>
            <div class="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>2</p>
            </div>
            <div class="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>3-4</p>
            </div>
            <div class="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>5+</p>
            </div>
          </NumberCon>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ width: "240px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Location
        </AccordionSummary>
        <AccordionDetails>
          <LocationCon>
            <div class="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>Seoul</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>Korea</p>
            </div>
            <div className="brand-mini">
              <input type="checkbox" class="checkbox" />
              <p>Pusan</p>
            </div>
            <IconLabelButtons />
          </LocationCon>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
