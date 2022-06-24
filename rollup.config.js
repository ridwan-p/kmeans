
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/kmeans.js", // your entry point
    output: {
      file: pkg.main,
      format: "cjs",
      exports: 'default'
    },
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      }),
    ],
  },
];