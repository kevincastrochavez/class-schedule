import React from "react";
import Library from "./library/Library";
import Schedule from "./schedule/Schedule";

export default function Home() {
  return (
    <div className="home">
      <Library />
      <Schedule />
    </div>
  );
}
