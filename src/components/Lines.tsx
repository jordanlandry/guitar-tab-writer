import nextId from "react-id-generator";

type Props = { tuning: any; top: number; lineHeight: number; maxWidth: number; width: number };

export default function Lines({ tuning, top, lineHeight, maxWidth, width }: Props) {
  const el = tuning.map((t: any, i: number) => {
    return (
      <div
        key={nextId()}
        className="line"
        style={{
          position: "absolute",
          top: top + 1 + i * lineHeight + "px",
          maxWidth: maxWidth,
          left: (window.innerWidth - width) / 2,
        }}
      />
    );
  });
  return <div>{el}</div>;
}
