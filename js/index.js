/**
 * Integration config
 */

/*global window*/

var ICONFIG = {
    tmpVersion: 1570891429565,
    dataCacheName: "data-v3",
    cacheName: "sketchpad.pro",
    domain: "sketchpad.pro",
    shareTitle: "Invitation to Sketchpad.pro",
    shareText: "Join to real-time collaboration whiteboard",
    mailtoSubject: "Invitation to Sketchpad.pro",
    mailtoFooter: "\n\n--\nSketchpad.pro - Get Your Free Online Drawing Board\n",
    icons: {
        toolbar: {
            aipen: '<i class="fal fa-wand-magic"></i>',
            circ: '<i class="fal fa-circle" style="transform:scale(1.1,0.9);"></i>',
            circShift: '<i class="fal fa-circle"></i>',
            colorpicker: '<i class="fal fa-eye-dropper"></i>',
            cutout: '<i class="fal fa-cut"></i>',
            deleteSketch: '<i class="fal fa-trash-alt" aria-hidden="true"></i>',
            editors: '<i class="fal fa-key" aria-hidden="true"></i>',
            eraser: '<i class="fal fa-eraser"></i>',
            exportPng: '<i class="fal fa-file-image" aria-hidden="true"></i>',
            fullscreenOff: '<i class="fal fa-compress" aria-hidden="true"></i>',
            fullscreenOn: '<i class="fal fa-expand-arrows" aria-hidden="true"></i>',
            highlighter: '<i class="fal fa-paint-brush"></i>',
            image: '<i class="fal fa-image"></i>',
            layerDown: '<i class="fal fa-caret-down"></i>',
            layerUp: '<i class="fal fa-caret-up"></i>',
            line: '╱',
            lineShift: '&#9473;',
            load: '<i class="fal fa-folder-open"></i>',
            mandala: '<i class="fal fa-sun"></i>',
            moveViewport: '<i class="fal fa-hand-paper"></i>',
            pen: '<i class="fal fa-pencil"></i>',
            rainbow: '<i class="fal fa-cloud-rainbow"></i>',
            rect: '<i class="fal fa-rectangle-landscape"></i>',
            rectShift: '<i class="fal fa-square"></i>',
            redo: '<i class="fal fa-redo"></i>',
            resetSketch: '<i class="fal fa-trash" aria-hidden="true"></i>',
            rotateViewport: '<i class="fal fa-circle-notch"></i>',
            save: '<i class="fal fa-cloud-download" aria-hidden="true"></i>',
            share: '<i class="fal fa-share-alt" aria-hidden="true"></i>',
            smoothpen: '<i class="fal fa-pen-fancy"></i>',
            spectators: '<i class="fal fa-eye" aria-hidden="true"></i>',
            type: '<i class="fal fa-i-cursor"></i>',
            undo: '<i class="fal fa-undo"></i>',
            zoomCenter: '<i class="fal fa-home"></i>',
            zoomIn: '<i class="fal fa-search-plus"></i>',
            zoomOut: '<i class="fal fa-search-minus"></i>'
        },
        ui: {
            left: '<i class="fal fa-angle-left"></i>',
            right: '<i class="fal fa-angle-right"></i>',
            up: '<i class="fal fa-angle-up"></i>',
            down: '<i class="fal fa-angle-down"></i>',
            chatNewMessages: '<i class="fal fa-comment-alt" aria-hidden="true"></i>',
            chat: '<i class="fal fa-comment" aria-hidden="true"></i>',
            email: '<span class="fal fa-at" aria-hidden="true"></span>',
            close: '<i class="fal fa-times" aria-hidden="true"></i>'
            // link: '<i class="footInputIcon fal fa-link" aria-hidden="true"></i>'

        }
    },
    // defaultConfig: {
    //     tools: [
    //         "pen",
    //         "highlighter",
    //         "line",
    //         "rectangle",
    //         "circle",
    //         "type",
    //         "mandala",
    //         "rainbow",
    //         "image",
    //         "colorpicker",
    //         "undo-redo",
    //         "eraser",
    //         "move-viewport",
    //         "rotate-viewport",
    //         "zoom",
    //         "center"
    //     ],
    //     features: [
    //         "share",
    //         "upload",
    //         "reset",
    //         "layers-switcher",
    //         "chat",
    //         "webrtc",
    //         "download",
    //         // "export-image",
    //         "viewport-position",
    //         "connection-status",
    //         "exit"
    //     ]
    // },
    exitUrl: "sketchbook.html",
    avaliableTools: [],
    defaultTool: "smoothpen",

    postPdfUrl: "https://uploader.imagehost.pro:3443/upload",
    postImageUrl: "https://uploader.imagehost.pro:3443/upload",
    postWebshotUrl: "https://uploader.imagehost.pro:3443/webshot?site=",
    proxyImageUrl: "https://imagehost.pro/proxy.php",
    proxyExcludedDomain: "imagehost.pro",

    //please keep Appropriate Legal Notices
    watermarkTitle: "This is commercial version of sketchpad.pro.\nVisit http://developers.sketchpad.pro for open-source version.\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY.",
    watermarkImageSrc: "data:image/svg+xml;utf8," + '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg    xmlns:dc="http://purl.org/dc/elements/1.1/"    xmlns:cc="http://creativecommons.org/ns#"    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"    xmlns:svg="http://www.w3.org/2000/svg"    xmlns="http://www.w3.org/2000/svg"    xmlns:xlink="http://www.w3.org/1999/xlink"    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"    width="128"    height="18"    viewBox="0 0 294.79549 53.369998"    id="svg2"    version="1.1"    inkscape:version="0.91 r13725"    sodipodi:docname="sketchpad-logo-clean.svg">   <sodipodi:namedview      pagecolor="#ffffff"      bordercolor="#666666"      borderopacity="1"      objecttolerance="10"      gridtolerance="10"      guidetolerance="10"      inkscape:pageopacity="0"      inkscape:pageshadow="2"      inkscape:window-width="1296"      inkscape:window-height="719"      id="namedview51"      showgrid="true"      inkscape:zoom="6.416994"      inkscape:cx="72.420486"      inkscape:cy="4.2725026"      inkscape:window-x="99"      inkscape:window-y="0"      inkscape:window-maximized="0"      inkscape:current-layer="layer1">     <inkscape:grid        type="xygrid"        id="grid3441" />   </sodipodi:namedview>   <defs      id="defs4">     <linearGradient        id="rainbow"        inkscape:collect="always">       <stop          offset="0"          style="stop-color:#ff0101;stop-opacity:1"          id="stop6" />       <stop          offset="0.04"          style="stop-color:#ff7901;stop-opacity:1"          id="stop8" />       <stop          offset="0.12"          style="stop-color:#fff001;stop-opacity:1"          id="stop10" />       <stop          offset="0.20"          style="stop-color:#96ff01;stop-opacity:1"          id="stop12" />       <stop          offset="0.27"          style="stop-color:#1fff01;stop-opacity:1"          id="stop14" />       <stop          offset="0.34"          style="stop-color:#01ff5b;stop-opacity:1"          id="stop16" />       <stop          offset="0.41"          style="stop-color:#01ffd2;stop-opacity:1"          id="stop18" />       <stop          offset="0.51"          style="stop-color:#01b4ff;stop-opacity:1"          id="stop20" />       <stop          offset="0.56"          style="stop-color:#013dff;stop-opacity:1"          id="stop22" />       <stop          offset="0.67"          style="stop-color:#3d01ff;stop-opacity:1"          id="stop24" />       <stop          offset="0.78"          style="stop-color:#b401ff;stop-opacity:1"          id="stop26" />       <stop          offset="0.87"          style="stop-color:#ff01d2;stop-opacity:1"          id="stop28" />       <stop          offset="0.95"          style="stop-color:#ff015b;stop-opacity:1"          id="stop30" />       <stop          offset="1"          style="stop-color:#ff0101;stop-opacity:1"          id="stop32" />     </linearGradient>     <linearGradient        xlink:href="#rainbow"        id="linearGradientRainbow"        gradientUnits="userSpaceOnUse"        x1="45"        y1="143"        x2="413"        y2="143"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3379"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3381"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3383"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3385"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3387"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3389"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3391"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3393"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3395"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3397"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3399"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />     <linearGradient        inkscape:collect="always"        xlink:href="#rainbow"        id="linearGradient3401"        gradientUnits="userSpaceOnUse"        gradientTransform="matrix(0.98959455,0,0,1.1096972,279.05272,-122.63917)"        x1="45"        y1="143"        x2="413"        y2="143" />   </defs>   <metadata      id="metadata35">     <rdf:RDF>       <cc:Work          rdf:about="">         <dc:format>image/svg+xml</dc:format>         <dc:type            rdf:resource="http://purl.org/dc/dcmitype/StillImage" />         <dc:title></dc:title>         <dc:publisher>           <cc:Agent>             <dc:title></dc:title>           </cc:Agent>         </dc:publisher>         <dc:rights>           <cc:Agent>             <dc:title>AGPL</dc:title>           </cc:Agent>         </dc:rights>         <dc:creator>           <cc:Agent>             <dc:title>positivestuido.co</dc:title>           </cc:Agent>         </dc:creator>         <dc:date>2017</dc:date>         <dc:subject>           <rdf:Bag>             <rdf:li>sketch drawing board real-time canvas surface</rdf:li>           </rdf:Bag>         </dc:subject>       </cc:Work>     </rdf:RDF>   </metadata>   <g      inkscape:label="Layer 1"      inkscape:groupmode="layer"      id="layer1"      transform="translate(-359.92474,-9.2357351)">     <path        inkscape:connector-curvature="0"        id="path4215"        style="fill:url(#linearGradientRainbow);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 348.50715,25.511773 0,5.415323 -1.78128,0 0,-3.417866 -16.30852,0 0,7.412776 18.0898,0 0,11.407687 -24.70029,0 0,-5.415322 1.78127,0 0,3.417866 16.30852,0 0,-7.412776 -18.08979,0 0,-11.407688 24.70029,0 z" />     <path        inkscape:connector-curvature="0"        id="path4217"        style="fill:url(#linearGradient3401);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 380.66401,44.332237 0,1.997456 -9.65843,0 0,-1.997456 3.04795,0 -4.71047,-7.412776 -7.32301,0 0,7.412776 3.95839,0 0,1.997456 -14.48766,0 0,-1.997456 3.91879,0 0,-26.854671 -3.91879,0 0,-1.997453 10.52927,0 0,19.441893 7.28343,0 4.39379,-7.412776 -3.20628,0 0,-1.997457 9.65844,0 0,1.997457 -4.31462,0 -4.94798,8.344922 5.3834,8.478085 4.39378,0 z" />     <path        inkscape:connector-curvature="0"        id="path4219"        style="fill:url(#linearGradient3399);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 384.07627,25.511773 24.70027,0 0,11.407688 -18.08978,0 0,7.412776 16.30851,0 0,-3.417866 1.78127,0 0,5.415322 -24.70027,0 0,-20.81792 z m 6.61049,1.997457 0,7.412776 16.30851,0 0,-7.412776 -16.30851,0 z" />     <path        inkscape:connector-curvature="0"        id="path4221"        style="fill:url(#linearGradient3397);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 429.88582,44.332237 0,1.997456 -14.25015,0 0,-18.820463 -3.91879,0 0,-1.997457 3.91879,0 0,-10.03166 6.61049,0 0,10.03166 7.63966,0 0,1.997457 -7.63966,0 0,16.823007 7.63966,0 z" />     <path        inkscape:connector-curvature="0"        id="path4223"        style="fill:url(#linearGradient3395);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 456.01112,40.914371 1.78128,0 0,5.415322 -24.70029,0 0,-20.81792 24.70029,0 0,5.415323 -1.78128,0 0,-3.417866 -16.30851,0 0,16.823007 16.30851,0 0,-3.417866 z" />     <path        inkscape:connector-curvature="0"        id="path4225"        style="fill:url(#linearGradient3393);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 493.35532,44.332237 0,1.997456 -10.25221,0 0,-1.997456 4.23547,0 0,-16.823007 -16.3085,0 0,16.823007 3.91879,0 0,1.997456 -14.44809,0 0,-1.997456 3.91879,0 0,-26.854671 -3.91879,0 0,-1.997453 10.5293,0 0,10.03166 18.08978,0 0,18.820464 4.23546,0 z" />     <path        inkscape:connector-curvature="0"        id="path4227"        style="fill:url(#linearGradient3391);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 494.28615,54.3639 3.9188,0 0,-26.85467 -3.9188,0 0,-1.997457 29.17326,0 0,20.81792 -18.64395,0 0,8.034207 3.91879,0 0,1.997454 -14.4481,0 0,-1.997454 z m 27.39199,-26.85467 -16.86268,0 0,16.823007 16.86268,0 0,-16.823007 z" />     <path        inkscape:connector-curvature="0"        id="path4229"        style="fill:url(#linearGradient3389);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 552.68831,44.332237 3.91882,0 0,1.997456 -28.61909,0 0,-11.407687 18.08978,0 0,-7.412776 -16.30851,0 0,3.417866 -1.78127,0 0,-5.415323 24.70027,0 0,18.820464 z m -6.61049,0 0,-7.412776 -16.30851,0 0,7.412776 16.30851,0 z" />     <path        inkscape:connector-curvature="0"        id="path4231"        style="fill:url(#linearGradient3387);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 577.98669,25.511773 0,-8.034207 -3.91879,0 0,-1.997453 10.52928,0 0,28.852124 3.91879,0 0,1.997456 -29.17325,0 0,-20.81792 18.64397,0 z m -16.86269,18.820464 16.86269,0 0,-16.823007 -16.86269,0 0,16.823007 z" />     <path        inkscape:connector-curvature="0"        id="path4233"        style="fill:url(#linearGradient3385);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 599.21968,46.329693 -7.60009,0 0,-6.791347 7.60009,0 0,6.791347 z" />     <path        inkscape:connector-curvature="0"        id="path4235"        style="fill:url(#linearGradient3383);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 601.71129,54.3639 3.91879,0 0,-26.85467 -3.91879,0 0,-1.997457 29.17325,0 0,20.81792 -18.64396,0 0,8.034207 3.91878,0 0,1.997454 -14.44807,0 0,-1.997454 z m 27.39197,-26.85467 -16.86268,0 0,16.823007 16.86268,0 0,-16.823007 z" />     <path        inkscape:connector-curvature="0"        id="path4237"        style="fill:url(#linearGradient3381);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 659.83544,25.511773 0,5.370936 -1.78128,0 0,-3.373479 -12.86473,0 0,16.823007 3.91879,0 0,1.997456 -14.44807,0 0,-1.997456 3.91879,0 0,-16.823007 -3.91879,0 0,-1.997457 25.17529,0 z" />     <path        inkscape:connector-curvature="0"        id="path4239"        style="fill:url(#linearGradient3379);fill-opacity:1;stroke:#000000;stroke-width:0.62875605;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"        d="m 687.87312,46.329693 -24.70028,0 0,-20.81792 24.70028,0 0,20.81792 z m -1.78128,-18.820463 -16.3085,0 0,16.823007 16.3085,0 0,-16.823007 z" />   </g> </svg> '

};

