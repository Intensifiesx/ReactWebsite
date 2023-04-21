import React from "react";

export default function Habits() {
  return (
    <section>
      <div className="habits textarea-wrap">
        <h1 className="header-left">Habits</h1>
        <div>
          <input type="text" placeholder="Habit name" />
          <button className="clean-button">+</button>
        </div>
        <div>
          <button className="clean-button">+</button>
          <button className="clean-button2">-</button>
          Stairs instead of elevator
        </div>
      </div>
    </section>
  );
}
