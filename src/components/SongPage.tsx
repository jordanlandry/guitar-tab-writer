import React from "react";

type Props = { setActivePage: any };

export default function SongPage({ setActivePage }: Props) {
  return (
    <div>
      <button onClick={() => setActivePage(1)}>Create Song</button>
    </div>
  );
}
