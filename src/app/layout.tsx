import type { Metadata, Viewport } from 'next'
import '../scss/main.scss'

export const viewport: Viewport = {
	themeColor: '#ffffff',
}

export const metadata: Metadata = {
	title: 'Roman numeral Converter | freeCodeCamp',
	description: 'This is a Roman numeral converter, a freecodecamp assignment',
	manifest: '/manifest.json',
	robots: 'index, follow',
	authors: [{ name: 'FedeHide' }],
	keywords: ['roman', 'numeral', 'converter'],
	icons: {
		apple: '/apple-touch-icon.png',
		icon: '/favicon.ico',
	},
	openGraph: {
		url: 'https://roman-numeral-converter-wheat.vercel.app/',
		type: 'website',
		title: 'Roman numeral Converter | freeCodeCamp',
		description: 'This is a Roman numeral converter, a freecodecamp assignment',
		images: [
			'https://raw.githubusercontent.com/FedeHide/roman-numeral-converter/main/public/assets/roman-numeral-converter-screenshot.webp',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://roman-numeral-converter-wheat.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Roman numeral Converter" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			</head>
			<body>{children}</body>
		</html>
	)
}
