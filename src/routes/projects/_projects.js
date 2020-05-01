// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_projects.js` rather than `projects.js`, because
// we don't want to create an `/blog/projects` route — the leading
// underscore tells Sapper not to do that.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export default function getAllProjects(onlyData = false) {
  const renderer = new marked.Renderer();

  const projects = fs.readdirSync("content/projects").map((fileName) => {
    const project = fs.readFileSync(
      path.resolve("content/projects", fileName),
      "utf-8"
    );
    let { content, data } = matter(project);
    let html = marked(content, { renderer });
    return { html, data };
  });

  if (onlyData) return projects.map((project) => project.data);
  else
    return projects.map(({ html, data }) => {
      return { html, ...data };
    });
}
