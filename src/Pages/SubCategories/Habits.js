import React from "react";
import HabitList from "./HabitList";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Habits({ todos }) {
  return (
    <section className="sectionShowcase">
      {todos.map((todo) => {
        return <HabitList todo={todo} />;
      })}
      <div className="habits textarea-wrap">
        <h1 className="header-left">Habits</h1>
        <div>
          <input type="text" placeholder="Habit name" />
          <Button variant="success">+</Button>{" "}
        </div>
        <div>
          <Button variant="success">+</Button>{" "}
          <Button variant="danger">-</Button> Stairs instead of elevator
        </div>
      </div>
    </section>
  );
}
