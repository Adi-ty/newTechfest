import React from "react";
import "../../styles/events.css";
import { TitleText } from "../../components/CustomTexts";
import CountdownTimer from "./CountdownTimer";

const page = () => {
  const upcomingEv = [
    {
      image1: "../abcd.png",
      image2: "comingsoon.png",
      title: "",
      desc: "Description",
    },
    {
      image1: "../AI_Event.jpg",
      image2: "comingsoon.png",
      title: "",
      desc: "Description",
    },
    {
      image1: "../AI_Event.jpg",
      image2: "comingsoon.png",
      title: "",
      desc: "Description",
    },
  ];
  const techEvents = [
    {
      image1: "../AI_Event.jpg",
      image2: "AI_man.png",
      title: "AI Event",
      desc: "Description",
    },
    {
      image1: "../AI_Event.jpg",
      image2: "AI_man.png",
      title: "AR/VR Event",
      desc: "Description",
    },
    {
      image1: "../AI_Event.jpg",
      image2: "AI_man.png",
      title: "AR/VR Event",
      desc: "Description",
    },
  ];
  // const designEvents = [
  //   {
  //     image1: "../AI_Event.jpg",
  //     image2: "AI_man.png",
  //     title: "AI Event",
  //     desc: "Description",
  //   },
  //   {
  //     image1: "../AI_Event.jpg",
  //     image2: "AI_man.png",
  //     title: "AR/VR Event",
  //     desc: "Description",
  //   },
  //   {
  //     image1: "../AI_Event.jpg",
  //     image2: "AI_man.png",
  //     title: "AR/VR Event",
  //     desc: "Description",
  //   },
  // ];
  // const culturalEvents = [
  //   {
  //     image1: "../AI_Event.jpg",
  //     image2: "AI_man.png",
  //     title: "AI Event",
  //     desc: "Description",
  //   },
  //   {
  //     image1: "../AI_Event.jpg",
  //     image2: "AI_man.png",
  //     title: "AR/VR Event",
  //     desc: "Description",
  //   },
  //   {
  //     image1: "../AI_Event.jpg",
  //     image2: "AI_man.png",
  //     title: "AR/VR Event",
  //     desc: "Description",
  //   },
  // ];

  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <div class="card">
          <div class="wrapper">
            <img src={card.image1} alt="" class="cover-image" />
          </div>
          <h3 className="title">{card.title}</h3>
          <img src={card.image2} class="character" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-col items-center gap-50">
          <CountdownTimer />
          <TitleText title={<>Upcoming Events</>} textStyles="text-center" />
        </div>
        <div className=" mt-16 flex justify-center lg:flex-row flex-col gap-5">
          {upcomingEv.map(renderCard)}
        </div>
      </div>
      {/* <div className="items-center ">
        <TitleText title={<>Tech Events</>} textStyles="text-center" />
        <div className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {techEvents.map(renderCard)}
        </div>
      </div> */}
      {/* <div className=" mt-10 items-center">
        <TitleText title={<>Design Events</>} textStyles="text-center" />
        <div className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {designEvents.map(renderCard)}
        </div>
      </div>
      <div className=" mt-10 items-center">
        <TitleText title={<>Cultural Events</>} textStyles="text-center" />
        <div className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {culturalEvents.map(renderCard)}
        </div>
      </div> */}
    </>
  );
};

export default page;
