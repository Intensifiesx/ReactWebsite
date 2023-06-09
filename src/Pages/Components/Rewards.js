// Description: This is the Rewards page where the user
// can add new rewards and check off rewards.

// Import libraries
import React from "react";

export default function Rewards() {
  return (
    <section className="sectionShowcase">
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
