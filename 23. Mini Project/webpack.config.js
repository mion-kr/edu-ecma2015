var path = require('path');//기본적으로 필요

module.exports={
    mode:'development',
    entry:'./src/index.js', //어떤 코드 기준으로 빌드를 해야되는지?(노드 프로젝트)
    output : { //결과 파일 저장하는 곳
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/dist' // devServer로 실행 시 임시 폴더에 저장된 소스가 반영될 경로
    },
    devServer : {
        port: 9000
    },
    module: {
        rules : [{//추가로 어떤 파일이나 설정을 추가할 때 사용
            test: /\.js$/, // .js로 끝나는 파일
            include: path.resolve(__dirname, 'src'), // src 디렉토리 대상으로 검사
            use:{ //옵션값
                loader : 'babel-loader',
                options : {
                    presets : [
                        ["@babel/preset-env", {
                            targets : {
                                browsers : ["last 2 versions"] // 최근 마지막 업데이트로부터 2개의 버전까지 지원
                                // chrome : "58",  //크롬 최소한 58버전부터 지원하도록
                                // ie : "11" // 익스플로러 최소한 11버전부터 지원하도록
                            },
                            debug : true
                        }]
                    ]
                }
            }
        }]
    }
}