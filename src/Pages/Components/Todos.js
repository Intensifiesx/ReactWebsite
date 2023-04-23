// Description: This is the To-Dos component.
// Lists all the To-Dos and allows the user to add new To-Dos.

// Import libraries
import React from "react";

export default function Todos() {
  return (
    <section className="sectionShowcase">
      <div className="todos textarea-wrap">
        <h1 className="header-left">To-Dos</h1>
        <div>
          <input type="text" placeholder="New To-Do" />
          <button className="clean-button">+</button>
        </div>
        <div>
          <button className="clean-button">+</button>
          <button className="clean-button2">-</button>
          Stairs instead of elevator
        </div>
        <div></div>
      </div>
    </section>
  );
}
