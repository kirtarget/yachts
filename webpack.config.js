import path from "path"
export default {
  entry: "./src/frontend/index.js",
  output: {
    path: path.resolve(__dirname, "./frontend/build"),
    filename: "my-first-webpack.bundle.js",
  },
}
