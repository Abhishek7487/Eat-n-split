import React from "react";

function Friend({ friend, selectedFriend, setSelectedFriend }) {
  const isActive = selectedFriend?.id === friend.id;
  return (
    <li>
      <img src={`${friend.image}`} alt="friend" />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
          : `${friend.name} owes you ${Math.abs(friend.balance)}€`}
      </p>
      <button
        className="button"
        onClick={() =>
          setSelectedFriend((curFriend) =>
            curFriend?.id === friend.id ? null : friend
          )
        }
      >
        {isActive ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
