import { STUDENT_TESTIMONIALS } from "./constants";

export default function Testiomonials() {
  return (
    <div className="bg-gradient-to-r from-amber-200 to-yellow-500 p-4 flex justify-center">
      <div className="max-w-screen-2xl">
        <div className="text-3xl flex flex-row justify-center mt-8 mb-4">
          What our students say about us?
        </div>
        <div className="flex flex-row flex-wrap">
          {STUDENT_TESTIMONIALS.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

const StudentCard = ({ student }) => {
  return (
    <div className="border border-black rounded p-4 flex flex-col  bg-white mx-4 mt-2 max-w-card-120 items-center">
      <div>
        <img src={student.img} className="h-16 w-auto  rounded-full" />
      </div>
      <div className="text-center">{student.name} </div>
      <div>
        Morbi tempus, justo a iaculis elementum, metus risus consequat lacus, id
        tempor sapien sapien nec odio.
      </div>
      <div className="text-gray-400 italic">{student.institute}</div>
    </div>
  );
};
