import React, { useState } from "react";
import nextId from "react-id-generator";

type Props = { tuning: any; lineHeight: number; maxWidth: number };

export default function Line({ tuning, lineHeight }: Props) {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        marginBottom: "20px",
      }}
    >
      <div className="measure-edge" style={{ height: `${(tuning.length - 1) * lineHeight}px` }}></div>
      {tuning.map(() => {
        return (
          <div
            key={nextId()}
            style={{
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
              height: "1px",
              marginBottom: `${lineHeight - 1}px`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
