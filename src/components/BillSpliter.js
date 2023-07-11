import React from "react";

function BillSpliter() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with friend</h2>
      <label>💰 Bill value</label>
      <input type="number" />
      <label>🧍‍♀️ Your expense</label>
      <input type="number" />
      <label>👫 Clark's expense</label>
      <input type="number" />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="you">You</option>
        <option value="friend">friend</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

export default BillSpliter;
