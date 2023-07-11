import Friend from "./Friend";
import AddFriend from "./AddFriend";

function FriendsList({ friends }) {
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

      <AddFriend />
    </div>
  );
}

export default FriendsList;
