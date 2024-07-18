import { CodeProjectInterface } from "@/models/codeProject";
import Link from "next/link";
import React from "react";
import { MdOutlineDescription } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

type Props = {
  codeProject: CodeProjectInterface;
  index: number;
};

export const CodeProjectItem = ({ codeProject, index }: Props) => {
  return (
    <div
      className={`w-3/4 md:w-4/5 sm:w-full p-4 ${
        index % 2 == 0
          ? "bg-green-100 rounded-r-2xl rounded-tl-2xl mr-auto"
          : "bg-green-300 rounded-l-2xl rounded-tr-2xl ml-auto"
      } ${index !== 0 ? "mt-4" : ""} `}
    >
      <strong className="text-md font-extrabold uppercase">
        {codeProject.name}
      </strong>
      <div>
        <strong className="flex items-center">
          <MdOutlineDescription className="text-lg mr-1" />
          Description:
        </strong>
        <p className="not-prose">{codeProject.description}</p>
      </div>
      <div className="mt-2 flex">
        <strong className="flex items-center">
          <IoCodeSlashOutline className="text-lg mr-1" />
          Languages:
        </strong>
        &nbsp;
        {codeProject.languages}
      </div>
      <div className="mt-2 flex">
        <strong className="flex items-center">
          <IoIosLink className="text-lg mr-1" />
          Link:
        </strong>
        &nbsp;
        <Link href={codeProject.link}>{codeProject.link}</Link>
      </div>
      {codeProject.github && (
        <div className="flex mt-2">
          <strong className="flex items-center">
            <FaGithub className="text-lg mr-1" />
            Github:
          </strong>
          &nbsp;
          <Link href={codeProject.github}>{codeProject.github}</Link>
        </div>
      )}
    </div>
  );
};
