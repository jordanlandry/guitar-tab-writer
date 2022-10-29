import nextId from "react-id-generator";

type Props = { tuning: any; top: number };

export default function Lines({ tuning, top }: Props) {
  const el = tuning.map((t: any, i: number) => {
    return (
      <div
        key={nextId()}
        className="line"
        style={{ position: "absolute", top: top + 1 + i * 18 + "px" }}
      />
    );
  });
  return <div>{el}</div>;
}
