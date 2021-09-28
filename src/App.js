import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunks";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const userName = useSelector((store) => store.user);

  return (
    <div className="container">
      <div className="flexContainer">
        <h1>{userName.name}</h1>
        {userName.comments.map((comment, index) => (
          <span key={index}>{comment}</span>
        ))}
        <div className="smallContainer">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => dispatch(addCommentThunk(userInput))}
          >
            new comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
