import Button from "@/components/molecules/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MainPageBanner() {
  const embedURL =
    "https://www.youtube.com/embed/ExDwgDGLIW8?si=M0W5FbwFvdx9NMDz";
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 h-auto py-3 flex justify-center">
      <div className="max-w-screen-2xl">
        <div className="flex flex-row">
          <div className="basis-1/2 p-8">
            <div className="text-white text-6xl font-extrabold">
              Crack CLAT 2024!
            </div>
            <div className="text-white mt-8 text-lg font-medium ">
              Get ready efficiently without breaking the bank. Our courses are
              perfectly designed for you!
            </div>
            <div className="text-white mt-6 text-medium font-medium ">
              At National Law Training Institute, we believe in excellent
              education at affordable prices.
            </div>
            <div className="flex flex-row"></div>
            <div className="flex flex-row mt-7">
              {" "}
              <Link href={"/courses"}>
                <Button text="Find my course" />
              </Link>
            </div>
          </div>

          <div className="basis-1/2 p-8 justify-end flex">
            <iframe
              width="414"
              height="276"
              src={`${embedURL}&amp;start=13`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// background: rgb(174,134,37);
// background: linear-gradient(18deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 100%);