// if (window) {
//     window.ICONFIG = ICONFIG;
// }

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3 https://www.gnu.org/licenses/agpl-3.0-standalone.html
/**
 * @source: http://developers.sketchpad.pro/dist/src/polyfill.js
 *
 * Sketchpad.pro
 * {@link http://sketchpad.pro|Sketchpad.pro - drawing board sketch free}
 *
 * @copyright 2016 timescraper.com
 * @version 0.9.1
 * @author timescraper.com
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2016  timescraper.com
 *
 *  Sketchpad.pro - drawing board sketch pad
 *  Copyright (C) 2016  timescraper.com
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 * @file Inputs stack
 *
 * Date: 2016-08-11T14:00Z
 */


if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

(function() {
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        x,
        length,
        currTime,
        timeToCall;

    for(x = 0, length = vendors.length; x < length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = 
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            currTime = new Date().getTime();
            timeToCall = Math.max(0, 16 - (currTime - lastTime));
            lastTime = currTime + timeToCall;
            return window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      // We must check against these specific cases.
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}


if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}


/*global ICONFIG*/
/*global window, alert*/
/*global HTMLElement*/
/*global atob, File*/
function ImagehostForm(config) {
    "use strict";
    this.File = undefined;
    this.config = config;

    if (typeof config.onLoadSuccess === "function") {
        this.onLoadSuccess = config.onLoadSuccess;
    }

    if (typeof config.onLoadFail === "function") {
        this.onLoadFail = config.onLoadFail;
    }

    if (config.textInputEl instanceof HTMLElement) {
        this.textInputEl = config.textInputEl;
    } else {
        throw new Error("ImagehostForm::config.textInputEl must be instanceof HTMLElement");
    }
    if (config.file) {
        this.uploadFile(config.file);
    }
    if (config.url) {
        if (this.isDataURL(config.url)) {
            config.file = this.dataURItoFile(config.url);
            if (config.file) {
                this.uploadFile(config.file);
            } else {
                if (typeof this.onLoadFail === "function") {
                    this.onLoadFail();
                }
                console.error("Error - wrong data url", config.url);
                return this;
            }
        } else {
            var proxyUrl = this.proxyUrl(config.url);
            this.textInputEl.value = proxyUrl;
            if (typeof this.onLoadSuccess === "function") {
                this.onLoadSuccess({url: proxyUrl});
            }
        }
    }

    return this;
}

Object.assign(ImagehostForm.prototype, {
    postPdfUrl: (ICONFIG && ICONFIG.postPdfUrl) || "https://uploader.imagehost.pro:3443/upload",
    postImageUrl: (ICONFIG && ICONFIG.postImageUrl) || "https://uploader.imagehost.pro:3443/upload",
    postWebshotUrl: (ICONFIG && ICONFIG.postWebshotUrl) || "https://uploader.imagehost.pro:3443/webshot?site=",
    proxyImageUrl: (ICONFIG && ICONFIG.proxyImageUrl) || "https://imagehost.pro/proxy",
    proxyExcludedDomain: (ICONFIG && ICONFIG.proxyExcludedDomain) || "imagehost.pro",
    proxyUrl: function proxyUrl(url) {
        "use strict";
        if (!url) {
            return url;
        }
        var parser = document.createElement('a');
        parser.href = url;
        if (String(parser.hostname).indexOf(this.proxyExcludedDomain) !== -1) {
            return url;
        } else {
            return this.proxyImageUrl + "?url=" + encodeURIComponent(url);
        }
    },
    isDataURL: function isDataURL(s) {
        "use strict";
        return !!s.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i);
    },
    dataURItoFile: function dataURItoFile(dataURI) {
        "use strict";
        if (typeof dataURI !== 'string') {
            this.dispatch("error", {type: "upload", message: "dataURI must be a string."});
            return;
        }
        dataURI = dataURI.split(',');
        var type = dataURI[0].split(':')[1].split(';')[0],
            byteString = atob(dataURI[1]),
            byteStringLength = byteString.length,
            arrayBuffer = new ArrayBuffer(byteStringLength),
            intArray = new Uint8Array(arrayBuffer);
        var i;
        for (i = 0; i < byteStringLength; i += 1) {
            intArray[i] = byteString.charCodeAt(i);
        }

        return new File([intArray], "file", {
            type: type
        });
    },

    // fileSelected: function fileSelected() {
    //     "use strict";
    //     var file = document.getElementById('fileToUpload').files[0];
    //     if (file) {
    //         var fileSize = 0;
    //         if (file.size > 1024 * 1024) {
    //             fileSize = String(Math.round(file.size * 100 / (1024 * 1024)) / 100) + 'MB';
    //         } else {
    //             fileSize = String(Math.round(file.size * 100 / 1024) / 100) + 'KB';
    //         }

    //         document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
    //         document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
    //         document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
    //     }
    // },

    setProgressBar: function setProgressBar(el, p) {
        "use strict";
        var width = el.clientWidth * p;
        if (p === 1) {
            this.textInputEl.value = String(this.File.name) + " - " + parseInt(p * 100, 10) + "% - waiting for server";
        } else {
            this.textInputEl.value = String(this.File.name) + " - " + parseInt(p * 100, 10) + "%";
        }
        el.style.backgroundSize = width + "px 100%";
        el.style.backgroundPosition = "0 0";
        el.style.backgroundRepeat = "no-repeat";
    },
    /**
     * Uploads file
     * @param  {[type]} File [description]
     * @return {[type]}      [description]
     */
    uploadFile: function uploadFile(File) {
        "use strict";
        this.File = File;
        var fd = new FormData();
        fd.append("fileToUpload", File);
        var xhr = new XMLHttpRequest();
        var that = this;
        xhr.upload.addEventListener("progress", function (e) {
            that.uploadProgress(e);
        }, false);
        xhr.addEventListener("load", function (e) {
            that.uploadComplete(e);
        }, false);
        xhr.addEventListener("error", function (e) {
            that.uploadFailed(e);
        }, false);
        xhr.addEventListener("abort", function (e) {
            that.uploadCanceled(e);
        }, false);
        this.textInputEl.style.backgroundImage = "repeating-linear-gradient(-45deg, rgba(255,255,255,0) 0px, rgba(255,200,0,0.5) 10px)";
        this.setProgressBar(this.textInputEl, 0);
        // var formData = new FormData();
        // formData.append("thefile", File);

        var postUrl;
        switch (File.type) {
        case "application/pdf":
            postUrl = this.postPdfUrl;
            break;
        default:
            postUrl = this.postImageUrl;
        }
        // alert(File.type);
        xhr.open("POST", postUrl);
        xhr.setRequestHeader("Content-Type", File.type);
        xhr.setRequestHeader("Content-Name", encodeURI(File.name));
        xhr.setRequestHeader("Content-Size", File.size);
        xhr.setRequestHeader("Content-LastModified", File.lastModified);
        xhr.send(File);
        // this.dispatch("upload", xhr);

    },

    uploadProgress: function uploadProgress(e) {
        "use strict";
        // console.log("uploadProgress", e);
        this.setProgressBar(this.textInputEl, e.loaded / e.total);
        // if (evt.lengthComputable) {
        //     var percentComplete = Math.round(evt.loaded * 100 / evt.total);
        //     document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        //     document.getElementById('prog').value = percentComplete;
        // } else {
        //     document.getElementById('progressNumber').innerHTML = 'unable to compute';
        // }
    },

    uploadComplete: function uploadComplete(e) {
        "use strict";
        // console.log("uploadComplete", e, this.File);
        this.setProgressBar(this.textInputEl, 1);
        var response = {};
        try {
            response = JSON.parse(e.target.response);
        } catch (err) {
            console.error("ImagehostForm.js::uploadComplete:Response error", err);
        }

        if (response && response.status === "ok") {
            this.textInputEl.classList.remove("error");
            this.textInputEl.style.backgroundImage = "repeating-linear-gradient(-45deg, rgba(255,255,255,.0) 0px, rgba(100,255,0,0.5) 10px)";
            this.textInputEl.value = String(response.url);
            if (typeof this.onLoadSuccess === "function") {
                this.onLoadSuccess();
            }
        } else {
            this.textInputEl.classList.add("error");
            this.textInputEl.style.backgroundImage = "repeating-linear-gradient(-45deg, rgba(255,255,255,.0) 0px, rgba(255,0,0,0.5) 10px)";
            this.textInputEl.value = this.File.name + "- upload error (" + response.message + ")";
            if (typeof this.onLoadFail === "function") {
                this.onLoadFail();
            }

        }
        // console.log("RRR", response);

        /* This event is raised when the server send back a response */
        // alert(evt.target.responseText);
    },

    uploadFailed: function uploadFailed(e) {
        "use strict";
        console.error("ImagehostForm:uploadFailed", e);
        this.textInputEl.style.backgroundImage = "repeating-linear-gradient(-45deg, rgba(255,255,255,.0) 0px, rgba(255,0,0,0.5) 10px)";
        this.textInputEl.value = this.File.name + "- upload failed";
        if (typeof this.onLoadFail === "function") {
            this.onLoadFail(e);
        }

        // alert("There was an error attempting to upload the file.");
    },

    uploadCanceled: function uploadCanceled(e) {
        "use strict";
        console.error("uploadCanceled", e);
        this.textInputEl.style.backgroundImage = "repeating-linear-gradient(-45deg, rgba(255,255,255,.0) 0px, rgba(255,0,0,0.5) 10px)";
        this.textInputEl.value = this.File.name + "- upload canceled";
        if (typeof this.onLoadFail === "function") {
            this.onLoadFail(e);
        }
        //alert("The upload has been canceled by the user or the browser dropped the connection.");
    }
});






