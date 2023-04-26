import { build } from "esbuild";

build({
  bundle: true,
  format: "esm",
  target: "es2020",
  mainFields: ["browser", "module", "main"],
  
  //platform: "neutral",
  platform: "node",
  
  
  //entryPoints: ["./src/index.ts"],
  entryPoints: ["./src/test.ts"],
  
  outfile: "./dist/index.js",
  sourcemap: false,
  charset: "utf8",
  minify: process.env.NODE_ENV === "production" ? true : false
}).catch(err => {
  console.error(err.stack);
  process.exitCode = 1;
});
