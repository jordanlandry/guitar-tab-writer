import React from "react";

type Props = { tuning: any; top: number };

export default function Lines({ tuning, top }: Props) {
  const el = tuning.map((t: any, i: number) => {
    return (
      <div
        className="line"
        style={{ position: "fixed", top: top + i * 19 + "px" }}
      />
    );
  });
  return <div>{el}</div>;
}
