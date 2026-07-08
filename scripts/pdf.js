#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

async function main() {
	const source = fs.readFileSync(path.join(root, 'content', 'home.md'), 'utf8');
	const { data } = matter(source);
	const outputPath = path.join(distDir, path.basename(data.resume));

	const browser = await chromium.launch();
	try {
		const page = await browser.newPage();
		await page.goto(`file://${path.join(distDir, 'index.html')}`, { waitUntil: 'load' });
		await page.pdf({ path: outputPath, format: 'A4', printBackground: true });
	} finally {
		await browser.close();
	}

	console.log(`Built ${path.relative(root, outputPath)}`);
}

main();
