import Friend from "./Friend";
import AddFriend from "./AddFriend";
import { useState } from "react";

function FriendsList({ friends, setFriends }) {
  const [addFriendForm, setAddFriendForm] = useState(false);
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
          />
        ))}
      </ul>
      {!addFriendForm && (
        <button
          style={{ alignSelf: "end" }}
          className="button"
          onClick={() => setAddFriendForm(true)}
        >
          Add Friend
        </button>
      )}
      {addFriendForm && (
        <>
          <AddFriend
            friends={friends}
            setFriends={setFriends}
            setAddFriendForm={setAddFriendForm}
          />

          <button className="button" onClick={() => setAddFriendForm(false)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default FriendsList;
