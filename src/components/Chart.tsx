import React from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";
import Lines from "./Lines";

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

  const noteElements = data.data.map((measure, i) => {
    // There will be 2 positions for mx
    let mx = i % 2 === 0 ? 35 : 35 + window.innerWidth / 2;
    let my = 65 + 125 * Math.floor(i / 2);

    if (mx > window.innerWidth) {
      mx = 35;
      my += 125;
    }

    return (
      <div key={nextId()}>
        {i % 2 === 0 ? <Lines tuning={data.tuning} top={my} /> : null}
        <div
          className="measure-line"
          style={{
            position: "fixed",
            top: my + "px",
            left: mx + "px",
            width: "3px",
            height: "95px",
          }}
        />
      </div>
    );
  });

  return (
    <div className="chart-wrapper">
      {/* {dataElements} */}
      {noteElements}
    </div>
  );
}