window.ImagehostForm = ImagehostForm;


/*global $*/

$(function () {
    "use strct";
    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        templateP: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        templateX: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title">tooltip</h3><div class="tooltip-inner pover-content"></div></div>'
    });
});

$(function () {
    "use strct";
    $('[data-toggle="popover"]').popover();
});


/*global window, URL, FileReader, Blob, escape, prompt*/

window.GET = (function getQueryVariable() {
    "use strict";
    var query = window.location.search.substring(1),
        vars = query.split('&'),
        i,
        pair,
        result = {};
    for (i = 0; i < vars.length; i += 1) {
        pair = vars[i].split('=');
        if (!result[pair[0]]) {
            result[pair[0]] = decodeURIComponent(pair[1]);
        } else if (typeof(result[pair[0]]) === "object") {
            result[pair[0]].push(decodeURIComponent(pair[1]));
        } else {
            result[pair[0]] = [result[pair[0]], decodeURIComponent(pair[1])];
        }

    }
    return result;
}());

function hashToVariablesFlat(hash) {
    "use strict";
    var i;
    var result = {};
    var hashes = String(hash).split("#").filter(function (val) {
        return val;
    });//get hashes without empty values
    // console.log("hashes", hashes, "e");
    var results = [];
    if (hashes.length > 0) {
        hashes.forEach(function (query) {
            // console.log("query", query);
            var vars = query.split('&'),
                pair,
                obj = {};
            // console.log("vars", vars);
            for (i = 0; i < vars.length; i += 1) {
                pair = vars[i].split('=');
                if (!obj[pair[0]]) {
                    obj[pair[0]] = decodeURIComponent(pair[1]);
                } else if (typeof(obj[pair[0]]) === "object") {
                    obj[pair[0]].push(decodeURIComponent(pair[1]));
                } else {
                    obj[pair[0]] = [obj[pair[0]], decodeURIComponent(pair[1])];
                }
            }
            results.push(obj);

        });
        for (i = 0; i < results.length; i += 1) {
            result = Object.assign(result, results[i]);
        }
        return result;
    }
    return {};
}
window.HASHES = (function getQueryVariable() {
    "use strict";
    var result = hashToVariablesFlat(window.location.hash);
    // console.log("set HASHES", result);
    return result;
}());


