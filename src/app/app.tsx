import { motion } from "framer-motion";
import Navigation from "components/Navigation";
import Project from "components/project";
import Card from "components/organisms/card";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Button from "components/atoms/button";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <ProjectSection />
      <ContactInfo />
    </>
  );
};

function Hero() {
  return (
    <main className=" h-screen flex justify-center items-start flex-col gap-3 font-bold ml-12">
      <motion.p className="text-blue-600">Hi, My name is</motion.p>
      <motion.p
        initial={{ y: 100, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className=" text-8xl text-white font-bold m-0"
      >
        Bayethe Lungah.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="text-3xl text-gray-500 font-bold"
      >
        (By-yet-tay)
      </motion.p>

      <motion.p className="text-white mt-6 text-lg w-2/3">
        I am full time Computer programming student at{" "}
        <a className="underline" href="https://www.fanshawec.ca/">
          Fanshawe College
        </a>
        . I've haved a strong passion for tech since I was 12 and I love making
        new things.
      </motion.p>

      <Button>
        <div className="flex gap-2 justify-center items-center">
          <p>See Projects</p>
          <ArrowDownIcon className="bounce" style={{ height: "25px" }} />
        </div>
      </Button>
    </main>
  );
}

function ProjectSection() {
  return (
    <main className=" h-screen flex flex-col justify-center items-center font-bold gap-3">
      <h1 className="text-white text-4xl">Projects</h1>
      <div className="w-2/3 flex justify-center items-center gap-5">
        <Project
          title="Ecommerce"
          description="An Ecommerce store"
          githubUrl="https://github.com/bayethelungah/Ecommerce"
          url=""
          rawTags="Next.js,Typescript,SQL"
        />
        <Project
          title="Genetic Simulation"
          description="An simulation of an genetic algorithm"
          githubUrl=""
          url=""
          rawTags="Java"
        />
        <Project
          title="Chess"
          description="an application to play chess"
          githubUrl=""
          url=""
          rawTags="Typescript,HTML"
        />
      </div>
    </main>
  );
}

function ContactInfo() {
  return (
    <main className="h-screen flex justify-center items-center flex-col gap-3 font-bold">
      <Card title="Contact Information">
        <>
          <ul className="flex justify-center items-center gap-3 text-white">
            <a className="text-white" href="https://github.com/bayethelungah">
              Github
            </a>
            /
            <a
              className="text-white"
              href="https://www.linkedin.com/in/bayethe-lungah-426620217/"
            >
              Linkedin
            </a>
          </ul>
          <a href="mailto:bayethelungah03@gmail.com" className="text-white">
            bayethelungah03@gmail.com
          </a>
        </>
      </Card>
    </main>
  );
}

export default App;
