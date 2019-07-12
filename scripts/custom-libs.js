const existingConfig = require('../node_modules/@ionic/app-scripts/config/copy.config');
module.exports = Object.assign(existingConfig, {
  copyFontawesomeFonts: {
    src: ['{{ROOT}}/node_modules/font-awesome/webfonts/**/*'],
    dest: '{{WWW}}/assets/webfonts'
	},
	copyFontawesomeCss: {
		src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
		dest: '{{WWW}}/assets/css'
	},
	copyCustomFonts: {
		src: ['{{ROOT}}/src/font/**/*'],
		dest: '{{WWW}}/assets/localfonts'
	},
});