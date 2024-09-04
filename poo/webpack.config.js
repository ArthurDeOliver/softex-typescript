const path = require("path");

module.exports = {
  entry: "./src/index.ts", // Caminho para o seu arquivo TypeScript de entrada
  output: {
    filename: "bundle.js", // Nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // Diretório de saída (./dist)
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Processar todos os arquivos .ts
        use: "ts-loader", // Usar o ts-loader para compilar TypeScript
        exclude: /node_modules/, // Excluir a pasta node_modules
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Extensões que o Webpack vai resolver
  },
};
