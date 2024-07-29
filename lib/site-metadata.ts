import type { Metadata } from 'next';

const title = 'CNR | Front End Developer';
const description =
	'A Front End Developer, with 3 years of professional exprience, dedicated to creating interactive, accessible, and responsive websites.';
const portfolio = 'https://github.com/NARAYANAREDDY37';

export const metadata: Metadata = {
	title,
	description,
	keywords: ['UI Developer', 'Frontend developer', 'Software Developer'],
	authors: [{ name: 'CNR' }, { name: 'CNR', url: portfolio }],
	creator: 'CNR',
	icons: {
		other: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				url: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				url: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				url: '/favicon-16x16.png',
			},
		],
	},
	openGraph: {
		title,
		description,
		url: portfolio,
		siteName: 'CNR Portfolio',
		images: [
			// {
			// 	url: 'https://nextjs.org/og.png', // Must be an absolute URL
			// 	width: 800,
			// 	height: 600,
			// },
			// {
			// 	url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
			// 	width: 1800,
			// 	height: 1600,
			// 	alt: 'My custom alt',
			// },
		],
		locale: 'en_US',
		type: 'website',
	},
	manifest: '/site.webmanifest',
};
