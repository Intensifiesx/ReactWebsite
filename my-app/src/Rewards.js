import React from "react";

export default function Rewards() {
  return (
    <section>
      <div className="rewards textarea-wrap">
        <h1 className="header-left">Rewards</h1>
        <div>
          <input type="text" placeholder="New To-Do" />
          <button className="clean-button">+</button>
        </div>
      </div>
    </section>
  );
}
