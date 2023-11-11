import { forwardRef } from "react";
import Button from "./atoms/button";

type NavProps = {
  scrollToContact: () => void;
  scrollToProjects: () => void;
  scrollToHero: () => void;
};

const Navigation = forwardRef<HTMLDivElement, NavProps>(
  ({ scrollToContact, scrollToProjects, scrollToHero }) => {
    return (
      <nav className="fixed left-0 flex w-screen justify-around items-center mt-2">
        <h1 className="text-2xl font-bold text-white mr-56">
          <button onClick={() => scrollToHero()}>Bayethe Lungah</button>
        </h1>
        <ul className="flex justify-center items-center gap-3">
          <button
            onClick={() => scrollToProjects()}
            className="hover:text-blue-600 cursor-pointer font-bold text-white"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToContact()}
            className="hover:text-blue-600 cursor-pointer font-bold text-white"
          >
            Contact
          </button>
          <li>
            <Button>
              <a href="images/resume.pdf">Resume</a>
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
);

export default Navigation;
