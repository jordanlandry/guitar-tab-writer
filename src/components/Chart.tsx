import React from "react";

type Props = {};

export default function Chart({}: Props) {
  return (
    <div className="chart-wrapper">
      <span className="flex-align">
        E<div className="line"></div>
      </span>
      <span className="flex-align">
        B<div className="line"></div>
      </span>
      <span className="flex-align">
        G<div className="line"></div>
      </span>
      <span className="flex-align">
        D<div className="line"></div>
      </span>
      <span className="flex-align">
        A<div className="line"></div>
      </span>
      <span className="flex-align">
        E<div className="line"></div>
      </span>
    </div>
  );
}
