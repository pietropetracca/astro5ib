// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// ✅ SOSTITUISCI CON I TUOI DATI
	site: 'https://pietropetracca.github.io',
	base: '/astro5ib',
	
	// ✅ Risolve problemi Sharp in CI (NON MODIFICARE)
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop'
		}
	},
	
	integrations: [
		starlight({
			// ✅ PERSONALIZZA
			title: 'Guida 5IB',
			social: [{ 
				icon: 'github', 
				label: 'GitHub', 
				href: 'https://github.com/pietropetracca/astro5ib' 
			}],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

/* 
📝 PLACEHOLDERS DA SOSTITUIRE:
- TUOUSERNAME: il tuo username GitHub (es: pietropetracca)
- NOME-REPOSITORY: nome del repository (es: mio-progetto)
- TITOLO-PROGETTO: titolo che appare nel sito (es: My Docs)

🌐 ESEMPIO:
site: 'https://pietropetracca.github.io',
base: '/mio-progetto',
title: 'My Documentation',
href: 'https://github.com/pietropetracca/mio-progetto'
*/
