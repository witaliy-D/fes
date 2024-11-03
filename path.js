export let way = "app";
if (process.argv.includes('--build')) {
    way = "dist";
}

export const path = {
    build: {
        html: way + "/",
        php: way + "/form/",
        PHPMailer: way + "/PHPMailer/",
        css: way + "/css/",
        copycss: way + "/css/dist/",
        js_main: way + "/js/main",
        js_libraries: way + "/js/libraries/",
        js_dist: way + "/js/dist/",
        images: way + "/images/",
    //     imagesWebp: way + "/images/webp/",
        svg: way + "/svg-sprite/",
        favicon: way + "/favicon/",
        files: way + "/files/",
        js_libs: "./src/assets/libs/dist/",
    },
    src: {
        php: "./src/form/*.php",
        PHPMailer: "./src/assets/PHPMailer/**/*",
        css: "./src/assets/css/*css",
        scss: "./src/scss/*scss",
        files: "./src/assets/files/**/*",
        js_main: [
            "./src/js/main.js",
        ],
        js_libraries: [
            //"./src/assets/libs/dist/jquery.min.js",
            //"./src/assets/libs/dist/lazyload.min.js",
            "./src/assets/libs/dist/swiper.min.js",
            "./src/assets/libs/dist/jquery.maskedinput.min.js",
            "./src/assets/libs/dist/anime.min.js",
            "./src/assets/libs/dist/fancybox.umd.js",
            "./src/assets/libs/dist/gsap.min.js",
            "./src/assets/libs/dist/ScrollTrigger.min.js",
            //"./src/assets/libs/dist/jquery.event.move.js",
            //"./src/assets/libs/dist/jquery.nice-select.min.js",
            //"./src/assets/libs/dist/jquery.twentytwenty.js",
            //"./src/assets/libs/dist/simplebar.min.js",
            "./src/assets/libs/dist/wow.js",
            //"./src/assets/libs/dist/svg4everybody.min.js"
            //"./src/assets/libs/dist/air-datepicker.js",
        ],
        js_libs: "./src/assets/libs/src/*js",
        js_dist: "./src/assets/js/*js",
        images: [
            "./src/images/**/*",
            "!" + "./src/images/webp/**/*",
        ],
        // imagesWebp: "./src/images/webp/**/*",
        favicon: "./src/assets/favicon/*",
        svg: "./src/icon/*.svg",
    },
    watch: {
        html: [
            "./src/template/**/*.html",
            "./src/pages/**/*.html"
        ],
        php: "./src/form/*.php",
        css: "./src/assets/css/*css",
        scss: [
            "./src/scss/**/*.scss",
            "./src/components/**/*.scss",
            "./src/template/**/*.scss",
            "./src/pages/**/*.scss",
        ],
        files: "./src/assets/files/**/*",
        js_main: [
            "./src/js/**/*.js",
            "./src/components/**/*.js",
            "./src/template/**/*.js",
            "./src/pages/**/*.js",
        ],
        js_dist: "./src/assets/js/*js",
        img: "./src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,mp4,mov}",
        svg: "./src/icon/*.svg",
    },
    fonts: {
        src: "./src/assets/fonts/src/*.ttf",
        dest: "./src/assets/fonts/dist/",
        buildSrc: "./src/assets/fonts/dist/*.{woff,woff2}",
        build: way + "/fonts/",
    },
    clean: way,
    cleanimg: way + "/images/**/*",
    cleanfiles: way + "/files/**/*",
    cleanjs: way + "/js/dist/**/*",
    cleancss: way + "/css/dist/**/*",
    cleanlibs: "./src/assets/libs/dist",
    cleanfont: "./src/assets/fonts/dist",
}
