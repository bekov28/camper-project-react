import React, { useState } from "react";
import VideoPlayer from "./videoPlayer";


const VideoPopup = ({ videoSrc, thumbnailSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoSrc,
        type: "video/mp4",
      },
    ],
  };

  return (
    <div>
      <img
        src={thumbnailSrc}
        alt="picture"
        onClick={handleOpen}
        style={{ cursor: "pointer", width: "292px", margin: "10px" }}
      />
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <VideoPlayer options={videoJsOptions} />
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
        }
        .modal-content {
          background-color: #fefefe;
          padding: 20px;
          border: 1px solid #888;
          max-width: 80%;
          width: 800px;
          position: relative;
          border-radius: 8px;
          max-height: 80%;
        }

        .modal-content iframe {
          width: 100%;
          height: 100%;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #aaa;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
        }
        .close:hover,
        .close:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VideoPopup;
