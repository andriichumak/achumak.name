#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const md = new MarkdownIt({ html: false, linkify: true, typographer: true });

function render() {
	const source = fs.readFileSync(path.join(root, 'content', 'home.md'), 'utf8');
	const { data, content } = matter(source);
	const layout = fs.readFileSync(path.join(root, 'templates', 'layout.html'), 'utf8');

	const html = layout.replace(/{{(\w+)}}/g, (match, key) => {
		if (key === 'content') return md.render(content);
		if (key in data) return String(data[key]);
		return match;
	});

	fs.mkdirSync(distDir, { recursive: true });
	fs.writeFileSync(path.join(distDir, 'index.html'), html);
}

function copyAssets() {
	for (const file of ['avatar.jpg', 'favicon.ico']) {
		fs.copyFileSync(path.join(root, file), path.join(distDir, file));
	}
	fs.copyFileSync(path.join(root, 'styles.css'), path.join(distDir, 'styles.css'));
}

fs.rmSync(distDir, { recursive: true, force: true });
render();
copyAssets();

console.log('Built site into ./dist');
