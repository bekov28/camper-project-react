import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { Video_ConTainer } from "./style";
import picture1 from "../modalassets/group1.svg";
import picture2 from "../modalassets/group2.svg";
import picture3 from "../modalassets/group3.svg";
import picture4 from "../modalassets/group4.svg";
import picture5 from "../modalassets/group5.svg";
import picture6 from "../modalassets/group6.svg";
import picture7 from "../modalassets/group7.svg";
import picture8 from "../modalassets/group8.svg";

const AppModal = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const modals = [
    {
      title: "르벤투스S+",
      videoSrc: "https://www.youtube.com/embed/0ZgizY-9jOc?si=SYdfhMG414O4w7HG",
      imageSrc: picture1,
    },
    {
      title: "ST-7",
      videoSrc: "https://www.youtube.com/embed/BtSKtWjPPho?si=nUsd_P6F9K0vzk5P",
      imageSrc: picture2,
    },
    {
      title: "ACIER 790R",
      videoSrc: "https://www.youtube.com/embed/gYn6_ls662Q?si=lYL2NXaF3zb5ib68",
      imageSrc: picture3,
    },
    {
      title: "르벤투스 차박S",
      videoSrc: "https://www.youtube.com/embed/1bzTYL_aiM0?si=W2AovfyR3H0RIurZ",
      imageSrc: picture4,
    },
    {
      title: "ACIER 790R",
      videoSrc: "https://www.youtube.com/embed/gSjoX1c-ZWY?si=JjlB6HhxkkYhc6iy",
      imageSrc: picture5,
    },
    {
      title: "ST-7",
      videoSrc: "https://www.youtube.com/embed/2NlgWDrhFgk?si=w5SUbsH9dNFeINpS",
      imageSrc: picture6,
    },
    {
      title: "ACIER 790R",
      videoSrc: "https://www.youtube.com/embed/7mEcEtu0Y_0?si=DWfccEhcFjkvj9b9",
      imageSrc: picture7,
    },
    {
      title: "르벤투스S+",
      videoSrc: "https://www.youtube.com/embed/AFErUVyYeYc?si=J2vNYsjATuf0sMOD",
      imageSrc: picture8,
    },
  ];

  const handleOpen = (index) => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);

  return (
    <>
      <Video_ConTainer>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            display: "grid",
            gridTemplateAreas: `"a a a a" "b b b b"`,
            borderRadius: "8px",
            justifyContent: "center",
          }}
        >
          {modals.map((modal, index) => (
            <img
              key={index}
              src={modal.imageSrc}
              alt={`Video ${index + 1}`}
              onClick={() => handleOpen(index)}
              style={{
                cursor: "pointer",
                margin: "10px",
                width: "292px",
                height: "292px",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.30)",
              }}
            />
          ))}

          {modals.map((modal, index) => (
            <Modal
              key={index}
              open={openModalIndex === index}
              onClose={handleClose}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "none",
                  width: "100vw",

                  maxWidth: "850px",
                  height: "480px",
                  borderRadius: "20px",
                  bgcolor: "background.paper",
                  boxShadow: 1,
                  p: 4,
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {modal.title}
                  <h4 onClick={handleClose} sx={{ mt: 2 }}>
                    x
                  </h4>
                </Typography>
                <Box
                  sx={{
                    mt: 2.5,
                    position: "relative",
                    paddingBottom: "0%",
                    height: 0,
                    border: "none",
                  }}
                >
                  <iframe
                    src={modal.videoSrc}
                    title={modal.title}
                    frameBorder="0"
                    allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "790px",
                      height: "360px",
                    }}
                  />
                </Box>
              </Box>
            </Modal>
          ))}
        </div>
      </Video_ConTainer>
    </>
  );
};

export default AppModal;
