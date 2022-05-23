
const { resolve } = require('path');
const path=require('path');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
    mode:"development"
    
    resolve:
    {
        extensions:['.ts', '.js'],
    },

    module:
    {
        rules:
        [
            {
                test:/\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
};