import React, { useEffect, useState } from "react";

type Props = { value: string; setValue: any };

export default function ChangeableText({ value, setValue }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Click enter or escape to exit edit mode
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") setIsHovering(false);
      if (event.key === "Escape") setIsHovering(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {isHovering ? (
        <input
          autoFocus={true}
          className="changeable-text"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsHovering(false)}
        />
      ) : (
        <div className="changeable-value" onClick={() => setIsHovering(true)}>
          {value ? value : <div className="value--empty">My Song</div>}
        </div>
      )}
    </div>
  );
}
