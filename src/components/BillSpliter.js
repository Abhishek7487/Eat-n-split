import React, { useState } from "react";

function BillSpliter({ selectedFriend, setSelectedFriend, setFriends }) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setYourExpense] = useState("");
  const friendExpense = billValue ? billValue - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !userExpense) return;
    handleSplitBill(whoIsPaying === "user" ? +friendExpense : -userExpense);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? userExpense
              : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">friend</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

export default BillSpliter;
