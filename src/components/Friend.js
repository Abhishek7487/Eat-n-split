import React from "react";

function Friend({ name, image, balance }) {
  return (
    <li>
      <img src={`${image}`} alt="friend" />
      <h3>{name}</h3>
      <p className={balance < 0 ? "red" : balance > 0 ? "green" : ""}>
        {balance === 0
          ? `You and ${name} are even`
          : balance < 0
          ? `You owe ${name} ${Math.abs(balance)}€`
          : `${name} owes you ${Math.abs(balance)}€`}
      </p>
      <button className="button">Select</button>
    </li>
  );
}

export default Friend;