function generateUUID() {
    "use strct";
    var d = new Date().getTime();
    var uuid = "yxxxxxxxxxxddxxxxxx";
    return uuid.replace(/[xdy]/g, function (c) {
        var hex = (d + Math.random() * 16) % 16 | 0,
            dec = (d + Math.random() * 10) % 10 | 0,
            sen = (d + Math.random() * 6) % 6 | 0;
        switch (c) {
        case "d":
            return dec;
        case "y":
            return parseInt(10 + sen).toString(16);
        default:
            return hex.toString(16);
        }

    }).toUpperCase();
}
window.generateUUID = generateUUID;

function generatePASSWD(length) {
    "use strct";
    var alphabet = "abcdefghijklmnopqrstuwxyz1234567890";
    var password = "";
    var i;
    for (i = 0; i < length; i += 1) {
        password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return password;

}
window.generatePASSWD = generatePASSWD;

function bytesToSize(bytes) {
    "use strict";
    bytes = parseInt(bytes, 10);
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) {
        return "0 Byte";
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
window.bytesToSize = bytesToSize;

function escapeHtml(text) {
    'use strict';
    if (!text) {
        text = "";
    }
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>');
}
window.escapeHtml = escapeHtml;
/**
 * Load data from file
 *
 * @param  {string}   accept   - accepted files
 * @param  {function} callback - on load callback
 */
function loadFile(accept, callback) {
    "use strict";
    var fileInput = document.createElement("input");
    fileInput.style.display = "none";
    function loadSubfile(file) {
        // alert("load");
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            // console.log("LoadFile", evt);
            // if (evt.target.readyStatem === FileReader.DONE || evt.target.readyStatem === FileReader.DONE) { // DONE == 2
            callback(evt.target.result, file);
            // }
        };
        reader.readAsBinaryString(file);
    }
    function inputChange(evt) {
        var files = evt.target.files;
        var i;
        for (i = 0; i < files.length; i += 1) {
            // console.log("files[i]", files[i]);
            loadSubfile(files[i]);
        }
    }
    document.body.appendChild(fileInput);
    function removeInputFromDom() {
        document.body.removeChild(fileInput);
        window.removeEventListener("focus", removeInputFromDom);
    }
    window.addEventListener("focus", removeInputFromDom);
    fileInput.type = "file";
    fileInput.accept = accept;
    fileInput.addEventListener("change", inputChange, false);
    fileInput.click();
}
window.loadFile = loadFile;

/**
 * Save data as file
 *
 * @param  {string} data - data
 * @param  {string} filename - filename
 * @param  {string} type - mimetype
 * @return {[type]}
 */
function saveFile(data, filename, type) {
    "use strict";
    var filesize = data.toString().length;
    filename = prompt("File size " + bytesToSize(filesize) + ", save?", filename);
    if (!filename) {
        return;
    }
    var a = document.createElement("a"),
        file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) {// IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    } else { // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            //clear save prompt
            window.onbeforeunload = null;
        }, 0);
    }
}
window.saveFile = saveFile;

