import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  mode: "production",
  entry: "./frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./frontend/build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.jpe?g|png$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/public/index.html",
    }),
  ],
}
