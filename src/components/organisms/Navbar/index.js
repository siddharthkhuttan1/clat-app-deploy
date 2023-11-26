import Link from "next/link";
import CLATLogo from "../../../clat.png";
import Button from "@/components/molecules/Button";

export default function AppNavbar() {
  const navItems = [
    {
      path: "/",
      name: "HOME",
      title: "CLAT | National Law Training Institute",
    },
    {
      path: "/courses",
      name: "COURSES",
      title: "CLAT | Courses",
    },
    {
      path: "/about",
      name: "ABOUT",
      title: "CLAT | About",
    },
    {
      path: "/gk-booster-24",
      name: "GK BOOSTER 2024",
      title: "CLAT | GK Booster",
    },
    {
      path: "/contact",
      name: "CONTACT",
      title: "CLAT | Contact",
    },
  ];

  return (
    <div className="bg-white	flex flex-row">
      <div className="basis-1/6 py-3 text-2xl px-2">
        <img
          src={"https://www.clatnlti.com/public/logo/logo1.png"}
          className="h-16"
        />
      </div>
      <div className="basis-3/5 flex flex-row items-center">
        {navItems.map((item, index) => (
          <Link href={item.path} key={`nav_item_${index}`}>
            <div className="mx-6 cursor-pointer">{item.name}</div>
          </Link>
        ))}
      </div>
      <div className="basis-1/4 justify-end flex pr-6 items-center">
        <Button text="Login" />
      </div>
    </div>
  );
}
