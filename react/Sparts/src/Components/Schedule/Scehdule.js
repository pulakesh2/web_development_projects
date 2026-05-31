import React, { useState } from "react";
import ScheduleUpcoming from "./ScheduleUpcoming";
import ScheduleList from "./ScheduleList";
import style from "./ScheduleCart.module.scss";

const Scehdule = () => {
  const scheduleData = [
    {
      user: "P",
      date: "Fri, 01 Sep",
      time: "3:00 PM - 4:00 PM",
      schedule: "Beginners Badminton Class",
      members: "Jonas Kend 15+ more",
    },
    {
      user: "C",
      date: "Fri, 01 Sep",
      time: "6:00 PM - 7:30 PM",
      schedule: "Intermediate Badminton Class",
      members: "JK Kend 25+ more",
    },

    {
      user: "M",
      date: "Sat, 02 Sep",
      time: "6:00 AM - 7:30 AM",
      schedule: "Staff Meeting",
      members: "John and 5+ more",
    },
    {
      user: "E",
      date: "Sat, 02 Sep",
      time: "4:00 PM - 5:00 PM",
      schedule: "Yoga Competition @Academy",
      members: "Jdl Kard 25+ more",
    },
  ];

  const classData = [
    {
      user: "C",
      date: "sat, 04 Sep",
      time: "1:00 PM - 3:00 PM",
      schedule: "Badminton Class",
      members: "Jonas Kend 15+ more",
    },
    {
      user: "R",
      date: "sat, 04 Sep",
      time: "8:00 PM - 8:30 PM",
      schedule: "Intermediate Tennis Class",
      members: "JK Kend 25+ more",
    },

    {
      user: "T",
      date: "Sat, 04 Sep",
      time: "7:00 AM - 8:30 AM",
      schedule: "Swiming Class",
      members: "John and 5+ more",
    },
    {
      user: "Q",
      date: "Sat, 04 Sep",
      time: "3:00 PM - 4:00 PM",
      schedule: "Yoga Class",
      members: "Jdl Kard 25+ more",
    },
  ];

  const meetingData = [
    {
      user: "A",
      date: "sun, 05 Sep",
      time: "10:00 AM - 10:30 AM",
      schedule: "Staff Meeting",
      members: "Jonas Kend 15+ more",
    },
    {
      user: "K",
      date: "sun, 05 Sep",
      time: "1:00 PM - 1:30 PM",
      schedule: "Client Meeting",
      members: "JK Kend 25+ more",
    },

    {
      user: "L",
      date: "Sun, 05 Sep",
      time: "11:00 AM - 12:00 PM",
      schedule: "Finance Meeting",
      members: "John and 5+ more",
    },
    {
      user: "J",
      date: "Sun, 05 Sep",
      time: "3:00 PM - 4:00 PM",
      schedule: "Management Meeting",
      members: "Jdl Kard 25+ more",
    },
  ];

  const eventsData = [
    {
      user: "F",
      date: "Mon, 06 sept",
      time: "11:00 AM - 12:30 PM",
      schedule: "Swiming Competition",
      members: "Jonas Kend 15+ more",
    },
    {
      user: "G",
      date: "Mon, 06 sept",
      time: "1:30 PM - 2:30 PM",
      schedule: "Tennis Competiton",
      members: "JK Kend 25+ more",
    },

    {
      user: "O",
      date: "Mon, 06 sept",
      time: "3:00 PM - 4:00 PM",
      schedule: "Chess Competition",
      members: "John and 5+ more",
    },
    {
      user: "Z",
      date: "Mon, 06 sept",
      time: "5:00 PM - 6:00 PM",
      schedule: "Carrom Competition",
      members: "Jdl Kard 25+ more",
    },
  ];

  const [tabData, setTabData] = useState(scheduleData);
  const getTabDataHandler = (data) => {
    if (data === "Classes") setTabData(classData);
    if (data === "All") setTabData(scheduleData);
    if (data === "Meetings") setTabData(meetingData);
    if (data === "Events") setTabData(eventsData);
  };

  return (
    <div className={style.schedule__layout}>
      <ScheduleUpcoming getTabData={getTabDataHandler} />
      <hr></hr>
      <ScheduleList tabData={tabData} />
    </div>
  );
};

export default Scehdule;
