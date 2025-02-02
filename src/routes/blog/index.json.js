import fs from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

const getAllPosts = () => {
	try {
	  return fs.readdirSync('static/posts/').map((fileName) => {
		const post = fs.readFileSync(
		  path.resolve('static/posts', fileName),
		  'utf-8'
		);
		return grayMatter(post).data;
	  });
	} catch (e) {
	  return [];
	}
  };

export function get(_, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const posts = getAllPosts();
	res.end(JSON.stringify(posts));
}