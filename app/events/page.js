import React from "react";
import "../../styles/events.css";

const page = () => {
  const cardInfo = [
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AI Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
    { image1: "../AI_Event.jpg", image2: "AI_man.png",title: "AR/VR Event", desc: "Description" },
  ]

  const renderCard = (card, index) => {
    return (<div key={index}>
        <div class="card">
          <div class="wrapper">
            <img src={card.image1} alt="" class="cover-image"/>
          </div>
          <h3 className="title">{card.title}</h3>
          <img src={card.image2} class="character" />
        </div>
    </div>)
  }

  return <div className="flex lg:flex-row flex-col gap-5">
  {cardInfo.map(renderCard)}
  </div>
};

export default page;
