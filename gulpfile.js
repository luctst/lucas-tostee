const Gulp = require("gulp");
const BrowserSync = require("browser-sync").create();
const Sass = require("gulp-sass");
const Delete = require("del");

/*
* TODO: Exécute des instructions(second paramétre) à chaque fois que le fichier nommé dans watch est modifié.
*/
Gulp.task("default", ["liveBrowser", "createCss"], () => {
    Gulp.watch("./src/index.html", BrowserSync.reload);
    Gulp.watch("./src/**/*.scss", ["createCss"] );
});

/*
* TODO: Supprime le fichier dist/
*/
Gulp.watch("del", () => {
    return del.sync("dist/*");
} );

/*
* TODO: Crée un fichier css en utilisant SASS sur le fichier ./src/sass/main.scss
*/
Gulp.task("createCss", () => {
    return Gulp.src("./src/sass/main.scss")
        .pipe(Sass() )
        .pipe(Gulp.dest("src") )
        .pipe(BrowserSync.reload( { stream: true } ) );
} );

/*
* TODO: Lance un serveur qui rafraichit automatiquement les pages.
*/
Gulp.task("liveBrowser", () => {
    BrowserSync.init( {
        server: {
            baseDir: "src"
        }
    } );
} );