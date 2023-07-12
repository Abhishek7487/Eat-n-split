import { useState } from "react";
import BillSpliter from "./components/BillSpliter";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState([...initialFriends]);

  return (
    <div className="app">
      <FriendsList friends={friends} setFriends={setFriends} />
      <BillSpliter />
    </div>
  );
}

export default App;
