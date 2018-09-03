const Gulp = require("gulp");
const BrowserSync = require("browser-sync").create();
const Sass = require("gulp-sass");
const Delete = require("del");
const Css = require("gulp-clean-css");
const PostCss = require("gulp-postcss");
const Autoprefixer = require("autoprefixer");
const DeleteDuplicateCss = require("postcss-discard-duplicates");
const Run = require("run-sequence");
const HtmlMinify = require("gulp-htmlmin");

/*
* TODO: Crée un fichier css en utilisant SASS sur le fichier ./src/sass/main.scss
*/
Gulp.task("createCss", () => {
    return Gulp.src("./src/sass/main.scss")
        .pipe(Sass() )
        .pipe(Gulp.dest("src/") )
        .pipe(BrowserSync.reload( { stream: true } ) );
});

/*
* TODO: Exécute des instructions(second paramétre) à chaque fois que le fichier nommé dans watch est modifié.
* @param [liste de tâches à exécuter avant que la tâche default soit lancée]
*/
Gulp.task("default", ["liveBrowser", "createCss"], () => {
    Gulp.watch("./src/**/*.html", BrowserSync.reload);
    Gulp.watch("./src/**/*.scss", ["createCss"] );
});

/*
* TODO: Supprime le fichier dist/
*/
Gulp.task("deleteFolder", () => {
    return Delete.sync("dist");
} );

/*
* TODO:  Utilise Autoprefixer et postcss-discard-duplicates pour formater le CSS
*/
Gulp.task("formateCss", () => {
    return Gulp.src("./src/main.css")
        .pipe(PostCss( [Autoprefixer, DeleteDuplicateCss] ) )
        .pipe(Gulp.dest("dist/") );
});

/*
* TODO: build and minify the index.html file
*/
Gulp.task("minifyIndexFile", () => {
    return Gulp.src("./src/index.html")
        .pipe(HtmlMinify())
        .pipe(Gulp.dest("dist/"));
});

/*
* TODO: Lance un serveur qui rafraichit automatiquement les pages.
*/
Gulp.task("liveBrowser", () => {
    BrowserSync.init( {
        server: {
            baseDir: "src"
        }
    } );
});

/*
* TODO: Minifie le fichier CSS et l'ajoute dans le fichier dist/
*/
Gulp.task("minifyCss", () => {
    return Gulp.src("./src/main.css")
        .pipe(Css())
        .pipe(Gulp.dest("dist/"));
});

/*
* TODO: Ensemble de tâches executés l'une à la suite de l'autre
*/
Gulp.task("build", callback => {
    return Run("deleteFolder", "MinifyIndexFile", "formateCss", "minifyCss", callback);
});