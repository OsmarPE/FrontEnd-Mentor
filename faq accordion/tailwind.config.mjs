/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'primary':['WorkSans','sans-serif']
			},
			colors:{
				whiteMain:'hsl(0, 0%, 100%)',
				pinkMain:'hsl(275, 100%, 97%)',
				grayMain:'hsl(292, 16%, 49%)',
				darkMain:'hsl(292, 42%, 14%)',
				pinkSecundary:'#AD28EB'
				
			},
			boxShadow:{
				'main':' 0 18px 38px rgba(47, 21, 51, 0.1)'
			}
		},
	},
	plugins: [],
}

