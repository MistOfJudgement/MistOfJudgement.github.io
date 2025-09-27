import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	{
		ignores: [
			"build/**",
			"node_modules/**",
			"dist/**",
			"test/**",
			"eslint.config.*",
		],
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: __dirname,
			},
		},
	},
]);
