import React from "react";
import Atropos from "atropos/react";
import SkillBar from "./SkillBar";

function SkillsCard(props) {
  return (
    <Atropos
      className="my-atropos"
      activeOffset={40}
      shadowScale={1.05}
      onEnter={() => console.log("Enter")}
      onLeave={() => console.log("Leave")}
      onRotate={(x, y) => console.log("Rotate", x, y)}
    >
      <div className="w-80 p-10 flex justify-center items-center flex-col bg-rich-black rounded-xl text-xl text-mango-green m-10">
        <div>{props.skill.name}</div>
        <img src={props.skill.icon} className="w-40 my-10" />
        <SkillBar proficiency={props.skill.proficiency}/>
      </div>
    </Atropos>
  );
}

export default SkillsCard;
