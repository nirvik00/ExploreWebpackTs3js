const path = require('path');

// second typo = module.exports
module.exports ={
    entry: './src/client/client.ts',
    module:{
        rules:[
            {
                test:/\.tsx?$/, 
                use:'ts-loader', 
                exclude:/node_modules/,
            }
        ]
    },
    resolve:{
        extensions:['.tsx', '.ts', '.js'] // third typo
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, '../dist/client')
    }
}