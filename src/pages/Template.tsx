import React from "react";
import Info from "../components/info";
import Intern from "../components/intern";
import Project from "../components/project";
import Skills from "../components/skills";
import History from "../components/history";

export default function Template() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <Info />
      <Intern />
      <Skills />
      <Project />
      <History />
    </div>
  );
}