/**
 * Decode token string
 * @param  {string} token - token
 * @return {object} - valid config
 */
function readToken(token) {
    "use strict";
    var config = String(token).match(/([A-F][0-F]{11})([0-9]{2})([0-F]{6})/);

    //support non-standard tokens
    if (!config) {
        config = {"1": "default", "2": 0};
    }

    var startPort = 8040;
    var serverCount = 8;
    var result = {
        protocol: "wss://",
        port: startPort + parseInt(config[2] % serverCount, 10) || startPort,
        host: String(config[1][0]).toLowerCase() + ".server.sketchpad.pro",
        token: token,
        timestamp: Date.now()
    };
    result.uri = result.protocol + result.host + ":" + result.port;
    return result;
}

function getServerAddress(token) {
    "use strict";
    return readToken(token).uri;
}
window.getServerAddress = getServerAddress;

function isURL(str) {
    "use strict";
    var pattern = new RegExp('^(https?:\\/\\/)' +// protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +// domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' +// OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +// port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' +// query string
            '(\\#[-a-z\\d_]*)?$', 'i');// fragment locator
    return pattern.test(str);
}
window.isURL = isURL;


function isMac() {
    "use strct";
    return (navigator.appVersion.indexOf("Mac") !== -1);
}
window.isMac = isMac;
window.isMacFlag = isMac();
function isMobile() {
    "use strct";
    return (window.orientation !== undefined);
}
window.isMobile = isMobile;

