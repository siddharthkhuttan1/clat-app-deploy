import { ITEMS } from "./constants";

export default function WhyNLTI() {
  return (
    <div className="bg-slate-100 h-auto p-4">
      <div className="text-black my-6">
        <div className="text-3xl flex flex-row justify-center my-4">
          About National Law Training Institute
        </div>

        <div className="flex flex-row justify-center">
          {ITEMS.map((item, index) => (
            <Section key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Section = ({ item }) => {
  console.log({ item });
  const options = item?.options ?? [];
  return (
    <div className="border border-2 border-black rounded max-w-sm p-4 mx-4 bg-white">
      <div className="text-2xl font-semibold">{item.header}</div>
      <ul className="list-outside list-disc ml-6">
        {options.map((option, index) => (
          <li key={`__list_element_${index}`}>{option}</li>
        ))}
      </ul>
    </div>
  );
};
