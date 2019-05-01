"use strict";

const backgroundColor = "#261f32";
const magenta = "#f2ebe0";
const cyan = "#ff7f32";
const brightBlack = "#f825a4";
const gray = "#ada8a8";
const brightWhite = "#f2ebe0";
const foregroundColor = "#f2ebe0";
const green = "#66edad";
const yellow = "#ff7f32";
const black = "#201b29";
const blue = "#f825a4";
const red = "#f625a3";

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: brightBlack,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    },
    css: `
			${config.css || ""}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: rgb(68, 71, 90);
			}
		`
  });
};
