// Description: Dailies component that displays the list of dailies
// the user has to complete.

// Import components
import "../../Color.css";

// Import libraries
import React from "react";

export default function Dailies() {
  return (
    <section className="sectionShowcase">
      <div className="dailies textarea-wrap">
        <h1 className="header-left">Dailies</h1>
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
