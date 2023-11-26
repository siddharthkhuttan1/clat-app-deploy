import { TOP_STUDENTS } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";

export function TopStudentsSection() {
  return (
    <div className="w-full flex justify-center py-2 bg-slate-100">
      <div className="max-w-screen-2xl">
        <div className="flex flex-col p-5 w-max">
          <div className="flex justify-center my-1 text-3xl  my-4">
            Our top performers
          </div>
          <div className="flex flex-row justify-center my-1">
            <TopStudentsInfo topStudents={TOP_STUDENTS} />
          </div>

          <div className="flex flex-row justify-center cursor-pointer text-gray-500 underline">
            View all top performers
          </div>
        </div>
      </div>
    </div>
  );
}

const TopStudentsInfo = ({ topStudents }) => {
  return (
    <>
      {topStudents.map((student, index) => (
        <div className="mx-6" key={index}>
          <img
            src={student.img}
            className="h-16 w-auto max-w-24 rounded-full bg-gradient-to-r p-[3px] from-[#AE8625] to-[#F7EF8A]"
          />
          <div className="text-gray-700	 mt-2 text-center text-sm">CLAT-22</div>
          <div className="text-gray-700	 text-xs text-center">
            AIR-{student.rank}
          </div>
        </div>
      ))}
    </>
  );
};
