import React from "react";
import { Button } from "./ui/button";
import { Ghost } from "lucide-react";

const Navbar = () => {
  return (
    <header className=" top-0 mb-4 left-0 w-full bg-transparent pl-24 pt-7 pr-16">
      <nav className="flex items-center justify-between relative">

        <div className="flex items-center justify-between gap-7">
          <a
            href="#"
            className="text-sm font-normal text-black flex items-center gap-2"
          >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
            <h1
              className="dark:text-white font-semibold tracking-wide"
            >
              ABU AI
            </h1>
          </a>

          <ul className="flex items-center">
            <li className="list-none">
              <a href="#">
                <Button /* manual tecorated buttons */
                  variant="ghost"
                  title="Pricing"
                  className="text-slate-800800 dark:text-white"
                >
                  Pricing
                </Button>
              </a>
            </li>

            <li className="list-none">
              <a href="#">
                <Button
                  variant="ghost"
                  title="Blog"
                  className="text-slate-800 dark:text-white"
                >
                  {" "}
                  Blog
                </Button>
              </a>
            </li>

            <li className="list-none">
              <a href="#">
                <Button /* manual tecorated buttons */
                  variant="ghost"
                  title="Contact"
                  className="text-slate-800 dark:text-white"
                >
                  Contact
                </Button>
              </a>
            </li>
          </ul>
        </div>


        <div className="flex items-center justify-between gap-5">
            <Button variant={"outline"} className="rounded-3xl">
              Login
            </Button>
            <Button title="Sing up" className="rounded-full">
                Sign Up
            </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