function osDetect() {
    "use strct";
    if (navigator.appVersion.indexOf("iPod") !== -1) {
        document.body.classList.add("os-iOS");
    } else if (navigator.appVersion.indexOf("iPad") !== -1) {
        document.body.classList.add("os-iOS");
    } else if (navigator.appVersion.indexOf("iPhone") !== -1) {
        document.body.classList.add("os-iOS");
    } else if (navigator.appVersion.indexOf("Android") !== -1) {
        document.body.classList.add("os-Android");
    } else if (navigator.appVersion.indexOf("Win") !== -1) {
        document.body.classList.add("os-Windows");
    } else if (navigator.appVersion.indexOf("Mac") !== -1) {
        document.body.classList.add("os-MacOS");
    } else if (navigator.appVersion.indexOf("X11") !== -1) {
        document.body.classList.add("os-Linux");//os-UNIX
    } else if (navigator.appVersion.indexOf("Linux") !== -1) {
        document.body.classList.add("os-Linux");
    }
    // document.body.classList.add("os-Windows");
    // document.body.classList.add("os-Linux");

}
osDetect();

/*global $, window, Sketchpad, WebSocketJsonWrapper, ImagehostForm, alert, generateUUID, generatePASSWD*/
/*global WebSocket*/

$("#draw-photo").click(function () {
    "use strict";
    var sketchpadUrl = generateUUID() + ":" + generatePASSWD(8);
    var params = [];
    // params.push("backgroundImage=" + document.getElementById("backgroundImagePhoto").value);
    var imageUrl = document.getElementById("backgroundImagePhoto").value;
    if (imageUrl) {
        if (imageUrl.indexOf("imagehost.pro") === -1) {
            imageUrl = "https://imagehost.pro/proxy.php?url=" + encodeURIComponent(imageUrl);
        }
        params.push("backgroundImage=" + encodeURIComponent(imageUrl));
    }
    if (params.length) {
        sketchpadUrl += "#" + params.join("&");
    }
    window.location.href = "./" + sketchpadUrl;
});

$("#draw-pdf").click(function () {
    "use strict";
    var sketchpadUrl = generateUUID() + ":" + generatePASSWD(8);
    var params = [];
    // params.push("backgroundImage=" + document.getElementById("backgroundImagePdf").value);
    var url = document.getElementById("backgroundImagePdf").value;
    if (url.indexOf("imagehost.pro") === -1) {
        url = "https://imagehost.pro/proxy.php?url=" + encodeURIComponent(url);
    }
    params.push("backgroundImage=" + encodeURIComponent(url));
    if (params) {
        sketchpadUrl += "#" + params.join("&");
    }
    window.location.href = "./" + sketchpadUrl;
});

