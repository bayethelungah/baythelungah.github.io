import { forwardRef } from "react";
import Button from "./atoms/button";

const Navigation = forwardRef<HTMLDivElement>(() => {
  return (
    <nav className="fixed left-0 flex w-screen justify-around items-center mt-2">
      <h1 className="text-2xl font-bold text-white mr-56">Bayethe Lungah</h1>
      <ul className="flex justify-center items-center gap-3">
        <li className="hover:text-blue-600 cursor-pointer font-bold text-white">
          Projects
        </li>
        <li className="hover:text-blue-600 cursor-pointer font-bold text-white">
          Contact
        </li>
        <li>
          <a href="public/resume">
            <Button>Resume</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
});

export default Navigation;
