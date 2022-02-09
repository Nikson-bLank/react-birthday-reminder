import React, { useState } from "react";
import { Birthdays } from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [people, setPeople] = useState(Birthdays);

  function clearBtn() {
    setPeople([])
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <List people= {people} />
          <button className="btn" onClick={clearBtn}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
