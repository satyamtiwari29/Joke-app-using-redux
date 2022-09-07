import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../Store/action.js";
import "./style.css";

function Joke() {
  const dispatch = useDispatch();
  // const entireStore = useSelector((state) => state);
  // console.log("entireStore: ", entireStore);

  const joke = useSelector((state) => state.joke);
  console.log(joke,'=================');

  const onGetAnotherFact = () => {
    console.log("=======onGetAnotherFact");
    dispatch({ type: Action.FETCH_REQUEST });
  };

  useEffect(() => {
    dispatch({ type: Action.FETCH_REQUEST });
  }, []);

  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div className="joke">{joke}</div>
      <button onClick={onGetAnotherFact}>Click me</button>
    </div>
  );
}
export default Joke;
