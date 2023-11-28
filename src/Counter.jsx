import { useDispatch, useSelector } from "react-redux";
import { arttır, azalt, sıfırla } from "./app/counterSlice";

const Counter = () => {
  // useSelector kullanarak store'dan counter dilimini seçin
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      {/* counter diliminden count özelliğine erişin */}
      <h1 className="font-l leading-7 text-2xl mb-3">{counter.count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(arttır())}
          className="bg-red-700 hover:bg-red-600 px-3 py-2 rounded-lg"
        >
          ARTTIR
        </button>
        <button
          onClick={() => dispatch(azalt())}
          className="bg-green-700 hover:bg-green-600 px-3 py-2 rounded-lg"
        >
          AZALT
        </button>
        <button
          onClick={() => dispatch(sıfırla(0))}
          className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-lg"
        >
          SIFIRLA
        </button>
      </div>
    </div>
  );
};

export default Counter;
