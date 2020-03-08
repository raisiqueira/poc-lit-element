import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        babel({ exclude: 'node_modules/**'}),
        typescript({ exclude: ['node_modules/**']}),
        terser({ output: { comments: false }}),
    ]
}