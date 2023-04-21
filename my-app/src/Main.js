import React from "react";

export default function Main() {
  return (
    <div className="container">
      <div className="habits">
        <h1>Habits</h1>
        <div>
          <input type="text" placeholder="Habit name" />
          <button className="clean-button">+</button>
        </div>
        <div>
          <button className="clean-button">+</button>
          <button className="clean-button2">-</button>
          Stairs instead of elevator
        </div>
        <div></div>
      </div>
      <div className="dailies">
        <h1>Dailies</h1>
        <div>
          <input type="text" placeholder="New Daily" />
          <button className="clean-button">+</button>
        </div>
        <div>
          <div>
            <label>
              <input type="checkbox" />
              Productive work
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Read
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
