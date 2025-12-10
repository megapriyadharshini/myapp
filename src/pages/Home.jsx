import { useContext } from "react";
import { AppContext } from "../Context/Context";

const Home = () => {
  const { counter, setCounter } = useContext(AppContext);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default Home;
