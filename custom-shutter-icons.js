console.info(
  `%c  Custom-shutter-icons  \n%c  Version a1bb89c   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

const CUSTOM_SHUTTER_ICONS_MAP = {
    
  "shutter-0":
    "M3 4H21V8H19V20H17V8H7V20H5V8H3V49Z",

  "shutter-1":
    "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z",
    
  "shutter-2":
    "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V129Z",

  "shutter-3":
    "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V159Z",

  "shutter-4":
    "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z",
    
};

// Iconset API (Home Assistant 0.110 and up):
async function getIcon(name) {
  var primaryPath = CUSTOM_SHUTTER_ICONS_MAP[name];
  return {
    path: primaryPath,
    viewBox: "0 0 24 24"
  };
return { path: CUSTOM_SHUTTER_ICONS_MAP[name] };
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["csi"] = getIcon;

if (!window.frontendVersion || window.frontendVersion < 20200519.0) {
  // ha-iconset-svg (Up to Home Assistant 0.109):
  const iconset = document.createElement("ha-iconset-svg");
  iconset.name = "csi";
  iconset.size = "24";

  let iconsetHTML = "";
  for (let key in CUSTOM_SHUTTER_ICONS_MAP) {
    iconsetHTML += `<g id="${key}"><path d="${PAP_ICONS_MAP[key]}" /></g>`;
  }

  iconset.innerHTML = `<svg><defs>${iconsetHTML}</defs></svg>`;
  document.body.appendChild(iconset);
}
