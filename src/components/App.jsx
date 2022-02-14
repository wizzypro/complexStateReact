import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");

  function fNameHandler(event) {
    setFName(event.target.value);
  }

  function lNameHandler(event) {
    setLName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}{" "}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fName}
          onChange={fNameHandler}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lName}
          onChange={lNameHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
