import React from "react";
import Popup from "reactjs-popup";
import group6 from "../group6.svg";
import "reactjs-popup/dist/index.css";

const ModalComponent6 = () => {
  return (
    <div>
      <Popup trigger={<img src={group6} className="img" />} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Modal Title </div>
            <div className="content">
              <iframe
                width="292"
                height="292"
                src="https://www.youtube.com/embed/2NlgWDrhFgk?si=w5SUbsH9dNFeINpS"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="actions">
              <Popup
                trigger={<button className="button"> Trigger </button>}
                position="top center"
                nested
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
              </Popup>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ModalComponent6;
