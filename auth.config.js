import Google from '@auth/core/providers/Google'
import { defineConfig } from 'auth-astro'

export default defineConfig({
	providers: [
		Google({
			clientId: import.meta.env.GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
		}),
	],
})