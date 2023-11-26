import Lottie from "lottie-react";
import comingSoon from "./comingSoon.json";
export default function ComingSoon() {
  return (
    <div className="flex bg-slate-200 text-center h-screen w-screen p-8 items-center justify-center">
      {/* <div className="text-white text-8xl"> This page is being built.</div>
      <div className="text-white text-8xl">See you soon!</div> */}
      <div className="h-396 w-96">
        <Lottie animationData={comingSoon} loop={true} />;
      </div>
    </div>
  );
}
