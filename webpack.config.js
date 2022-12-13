const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/* const WorkboxWebpackPlugin = require("workbox-webpack-plugin"); */
const { InjectManifest } = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

const webpackPlugins = [
  // pasamo un objeto con la configuracion que necesitamos
  new HtmlWebpackPlugin({
    //Donde esta ubicado el template que tenemos
    template: "./public/index.html",
    filename: "./index.html",
  }),

  new Dotenv({
    path: "./.env", // Path to .env file (this is the default)
    systemvars: true,
  }),

  new CopyPlugin({
    patterns: [
      { from: "./src/assets/favicon.ico", to: "" },
      { from: "./src/manifest.json", to: "" },
      { from: "./src/assets/android-chrome-192x192.png", to: "" },
      { from: "./src/assets/android-chrome-512x512.png", to: "" },
      { from: "./src/assets//apple-touch-icon-167x167.png", to: "" },
      { from: "./src/assets/apple-touch-icon-180x180.png", to: "" },
    ],
  }),

  new MiniCssExtractPlugin({
    filename: "assets/[name].css",
  }),

  /*  new FaviconsWebpackPlugin("./src/assets/favicon.png"), */

  new FaviconsWebpackPlugin({
    logo: "./src/assets/favicon.png",
    favicons: {
      background: "#f8e808",
      theme_color: "#b1a",
    },
  }),

  new CleanWebpackPlugin(),
  new ImageMinimizerPlugin({
    minimizerOptions: {
      plugins: [["optipng", { optimizationLevel: 5 }]],
    },
  }),
];

if ("production" === process.env.NODE_ENV) {
  webpackPlugins.push(
    new InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
    })
  );
}

module.exports = {
  entry: {
    home: "./src/index.js",
    /*  header: "./src/Header/index.js", */
  },

  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    /* publicPath: "#", */
    /* historyApiFallback: true, */
  },
  devServer: {
    historyApiFallback: true,
  },

  // Este elemento resulve las extensiones que vamos a utilizar
  resolve: {
    extensions: [".tsx", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
    },
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: "all",
          name: "commons",
          filename: "assets/common.[chunkhash].js",
          reuseExistingChunk: true,
          enforce: true,
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendors",
          filename: "assets/vendor.[chunkhash].js",
          reuseExistingChunk: true,
          enforce: true,
          priority: 10,
        },
      },
    },
  },

  module: {
    rules: [
      {
        // Regla principal
        // Identificacion de los archivos con una expresion regular
        test: /\.(js|jsx)$/,
        // Exclusion de carpetas
        exclude: /node_modules/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Regla para trabajar con los archivos html
        test: /\.html$/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },

      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: webpackPlugins,
};
