const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader"
        }]
    }, 
     externals: [
        {
          'gl-matrix': {
            root: 'window',
            commonjs: 'gl-matrix',
            commonjs2: 'gl-matrix',
            amd: 'gl-matrix'
          }
        }
      ],
    resolve: {
        extensions: [
            '.ts'
        ]
    }
};