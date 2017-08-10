var SRC_DIR = './src/'; // 源文件目录  
var DIST_DIR = './dist/'; // 文件处理后存放的目录  
var DIST_FILES = DIST_DIR + '**'; // 目标路径下的所有文件  

var Config = {
    src: SRC_DIR,
    dist: DIST_DIR,
    dist_files: DIST_FILES,
    html: {
        src: SRC_DIR + '*.html',
        dist: DIST_DIR
    },
    assets: {
        src: SRC_DIR + 'assets/**/*', // assets目录：./src/assets  
        dist: DIST_DIR + 'assets' // assets文件build后存放的目录：./dist/assets  
    },
    css: {
        src: SRC_DIR + 'css/**/*.css', // CSS目录：./src/css/  
        dist: DIST_DIR + 'css' // CSS文件build后存放的目录：./dist/css  
    },
    sass: {
        src: [SRC_DIR + 'scss/**/*.scss', SRC_DIR + 'common/scss/*.scss'], // SASS目录：./src/sass/  
        dist: DIST_DIR + 'css' // SASS文件生成CSS后存放的目录：./dist/css  
    },
    js: {
        src: [SRC_DIR + 'js/**/*.js', SRC_DIR + 'common/js/*.js'], // JS目录：./src/js/  
        dist: DIST_DIR + 'js', // JS文件build后存放的目录：./dist/js  
        build_name: 'build.js' // 合并后的js的文件名  
    },
    img: {
        src: SRC_DIR + 'imgs/**/*', // images目录：./src/images/  
        dist: DIST_DIR + 'imgs' // images文件build后存放的目录：./dist/images  
    }
};

module.exports = Config;