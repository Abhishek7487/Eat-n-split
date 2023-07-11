import Friend from "./Friend";

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
    </div>
  );
}

export default FriendsList;
