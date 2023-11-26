export default function CoursesOffered() {
  const img =
    "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/31912/courses/166843/1695100442570CLAT%2024%20course%20image%20%281%29.png";
  const coursesOffered = [
    {
      id: 101,
      title: "Comprehensive test series",
      courseThumbnail: img,
    },
    {
      id: 102,
      title: "Crack NLSAT 2024",
      courseThumbnail: img,
    },
    {
      id: 103,
      title: "1:1 Personal Mentorship Course",
      courseThumbnail: img,
    },

    {
      id: 104,
      title: "Comprehensive test series ll",
      courseThumbnail: img,
    },
  ];
  return (
    <div className="bg-white h-auto p-8 flex flex-row justify-center">
      <div className="max-w-screen-2xl">
        <div>
          <div className="text-3xl flex flex-row justify-center my-4">
            Top courses - Curated by NLSIU students
          </div>
          {/* <div className="text-black">Our top courses:</div> */}
          <div className="mt-4 flex-wrap flex">
            {coursesOffered.map((course, index) => (
              <CourseWidget
                key={`__course_widtet_${course.id}_${index}`}
                courseName={course.title}
                courseThumbnail={course.courseThumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CourseWidget = ({ courseName, courseThumbnail }) => {
  return (
    <div className="flex flex-col mr-6 cursor-pointer">
      <div className="border-2 border-black rounded w-max">
        <img src={courseThumbnail} className="h-44 w-128 rounded" />
      </div>
      <div className="text-center">{courseName}</div>
    </div>
  );
};
