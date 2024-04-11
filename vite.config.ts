import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/test-assignment-3/' : '/',

  plugins: [react(), tsconfigPaths(), svgr()],

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './test.setup.ts',
    css: false,
  },
}));
