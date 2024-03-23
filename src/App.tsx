import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./Redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hook";
 

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=" h-screen justify-center items-center w-full flex">
        <div className="flex border border-purple-300 p-10 bg-slate-300">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 px-3 py-1 rounded-lg font-semibold text-xl text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue( 5 ))}
            className="bg-green-500 px-3 py-1 rounded-lg font-semibold text-xl text-white"
          >
            Increment By 5
          </button>
          <h1 className="  text-3xl mx-10  ">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 px-3 py-1 rounded-md font-semibold text-xl text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
