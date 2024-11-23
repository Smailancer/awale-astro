/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#FFF7E6',
					100: '#FFECC6',
					200: '#FFD88A',
					300: '#FFC14D',
					400: '#FFAB1A',
					500: '#FF9500',
					600: '#E67700',
					700: '#B35C00',
					800: '#804200',
					900: '#663500',
				},
				secondary: {
					50: '#FFF8E6',
					100: '#FFE5B2',
					200: '#FFD280',
					300: '#FFBF4D',
					400: '#FFAC1A',
					500: '#FF9900',
					600: '#CC7A00',
					700: '#995C00',
					800: '#663D00',
					900: '#4D2E00',
				},
			},
			backgroundImage: {
				'gradient-ribbon': 'linear-gradient(45deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
			},
			fontFamily: {
				sans: ['Poppins', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}