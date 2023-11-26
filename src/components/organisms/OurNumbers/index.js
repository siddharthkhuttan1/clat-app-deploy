import { MOCK_NUMBERS } from "./constants";
import CountUp from "react-countup";

export default function OurNumbers() {
  return (
    <div className="bg-slate-100 p-4 flex justify-center">
      <div className="max-w-screen-2xl">
        <div className="my-2 text-3xl text-center">Our numbers speak</div>
        <div className="flex flex-row justify-between w-max mt-8">
          {MOCK_NUMBERS.map((numberInfo, index) => (
            <NumberWidget
              key={index}
              number={numberInfo.number}
              desc={numberInfo.desc}
              bg={numberInfo.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const NumberWidget = ({ number, desc, bg }) => {
  return (
    <div className="flex flex-col mx-6  items-center p-2 min-w-card-360">
      <div className={`text-8xl font-bold bg-clip-text text-transparent ${bg}`}>
        <CountUp end={number} enableScrollSpy={true} />+
      </div>
      <div className="text-2xl text-slate-400">{desc}</div>
    </div>
  );
};
