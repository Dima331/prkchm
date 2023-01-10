import svgSprite from "gulp-svg-sprite";
import cheerio from 'gulp-cheerio';
// import imagemin from 'gulp-imagemin';

// const pluginsImagemin =
// 	[imagemin.svgo({
// 		plugins: [
// 			{ removeTitle: true },
// 			{ convertPathData: false },
// 			{ removeViewBox: false },
// 			{ cleanupNumericValues: { floatPrecision: 1 } }
// 		]
// 	})];

export const sprite = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		// .pipe(imagemin())
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../img/icons/icons.svg',
					// example: true
				}
			},
			shape: {
				id: {
					separator: '',
					generator: ''
				},
				transform: [
					{
						// svgo: {
						// 	plugins: [
						// 		{ removeXMLNS: true },
						// 		{ convertPathData: false },
						// 		{ removeViewBox: false },
						// 	]
						// }
					}
				]
			},
			svg: {
				rootAttributes: {
					style: 'display: none;',
					'aria-hidden': true
				},
				xmlDeclaration: false
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(app.gulp.dest(`${app.path.srcFolder}`));


}