import React from "react";

export default function Dailies() {
  return (
    <section>
      <div className="dailies textarea-wrap">
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
    </section>
  );
}