// $("#draw-colouring").click(function () {
//     "use strict";
//      var sketchpadUrl = generateUUID() + ":" + generatePASSWD(8);
//     var params = [];
//     var url = document.getElementById("foregroundImage").value;
//     if (url.indexOf("imagehost.pro") === -1) {
//         url = "//imagehost.pro/proxy.php?url=" + encodeURIComponent(url);
//     }
//     params.push("foregroundImage=" + encodeURIComponent(url));
//     params.push("defaultTool=colouring");
//     if (params) {
//         sketchpadUrl += "?" + params.join("&");
//     }
//     window.location.href = sketchpadUrl;
// });

$("#draw-googlemaps").click(function () {
    "use strict";
    var sketchpadUrl = generateUUID() + ":" + generatePASSWD(8);
    var locationStr = $("#draw-googlemaps-location").val();
    var params = [];
    params.push("backgroundType=googlemaps");
    params.push("backgroundMapsLocation=" + locationStr);
    params.push("backgroundMapsZoom=15");
    if (params) {
        sketchpadUrl += "#" + params.join("&");
    }
    window.location.href = "./" + sketchpadUrl;
});

$("#backgroundImagePhoto-browse").click(function () {
    "use strict";
    $("#backgroundImagePhotoFile").click();
    $("#carousel-main").carousel('pause');
});

$("#backgroundImagePdf-browse").click(function () {
    "use strict";
    $("#backgroundImagePdfFile").click();
    $("#carousel-main").carousel('pause');
});

// $("#foregroundImage-browse").click(function () {
//     "use strict";
//     $("#foregroundImageFile").click();
//     $("#carousel-main").carousel('pause');
// });


$("#carousel-main").find('input').each(function () {
    "use strict";
    $(this).click(function () {
        $("#carousel-main").carousel('pause');
    });
});





//load background photo from file
// function openForegroundFile(file) {
//     "use strict";
//     console.log("openForegroundFile", file);
//     window.tmp = new Imagehost({
//         textInputEl: document.getElementById("foregroundImage"),
//         file: file,
//         filename: file.name,
//         onLoadSuccess: function () {
//             $("#draw-colouring").click();
//         }
//     });

// }
// function loadForegroundFromFile(evt) {
//     "use strict";
//     var files = evt.target.files; // FileList object
//     var i,
//         f;
//     for (i = 0; i < files.length; i += 1) {
//         f = files[i];
//         console.log("readingFile", f);
//         openForegroundFile(f);
//     }
// }

// document.getElementById("foregroundImageFile").addEventListener("change", loadForegroundFromFile, false);
// document.getElementById("foregroundImageFile").addEventListener("click", function () {
//     "use strict";
//     this.value = "";
// }, false);

// function loadForegroundFromDrop(evt) {
//     "use strict";
//     document.getElementById("foregroundImage").style.outline = "none";
//     evt.stopPropagation();
//     evt.preventDefault();
//     var files = evt.dataTransfer.files; // FileList object
//     var i,
//         f;
//     for (i = 0; i < files.length; i += 1) {
//         f = files[i];
//         console.log("readingFile", f);
//         openForegroundFile(f);
//     }
// }
// document.getElementById("foregroundImage").addEventListener("drop", loadForegroundFromDrop);


//load background photo from file
function openBackgroundPhotoFile(file) {
    "use strict";
    // console.log("openBackgroundPhotoFile", file);
    document.getElementById("draw-photo").disabled = true;

    window.tmp = new ImagehostForm({
        textInputEl: document.getElementById("backgroundImagePhoto"),
        file: file,
        filename: encodeURI(file.name),
        onLoadSuccess: function () {
            $("#draw-photo").click();
        },
        onLoadFail: function () {
            document.getElementById("draw-photo").disabled = false;
        }
    });

}
function loadBackgroundPhotoFromFile(evt) {
    "use strict";
    var files = evt.target.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        // console.log("readingFile", f);
        openBackgroundPhotoFile(f);
    }
}
document.getElementById("backgroundImagePhotoFile").addEventListener("change", loadBackgroundPhotoFromFile, false);
function onBackgroundImagePhotoInputChange() {
    "use strict";
    console.log("onBackgroundImagePhotoInputChange", document.getElementById("backgroundImagePhoto").value);
    if (window.isURL(document.getElementById("backgroundImagePhoto").value)) {
        document.getElementById("draw-photo").disabled = false;
    } else {
        document.getElementById("draw-photo").disabled = true;
    }
}
document.getElementById("backgroundImagePhoto").addEventListener("change", onBackgroundImagePhotoInputChange, false);
document.getElementById("backgroundImagePhoto").addEventListener("keyup", onBackgroundImagePhotoInputChange, false);

document.getElementById("backgroundImagePhotoFile").addEventListener("click", function () {
    "use strict";
    this.value = "";
}, false);

function openBackgroundPhotoDrop(evt) {
    "use strict";
    document.getElementById("backgroundImagePhoto").style.outline = "none";
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        openBackgroundPhotoFile(f);
    }
}
document.getElementById("backgroundImagePhoto").addEventListener("drop", openBackgroundPhotoDrop);


//load background pdf from file
function openBackgroundPdfFile(file) {
    "use strict";
    // console.log("openBackgroundPdfFile", file);
    document.getElementById("draw-pdf").disabled = true;
    window.tmp = new ImagehostForm({
        textInputEl: document.getElementById("backgroundImagePdf"),
        file: file,
        filename: encodeURI(file.name),
        onLoadSuccess: function () {
            $("#draw-pdf").click();
        },
        onLoadFail: function () {
            document.getElementById("draw-pdf").disabled = false;
        }
    });

}
function loadBackgroundPdfFromFile(evt) {
    "use strict";
    var files = evt.target.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        // console.log("readingFile", f);
        openBackgroundPdfFile(f);
    }
}
function onBackgroundImagePdfChange() {
    "use strict";
    if (window.isURL(document.getElementById("backgroundImagePdf").value)) {
        document.getElementById("draw-pdf").disabled = false;
    } else {
        // document.getElementById("draw-pdf").disabled = true;
        document.getElementById("draw-pdf").disabled = false;
    }
}
document.getElementById("backgroundImagePdf").addEventListener("change", onBackgroundImagePdfChange, false);
onBackgroundImagePdfChange();


