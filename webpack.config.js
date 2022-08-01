const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack.config.js는 node 파일이기 때문에 node 문법을 사용해야한다. (require, export 등등)
// webpack의 입력값으로 config 파일을 제공하기 때문에 webpack의 필요 스펙대로 객체를 생성하여 export 해야함

// webpack config 파일의 기본 구조
/* 
 진행 과정
 entry에서 입력 받기 => module에서 설정한 소프트웨어를 통해 변환 => plugin에서 변환된 파일을 또 설정된 plugin으로 변환 => 결과를 output으로 출력 
*/
module.exports = {
    // 현재 개발중인가? 최종적으로 서비스할 파일인가?를 스위칭하는 옵션
    mode: 'development',
    // 입력 정보(시작점이 되는 js파일)
    entry: './app.js',
    // 출력 정보 (객체)
    output: {
        // 결과를 어디에 쓸건지(디렉터리는 OS마다 구조가 조금씩 달라서 모든 OS에서 잘 동작하도록 안전하게 처리)
        // node가 제공하는 'path' 패키지 사용
        path: path.resolve(__dirname, 'dist'),
        // 결과의 이름은 뭐로 정할 것 인지
        filename: 'bundle.js',
    },

    devServer: {
        compress: true,
        // 실행 port번호 설정(임의로 지정함)
        port: 9999,
    },

    // module의 기본 구조(rules[{use{loader,option{preset}}}])
    // rules 내에는 loader들이 들어간다.
    module: {
        rules: [
            {
                /* test 옵션
                 babel은 js만 transpile하는데, 만약 entry로 이미지, css파일등이 들어오면 처리하지 못한다.
                 이를 대비하여 test에 정규식으로 옵션을 주어서 js파일이 들어올때만 처리하도록 한다.
                */
                test: /\.js$/,
                /* exclude 옵션
                 특정 폴더를 제거한다. (node_modules에는 엄청나게 많은 js 파일이 있지만 이들을 번들링할 필요는 없다.)
                 굳이 번들링하지 않아도 되는 폴더를 제외함으로써 번들링 파일의 크기를 줄인다.
                */
               exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },

    plugins: [
        // 인스턴스로 불러와야한다. (플러그인의 문서를 보면 이유가 나와있음(기본 구조))
        new HtmlWebpackPlugin({
            title: 'setup webpack & babel',
            template: 'index.html'
        })
    ]
}
