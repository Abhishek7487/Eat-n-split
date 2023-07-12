import React, { useState } from "react";

function AddFriend({ friends, setFriends, setAddFriendForm }) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendImg, setNewFriendImg] = useState(
    `https://i.pravatar.cc/${Math.floor(Math.random() * 100 + 1)}`
  );

  function handleAddFriend(e) {
    e.preventDefault();
    if (!newFriendName || !newFriendImg) return;

    const newFriend = {
      id: Math.floor(Math.random() * 1000000 + 1),
      name: newFriendName,
      image: newFriendImg,
      balance: 0,
    };
    setFriends([...friends, newFriend]);

    setNewFriendName("");
    setNewFriendImg(
      `https://i.pravatar.cc/${Math.floor(Math.random() * 100 + 1)}`
    );
    setAddFriendForm(false);
  }

  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input
        type="text"
        value={newFriendName}
        onChange={(e) => setNewFriendName(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        value={newFriendImg}
        onChange={(e) => setNewFriendImg(e.target.value)}
      />
      <button className="button" onClick={(e) => handleAddFriend(e)}>
        Add
      </button>
    </form>
  );
}

export default AddFriend;
