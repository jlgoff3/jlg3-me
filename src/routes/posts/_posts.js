// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export default function getAllPosts(onlyData = false) {
  const renderer = new marked.Renderer();

  const posts = fs.readdirSync("content/posts").map((fileName) => {
    const post = fs.readFileSync(
      path.resolve("content/posts", fileName),
      "utf-8"
    );
    let { content, data } = matter(post);
    data.readTime = Math.round(content.split(' ').length / 265)
    let html = marked(content, { renderer });
    return { html, data };
  });

  if (onlyData) return posts.map((post) => post.data);
  else
    return posts.map(({ html, data }) => {
      return { html, ...data };
    });
}
