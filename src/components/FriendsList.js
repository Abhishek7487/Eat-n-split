import Friend from "./Friend";
import AddFriend from "./AddFriend";
import { useState } from "react";

function FriendsList({ friends }) {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
            key={friend.id}
          />
        ))}
      </ul>
      {!addFriend && (
        <button
          style={{ alignSelf: "end" }}
          className="button"
          onClick={() => setAddFriend(true)}
        >
          Add Friend
        </button>
      )}
      {addFriend && (
        <>
          <AddFriend />

          <button className="button" onClick={() => setAddFriend(false)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default FriendsList;
