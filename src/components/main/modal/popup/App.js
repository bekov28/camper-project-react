import React, { useState } from "react";
import VideoPopup from "./VideoPopup";
import group1 from "../modalassets/group1.svg";
import group2 from "../modalassets/group2.svg";
import group3 from "../modalassets/group3.svg";
import group4 from "../modalassets/group4.svg";
import group5 from "../modalassets/group5.svg";
import group6 from "../modalassets/group6.svg";
import group7 from "../modalassets/group7.svg";
import group8 from "../modalassets/group8.svg";
import { Modal, Box, Typography } from '@mui/material';

const PopupVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      videoSrc: "https://www.youtube.com/embed/0ZgizY-9jOc?si=SYdfhMG414O4w7HG",
      thumbnailSrc: group1,
    },
    {
      videoSrc: "https://www.youtube.com/embed/BtSKtWjPPho?si=nUsd_P6F9K0vzk5P",
      thumbnailSrc: group2,
    },
    {
      videoSrc: "https://www.youtube.com/embed/gYn6_ls662Q?si=lYL2NXaF3zb5ib68",
      thumbnailSrc: group3,
    },
    {
      videoSrc: "https://www.youtube.com/embed/1bzTYL_aiM0?si=W2AovfyR3H0RIurZ",
      thumbnailSrc: group4,
    },
    {
      videoSrc: "https://www.youtube.com/embed/gSjoX1c-ZWY?si=JjlB6HhxkkYhc6iy",
      thumbnailSrc: group5,
    },
    {
      videoSrc: "https://www.youtube.com/embed/2NlgWDrhFgk?si=w5SUbsH9dNFeINpS",
      thumbnailSrc: group6,
    },
    {
      videoSrc: "https://www.youtube.com/embed/7mEcEtu0Y_0?si=DWfccEhcFjkvj9b9",
      thumbnailSrc: group7,
    },
    {
      videoSrc: "https://www.youtube.com/embed/AFErUVyYeYc?si=J2vNYsjATuf0sMOD",
      thumbnailSrc: group8,
    },
  ];

  const handleOpen = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `"a a a a" "b b b b"`,
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {videos.map((video, index) => (
          <VideoPopup
            key={index}
            videoSrc={video.videoSrc}
            thumbnailSrc={video.thumbnailSrc}
            onClick={() => handleOpen(video.videoSrc)}
            style={{ cursor: "pointer", width: "292px", borderRadius: "8px" }}
          />
        ))}
      </div>

      {selectedVideo && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src={selectedVideo}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupVideo;
