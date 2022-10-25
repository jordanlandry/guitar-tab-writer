import React from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";

type Props = { data: songType };

export default function Chart({ data }: Props) {
  const lines = [];

  const dataElements = data.tuning.map((note) => {
    return (
      <span key={nextId()}>
        <div className="uppercase line flex-align">
          <span style={{ backgroundColor: "white" }}>
            {note.length === 2 ? note[0] : `${note[0]}${note[1]}`}
          </span>
        </div>
        <br />
      </span>
    );
  });

  // const noteElements = data.data.map((note) => {
  //   let posX = 35 + note.beatCount * 25;
  //   let posY = 175 - note.guitarString * 20;

  //   if (note.beatCount * 25 > window.innerWidth - 100) {
  //     posX = 35;
  //     posY += dataElements.length * 20;
  //   }

  //   return (
  //     <span
  //       key={nextId()}
  //       style={{
  //         position: "fixed",
  //         left: `${posX}px`,
  //         top: `${posY}px`,
  //         padding: "2px",
  //         backgroundColor: "white",
  //       }}
  //     >
  //       {note.fret}
  //     </span>
  //   );
  // });

  return (
    <div className="chart-wrapper">
      {dataElements}
      {/* {noteElements} */}
    </div>
  );
}
