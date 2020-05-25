import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';
import path from 'path';

const getPost = (fileName) => {
	return fs.readFileSync(
		path.resolve('static/posts/', `${fileName}.md`)
	)
}

export function get(req, res, _) {
	const { slug } = req.params;

	const post = getPost(slug);
	const renderer = new marked.Renderer();

	const { data, content } = grayMatter(post).data;
	const html = marked(content, { renderer });

	if (html) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			html, ...data
		}));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
