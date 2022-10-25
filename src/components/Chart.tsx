import React from "react";
import { songType } from "../data/interfaces";

type Props = { data: songType };

export default function Chart({ data }: Props) {
  console.log(data);

  return <div className="chart-wrapper"></div>;
}