document.getElementById("backgroundImagePdfFile").addEventListener("change", loadBackgroundPdfFromFile, false);
document.getElementById("backgroundImagePdfFile").addEventListener("click", function () {
    "use strict";
    this.value = "";
}, false);

function loadBackgroundPdfFromDrop(evt) {
    "use strict";
    document.getElementById("backgroundImagePdfFile").style.outline = "none";
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        openBackgroundPdfFile(f);
    }
}
document.getElementById("backgroundImagePdfFile").addEventListener("drop", loadBackgroundPdfFromDrop);





document.addEventListener("paste", function (event) {
    "use strict";
    var items = (event.clipboardData && event.clipboardData.items) || (event.originalEvent.clipboardData && event.originalEvent.clipboardData.items);
    // console.log(JSON.stringify(items)); // will give you the mime types
    Object.keys(items).forEach(function (index) {
        var item = items[index];
        if (item.kind === 'file') {
            var file = item.getAsFile();
            try {
                file.name = "Clipboard";
            } catch (e) {
                console.log("ignore readonly", e);
            }

            // if (file.type)
            // console.log(file);
            if (document.activeElement) {
                switch (document.activeElement.id) {
                // case "foregroundImage":
                //     openForegroundFile(file);
                //     break;
                case "backgroundImagePhoto":
                    openBackgroundPhotoFile(file);
                    break;
                case "backgroundImagePdf":
                    openBackgroundPdfFile(file);
                    break;
                }
            }
        }
    });
});

window.addEventListener("dragover", function () {
    "use strict";
    $("#carousel-main").carousel('pause');
    document.getElementById("backgroundImagePhoto").style.outline = "2px dotted white";
});
document.addEventListener("dragleave", function () {
    "use strict";
    document.getElementById("backgroundImagePhoto").style.outline = "none";
});
document.addEventListener("drop", function () {
    "use strict";
    document.getElementById("backgroundImagePhoto").style.outline = "none";
});


$("#carousel-main").carousel({
    interval: 1000 * 6
});
$("#carousel-main").click(function () {
    "use strict";
    $("#carousel-main").carousel('pause');
});
// //load foreground from file
// function openForegroundFile(file) {
//     "use strict";
//     console.log("openForegroundFile", file);
//     window.tmp = new Imagehost({
//         textInputEl: document.getElementById("foregroundImage"),
//         file: file,
//         filename: file.name
//     });
// }
// function loadForegroundFromFile(evt) {
//     "use strict";
//     var files = evt.target.files; // FileList object
//     var i,
//         f;
//     for (i = 0; i < files.length; i += 1) {
//         f = files[i];
//         console.log("readingFile", f);
//         openForegroundFile(f);
//     }
// }
// document.getElementById("foregroundImageFile").addEventListener("change", loadForegroundFromFile, false);
// document.getElementById("foregroundImageFile").addEventListener("click", function () {
//     "use strict";
//     this.value = "";
// }, false);


// var ws1 = new WebSocketJsonWrapper();
// window.sketchpad1 = new Sketchpad({
//     // backgroundImage: "http://downloadwallpaper.org/wp-content/uploads/2016/06/mandala-wallpaper8.jpg",
//     containerEl: document.getElementById("first-slide"),
//     readOnly: true,
//     ws: ws1
// });
// var ws2 = new WebSocketJsonWrapper();
// window.sketchpad2 = new Sketchpad({
//     // backgroundImage: "http://downloadwallpaper.org/wp-content/uploads/2016/06/mandala-wallpaper8.jpg",
//     containerEl: document.getElementById("second-slide"),
//     readOnly: true,
//     ws: ws2
// });

// var ws3 = new WebSocketJsonWrapper();
// window.sketchpad2 = new Sketchpad({
//     // backgroundImage: "http://downloadwallpaper.org/wp-content/uploads/2016/06/mandala-wallpaper8.jpg",
//     containerEl: document.getElementById("third-slide"),
//     readOnly: true,
//     ws: ws3
// });

// ws1.emitFile("sketches/slide01.json");
// ws2.emitFile("sketches/slide02.json");
// ws3.emitFile("sketches/slide01.json");



// window.updateEmbedCode();


/*global window, $, generateUUID, generatePASSWD*/

$("#rnd-token").click(function () {
    "use strct";
    $("#token").val(generateUUID());
});

$("#rnd-password").click(function () {
    "use strct";
    $("#password").val(generatePASSWD(8));
});

$("#advancedCheckbox").change(function () {
    "use strict";
    // console.log("adceck", this);
    if ($(this).prop("checked")) {
        $("#advanced").slideDown("fast");
    } else {
        $("#advanced").slideUp("fast");
    }
});

$("#advancedCheckbox").change();

function openSketchpad() {
    "use strct";
    if (!window.sketchConfig) {
        window.sketchConfig = {};
    }
    window.sketchConfig.token = document.getElementById("token").value;
    window.sketchConfig.password = document.getElementById("password").value;
    $("#open-sketchpad").attr("disabled", true);
    var sketchpadUrl = "./" + $("#token").val();
    // params.push("backgroundColor=rgba(255,255,255,1)");
    if ($("#password").val()) {
        sketchpadUrl += ":" + $("#password").val();
    }
    // alert(sketchpadUrl);
    window.location.href = sketchpadUrl;
    return false;
}
$("#open-sketchpad").click(openSketchpad);
$("#open-sketchpad").attr("disabled", false);

$("#rnd-token").click();
$("#rnd-password").click();


