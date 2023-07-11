import React from "react";

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />
      <label>🌄 Image URL</label>
      <input
        type="text"
        value={`https://i.pravatar.cc/${Math.floor(Math.random() * 100 + 1)}`}
      />
      <button className="button">Add</button>
    </form>
  );
}

export default AddFriend;
