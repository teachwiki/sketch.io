/**
 * Integration config
 */

/*global window*/

var ICONFIG = {
    tmpVersion: 1570891429565,
    dataCacheName: "data-v3",
    cacheName: "https://teachwiki.github.io/sketch.io/",
    domain: "https://teachwiki.github.io/sketch.io/",
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
    exitUrl: "/sketch.io/sketchboard.html",
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

/*global window*/
function Transform(s, r, tx, ty) {
    "use strict";

    // Public, to allow user access
    this.s = s;
    this.r = r;
    this.tx = tx;
    this.ty = ty;

    this.equals = function (t) {
        return (s === t.s && r === t.r && tx === t.tx && ty === t.ty);
    };

    this.getMatrix = function () {
        // Get the transformation matrix in the format common to
        // many APIs, including:
        // - kld-affine
        //
        // Return
        //     object o, having properties a, b, c, d, e, f:
        //     [ s    -r    tx ]     [ o.a    o.c    o.e ]
        //     [ r     s    ty ] = [ o.b    o.d    o.f ]
        //     [ 0     0     1 ]     [    -        -        -    ]
        return {a: s, b: r, c: -r, d: s, e: tx, f: ty};
    };

    this.getRotation = function () {
        // in rads
        return Math.atan2(r, s);
    };

    this.getScale = function () {
        // scale multiplier
        return Math.sqrt(r * r + s * s);
    };

    this.getTranslation = function () {
        // Current translation as a point.
        return [tx, ty];
    };

    this.toArray = function () {
        // Return an array representation of the transformation.
        //
        // Together with nudged.createFromArray(...), this method makes an easy
        // serialization and deserialization to and from JSON possible.
        return [s, r, tx, ty];
    };


    // Methods that return new points

    this.transform = function (p) {
        // p
        //     point [x, y] or array of points [[x1,y1], [x2, y2], ...]

        if (typeof p[0] === 'number') {
            // Single point
            return [s * p[0] - r * p[1] + tx, r * p[0] + s * p[1] + ty];
        } // else

        var i, c = [];
        for (i = 0; i < p.length; i += 1) {
            c.push([s * p[i][0] - r * p[i][1] + tx, r * p[i][0] + s * p[i][1] + ty]);
        }
        return c;
    };


    // Methods that return new Transformations

    this.inverse = function () {
        // Return inversed transform instance
        // See note 2015-10-26-16-30
        var det = s * s + r * r;
        // Test if singular transformation. These might occur when all the range
        // points are the same, forcing the scale to drop to zero.
        var eps = 0.00000001;
        if (Math.abs(det) < eps) {
            throw new Error('Singular transformations cannot be inversed.');
        }
        var shat = s / det;
        var rhat = -r / det;
        var txhat = (-s * tx - r * ty) / det;
        var tyhat = (r * tx - s * ty) / det;
        return new Transform(shat, rhat, txhat, tyhat);
    };

    this.translateBy = function (dx, dy) {
        return new Transform(s, r, tx + dx, ty + dy);
    };

    this.scaleBy = function (multiplier, pivot) {
        // Parameter
        //     multiplier
        //     pivot
        //         optional, a [x, y] point
        var m, x, y;
        m = multiplier; // alias
        if (pivot === undefined) {
            x = 0;
            y = 0;
        } else {
            x = pivot[0];
            y = pivot[1];
        }
        return new Transform(m * s, m * r, m * tx + (1 - m) * x, m * ty + (1 - m) * y);
    };

    this.rotateBy = function (radians, pivot) {
        // Parameter
        //     radians
        //         from positive x to positive y axis
        //     pivot
        //         optional, a [x, y] point
        var co, si, x, y, shat, rhat, txhat, tyhat;
        co = Math.cos(radians);
        si = Math.sin(radians);
        if (pivot === undefined) {
            x = 0;
            y = 0;
        } else {
            x = pivot[0];
            y = pivot[1];
        }
        shat = s * co - r * si;
        rhat = s * si + r * co;
        txhat = (tx - x) * co - (ty - y) * si + x;
        tyhat = (tx - x) * si + (ty - y) * co + y;
        return new Transform(shat, rhat, txhat, tyhat);
    };


    this.multiplyBy = function (transform) {
        // Multiply this transformation matrix A
        // from the right with the given transformation matrix B
        // and return the result AB

        // For reading aid:
        // s -r tx    t.s -r tx
        // r    s ty *    r    s ty
        // 0    0    1        0    0    1
        var t = transform; // alias
        var shat = s * t.s - r * t.r;
        var rhat = s * t.r + r * t.s;
        var txhat = s * t.tx - r * t.ty + tx;
        var tyhat = r * t.tx + s * t.ty + ty;
        return new Transform(shat, rhat, txhat, tyhat);
    };
}

Transform.IDENTITY = new Transform(1, 0, 0, 0);
window.Transform = Transform;
// module.exports = Transform;

/*global window*/
/*global Transform*/
// var Transform = require('./Transform');


function estimateT(domain, range) {
    "use strict";
    var i, N, a1, b1, c1, d1, txhat, tyhat;

    N = Math.min(domain.length, range.length);
    a1 = 0;
    b1 = 0;
    c1 = 0;
    d1 = 0;

    if (N < 1) {
        // Assume identity transform be the best guess
        return Transform.IDENTITY;
    }

    for (i = 0; i < N; i += 1) {
        a1 += domain[i][0];
        b1 += domain[i][1];
        c1 += range[i][0];
        d1 += range[i][1];
    }

    txhat = (c1 - a1) / N;
    tyhat = (d1 - b1) / N;

    return new Transform(1, 0, txhat, tyhat);
}
window.estimateT = estimateT;
/*global window*/
/*global Transform*/
//var Transform = require('./Transform');

function estimateS(domain, range, pivot) {
    "use strict";
    var i, N, D, a0, b0, a, b, c, d, ac, bd, aa, bb, shat, tx, ty;

    N = Math.min(domain.length, range.length);
    ac = 0;
    bd = 0;
    aa = 0;
    bb = 0;

    if (pivot === undefined) {
        a0 = 0;
        b0 = 0;
    } else {
        a0 = pivot[0];
        b0 = pivot[1];
    }

    for (i = 0; i < N; i += 1) {
        a = domain[i][0] - a0;
        b = domain[i][1] - b0;
        c = range[i][0] - a0;
        d = range[i][1] - b0;
        ac += a * c;
        bd += b * d;
        aa += a * a;
        bb += b * b;
    }

    D = aa + bb;

    if (D === 0) {
        // All domain points equal the pivot.
        // Identity transform is then only solution.
        // D === 0 also if N === 0.
        // Assume identity transform to be the best guess
        return Transform.IDENTITY;
    }

    // Prevent negative scaling because it would be same as positive scaling
    // and rotation => limit to zero
    shat = Math.max(0, (ac + bd) / D);
    tx = (1 - shat) * a0;
    ty = (1 - shat) * b0;

    return new Transform(shat, 0, tx, ty);
}

window.estimateS = estimateS;
/*global window*/
/*global Transform*/
//var Transform = require('./Transform');

function estimateR(domain, range, pivot) {
    "use strict";
    var i, N, D, a0, b0, a, b, c, d, ac, ad, bc, bd, shat, rhat, tx, ty;

    N = Math.min(domain.length, range.length);
    ac = 0;
    ad = 0;
    bc = 0;
    bd = 0;

    if (pivot === undefined) {
        a0 = 0;
        b0 = 0;
    } else {
        a0 = pivot[0];
        b0 = pivot[1];
    }

    for (i = 0; i < N; i += 1) {
        a = domain[i][0] - a0;
        b = domain[i][1] - b0;
        c = range[i][0] - a0;
        d = range[i][1] - b0;
        ac += a * c;
        ad += a * d;
        bc += b * c;
        bd += b * d;
    }

    var p, q;
    p = ac + bd;
    q = ad - bc;

    D = Math.sqrt(p * p + q * q);

    if (D === 0) {
        // D === 0
        // <=> q === 0 and p === 0.
        // <=> ad === bc and ac === -bd
        // <=> domain in pivot OR range in pivot OR yet unknown cases
        //         where the angle cannot be determined.
        // D === 0 also if N === 0.
        // Assume identity transform to be the best guess
        return Transform.IDENTITY;
    }

    shat = p / D;
    rhat = q / D;
    tx = a0 - a0 * shat + b0 * rhat;
    ty = b0 - a0 * rhat - b0 * shat;

    return new Transform(shat, rhat, tx, ty);
}
window.estimateR = estimateR;
/*global window*/
/*global Transform*/
// var Transform = require('./Transform');

function estimateTS(domain, range) {
    "use strict";
    // Parameters
    //     domain
    //         array of [x, y] 2D arrays
    //     range
    //         array of [x, y] 2D arrays

    // Alias
    var X = domain;
    var Y = range;

    // Allow arrays of different length but
    // ignore the extra points.
    var N = Math.min(X.length, Y.length);

    var i, a, b, c, d, a1, b1, c1, d1, a2, b2, ac, bd;
    a1 = 0;
    b1 = 0;
    c1 = 0;
    d1 = 0;
    a2 = 0;
    b2 = 0;
    ac = 0;
    bd = 0;
    for (i = 0; i < N; i += 1) {
        a = X[i][0];
        b = X[i][1];
        c = Y[i][0];
        d = Y[i][1];
        a1 += a;
        b1 += b;
        c1 += c;
        d1 += d;
        a2 += a * a;
        b2 += b * b;
        ac += a * c;
        bd += b * d;
    }

    // Denominator.
    var N2 = N * N;
    var a12 = a1 * a1;
    var b12 = b1 * b1;
    var p = a2 + b2;
    var q = ac + bd;
    var D = N2 * p - N * (a12 + b12);

    if (D === 0) {
        // N === 0 => D === 0
        if (N === 0) {
            return new Transform(1, 0, 0, 0);
        } // else
        // D === 0 <=> all the domain points are the same
        // We guess the translation to the mean of the range to be the best guess.
        // Here a, b represents the mean of domain points.
        return new Transform(1, 0, (c1 / N) - a, (d1 / N) - b);
    }

    // Estimators
    var shat = (N2 * q - N * (a1 * c1 + b1 * d1)) / D;
    var txhat = (-N * a1 * q + N * c1 * p - b12 * c1 + a1 * b1 * d1) / D;
    var tyhat = (-N * b1 * q + N * d1 * p - a12 * d1 + a1 * b1 * c1) / D;

    return new Transform(shat, 0, txhat, tyhat);
}
window.estimateTS = estimateTS;
/*global window*/
/*global Transform*/
// var Transform = require('./Transform');


function estimateTR(domain, range) {
    "use strict";
    // Parameters
    //     domain
    //         array of [x, y] 2D arrays
    //     range
    //         array of [x, y] 2D arrays

    // Alias
    var X = domain;
    var Y = range;

    // Allow arrays of different length but
    // ignore the extra points.
    var N = Math.min(X.length, Y.length);

    var i, a, b, c, d, a1, b1, c1, d1, ac, ad, bc, bd;
    a1 = 0;
    b1 = 0;
    c1 = 0;
    d1 = 0;
    ac = 0;
    ad = 0;
    bc = 0;
    bd = 0;
    for (i = 0; i < N; i += 1) {
        a = X[i][0];
        b = X[i][1];
        c = Y[i][0];
        d = Y[i][1];
        a1 += a;
        b1 += b;
        c1 += c;
        d1 += d;
        ac += a * c;
        ad += a * d;
        bc += b * c;
        bd += b * d;
    }

    // Denominator.
    var v = N * (ad - bc) - a1 * d1 + b1 * c1;
    var w = N * (ac + bd) - a1 * c1 - b1 * d1;
    var D = Math.sqrt(v * v + w * w);

    if (D === 0) {
        // N === 0 => D === 0
        if (N === 0) {
            return new Transform(1, 0, 0, 0);
        } // else
        // D === 0 <=> undecidable
        // We guess the translation to the mean of the range to be the best guess.
        // Here a, b represents the mean of domain points.
        return new Transform(1, 0, (c1 - a1) / N, (d1 - b1) / N);
    }

    // Estimators
    var shat = w / D;
    var rhat = v / D;
    var txhat = (-a1 * shat + b1 * rhat + c1) / N;
    var tyhat = (-a1 * rhat - b1 * shat + d1) / N;

    return new Transform(shat, rhat, txhat, tyhat);
}
window.estimateTR = estimateTR;

/*global window*/
/*global Transform*/
//var Transform = require('./Transform');

function estimateSR(domain, range, pivot) {
    "use strict";
    // Estimate optimal transformation given the domain and the range
    // so that the pivot point remains the same.
    //
    // Use cases
    //     - transform an image that has one corner fixed with a pin.
    //     - allow only scale and rotation by fixing the middle of the object
    //         to transform.
    //
    // Parameters
    //     domain, an array of [x, y] points
    //     range, an array of [x, y] points
    //     pivot, optional
    //         the point [x, y] that must remain constant in the tranformation.
    //         Defaults to origo [0, 0]
    //
    //
    var X, Y, N, s, r, tx, ty;

    // Optional pivot
    if (pivot === undefined) {
        pivot = [0, 0];
    }

    // Alias
    X = domain;
    Y = range;

    // Allow arrays of different length but
    // ignore the extra points.
    N = Math.min(X.length, Y.length);

    var v = pivot[0];
    var w = pivot[1];

    var i, a, b, c, d;
    var a2, b2;
    a2 = 0;
    b2 = 0;
    var ac, bd, bc, ad;
    ac = 0;
    bd = 0;
    bc = 0;
    ad = 0;

    for (i = 0; i < N; i += 1) {
        a = X[i][0] - v;
        b = X[i][1] - w;
        c = Y[i][0] - v;
        d = Y[i][1] - w;
        a2 += a * a;
        b2 += b * b;
        ac += a * c;
        bd += b * d;
        bc += b * c;
        ad += a * d;
    }

    // Denominator = determinant.
    // It becomes zero iff N = 0 or X[i] = [v, w] for every i in [0, n).
    // In other words, iff all the domain points are under the fixed point or
    // there is no domain points.
    var den = a2 + b2;

    var eps = 0.00000001;
    if (Math.abs(den) < eps) {
        // The domain points are under the pivot or there is no domain points.
        // We assume identity transform be the simplest guess. It keeps
        // the domain points under the pivot if there is some.
        return new Transform(1, 0, 0, 0);
    }

    // Estimators
    s = (ac + bd) / den;
    r = (-bc + ad) / den;
    tx = w * r - v * s + v;
    ty = -v * r - w * s + w;

    return new Transform(s, r, tx, ty);
}

window.estimateSR = estimateSR;
/*global window*/
/*global Transform*/
// var Transform = require('./Transform');

function estimateTSR(domain, range) {
    "use strict";
    // Parameters
    //   domain
    //     array of [x, y] 2D arrays
    //   range
    //     array of [x, y] 2D arrays
    var X, Y, N, s, r, tx, ty;

    // Alias
    X = domain;
    Y = range;

    // Allow arrays of different length but
    // ignore the extra points.
    N = Math.min(X.length, Y.length);

    // If length is zero, no estimation can be done. We choose the indentity
    // transformation be the best quess.
    if (N === 0) {
        return new Transform(1, 0, 0, 0);
    } // else

    var i, a, b, c, d;
    var a1 = 0;
    var b1 = 0;
    var c1 = 0;
    var d1 = 0;
    var a2 = 0;
    var b2 = 0;
    var ad = 0;
    var bc = 0;
    var ac = 0;
    var bd = 0;
    for (i = 0; i < N; i += 1) {
        a = X[i][0];
        b = X[i][1];
        c = Y[i][0];
        d = Y[i][1];
        a1 += a;
        b1 += b;
        c1 += c;
        d1 += d;
        a2 += a * a;
        b2 += b * b;
        ad += a * d;
        bc += b * c;
        ac += a * c;
        bd += b * d;
    }

    // Denominator.
    // It is zero iff X[i] = X[j] for every i and j in [0, n).
    // In other words, iff all the domain points are the same or there is only one domain point.
    var den = N * a2 + N * b2 - a1 * a1 - b1 * b1;

    var eps = 0.00000001;
    if (-eps < den && den < eps) {
        // The domain points are the same.
        // We guess the translation to the mean of the range to be the best guess.
        // Here a, b represents the mean of domain points.
        return new Transform(1, 0, (c1 / N) - a, (d1 / N) - b);
    }

    // Estimators
    s = (N * (ac + bd) - a1 * c1 - b1 * d1) / den;
    r = (N * (ad - bc) + b1 * c1 - a1 * d1) / den;
    tx = (-a1 * (ac + bd) + b1 * (ad - bc) + a2 * c1 + b2 * c1) / den;
    ty = (-b1 * (ac + bd) - a1 * (ad - bc) + a2 * d1 + b2 * d1) / den;

    return new Transform(s, r, tx, ty);
}
window.estimateTSR = estimateTSR;

/*global window*/
/*global Transform,estimateT,estimateS,estimateR,estimateTS,estimateTR,estimateSR,estimateTSR*/
/*

*/
// exports.Transform = require('./lib/Transform');
// exports.estimateT = require('./lib/estimateT');
// exports.estimateS = require('./lib/estimateS');
// exports.estimateR = require('./lib/estimateR');
// exports.estimateTS = require('./lib/estimateTS');
// exports.estimateTR = require('./lib/estimateTR');
// exports.estimateSR = require('./lib/estimateSR');
// exports.estimateTSR = require('./lib/estimateTSR');
// exports.version = require('./lib/version');
var nudged = {
    Transform: Transform,
    estimateT: estimateT,
    estimateS: estimateS,
    estimateR: estimateR,
    estimateTS: estimateTS,
    estimateTR: estimateTR,
    estimateSR: estimateSR,
    estimateTSR: estimateTSR
};
nudged.create = function (scale, rotation, tx, ty) {
    "use strict";
    // Create a nudged.Transform instance by using more meaningful parameters
    // than directly calling 'new nudged.Transform(...)'
    //
    // Parameters:
    //     scale
    //         number, the scaling factor
    //     rotation
    //         number, rotation in radians from positive x axis towards pos. y axis.
    //     tx
    //         translation toward pos. x
    //     ty
    //         translation toward pos. y

    if (typeof scale !== 'number') {
        scale = 1;
    }
    if (typeof rotation !== 'number') {
        rotation = 0;
    }
    if (typeof tx !== 'number') {
        tx = 0;
    }
    if (typeof ty !== 'number') {
        ty = 0;
    }

    var s = scale * Math.cos(rotation);
    var r = scale * Math.sin(rotation);
    return new exports.Transform(s, r, tx, ty);
};

nudged.createFromArray = function (arr) {
    "use strict";
    // Create a nudged.Transform instance from an array that was
    // previously created with nudged.Transform#toArray().
    //
    // Together with nudged.Transform#toArray(), this method makes an easy
    // serialization and deserialization to and from JSON possible.
    //
    // Parameter:
    //     arr
    //         array with four elements

    var s = arr[0];
    var r = arr[1];
    var tx = arr[2];
    var ty = arr[3];
    return new exports.Transform(s, r, tx, ty);
};

nudged.estimate = function (type, domain, range, pivot) {
    "use strict";
    // Parameter
    //     type
    //         string. One of the following: 'T', 'S', 'R', 'TS', 'TR', 'SR', 'TSR'
    //     domain
    //         array of 2d arrays
    //     range
    //         array of 2d arrays
    //     pivot
    //         optional 2d array, does nothing for translation estimators
    var name = 'estimate' + type.toUpperCase();
    if (exports.hasOwnProperty(name)) {
        return exports[name](domain, range, pivot);
    } // else
    throw new Error('Unknown estimator type: ' + type);
};

window.nudged = nudged;
/*!
 * clipboard.js v1.6.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n?n:e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){function o(e,t){for(;e&&e.nodeType!==i;){if(e.matches(t))return e;e=e.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=o},{}],2:[function(e,t,n){function o(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}var r=e("./closest");t.exports=o},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return i(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=o},{"./is":3,delegate:2}],5:[function(e,t,n){function o(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}t.exports=o},{}],6:[function(e,t,n){function o(){}o.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){i.off(e,o),t.apply(n,arguments)}var i=this;return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},t.exports=o},{}],7:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof o)r(n,t("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){o(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(e,t,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var u=i(t),s=i(n),f=i(o),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof t?[t]:t,o=!!document.queryCommandSupported;return n.forEach(function(e){o=o&&!!document.queryCommandSupported(e)}),o}}]),t}(s.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
/*global window, alert, console, Eventsmanager, addEvent, Notification, btoa, MessageChannel, Sketchpad, ServiceWorkerRegistration*/

function Pushnotifications(config) {
    "use strict";
    Eventsmanager.call(this, config);
    this.config = config;
    var that = this;
    //sketchpad is required for ws communication - need refactoring if you want to spearate that lib
    if (config.sketchpad instanceof Sketchpad) {
        this.sketchpad = config.sketchpad;
    } else {
        throw new Error("Pushnotifications:constructor - config.sketchpad instanceof Sketchpad is required");
    }
    if (navigator.serviceWorker) {
        navigator.serviceWorker
            .ready//.register('/service-worker.js')
            .then(function (registration) {
                // alert(1);
                that.initialiseState(registration);
            }).catch(function (err) {
                console.log("Error service-worker ready", err);
            });
    } else {
        console.log("ServiceWorker is not supported :(");
    }
    this.sketchpad.on("customMessageFromServer", function (obj) {
        switch (obj.cmd) {
        case "push-status":
            that.receiveSubscriptionStatus(obj);
            break;
        }
    });

    // alert(2);
    //give chance to subscibe
    // setTimeout(function () {
    //     that.detectIfAvaliable();
    // }, 0);

}


Pushnotifications.prototype = Object.create(Eventsmanager.prototype);
Object.assign(Pushnotifications.prototype, {
    subscribeApiUrl: "subscribeApi.html",
    isPushEnabled: false,
    receiveSubscriptionStatus: function receiveSubscriptionStatus(obj) {
        "use strict";
        // console.log("receiveSubscriptionStatus", obj);
        if (obj.subscribed) {
            this.dispatch("subscribe");
            this.isPushEnabled = true;
        } else {
            this.dispatch("unsubscribe");
            this.isPushEnabled = false;
        }
    },
    sendSubscription: function sendSubscription(cmd, subscription) {
        "use strict";
        switch (cmd) {
        case "push-subscribe-update":
        case "push-subscribe":
            // this.isPushEnabled = true;
            break;
        case "push-unsubscribe":
            // this.isPushEnabled = false;
            break;
        }
        // var request = new XMLHttpRequest();
        // request.open("POST", this.subscribeApiUrl);
        // request.setRequestHeader("Content-Type", "application/json");
        var subscribeObj = {
            cmd: cmd,
            origin: JSON.parse(JSON.stringify(location)),
            subscription_id: subscription.endpoint,
            subscription: subscription.toJSON(),
            key: btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('p256dh'))))
        };
        // console.log("sendSubscription", cmd, subscribeObj);
        // console.log("XXX", subscription.);
        this.sketchpad.sendMessageToServer(subscribeObj);
        // request.send(JSON.stringify(subscribeObj));
    },

    initialiseState: function initialiseState(registration) {
        "use strict";
        // alert("detect");

        // this.detectIfAvaliable();

        // alert("initialiseState");
        switch (Notification.permission) {
        case "granted":
            // console.log("Notifications granted");
            break;
        case "blocked":
        case "denied"://confimed
            console.log("NOTIFICATIONS ARE BLOCKED!");
            break;
        default:
            console.debug("Should prompt for notifications.");
        }
        // console.log("initialiseState", registration);
      // Are Notifications supported in the service worker?
        if (!(ServiceWorkerRegistration.prototype.showNotification)) {
            console.warn('Notifications aren\'t supported.');
            return;
        }
        // Check the current Notification permission.
        // If its denied, it's a permanent block until the
        // user changes the permission
        if (Notification.permission === 'denied') {
            console.warn('The user has blocked notifications.');
            return;
        }

        if (window && window.PushManager) {
            console.debug("PushManager - supported");
        } else {
            console.log("PushManager - not supported");
            return;
        }

        var that = this;
        // Use serviceWorker.ready so this is only invoked
        // when the service worker is available.

        // We need the service worker registration to check for a subscription
        navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
            // Do we already have a push message subscription?
            serviceWorkerRegistration.pushManager.getSubscription()
                .then(function (subscription) {
                    // console.log("navigator.serviceWorker.ready", serviceWorkerRegistration, "serviceWorkerRegistration.pushManager.getSubscription()", subscription);
                    // Enable any UI which subscribes / unsubscribes from
                    // push messages.
                    that.dispatch("ready");
                    if (!subscription) {
                        // We aren't subscribed to push, so set UI
                        // to allow the user to enable push
                        // console.log('Not yet subscribed to Push');
                        // Set appropriate app states.
                        // that.dispatch("unsubscribe");
                        return;
                    }
                    // that.dispatch("subscribe");
                    // that.isPushEnabled = true;
                    // console.log("Subscription JSON", subscription.toJSON());
                    // var endpoint = subscription.endpoint;
                    // var key = subscription.getKey('p256dh');
                    // console.log("Endopint, key", endpoint, key);

                    // Keep your server in sync with the latest subscriptionId
                    that.sendSubscription("push-subscribe-update", subscription);
                }).catch(function (err) {
                    console.error('Error during getSubscription()', err);
                });

            /////////////////
            // set up a message channel to communicate with the SW
            var channel = new MessageChannel();
            channel.port1.onmessage = function (e) {
                // console.log("channel.port1.onmessage", e);
                that.handleChannelMessage(e.data);
            };
            var mySW = registration.active;
            mySW.postMessage('hello', [channel.port2]);
            ///////////////


        });
    },

    subscribe: function subscribe() {
        "use strict";
        // Disable the button so it can't be changed while
        // we process the permission request
        this.dispatch("subscribe-start");

        var that = this;
        // this.dispatch("subscribe");
        // alert(1);
        navigator.serviceWorker.ready.then(function (registration) {
            console.log("navigator.serviceWorker.ready, registration", registration);
            registration.pushManager.subscribe({userVisibleOnly: true})
                .then(function (subscription) {
                    // console.log("Subscription", subscription);
                    // The subscription was successful
                    // that.isPushEnabled = true;
                    // Update status to subscribe current user on server, and to let
                    // other users know this user has subscribed
                    // var endpoint = subscription.endpoint;
                    // var key = subscription.getKey("p256dh");
                    return that.sendSubscription("push-subscribe", subscription);
                }).catch(function (err) {
                    if (Notification.permission === "denied") {
                        // The user denied the notification permission which
                        // means we failed to subscribe and the user will need
                        // to manually change the notification permission to
                        // subscribe to push messages
                        console.log('Permission for Notifications was denied');
                    } else {
                        // A problem occurred with the subscription, this can
                        // often be down to an issue or lack of the gcm_sender_id
                        // and / or gcm_user_visible_only
                        console.error("Unable to subscribe to push.", err);
                    }
                });
        });
    },
    unsubscribe: function unsubscribe() {
        "use strict";
        // this.dispatch("unsubscribe");
        var that = this;
        navigator.serviceWorker.ready.then(function (registration) {
            // To unsubscribe from push messaging, you need get the
            // subcription object, which you can call unsubscribe() on.
            registration.pushManager.getSubscription()
                .then(function (subscription) {
                    // Update status to unsubscribe current user from server (remove details)
                    // and let other subscribers know they have unsubscribed
                    // var endpoint = subscription.endpoint;
                    // var key = subscription.getKey("p256dh");
                    // that.updateStatus(endpoint, key, "unsubscribe");

                    // Check we have a subscription to unsubscribe
                    if (!subscription) {
                        // No subscription object, so set the state
                        // to allow the user to subscribe to push
                        // that.isPushEnabled = false;
                        return;
                    }
                    // that.isPushEnabled = false;
                    that.sendSubscription("push-unsubscribe", subscription);


                    // setTimeout used to stop unsubscribe being called before the message
                    // has been sent to everyone to tell them that the unsubscription has
                    // occurred, including the person unsubscribing. This is a dirty
                    // hack, and I'm probably going to hell for writing this.
                    // setTimeout(function () {
                    //         // We have a subcription, so call unsubscribe on it
                    //     subscription.unsubscribe().then(function (successful) {
                    //         that.sendSubscription("push-unsubscribe", subscription);
                    //         console.log("unsubscribe successful", successful);
                    //     }).catch(function (err) {
                    //         // We failed to unsubscribe, this can lead to
                    //         // an unusual state, so may be best to remove
                    //         // the subscription id from your data store and
                    //         // inform the user that you disabled push
                    //         console.log('Unsubscription error: ', err);
                    //     });
                    // }, 0);
                }).catch(function (err) {
                    console.error('Error thrown while unsubscribing from push messaging.', err);
                });
        });
    },

    // receivePushMessage: function receivePushMessage
    sendChatMessage: function sendChatMessage(chatMsg) {
        "use strict";
        var that = this;
        navigator.serviceWorker.ready.then(function (registration) {
            // Find push message subscription, then retrieve it
            registration.pushManager.getSubscription().then(function (subscription) {
                var endpoint = subscription.endpoint;
                var key = subscription.getKey('p256dh');
                // Create a new XHR and send an object to the server containing
                // the type of the request, the name of the user unsubscribing,
                // and the associated push subscription
                var request = new XMLHttpRequest();

                request.open("POST", that.subscribeApiUrl);
                request.setRequestHeader("Content-Type", "application/json");
                var messageObj = {
                    statusType: "chatMsg",
                    name: "nameInput.value",
                    msg: chatMsg,
                    endpoint: endpoint,
                    key: btoa(String.fromCharCode.apply(null, new Uint8Array(key)))
                };
                // console.log("sending", messageObj);
                request.send(JSON.stringify(messageObj));
            });
        });
    },
    handleChannelMessage: function handleChannelMessage(message) {
        "use strict";
        // console.log("handleChannelMessage", message);
        switch (message.action) {
        case "subscribe":
        case "init":
            // console.log("add message.name", message.name);
            break;
        case "unsubscribe":
            // console.log("remove message.name", message.name);
            break;
        case "chatMsg":
            // console.log("chatMsg message.name: message.msg", message.name + ": " + message.msg);
            break;
        }
    },



    destructor: function destructor() {
        "use strict";
        var that = this;
        this.notifications.forEach(function (notification) {
            that.destroyNotification(notification);
        });
    },

    // prepareElements: function prepareElements() {
    //     "use strict";
    //     // var that = this;
    //     // console.log("Pushnotifications::prepareElements", that);
    // },
    addFeature: function setFeature(feature) {
        "use strict";
        this.features.push(feature);
        this.dispatch("featuresChanged", this.features);
    },

    removeFeature: function removeFeature(feature) {
        "use strict";
        var i;
        for (i = this.features.length - 1; i <= 0; i -= 1) {
            if (this.features[i] === feature) {
                this.features.splice(i, 1);
            }
        }
        this.dispatch("featuresChanged", this.features);
    }
    // ,

    // sendMessage: function sendMessage(message) {
    //     "use strict";
    //     console.log("sendMessage", message);
    // }

});
window.Pushnotifications = Pushnotifications;
/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function (root, factory) {
 'use strict';
 if (typeof define === 'function' && define.amd) {
  define('pdfjs-dist/build/pdf', ['exports'], factory);
 } else if (typeof exports !== 'undefined') {
  factory(exports);
 } else {
  factory(root['pdfjsDistBuildPdf'] = {});
 }
}(this, function (exports) {
 'use strict';
 var pdfjsVersion = '1.7.225';
 var pdfjsBuild = '17d135f';
 var pdfjsFilePath = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : null;
 var pdfjsLibs = {};
 (function pdfjsWrapper() {
  (function (root, factory) {
   factory(root.pdfjsSharedUtil = {});
  }(this, function (exports) {
   var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this;
   var FONT_IDENTITY_MATRIX = [
    0.001,
    0,
    0,
    0.001,
    0,
    0
   ];
   var TextRenderingMode = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_ADD_TO_PATH: 4,
    STROKE_ADD_TO_PATH: 5,
    FILL_STROKE_ADD_TO_PATH: 6,
    ADD_TO_PATH: 7,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
   };
   var ImageKind = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
   };
   var AnnotationType = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26
   };
   var AnnotationFlag = {
    INVISIBLE: 0x01,
    HIDDEN: 0x02,
    PRINT: 0x04,
    NOZOOM: 0x08,
    NOROTATE: 0x10,
    NOVIEW: 0x20,
    READONLY: 0x40,
    LOCKED: 0x80,
    TOGGLENOVIEW: 0x100,
    LOCKEDCONTENTS: 0x200
   };
   var AnnotationFieldFlag = {
    READONLY: 0x0000001,
    REQUIRED: 0x0000002,
    NOEXPORT: 0x0000004,
    MULTILINE: 0x0001000,
    PASSWORD: 0x0002000,
    NOTOGGLETOOFF: 0x0004000,
    RADIO: 0x0008000,
    PUSHBUTTON: 0x0010000,
    COMBO: 0x0020000,
    EDIT: 0x0040000,
    SORT: 0x0080000,
    FILESELECT: 0x0100000,
    MULTISELECT: 0x0200000,
    DONOTSPELLCHECK: 0x0400000,
    DONOTSCROLL: 0x0800000,
    COMB: 0x1000000,
    RICHTEXT: 0x2000000,
    RADIOSINUNISON: 0x2000000,
    COMMITONSELCHANGE: 0x4000000
   };
   var AnnotationBorderStyleType = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
   };
   var StreamType = {
    UNKNOWN: 0,
    FLATE: 1,
    LZW: 2,
    DCT: 3,
    JPX: 4,
    JBIG: 5,
    A85: 6,
    AHX: 7,
    CCF: 8,
    RL: 9
   };
   var FontType = {
    UNKNOWN: 0,
    TYPE1: 1,
    TYPE1C: 2,
    CIDFONTTYPE0: 3,
    CIDFONTTYPE0C: 4,
    TRUETYPE: 5,
    CIDFONTTYPE2: 6,
    TYPE3: 7,
    OPENTYPE: 8,
    TYPE0: 9,
    MMTYPE1: 10
   };
   var VERBOSITY_LEVELS = {
    errors: 0,
    warnings: 1,
    infos: 5
   };
   var OPS = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotations: 78,
    endAnnotations: 79,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintJpegXObject: 82,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91
   };
   var verbosity = VERBOSITY_LEVELS.warnings;
   function setVerbosityLevel(level) {
    verbosity = level;
   }
   function getVerbosityLevel() {
    return verbosity;
   }
   function info(msg) {
    if (verbosity >= VERBOSITY_LEVELS.infos) {
     console.log('Info: ' + msg);
    }
   }
   function warn(msg) {
    if (verbosity >= VERBOSITY_LEVELS.warnings) {
     console.log('Warning: ' + msg);
    }
   }
   function deprecated(details) {
    console.log('Deprecated API usage: ' + details);
   }
   function error(msg) {
    if (verbosity >= VERBOSITY_LEVELS.errors) {
     console.log('Error: ' + msg);
     console.log(backtrace());
    }
    throw new Error(msg);
   }
   function backtrace() {
    try {
     throw new Error();
    } catch (e) {
     return e.stack ? e.stack.split('\n').slice(2).join('\n') : '';
    }
   }
   function assert(cond, msg) {
    if (!cond) {
     error(msg);
    }
   }
   var UNSUPPORTED_FEATURES = {
    unknown: 'unknown',
    forms: 'forms',
    javaScript: 'javaScript',
    smask: 'smask',
    shadingPattern: 'shadingPattern',
    font: 'font'
   };
   function isSameOrigin(baseUrl, otherUrl) {
    try {
     var base = new URL(baseUrl);
     if (!base.origin || base.origin === 'null') {
      return false;
     }
    } catch (e) {
     return false;
    }
    var other = new URL(otherUrl, base);
    return base.origin === other.origin;
   }
   function isValidProtocol(url) {
    if (!url) {
     return false;
    }
    switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
     return true;
    default:
     return false;
    }
   }
   function createValidAbsoluteUrl(url, baseUrl) {
    if (!url) {
     return null;
    }
    try {
     var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
     if (isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
     }
    } catch (ex) {
    }
    return null;
   }
   function shadow(obj, prop, value) {
    Object.defineProperty(obj, prop, {
     value: value,
     enumerable: true,
     configurable: true,
     writable: false
    });
    return value;
   }
   function getLookupTableFactory(initializer) {
    var lookup;
    return function () {
     if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
     }
     return lookup;
    };
   }
   var PasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
   };
   var PasswordException = function PasswordExceptionClosure() {
    function PasswordException(msg, code) {
     this.name = 'PasswordException';
     this.message = msg;
     this.code = code;
    }
    PasswordException.prototype = new Error();
    PasswordException.constructor = PasswordException;
    return PasswordException;
   }();
   var UnknownErrorException = function UnknownErrorExceptionClosure() {
    function UnknownErrorException(msg, details) {
     this.name = 'UnknownErrorException';
     this.message = msg;
     this.details = details;
    }
    UnknownErrorException.prototype = new Error();
    UnknownErrorException.constructor = UnknownErrorException;
    return UnknownErrorException;
   }();
   var InvalidPDFException = function InvalidPDFExceptionClosure() {
    function InvalidPDFException(msg) {
     this.name = 'InvalidPDFException';
     this.message = msg;
    }
    InvalidPDFException.prototype = new Error();
    InvalidPDFException.constructor = InvalidPDFException;
    return InvalidPDFException;
   }();
   var MissingPDFException = function MissingPDFExceptionClosure() {
    function MissingPDFException(msg) {
     this.name = 'MissingPDFException';
     this.message = msg;
    }
    MissingPDFException.prototype = new Error();
    MissingPDFException.constructor = MissingPDFException;
    return MissingPDFException;
   }();
   var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
    function UnexpectedResponseException(msg, status) {
     this.name = 'UnexpectedResponseException';
     this.message = msg;
     this.status = status;
    }
    UnexpectedResponseException.prototype = new Error();
    UnexpectedResponseException.constructor = UnexpectedResponseException;
    return UnexpectedResponseException;
   }();
   var NotImplementedException = function NotImplementedExceptionClosure() {
    function NotImplementedException(msg) {
     this.message = msg;
    }
    NotImplementedException.prototype = new Error();
    NotImplementedException.prototype.name = 'NotImplementedException';
    NotImplementedException.constructor = NotImplementedException;
    return NotImplementedException;
   }();
   var MissingDataException = function MissingDataExceptionClosure() {
    function MissingDataException(begin, end) {
     this.begin = begin;
     this.end = end;
     this.message = 'Missing data [' + begin + ', ' + end + ')';
    }
    MissingDataException.prototype = new Error();
    MissingDataException.prototype.name = 'MissingDataException';
    MissingDataException.constructor = MissingDataException;
    return MissingDataException;
   }();
   var XRefParseException = function XRefParseExceptionClosure() {
    function XRefParseException(msg) {
     this.message = msg;
    }
    XRefParseException.prototype = new Error();
    XRefParseException.prototype.name = 'XRefParseException';
    XRefParseException.constructor = XRefParseException;
    return XRefParseException;
   }();
   var NullCharactersRegExp = /\x00/g;
   function removeNullCharacters(str) {
    if (typeof str !== 'string') {
     warn('The argument for removeNullCharacters must be a string.');
     return str;
    }
    return str.replace(NullCharactersRegExp, '');
   }
   function bytesToString(bytes) {
    assert(bytes !== null && typeof bytes === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
    var length = bytes.length;
    var MAX_ARGUMENT_COUNT = 8192;
    if (length < MAX_ARGUMENT_COUNT) {
     return String.fromCharCode.apply(null, bytes);
    }
    var strBuf = [];
    for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
     var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
     var chunk = bytes.subarray(i, chunkEnd);
     strBuf.push(String.fromCharCode.apply(null, chunk));
    }
    return strBuf.join('');
   }
   function stringToBytes(str) {
    assert(typeof str === 'string', 'Invalid argument for stringToBytes');
    var length = str.length;
    var bytes = new Uint8Array(length);
    for (var i = 0; i < length; ++i) {
     bytes[i] = str.charCodeAt(i) & 0xFF;
    }
    return bytes;
   }
   function arrayByteLength(arr) {
    if (arr.length !== undefined) {
     return arr.length;
    }
    assert(arr.byteLength !== undefined);
    return arr.byteLength;
   }
   function arraysToBytes(arr) {
    if (arr.length === 1 && arr[0] instanceof Uint8Array) {
     return arr[0];
    }
    var resultLength = 0;
    var i, ii = arr.length;
    var item, itemLength;
    for (i = 0; i < ii; i++) {
     item = arr[i];
     itemLength = arrayByteLength(item);
     resultLength += itemLength;
    }
    var pos = 0;
    var data = new Uint8Array(resultLength);
    for (i = 0; i < ii; i++) {
     item = arr[i];
     if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
       item = stringToBytes(item);
      } else {
       item = new Uint8Array(item);
      }
     }
     itemLength = item.byteLength;
     data.set(item, pos);
     pos += itemLength;
    }
    return data;
   }
   function string32(value) {
    return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
   }
   function log2(x) {
    var n = 1, i = 0;
    while (x > n) {
     n <<= 1;
     i++;
    }
    return i;
   }
   function readInt8(data, start) {
    return data[start] << 24 >> 24;
   }
   function readUint16(data, offset) {
    return data[offset] << 8 | data[offset + 1];
   }
   function readUint32(data, offset) {
    return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
   }
   function isLittleEndian() {
    var buffer8 = new Uint8Array(2);
    buffer8[0] = 1;
    var buffer16 = new Uint16Array(buffer8.buffer);
    return buffer16[0] === 1;
   }
   function isEvalSupported() {
    try {
     new Function('');
     return true;
    } catch (e) {
     return false;
    }
   }
   var Uint32ArrayView = function Uint32ArrayViewClosure() {
    function Uint32ArrayView(buffer, length) {
     this.buffer = buffer;
     this.byteLength = buffer.length;
     this.length = length === undefined ? this.byteLength >> 2 : length;
     ensureUint32ArrayViewProps(this.length);
    }
    Uint32ArrayView.prototype = Object.create(null);
    var uint32ArrayViewSetters = 0;
    function createUint32ArrayProp(index) {
     return {
      get: function () {
       var buffer = this.buffer, offset = index << 2;
       return (buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24) >>> 0;
      },
      set: function (value) {
       var buffer = this.buffer, offset = index << 2;
       buffer[offset] = value & 255;
       buffer[offset + 1] = value >> 8 & 255;
       buffer[offset + 2] = value >> 16 & 255;
       buffer[offset + 3] = value >>> 24 & 255;
      }
     };
    }
    function ensureUint32ArrayViewProps(length) {
     while (uint32ArrayViewSetters < length) {
      Object.defineProperty(Uint32ArrayView.prototype, uint32ArrayViewSetters, createUint32ArrayProp(uint32ArrayViewSetters));
      uint32ArrayViewSetters++;
     }
    }
    return Uint32ArrayView;
   }();
   exports.Uint32ArrayView = Uint32ArrayView;
   var IDENTITY_MATRIX = [
    1,
    0,
    0,
    1,
    0,
    0
   ];
   var Util = function UtilClosure() {
    function Util() {
    }
    var rgbBuf = [
     'rgb(',
     0,
     ',',
     0,
     ',',
     0,
     ')'
    ];
    Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
     rgbBuf[1] = r;
     rgbBuf[3] = g;
     rgbBuf[5] = b;
     return rgbBuf.join('');
    };
    Util.transform = function Util_transform(m1, m2) {
     return [
      m1[0] * m2[0] + m1[2] * m2[1],
      m1[1] * m2[0] + m1[3] * m2[1],
      m1[0] * m2[2] + m1[2] * m2[3],
      m1[1] * m2[2] + m1[3] * m2[3],
      m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
      m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
     ];
    };
    Util.applyTransform = function Util_applyTransform(p, m) {
     var xt = p[0] * m[0] + p[1] * m[2] + m[4];
     var yt = p[0] * m[1] + p[1] * m[3] + m[5];
     return [
      xt,
      yt
     ];
    };
    Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
     var d = m[0] * m[3] - m[1] * m[2];
     var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
     var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
     return [
      xt,
      yt
     ];
    };
    Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
     var p1 = Util.applyTransform(r, m);
     var p2 = Util.applyTransform(r.slice(2, 4), m);
     var p3 = Util.applyTransform([
      r[0],
      r[3]
     ], m);
     var p4 = Util.applyTransform([
      r[2],
      r[1]
     ], m);
     return [
      Math.min(p1[0], p2[0], p3[0], p4[0]),
      Math.min(p1[1], p2[1], p3[1], p4[1]),
      Math.max(p1[0], p2[0], p3[0], p4[0]),
      Math.max(p1[1], p2[1], p3[1], p4[1])
     ];
    };
    Util.inverseTransform = function Util_inverseTransform(m) {
     var d = m[0] * m[3] - m[1] * m[2];
     return [
      m[3] / d,
      -m[1] / d,
      -m[2] / d,
      m[0] / d,
      (m[2] * m[5] - m[4] * m[3]) / d,
      (m[4] * m[1] - m[5] * m[0]) / d
     ];
    };
    Util.apply3dTransform = function Util_apply3dTransform(m, v) {
     return [
      m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
      m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
      m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
     ];
    };
    Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
     var transpose = [
      m[0],
      m[2],
      m[1],
      m[3]
     ];
     var a = m[0] * transpose[0] + m[1] * transpose[2];
     var b = m[0] * transpose[1] + m[1] * transpose[3];
     var c = m[2] * transpose[0] + m[3] * transpose[2];
     var d = m[2] * transpose[1] + m[3] * transpose[3];
     var first = (a + d) / 2;
     var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
     var sx = first + second || 1;
     var sy = first - second || 1;
     return [
      Math.sqrt(sx),
      Math.sqrt(sy)
     ];
    };
    Util.normalizeRect = function Util_normalizeRect(rect) {
     var r = rect.slice(0);
     if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
     }
     if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
     }
     return r;
    };
    Util.intersect = function Util_intersect(rect1, rect2) {
     function compare(a, b) {
      return a - b;
     }
     var orderedX = [
       rect1[0],
       rect1[2],
       rect2[0],
       rect2[2]
      ].sort(compare), orderedY = [
       rect1[1],
       rect1[3],
       rect2[1],
       rect2[3]
      ].sort(compare), result = [];
     rect1 = Util.normalizeRect(rect1);
     rect2 = Util.normalizeRect(rect2);
     if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
      result[0] = orderedX[1];
      result[2] = orderedX[2];
     } else {
      return false;
     }
     if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
      result[1] = orderedY[1];
      result[3] = orderedY[2];
     } else {
      return false;
     }
     return result;
    };
    Util.sign = function Util_sign(num) {
     return num < 0 ? -1 : 1;
    };
    var ROMAN_NUMBER_MAP = [
     '',
     'C',
     'CC',
     'CCC',
     'CD',
     'D',
     'DC',
     'DCC',
     'DCCC',
     'CM',
     '',
     'X',
     'XX',
     'XXX',
     'XL',
     'L',
     'LX',
     'LXX',
     'LXXX',
     'XC',
     '',
     'I',
     'II',
     'III',
     'IV',
     'V',
     'VI',
     'VII',
     'VIII',
     'IX'
    ];
    Util.toRoman = function Util_toRoman(number, lowerCase) {
     assert(isInt(number) && number > 0, 'The number should be a positive integer.');
     var pos, romanBuf = [];
     while (number >= 1000) {
      number -= 1000;
      romanBuf.push('M');
     }
     pos = number / 100 | 0;
     number %= 100;
     romanBuf.push(ROMAN_NUMBER_MAP[pos]);
     pos = number / 10 | 0;
     number %= 10;
     romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
     romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
     var romanStr = romanBuf.join('');
     return lowerCase ? romanStr.toLowerCase() : romanStr;
    };
    Util.appendToArray = function Util_appendToArray(arr1, arr2) {
     Array.prototype.push.apply(arr1, arr2);
    };
    Util.prependToArray = function Util_prependToArray(arr1, arr2) {
     Array.prototype.unshift.apply(arr1, arr2);
    };
    Util.extendObj = function extendObj(obj1, obj2) {
     for (var key in obj2) {
      obj1[key] = obj2[key];
     }
    };
    Util.getInheritableProperty = function Util_getInheritableProperty(dict, name, getArray) {
     while (dict && !dict.has(name)) {
      dict = dict.get('Parent');
     }
     if (!dict) {
      return null;
     }
     return getArray ? dict.getArray(name) : dict.get(name);
    };
    Util.inherit = function Util_inherit(sub, base, prototype) {
     sub.prototype = Object.create(base.prototype);
     sub.prototype.constructor = sub;
     for (var prop in prototype) {
      sub.prototype[prop] = prototype[prop];
     }
    };
    Util.loadScript = function Util_loadScript(src, callback) {
     var script = document.createElement('script');
     var loaded = false;
     script.setAttribute('src', src);
     if (callback) {
      script.onload = function () {
       if (!loaded) {
        callback();
       }
       loaded = true;
      };
     }
     document.getElementsByTagName('head')[0].appendChild(script);
    };
    return Util;
   }();
   var PageViewport = function PageViewportClosure() {
    function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
     this.viewBox = viewBox;
     this.scale = scale;
     this.rotation = rotation;
     this.offsetX = offsetX;
     this.offsetY = offsetY;
     var centerX = (viewBox[2] + viewBox[0]) / 2;
     var centerY = (viewBox[3] + viewBox[1]) / 2;
     var rotateA, rotateB, rotateC, rotateD;
     rotation = rotation % 360;
     rotation = rotation < 0 ? rotation + 360 : rotation;
     switch (rotation) {
     case 180:
      rotateA = -1;
      rotateB = 0;
      rotateC = 0;
      rotateD = 1;
      break;
     case 90:
      rotateA = 0;
      rotateB = 1;
      rotateC = 1;
      rotateD = 0;
      break;
     case 270:
      rotateA = 0;
      rotateB = -1;
      rotateC = -1;
      rotateD = 0;
      break;
     default:
      rotateA = 1;
      rotateB = 0;
      rotateC = 0;
      rotateD = -1;
      break;
     }
     if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
     }
     var offsetCanvasX, offsetCanvasY;
     var width, height;
     if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
     } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
     }
     this.transform = [
      rotateA * scale,
      rotateB * scale,
      rotateC * scale,
      rotateD * scale,
      offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
      offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY
     ];
     this.width = width;
     this.height = height;
     this.fontScale = scale;
    }
    PageViewport.prototype = {
     clone: function PageViewPort_clone(args) {
      args = args || {};
      var scale = 'scale' in args ? args.scale : this.scale;
      var rotation = 'rotation' in args ? args.rotation : this.rotation;
      return new PageViewport(this.viewBox.slice(), scale, rotation, this.offsetX, this.offsetY, args.dontFlip);
     },
     convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
      return Util.applyTransform([
       x,
       y
      ], this.transform);
     },
     convertToViewportRectangle: function PageViewport_convertToViewportRectangle(rect) {
      var tl = Util.applyTransform([
       rect[0],
       rect[1]
      ], this.transform);
      var br = Util.applyTransform([
       rect[2],
       rect[3]
      ], this.transform);
      return [
       tl[0],
       tl[1],
       br[0],
       br[1]
      ];
     },
     convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
      return Util.applyInverseTransform([
       x,
       y
      ], this.transform);
     }
    };
    return PageViewport;
   }();
   var PDFStringTranslateTable = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0x2D8,
    0x2C7,
    0x2C6,
    0x2D9,
    0x2DD,
    0x2DB,
    0x2DA,
    0x2DC,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0x2022,
    0x2020,
    0x2021,
    0x2026,
    0x2014,
    0x2013,
    0x192,
    0x2044,
    0x2039,
    0x203A,
    0x2212,
    0x2030,
    0x201E,
    0x201C,
    0x201D,
    0x2018,
    0x2019,
    0x201A,
    0x2122,
    0xFB01,
    0xFB02,
    0x141,
    0x152,
    0x160,
    0x178,
    0x17D,
    0x131,
    0x142,
    0x153,
    0x161,
    0x17E,
    0,
    0x20AC
   ];
   function stringToPDFString(str) {
    var i, n = str.length, strBuf = [];
    if (str[0] === '\xFE' && str[1] === '\xFF') {
     for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
     }
    } else {
     for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
     }
    }
    return strBuf.join('');
   }
   function stringToUTF8String(str) {
    return decodeURIComponent(escape(str));
   }
   function utf8StringToString(str) {
    return unescape(encodeURIComponent(str));
   }
   function isEmptyObj(obj) {
    for (var key in obj) {
     return false;
    }
    return true;
   }
   function isBool(v) {
    return typeof v === 'boolean';
   }
   function isInt(v) {
    return typeof v === 'number' && (v | 0) === v;
   }
   function isNum(v) {
    return typeof v === 'number';
   }
   function isString(v) {
    return typeof v === 'string';
   }
   function isArray(v) {
    return v instanceof Array;
   }
   function isArrayBuffer(v) {
    return typeof v === 'object' && v !== null && v.byteLength !== undefined;
   }
   function isSpace(ch) {
    return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
   }
   function createPromiseCapability() {
    var capability = {};
    capability.promise = new Promise(function (resolve, reject) {
     capability.resolve = resolve;
     capability.reject = reject;
    });
    return capability;
   }
   (function PromiseClosure() {
    if (globalScope.Promise) {
     if (typeof globalScope.Promise.all !== 'function') {
      globalScope.Promise.all = function (iterable) {
       var count = 0, results = [], resolve, reject;
       var promise = new globalScope.Promise(function (resolve_, reject_) {
        resolve = resolve_;
        reject = reject_;
       });
       iterable.forEach(function (p, i) {
        count++;
        p.then(function (result) {
         results[i] = result;
         count--;
         if (count === 0) {
          resolve(results);
         }
        }, reject);
       });
       if (count === 0) {
        resolve(results);
       }
       return promise;
      };
     }
     if (typeof globalScope.Promise.resolve !== 'function') {
      globalScope.Promise.resolve = function (value) {
       return new globalScope.Promise(function (resolve) {
        resolve(value);
       });
      };
     }
     if (typeof globalScope.Promise.reject !== 'function') {
      globalScope.Promise.reject = function (reason) {
       return new globalScope.Promise(function (resolve, reject) {
        reject(reason);
       });
      };
     }
     if (typeof globalScope.Promise.prototype.catch !== 'function') {
      globalScope.Promise.prototype.catch = function (onReject) {
       return globalScope.Promise.prototype.then(undefined, onReject);
      };
     }
     return;
    }
    var STATUS_PENDING = 0;
    var STATUS_RESOLVED = 1;
    var STATUS_REJECTED = 2;
    var REJECTION_TIMEOUT = 500;
    var HandlerManager = {
     handlers: [],
     running: false,
     unhandledRejections: [],
     pendingRejectionCheck: false,
     scheduleHandlers: function scheduleHandlers(promise) {
      if (promise._status === STATUS_PENDING) {
       return;
      }
      this.handlers = this.handlers.concat(promise._handlers);
      promise._handlers = [];
      if (this.running) {
       return;
      }
      this.running = true;
      setTimeout(this.runHandlers.bind(this), 0);
     },
     runHandlers: function runHandlers() {
      var RUN_TIMEOUT = 1;
      var timeoutAt = Date.now() + RUN_TIMEOUT;
      while (this.handlers.length > 0) {
       var handler = this.handlers.shift();
       var nextStatus = handler.thisPromise._status;
       var nextValue = handler.thisPromise._value;
       try {
        if (nextStatus === STATUS_RESOLVED) {
         if (typeof handler.onResolve === 'function') {
          nextValue = handler.onResolve(nextValue);
         }
        } else if (typeof handler.onReject === 'function') {
         nextValue = handler.onReject(nextValue);
         nextStatus = STATUS_RESOLVED;
         if (handler.thisPromise._unhandledRejection) {
          this.removeUnhandeledRejection(handler.thisPromise);
         }
        }
       } catch (ex) {
        nextStatus = STATUS_REJECTED;
        nextValue = ex;
       }
       handler.nextPromise._updateStatus(nextStatus, nextValue);
       if (Date.now() >= timeoutAt) {
        break;
       }
      }
      if (this.handlers.length > 0) {
       setTimeout(this.runHandlers.bind(this), 0);
       return;
      }
      this.running = false;
     },
     addUnhandledRejection: function addUnhandledRejection(promise) {
      this.unhandledRejections.push({
       promise: promise,
       time: Date.now()
      });
      this.scheduleRejectionCheck();
     },
     removeUnhandeledRejection: function removeUnhandeledRejection(promise) {
      promise._unhandledRejection = false;
      for (var i = 0; i < this.unhandledRejections.length; i++) {
       if (this.unhandledRejections[i].promise === promise) {
        this.unhandledRejections.splice(i);
        i--;
       }
      }
     },
     scheduleRejectionCheck: function scheduleRejectionCheck() {
      if (this.pendingRejectionCheck) {
       return;
      }
      this.pendingRejectionCheck = true;
      setTimeout(function rejectionCheck() {
       this.pendingRejectionCheck = false;
       var now = Date.now();
       for (var i = 0; i < this.unhandledRejections.length; i++) {
        if (now - this.unhandledRejections[i].time > REJECTION_TIMEOUT) {
         var unhandled = this.unhandledRejections[i].promise._value;
         var msg = 'Unhandled rejection: ' + unhandled;
         if (unhandled.stack) {
          msg += '\n' + unhandled.stack;
         }
         warn(msg);
         this.unhandledRejections.splice(i);
         i--;
        }
       }
       if (this.unhandledRejections.length) {
        this.scheduleRejectionCheck();
       }
      }.bind(this), REJECTION_TIMEOUT);
     }
    };
    var Promise = function Promise(resolver) {
     this._status = STATUS_PENDING;
     this._handlers = [];
     try {
      resolver.call(this, this._resolve.bind(this), this._reject.bind(this));
     } catch (e) {
      this._reject(e);
     }
    };
    Promise.all = function Promise_all(promises) {
     var resolveAll, rejectAll;
     var deferred = new Promise(function (resolve, reject) {
      resolveAll = resolve;
      rejectAll = reject;
     });
     var unresolved = promises.length;
     var results = [];
     if (unresolved === 0) {
      resolveAll(results);
      return deferred;
     }
     function reject(reason) {
      if (deferred._status === STATUS_REJECTED) {
       return;
      }
      results = [];
      rejectAll(reason);
     }
     for (var i = 0, ii = promises.length; i < ii; ++i) {
      var promise = promises[i];
      var resolve = function (i) {
       return function (value) {
        if (deferred._status === STATUS_REJECTED) {
         return;
        }
        results[i] = value;
        unresolved--;
        if (unresolved === 0) {
         resolveAll(results);
        }
       };
      }(i);
      if (Promise.isPromise(promise)) {
       promise.then(resolve, reject);
      } else {
       resolve(promise);
      }
     }
     return deferred;
    };
    Promise.isPromise = function Promise_isPromise(value) {
     return value && typeof value.then === 'function';
    };
    Promise.resolve = function Promise_resolve(value) {
     return new Promise(function (resolve) {
      resolve(value);
     });
    };
    Promise.reject = function Promise_reject(reason) {
     return new Promise(function (resolve, reject) {
      reject(reason);
     });
    };
    Promise.prototype = {
     _status: null,
     _value: null,
     _handlers: null,
     _unhandledRejection: null,
     _updateStatus: function Promise__updateStatus(status, value) {
      if (this._status === STATUS_RESOLVED || this._status === STATUS_REJECTED) {
       return;
      }
      if (status === STATUS_RESOLVED && Promise.isPromise(value)) {
       value.then(this._updateStatus.bind(this, STATUS_RESOLVED), this._updateStatus.bind(this, STATUS_REJECTED));
       return;
      }
      this._status = status;
      this._value = value;
      if (status === STATUS_REJECTED && this._handlers.length === 0) {
       this._unhandledRejection = true;
       HandlerManager.addUnhandledRejection(this);
      }
      HandlerManager.scheduleHandlers(this);
     },
     _resolve: function Promise_resolve(value) {
      this._updateStatus(STATUS_RESOLVED, value);
     },
     _reject: function Promise_reject(reason) {
      this._updateStatus(STATUS_REJECTED, reason);
     },
     then: function Promise_then(onResolve, onReject) {
      var nextPromise = new Promise(function (resolve, reject) {
       this.resolve = resolve;
       this.reject = reject;
      });
      this._handlers.push({
       thisPromise: this,
       onResolve: onResolve,
       onReject: onReject,
       nextPromise: nextPromise
      });
      HandlerManager.scheduleHandlers(this);
      return nextPromise;
     },
     catch: function Promise_catch(onReject) {
      return this.then(undefined, onReject);
     }
    };
    globalScope.Promise = Promise;
   }());
   (function WeakMapClosure() {
    if (globalScope.WeakMap) {
     return;
    }
    var id = 0;
    function WeakMap() {
     this.id = '$weakmap' + id++;
    }
    WeakMap.prototype = {
     has: function (obj) {
      return !!Object.getOwnPropertyDescriptor(obj, this.id);
     },
     get: function (obj, defaultValue) {
      return this.has(obj) ? obj[this.id] : defaultValue;
     },
     set: function (obj, value) {
      Object.defineProperty(obj, this.id, {
       value: value,
       enumerable: false,
       configurable: true
      });
     },
     delete: function (obj) {
      delete obj[this.id];
     }
    };
    globalScope.WeakMap = WeakMap;
   }());
   var StatTimer = function StatTimerClosure() {
    function rpad(str, pad, length) {
     while (str.length < length) {
      str += pad;
     }
     return str;
    }
    function StatTimer() {
     this.started = Object.create(null);
     this.times = [];
     this.enabled = true;
    }
    StatTimer.prototype = {
     time: function StatTimer_time(name) {
      if (!this.enabled) {
       return;
      }
      if (name in this.started) {
       warn('Timer is already running for ' + name);
      }
      this.started[name] = Date.now();
     },
     timeEnd: function StatTimer_timeEnd(name) {
      if (!this.enabled) {
       return;
      }
      if (!(name in this.started)) {
       warn('Timer has not been started for ' + name);
      }
      this.times.push({
       'name': name,
       'start': this.started[name],
       'end': Date.now()
      });
      delete this.started[name];
     },
     toString: function StatTimer_toString() {
      var i, ii;
      var times = this.times;
      var out = '';
      var longest = 0;
      for (i = 0, ii = times.length; i < ii; ++i) {
       var name = times[i]['name'];
       if (name.length > longest) {
        longest = name.length;
       }
      }
      for (i = 0, ii = times.length; i < ii; ++i) {
       var span = times[i];
       var duration = span.end - span.start;
       out += rpad(span['name'], ' ', longest) + ' ' + duration + 'ms\n';
      }
      return out;
     }
    };
    return StatTimer;
   }();
   var createBlob = function createBlob(data, contentType) {
    if (typeof Blob !== 'undefined') {
     return new Blob([data], { type: contentType });
    }
    warn('The "Blob" constructor is not supported.');
   };
   var createObjectURL = function createObjectURLClosure() {
    var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    return function createObjectURL(data, contentType, forceDataSchema) {
     if (!forceDataSchema && typeof URL !== 'undefined' && URL.createObjectURL) {
      var blob = createBlob(data, contentType);
      return URL.createObjectURL(blob);
     }
     var buffer = 'data:' + contentType + ';base64,';
     for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
     }
     return buffer;
    };
   }();
   function MessageHandler(sourceName, targetName, comObj) {
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackIndex = 1;
    this.postMessageTransfers = true;
    var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
    var ah = this.actionHandler = Object.create(null);
    this._onComObjOnMessage = function messageHandlerComObjOnMessage(event) {
     var data = event.data;
     if (data.targetName !== this.sourceName) {
      return;
     }
     if (data.isReply) {
      var callbackId = data.callbackId;
      if (data.callbackId in callbacksCapabilities) {
       var callback = callbacksCapabilities[callbackId];
       delete callbacksCapabilities[callbackId];
       if ('error' in data) {
        callback.reject(data.error);
       } else {
        callback.resolve(data.data);
       }
      } else {
       error('Cannot resolve callback ' + callbackId);
      }
     } else if (data.action in ah) {
      var action = ah[data.action];
      if (data.callbackId) {
       var sourceName = this.sourceName;
       var targetName = data.sourceName;
       Promise.resolve().then(function () {
        return action[0].call(action[1], data.data);
       }).then(function (result) {
        comObj.postMessage({
         sourceName: sourceName,
         targetName: targetName,
         isReply: true,
         callbackId: data.callbackId,
         data: result
        });
       }, function (reason) {
        if (reason instanceof Error) {
         reason = reason + '';
        }
        comObj.postMessage({
         sourceName: sourceName,
         targetName: targetName,
         isReply: true,
         callbackId: data.callbackId,
         error: reason
        });
       });
      } else {
       action[0].call(action[1], data.data);
      }
     } else {
      error('Unknown action from worker: ' + data.action);
     }
    }.bind(this);
    comObj.addEventListener('message', this._onComObjOnMessage);
   }
   MessageHandler.prototype = {
    on: function messageHandlerOn(actionName, handler, scope) {
     var ah = this.actionHandler;
     if (ah[actionName]) {
      error('There is already an actionName called "' + actionName + '"');
     }
     ah[actionName] = [
      handler,
      scope
     ];
    },
    send: function messageHandlerSend(actionName, data, transfers) {
     var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data
     };
     this.postMessage(message, transfers);
    },
    sendWithPromise: function messageHandlerSendWithPromise(actionName, data, transfers) {
     var callbackId = this.callbackIndex++;
     var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data,
      callbackId: callbackId
     };
     var capability = createPromiseCapability();
     this.callbacksCapabilities[callbackId] = capability;
     try {
      this.postMessage(message, transfers);
     } catch (e) {
      capability.reject(e);
     }
     return capability.promise;
    },
    postMessage: function (message, transfers) {
     if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
     } else {
      this.comObj.postMessage(message);
     }
    },
    destroy: function () {
     this.comObj.removeEventListener('message', this._onComObjOnMessage);
    }
   };
   function loadJpegStream(id, imageUrl, objs) {
    var img = new Image();
    img.onload = function loadJpegStream_onloadClosure() {
     objs.resolve(id, img);
    };
    img.onerror = function loadJpegStream_onerrorClosure() {
     objs.resolve(id, null);
     warn('Error during JPEG image loading');
    };
    img.src = imageUrl;
   }
   /* Any copyright is dedicated to the Public Domain.
    * http://creativecommons.org/publicdomain/zero/1.0/ */
   (function checkURLConstructor(scope) {
    var hasWorkingUrl = false;
    try {
     if (typeof URL === 'function' && typeof URL.prototype === 'object' && 'origin' in URL.prototype) {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      hasWorkingUrl = u.href === 'http://a/c%20d';
     }
    } catch (e) {
    }
    if (hasWorkingUrl) {
     return;
    }
    var relative = Object.create(null);
    relative['ftp'] = 21;
    relative['file'] = 0;
    relative['gopher'] = 70;
    relative['http'] = 80;
    relative['https'] = 443;
    relative['ws'] = 80;
    relative['wss'] = 443;
    var relativePathDotMapping = Object.create(null);
    relativePathDotMapping['%2e'] = '.';
    relativePathDotMapping['.%2e'] = '..';
    relativePathDotMapping['%2e.'] = '..';
    relativePathDotMapping['%2e%2e'] = '..';
    function isRelativeScheme(scheme) {
     return relative[scheme] !== undefined;
    }
    function invalid() {
     clear.call(this);
     this._isInvalid = true;
    }
    function IDNAToASCII(h) {
     if (h === '') {
      invalid.call(this);
     }
     return h.toLowerCase();
    }
    function percentEscape(c) {
     var unicode = c.charCodeAt(0);
     if (unicode > 0x20 && unicode < 0x7F && [
       0x22,
       0x23,
       0x3C,
       0x3E,
       0x3F,
       0x60
      ].indexOf(unicode) === -1) {
      return c;
     }
     return encodeURIComponent(c);
    }
    function percentEscapeQuery(c) {
     var unicode = c.charCodeAt(0);
     if (unicode > 0x20 && unicode < 0x7F && [
       0x22,
       0x23,
       0x3C,
       0x3E,
       0x60
      ].indexOf(unicode) === -1) {
      return c;
     }
     return encodeURIComponent(c);
    }
    var EOF, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
    function parse(input, stateOverride, base) {
     function err(message) {
      errors.push(message);
     }
     var state = stateOverride || 'scheme start', cursor = 0, buffer = '', seenAt = false, seenBracket = false, errors = [];
     loop:
      while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
       var c = input[cursor];
       switch (state) {
       case 'scheme start':
        if (c && ALPHA.test(c)) {
         buffer += c.toLowerCase();
         state = 'scheme';
        } else if (!stateOverride) {
         buffer = '';
         state = 'no scheme';
         continue;
        } else {
         err('Invalid scheme.');
         break loop;
        }
        break;
       case 'scheme':
        if (c && ALPHANUMERIC.test(c)) {
         buffer += c.toLowerCase();
        } else if (c === ':') {
         this._scheme = buffer;
         buffer = '';
         if (stateOverride) {
          break loop;
         }
         if (isRelativeScheme(this._scheme)) {
          this._isRelative = true;
         }
         if (this._scheme === 'file') {
          state = 'relative';
         } else if (this._isRelative && base && base._scheme === this._scheme) {
          state = 'relative or authority';
         } else if (this._isRelative) {
          state = 'authority first slash';
         } else {
          state = 'scheme data';
         }
        } else if (!stateOverride) {
         buffer = '';
         cursor = 0;
         state = 'no scheme';
         continue;
        } else if (EOF === c) {
         break loop;
        } else {
         err('Code point not allowed in scheme: ' + c);
         break loop;
        }
        break;
       case 'scheme data':
        if (c === '?') {
         this._query = '?';
         state = 'query';
        } else if (c === '#') {
         this._fragment = '#';
         state = 'fragment';
        } else {
         if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
          this._schemeData += percentEscape(c);
         }
        }
        break;
       case 'no scheme':
        if (!base || !isRelativeScheme(base._scheme)) {
         err('Missing scheme.');
         invalid.call(this);
        } else {
         state = 'relative';
         continue;
        }
        break;
       case 'relative or authority':
        if (c === '/' && input[cursor + 1] === '/') {
         state = 'authority ignore slashes';
        } else {
         err('Expected /, got: ' + c);
         state = 'relative';
         continue;
        }
        break;
       case 'relative':
        this._isRelative = true;
        if ('file' !== this._scheme) {
         this._scheme = base._scheme;
        }
        if (EOF === c) {
         this._host = base._host;
         this._port = base._port;
         this._path = base._path.slice();
         this._query = base._query;
         this._username = base._username;
         this._password = base._password;
         break loop;
        } else if (c === '/' || c === '\\') {
         if (c === '\\') {
          err('\\ is an invalid code point.');
         }
         state = 'relative slash';
        } else if (c === '?') {
         this._host = base._host;
         this._port = base._port;
         this._path = base._path.slice();
         this._query = '?';
         this._username = base._username;
         this._password = base._password;
         state = 'query';
        } else if (c === '#') {
         this._host = base._host;
         this._port = base._port;
         this._path = base._path.slice();
         this._query = base._query;
         this._fragment = '#';
         this._username = base._username;
         this._password = base._password;
         state = 'fragment';
        } else {
         var nextC = input[cursor + 1];
         var nextNextC = input[cursor + 2];
         if ('file' !== this._scheme || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || EOF !== nextNextC && '/' !== nextNextC && '\\' !== nextNextC && '?' !== nextNextC && '#' !== nextNextC) {
          this._host = base._host;
          this._port = base._port;
          this._username = base._username;
          this._password = base._password;
          this._path = base._path.slice();
          this._path.pop();
         }
         state = 'relative path';
         continue;
        }
        break;
       case 'relative slash':
        if (c === '/' || c === '\\') {
         if (c === '\\') {
          err('\\ is an invalid code point.');
         }
         if (this._scheme === 'file') {
          state = 'file host';
         } else {
          state = 'authority ignore slashes';
         }
        } else {
         if ('file' !== this._scheme) {
          this._host = base._host;
          this._port = base._port;
          this._username = base._username;
          this._password = base._password;
         }
         state = 'relative path';
         continue;
        }
        break;
       case 'authority first slash':
        if (c === '/') {
         state = 'authority second slash';
        } else {
         err('Expected \'/\', got: ' + c);
         state = 'authority ignore slashes';
         continue;
        }
        break;
       case 'authority second slash':
        state = 'authority ignore slashes';
        if ('/' !== c) {
         err('Expected \'/\', got: ' + c);
         continue;
        }
        break;
       case 'authority ignore slashes':
        if ('/' !== c && '\\' !== c) {
         state = 'authority';
         continue;
        } else {
         err('Expected authority, got: ' + c);
        }
        break;
       case 'authority':
        if (c === '@') {
         if (seenAt) {
          err('@ already seen.');
          buffer += '%40';
         }
         seenAt = true;
         for (var i = 0; i < buffer.length; i++) {
          var cp = buffer[i];
          if (cp === '\t' || cp === '\n' || cp === '\r') {
           err('Invalid whitespace in authority.');
           continue;
          }
          if (cp === ':' && this._password === null) {
           this._password = '';
           continue;
          }
          var tempC = percentEscape(cp);
          if (null !== this._password) {
           this._password += tempC;
          } else {
           this._username += tempC;
          }
         }
         buffer = '';
        } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
         cursor -= buffer.length;
         buffer = '';
         state = 'host';
         continue;
        } else {
         buffer += c;
        }
        break;
       case 'file host':
        if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
         if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
          state = 'relative path';
         } else if (buffer.length === 0) {
          state = 'relative path start';
         } else {
          this._host = IDNAToASCII.call(this, buffer);
          buffer = '';
          state = 'relative path start';
         }
         continue;
        } else if (c === '\t' || c === '\n' || c === '\r') {
         err('Invalid whitespace in file host.');
        } else {
         buffer += c;
        }
        break;
       case 'host':
       case 'hostname':
        if (c === ':' && !seenBracket) {
         this._host = IDNAToASCII.call(this, buffer);
         buffer = '';
         state = 'port';
         if (stateOverride === 'hostname') {
          break loop;
         }
        } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
         this._host = IDNAToASCII.call(this, buffer);
         buffer = '';
         state = 'relative path start';
         if (stateOverride) {
          break loop;
         }
         continue;
        } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
         if (c === '[') {
          seenBracket = true;
         } else if (c === ']') {
          seenBracket = false;
         }
         buffer += c;
        } else {
         err('Invalid code point in host/hostname: ' + c);
        }
        break;
       case 'port':
        if (/[0-9]/.test(c)) {
         buffer += c;
        } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
         if ('' !== buffer) {
          var temp = parseInt(buffer, 10);
          if (temp !== relative[this._scheme]) {
           this._port = temp + '';
          }
          buffer = '';
         }
         if (stateOverride) {
          break loop;
         }
         state = 'relative path start';
         continue;
        } else if (c === '\t' || c === '\n' || c === '\r') {
         err('Invalid code point in port: ' + c);
        } else {
         invalid.call(this);
        }
        break;
       case 'relative path start':
        if (c === '\\') {
         err('\'\\\' not allowed in path.');
        }
        state = 'relative path';
        if ('/' !== c && '\\' !== c) {
         continue;
        }
        break;
       case 'relative path':
        if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
         if (c === '\\') {
          err('\\ not allowed in relative path.');
         }
         var tmp;
         if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
          buffer = tmp;
         }
         if (buffer === '..') {
          this._path.pop();
          if ('/' !== c && '\\' !== c) {
           this._path.push('');
          }
         } else if (buffer === '.' && '/' !== c && '\\' !== c) {
          this._path.push('');
         } else if ('.' !== buffer) {
          if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
           buffer = buffer[0] + ':';
          }
          this._path.push(buffer);
         }
         buffer = '';
         if (c === '?') {
          this._query = '?';
          state = 'query';
         } else if (c === '#') {
          this._fragment = '#';
          state = 'fragment';
         }
        } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
         buffer += percentEscape(c);
        }
        break;
       case 'query':
        if (!stateOverride && c === '#') {
         this._fragment = '#';
         state = 'fragment';
        } else if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
         this._query += percentEscapeQuery(c);
        }
        break;
       case 'fragment':
        if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
         this._fragment += c;
        }
        break;
       }
       cursor++;
      }
    }
    function clear() {
     this._scheme = '';
     this._schemeData = '';
     this._username = '';
     this._password = null;
     this._host = '';
     this._port = '';
     this._path = [];
     this._query = '';
     this._fragment = '';
     this._isInvalid = false;
     this._isRelative = false;
    }
    function JURL(url, base)
     {
      if (base !== undefined && !(base instanceof JURL)) {
       base = new JURL(String(base));
      }
      this._url = url;
      clear.call(this);
      var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
      parse.call(this, input, null, base);
     }
    JURL.prototype = {
     toString: function () {
      return this.href;
     },
     get href() {
      if (this._isInvalid) {
       return this._url;
      }
      var authority = '';
      if ('' !== this._username || null !== this._password) {
       authority = this._username + (null !== this._password ? ':' + this._password : '') + '@';
      }
      return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
     },
     set href(href) {
      clear.call(this);
      parse.call(this, href);
     },
     get protocol() {
      return this._scheme + ':';
     },
     set protocol(protocol) {
      if (this._isInvalid) {
       return;
      }
      parse.call(this, protocol + ':', 'scheme start');
     },
     get host() {
      return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
     },
     set host(host) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      parse.call(this, host, 'host');
     },
     get hostname() {
      return this._host;
     },
     set hostname(hostname) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      parse.call(this, hostname, 'hostname');
     },
     get port() {
      return this._port;
     },
     set port(port) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      parse.call(this, port, 'port');
     },
     get pathname() {
      return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
     },
     set pathname(pathname) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      this._path = [];
      parse.call(this, pathname, 'relative path start');
     },
     get search() {
      return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
     },
     set search(search) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      this._query = '?';
      if (search[0] === '?') {
       search = search.slice(1);
      }
      parse.call(this, search, 'query');
     },
     get hash() {
      return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
     },
     set hash(hash) {
      if (this._isInvalid) {
       return;
      }
      this._fragment = '#';
      if (hash[0] === '#') {
       hash = hash.slice(1);
      }
      parse.call(this, hash, 'fragment');
     },
     get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
       return '';
      }
      switch (this._scheme) {
      case 'data':
      case 'file':
      case 'javascript':
      case 'mailto':
       return 'null';
      }
      host = this.host;
      if (!host) {
       return '';
      }
      return this._scheme + '://' + host;
     }
    };
    var OriginalURL = scope.URL;
    if (OriginalURL) {
     JURL.createObjectURL = function (blob) {
      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
     };
     JURL.revokeObjectURL = function (url) {
      OriginalURL.revokeObjectURL(url);
     };
    }
    scope.URL = JURL;
   }(globalScope));
   exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
   exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
   exports.OPS = OPS;
   exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
   exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
   exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
   exports.AnnotationFieldFlag = AnnotationFieldFlag;
   exports.AnnotationFlag = AnnotationFlag;
   exports.AnnotationType = AnnotationType;
   exports.FontType = FontType;
   exports.ImageKind = ImageKind;
   exports.InvalidPDFException = InvalidPDFException;
   exports.MessageHandler = MessageHandler;
   exports.MissingDataException = MissingDataException;
   exports.MissingPDFException = MissingPDFException;
   exports.NotImplementedException = NotImplementedException;
   exports.PageViewport = PageViewport;
   exports.PasswordException = PasswordException;
   exports.PasswordResponses = PasswordResponses;
   exports.StatTimer = StatTimer;
   exports.StreamType = StreamType;
   exports.TextRenderingMode = TextRenderingMode;
   exports.UnexpectedResponseException = UnexpectedResponseException;
   exports.UnknownErrorException = UnknownErrorException;
   exports.Util = Util;
   exports.XRefParseException = XRefParseException;
   exports.arrayByteLength = arrayByteLength;
   exports.arraysToBytes = arraysToBytes;
   exports.assert = assert;
   exports.bytesToString = bytesToString;
   exports.createBlob = createBlob;
   exports.createPromiseCapability = createPromiseCapability;
   exports.createObjectURL = createObjectURL;
   exports.deprecated = deprecated;
   exports.error = error;
   exports.getLookupTableFactory = getLookupTableFactory;
   exports.getVerbosityLevel = getVerbosityLevel;
   exports.globalScope = globalScope;
   exports.info = info;
   exports.isArray = isArray;
   exports.isArrayBuffer = isArrayBuffer;
   exports.isBool = isBool;
   exports.isEmptyObj = isEmptyObj;
   exports.isInt = isInt;
   exports.isNum = isNum;
   exports.isString = isString;
   exports.isSpace = isSpace;
   exports.isSameOrigin = isSameOrigin;
   exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
   exports.isLittleEndian = isLittleEndian;
   exports.isEvalSupported = isEvalSupported;
   exports.loadJpegStream = loadJpegStream;
   exports.log2 = log2;
   exports.readInt8 = readInt8;
   exports.readUint16 = readUint16;
   exports.readUint32 = readUint32;
   exports.removeNullCharacters = removeNullCharacters;
   exports.setVerbosityLevel = setVerbosityLevel;
   exports.shadow = shadow;
   exports.string32 = string32;
   exports.stringToBytes = stringToBytes;
   exports.stringToPDFString = stringToPDFString;
   exports.stringToUTF8String = stringToUTF8String;
   exports.utf8StringToString = utf8StringToString;
   exports.warn = warn;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayDOMUtils = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var removeNullCharacters = sharedUtil.removeNullCharacters;
   var warn = sharedUtil.warn;
   var deprecated = sharedUtil.deprecated;
   var createValidAbsoluteUrl = sharedUtil.createValidAbsoluteUrl;
   var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
   var CustomStyle = function CustomStyleClosure() {
    var prefixes = [
     'ms',
     'Moz',
     'Webkit',
     'O'
    ];
    var _cache = Object.create(null);
    function CustomStyle() {
    }
    CustomStyle.getProp = function get(propName, element) {
     if (arguments.length === 1 && typeof _cache[propName] === 'string') {
      return _cache[propName];
     }
     element = element || document.documentElement;
     var style = element.style, prefixed, uPropName;
     if (typeof style[propName] === 'string') {
      return _cache[propName] = propName;
     }
     uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
     for (var i = 0, l = prefixes.length; i < l; i++) {
      prefixed = prefixes[i] + uPropName;
      if (typeof style[prefixed] === 'string') {
       return _cache[propName] = prefixed;
      }
     }
     return _cache[propName] = 'undefined';
    };
    CustomStyle.setProp = function set(propName, element, str) {
     var prop = this.getProp(propName);
     if (prop !== 'undefined') {
      element.style[prop] = str;
     }
    };
    return CustomStyle;
   }();
   var hasCanvasTypedArrays;
   hasCanvasTypedArrays = function hasCanvasTypedArrays() {
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.createImageData(1, 1);
    return typeof imageData.data.buffer !== 'undefined';
   };
   var LinkTarget = {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
   };
   var LinkTargetStringMap = [
    '',
    '_self',
    '_blank',
    '_parent',
    '_top'
   ];
   function addLinkAttributes(link, params) {
    var url = params && params.url;
    link.href = link.title = url ? removeNullCharacters(url) : '';
    if (url) {
     var target = params.target;
     if (typeof target === 'undefined') {
      target = getDefaultSetting('externalLinkTarget');
     }
     link.target = LinkTargetStringMap[target];
     var rel = params.rel;
     if (typeof rel === 'undefined') {
      rel = getDefaultSetting('externalLinkRel');
     }
     link.rel = rel;
    }
   }
   function getFilenameFromUrl(url) {
    var anchor = url.indexOf('#');
    var query = url.indexOf('?');
    var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
    return url.substring(url.lastIndexOf('/', end) + 1, end);
   }
   function getDefaultSetting(id) {
    var globalSettings = sharedUtil.globalScope.PDFJS;
    switch (id) {
    case 'pdfBug':
     return globalSettings ? globalSettings.pdfBug : false;
    case 'disableAutoFetch':
     return globalSettings ? globalSettings.disableAutoFetch : false;
    case 'disableStream':
     return globalSettings ? globalSettings.disableStream : false;
    case 'disableRange':
     return globalSettings ? globalSettings.disableRange : false;
    case 'disableFontFace':
     return globalSettings ? globalSettings.disableFontFace : false;
    case 'disableCreateObjectURL':
     return globalSettings ? globalSettings.disableCreateObjectURL : false;
    case 'disableWebGL':
     return globalSettings ? globalSettings.disableWebGL : true;
    case 'cMapUrl':
     return globalSettings ? globalSettings.cMapUrl : null;
    case 'cMapPacked':
     return globalSettings ? globalSettings.cMapPacked : false;
    case 'postMessageTransfers':
     return globalSettings ? globalSettings.postMessageTransfers : true;
    case 'workerSrc':
     return globalSettings ? globalSettings.workerSrc : null;
    case 'disableWorker':
     return globalSettings ? globalSettings.disableWorker : false;
    case 'maxImageSize':
     return globalSettings ? globalSettings.maxImageSize : -1;
    case 'imageResourcesPath':
     return globalSettings ? globalSettings.imageResourcesPath : '';
    case 'isEvalSupported':
     return globalSettings ? globalSettings.isEvalSupported : true;
    case 'externalLinkTarget':
     if (!globalSettings) {
      return LinkTarget.NONE;
     }
     switch (globalSettings.externalLinkTarget) {
     case LinkTarget.NONE:
     case LinkTarget.SELF:
     case LinkTarget.BLANK:
     case LinkTarget.PARENT:
     case LinkTarget.TOP:
      return globalSettings.externalLinkTarget;
     }
     warn('PDFJS.externalLinkTarget is invalid: ' + globalSettings.externalLinkTarget);
     globalSettings.externalLinkTarget = LinkTarget.NONE;
     return LinkTarget.NONE;
    case 'externalLinkRel':
     return globalSettings ? globalSettings.externalLinkRel : DEFAULT_LINK_REL;
    case 'enableStats':
     return !!(globalSettings && globalSettings.enableStats);
    default:
     throw new Error('Unknown default setting: ' + id);
    }
   }
   function isExternalLinkTargetSet() {
    var externalLinkTarget = getDefaultSetting('externalLinkTarget');
    switch (externalLinkTarget) {
    case LinkTarget.NONE:
     return false;
    case LinkTarget.SELF:
    case LinkTarget.BLANK:
    case LinkTarget.PARENT:
    case LinkTarget.TOP:
     return true;
    }
   }
   function isValidUrl(url, allowRelative) {
    deprecated('isValidUrl(), please use createValidAbsoluteUrl() instead.');
    var baseUrl = allowRelative ? 'http://example.com' : null;
    return createValidAbsoluteUrl(url, baseUrl) !== null;
   }
   exports.CustomStyle = CustomStyle;
   exports.addLinkAttributes = addLinkAttributes;
   exports.isExternalLinkTargetSet = isExternalLinkTargetSet;
   exports.isValidUrl = isValidUrl;
   exports.getFilenameFromUrl = getFilenameFromUrl;
   exports.LinkTarget = LinkTarget;
   exports.hasCanvasTypedArrays = hasCanvasTypedArrays;
   exports.getDefaultSetting = getDefaultSetting;
   exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayFontLoader = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var assert = sharedUtil.assert;
   var bytesToString = sharedUtil.bytesToString;
   var string32 = sharedUtil.string32;
   var shadow = sharedUtil.shadow;
   var warn = sharedUtil.warn;
   function FontLoader(docId) {
    this.docId = docId;
    this.styleElement = null;
    this.nativeFontFaces = [];
    this.loadTestFontId = 0;
    this.loadingContext = {
     requests: [],
     nextRequestId: 0
    };
   }
   FontLoader.prototype = {
    insertRule: function fontLoaderInsertRule(rule) {
     var styleElement = this.styleElement;
     if (!styleElement) {
      styleElement = this.styleElement = document.createElement('style');
      styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
      document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
     }
     var styleSheet = styleElement.sheet;
     styleSheet.insertRule(rule, styleSheet.cssRules.length);
    },
    clear: function fontLoaderClear() {
     var styleElement = this.styleElement;
     if (styleElement) {
      styleElement.parentNode.removeChild(styleElement);
      styleElement = this.styleElement = null;
     }
     this.nativeFontFaces.forEach(function (nativeFontFace) {
      document.fonts.delete(nativeFontFace);
     });
     this.nativeFontFaces.length = 0;
    }
   };
   var getLoadTestFont = function () {
    return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQ' + 'AABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwA' + 'AAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbm' + 'FtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAA' + 'AADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6A' + 'ABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAA' + 'MQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAA' + 'AAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAA' + 'AAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQ' + 'AAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMA' + 'AQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAA' + 'EAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAA' + 'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA' + 'AAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgc' + 'A/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF' + 'hYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQA' + 'AAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAg' + 'ABAAAAAAAAAAAD6AAAAAAAAA==');
   };
   Object.defineProperty(FontLoader.prototype, 'loadTestFont', {
    get: function () {
     return shadow(this, 'loadTestFont', getLoadTestFont());
    },
    configurable: true
   });
   FontLoader.prototype.addNativeFontFace = function fontLoader_addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.push(nativeFontFace);
    document.fonts.add(nativeFontFace);
   };
   FontLoader.prototype.bind = function fontLoaderBind(fonts, callback) {
    var rules = [];
    var fontsToLoad = [];
    var fontLoadPromises = [];
    var getNativeFontPromise = function (nativeFontFace) {
     return nativeFontFace.loaded.catch(function (e) {
      warn('Failed to load font "' + nativeFontFace.family + '": ' + e);
     });
    };
    var isFontLoadingAPISupported = FontLoader.isFontLoadingAPISupported && !FontLoader.isSyncFontLoadingSupported;
    for (var i = 0, ii = fonts.length; i < ii; i++) {
     var font = fonts[i];
     if (font.attached || font.loading === false) {
      continue;
     }
     font.attached = true;
     if (isFontLoadingAPISupported) {
      var nativeFontFace = font.createNativeFontFace();
      if (nativeFontFace) {
       this.addNativeFontFace(nativeFontFace);
       fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
      }
     } else {
      var rule = font.createFontFaceRule();
      if (rule) {
       this.insertRule(rule);
       rules.push(rule);
       fontsToLoad.push(font);
      }
     }
    }
    var request = this.queueLoadingCallback(callback);
    if (isFontLoadingAPISupported) {
     Promise.all(fontLoadPromises).then(function () {
      request.complete();
     });
    } else if (rules.length > 0 && !FontLoader.isSyncFontLoadingSupported) {
     this.prepareFontLoadEvent(rules, fontsToLoad, request);
    } else {
     request.complete();
    }
   };
   FontLoader.prototype.queueLoadingCallback = function FontLoader_queueLoadingCallback(callback) {
    function LoadLoader_completeRequest() {
     assert(!request.end, 'completeRequest() cannot be called twice');
     request.end = Date.now();
     while (context.requests.length > 0 && context.requests[0].end) {
      var otherRequest = context.requests.shift();
      setTimeout(otherRequest.callback, 0);
     }
    }
    var context = this.loadingContext;
    var requestId = 'pdfjs-font-loading-' + context.nextRequestId++;
    var request = {
     id: requestId,
     complete: LoadLoader_completeRequest,
     callback: callback,
     started: Date.now()
    };
    context.requests.push(request);
    return request;
   };
   FontLoader.prototype.prepareFontLoadEvent = function fontLoaderPrepareFontLoadEvent(rules, fonts, request) {
    function int32(data, offset) {
     return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
    }
    function spliceString(s, offset, remove, insert) {
     var chunk1 = s.substr(0, offset);
     var chunk2 = s.substr(offset + remove);
     return chunk1 + insert + chunk2;
    }
    var i, ii;
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    var ctx = canvas.getContext('2d');
    var called = 0;
    function isFontReady(name, callback) {
     called++;
     if (called > 30) {
      warn('Load test font never loaded.');
      callback();
      return;
     }
     ctx.font = '30px ' + name;
     ctx.fillText('.', 0, 20);
     var imageData = ctx.getImageData(0, 0, 1, 1);
     if (imageData.data[3] > 0) {
      callback();
      return;
     }
     setTimeout(isFontReady.bind(null, name, callback));
    }
    var loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
    var data = this.loadTestFont;
    var COMMENT_OFFSET = 976;
    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    var CFF_CHECKSUM_OFFSET = 16;
    var XXXX_VALUE = 0x58585858;
    var checksum = int32(data, CFF_CHECKSUM_OFFSET);
    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
     checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    if (i < loadTestFontId.length) {
     checksum = checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i) | 0;
    }
    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
    var url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
    var rule = '@font-face { font-family:"' + loadTestFontId + '";src:' + url + '}';
    this.insertRule(rule);
    var names = [];
    for (i = 0, ii = fonts.length; i < ii; i++) {
     names.push(fonts[i].loadedName);
    }
    names.push(loadTestFontId);
    var div = document.createElement('div');
    div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');
    for (i = 0, ii = names.length; i < ii; ++i) {
     var span = document.createElement('span');
     span.textContent = 'Hi';
     span.style.fontFamily = names[i];
     div.appendChild(span);
    }
    document.body.appendChild(div);
    isFontReady(loadTestFontId, function () {
     document.body.removeChild(div);
     request.complete();
    });
   };
   FontLoader.isFontLoadingAPISupported = typeof document !== 'undefined' && !!document.fonts;
   var isSyncFontLoadingSupported = function isSyncFontLoadingSupported() {
    if (typeof navigator === 'undefined') {
     return true;
    }
    var supported = false;
    var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
    if (m && m[1] >= 14) {
     supported = true;
    }
    return supported;
   };
   Object.defineProperty(FontLoader, 'isSyncFontLoadingSupported', {
    get: function () {
     return shadow(FontLoader, 'isSyncFontLoadingSupported', isSyncFontLoadingSupported());
    },
    enumerable: true,
    configurable: true
   });
   var IsEvalSupportedCached = {
    get value() {
     return shadow(this, 'value', sharedUtil.isEvalSupported());
    }
   };
   var FontFaceObject = function FontFaceObjectClosure() {
    function FontFaceObject(translatedData, options) {
     this.compiledGlyphs = Object.create(null);
     for (var i in translatedData) {
      this[i] = translatedData[i];
     }
     this.options = options;
    }
    FontFaceObject.prototype = {
     createNativeFontFace: function FontFaceObject_createNativeFontFace() {
      if (!this.data) {
       return null;
      }
      if (this.options.disableFontFace) {
       this.disableFontFace = true;
       return null;
      }
      var nativeFontFace = new FontFace(this.loadedName, this.data, {});
      if (this.options.fontRegistry) {
       this.options.fontRegistry.registerFont(this);
      }
      return nativeFontFace;
     },
     createFontFaceRule: function FontFaceObject_createFontFaceRule() {
      if (!this.data) {
       return null;
      }
      if (this.options.disableFontFace) {
       this.disableFontFace = true;
       return null;
      }
      var data = bytesToString(new Uint8Array(this.data));
      var fontName = this.loadedName;
      var url = 'url(data:' + this.mimetype + ';base64,' + btoa(data) + ');';
      var rule = '@font-face { font-family:"' + fontName + '";src:' + url + '}';
      if (this.options.fontRegistry) {
       this.options.fontRegistry.registerFont(this, url);
      }
      return rule;
     },
     getPathGenerator: function FontFaceObject_getPathGenerator(objs, character) {
      if (!(character in this.compiledGlyphs)) {
       var cmds = objs.get(this.loadedName + '_path_' + character);
       var current, i, len;
       if (this.options.isEvalSupported && IsEvalSupportedCached.value) {
        var args, js = '';
        for (i = 0, len = cmds.length; i < len; i++) {
         current = cmds[i];
         if (current.args !== undefined) {
          args = current.args.join(',');
         } else {
          args = '';
         }
         js += 'c.' + current.cmd + '(' + args + ');\n';
        }
        this.compiledGlyphs[character] = new Function('c', 'size', js);
       } else {
        this.compiledGlyphs[character] = function (c, size) {
         for (i = 0, len = cmds.length; i < len; i++) {
          current = cmds[i];
          if (current.cmd === 'scale') {
           current.args = [
            size,
            -size
           ];
          }
          c[current.cmd].apply(c, current.args);
         }
        };
       }
      }
      return this.compiledGlyphs[character];
     }
    };
    return FontFaceObject;
   }();
   exports.FontFaceObject = FontFaceObject;
   exports.FontLoader = FontLoader;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayMetadata = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var error = sharedUtil.error;
   function fixMetadata(meta) {
    return meta.replace(/>\\376\\377([^<]+)/g, function (all, codes) {
     var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
      return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
     });
     var chars = '';
     for (var i = 0; i < bytes.length; i += 2) {
      var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
      chars += code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38 ? String.fromCharCode(code) : '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
     }
     return '>' + chars;
    });
   }
   function Metadata(meta) {
    if (typeof meta === 'string') {
     meta = fixMetadata(meta);
     var parser = new DOMParser();
     meta = parser.parseFromString(meta, 'application/xml');
    } else if (!(meta instanceof Document)) {
     error('Metadata: Invalid metadata object');
    }
    this.metaDocument = meta;
    this.metadata = Object.create(null);
    this.parse();
   }
   Metadata.prototype = {
    parse: function Metadata_parse() {
     var doc = this.metaDocument;
     var rdf = doc.documentElement;
     if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
      rdf = rdf.firstChild;
      while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
       rdf = rdf.nextSibling;
      }
     }
     var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
     if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
      return;
     }
     var children = rdf.childNodes, desc, entry, name, i, ii, length, iLength;
     for (i = 0, length = children.length; i < length; i++) {
      desc = children[i];
      if (desc.nodeName.toLowerCase() !== 'rdf:description') {
       continue;
      }
      for (ii = 0, iLength = desc.childNodes.length; ii < iLength; ii++) {
       if (desc.childNodes[ii].nodeName.toLowerCase() !== '#text') {
        entry = desc.childNodes[ii];
        name = entry.nodeName.toLowerCase();
        this.metadata[name] = entry.textContent.trim();
       }
      }
     }
    },
    get: function Metadata_get(name) {
     return this.metadata[name] || null;
    },
    has: function Metadata_has(name) {
     return typeof this.metadata[name] !== 'undefined';
    }
   };
   exports.Metadata = Metadata;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplaySVG = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
   var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
   var ImageKind = sharedUtil.ImageKind;
   var OPS = sharedUtil.OPS;
   var Util = sharedUtil.Util;
   var isNum = sharedUtil.isNum;
   var isArray = sharedUtil.isArray;
   var warn = sharedUtil.warn;
   var createObjectURL = sharedUtil.createObjectURL;
   var SVG_DEFAULTS = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fillColor: '#000000'
   };
   var convertImgDataToPng = function convertImgDataToPngClosure() {
    var PNG_HEADER = new Uint8Array([
     0x89,
     0x50,
     0x4e,
     0x47,
     0x0d,
     0x0a,
     0x1a,
     0x0a
    ]);
    var CHUNK_WRAPPER_SIZE = 12;
    var crcTable = new Int32Array(256);
    for (var i = 0; i < 256; i++) {
     var c = i;
     for (var h = 0; h < 8; h++) {
      if (c & 1) {
       c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
      } else {
       c = c >> 1 & 0x7fffffff;
      }
     }
     crcTable[i] = c;
    }
    function crc32(data, start, end) {
     var crc = -1;
     for (var i = start; i < end; i++) {
      var a = (crc ^ data[i]) & 0xff;
      var b = crcTable[a];
      crc = crc >>> 8 ^ b;
     }
     return crc ^ -1;
    }
    function writePngChunk(type, body, data, offset) {
     var p = offset;
     var len = body.length;
     data[p] = len >> 24 & 0xff;
     data[p + 1] = len >> 16 & 0xff;
     data[p + 2] = len >> 8 & 0xff;
     data[p + 3] = len & 0xff;
     p += 4;
     data[p] = type.charCodeAt(0) & 0xff;
     data[p + 1] = type.charCodeAt(1) & 0xff;
     data[p + 2] = type.charCodeAt(2) & 0xff;
     data[p + 3] = type.charCodeAt(3) & 0xff;
     p += 4;
     data.set(body, p);
     p += body.length;
     var crc = crc32(data, offset + 4, p);
     data[p] = crc >> 24 & 0xff;
     data[p + 1] = crc >> 16 & 0xff;
     data[p + 2] = crc >> 8 & 0xff;
     data[p + 3] = crc & 0xff;
    }
    function adler32(data, start, end) {
     var a = 1;
     var b = 0;
     for (var i = start; i < end; ++i) {
      a = (a + (data[i] & 0xff)) % 65521;
      b = (b + a) % 65521;
     }
     return b << 16 | a;
    }
    function encode(imgData, kind, forceDataSchema) {
     var width = imgData.width;
     var height = imgData.height;
     var bitDepth, colorType, lineSize;
     var bytes = imgData.data;
     switch (kind) {
     case ImageKind.GRAYSCALE_1BPP:
      colorType = 0;
      bitDepth = 1;
      lineSize = width + 7 >> 3;
      break;
     case ImageKind.RGB_24BPP:
      colorType = 2;
      bitDepth = 8;
      lineSize = width * 3;
      break;
     case ImageKind.RGBA_32BPP:
      colorType = 6;
      bitDepth = 8;
      lineSize = width * 4;
      break;
     default:
      throw new Error('invalid format');
     }
     var literals = new Uint8Array((1 + lineSize) * height);
     var offsetLiterals = 0, offsetBytes = 0;
     var y, i;
     for (y = 0; y < height; ++y) {
      literals[offsetLiterals++] = 0;
      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
      offsetBytes += lineSize;
      offsetLiterals += lineSize;
     }
     if (kind === ImageKind.GRAYSCALE_1BPP) {
      offsetLiterals = 0;
      for (y = 0; y < height; y++) {
       offsetLiterals++;
       for (i = 0; i < lineSize; i++) {
        literals[offsetLiterals++] ^= 0xFF;
       }
      }
     }
     var ihdr = new Uint8Array([
      width >> 24 & 0xff,
      width >> 16 & 0xff,
      width >> 8 & 0xff,
      width & 0xff,
      height >> 24 & 0xff,
      height >> 16 & 0xff,
      height >> 8 & 0xff,
      height & 0xff,
      bitDepth,
      colorType,
      0x00,
      0x00,
      0x00
     ]);
     var len = literals.length;
     var maxBlockLength = 0xFFFF;
     var deflateBlocks = Math.ceil(len / maxBlockLength);
     var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
     var pi = 0;
     idat[pi++] = 0x78;
     idat[pi++] = 0x9c;
     var pos = 0;
     while (len > maxBlockLength) {
      idat[pi++] = 0x00;
      idat[pi++] = 0xff;
      idat[pi++] = 0xff;
      idat[pi++] = 0x00;
      idat[pi++] = 0x00;
      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
      pi += maxBlockLength;
      pos += maxBlockLength;
      len -= maxBlockLength;
     }
     idat[pi++] = 0x01;
     idat[pi++] = len & 0xff;
     idat[pi++] = len >> 8 & 0xff;
     idat[pi++] = ~len & 0xffff & 0xff;
     idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
     idat.set(literals.subarray(pos), pi);
     pi += literals.length - pos;
     var adler = adler32(literals, 0, literals.length);
     idat[pi++] = adler >> 24 & 0xff;
     idat[pi++] = adler >> 16 & 0xff;
     idat[pi++] = adler >> 8 & 0xff;
     idat[pi++] = adler & 0xff;
     var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
     var data = new Uint8Array(pngLength);
     var offset = 0;
     data.set(PNG_HEADER, offset);
     offset += PNG_HEADER.length;
     writePngChunk('IHDR', ihdr, data, offset);
     offset += CHUNK_WRAPPER_SIZE + ihdr.length;
     writePngChunk('IDATA', idat, data, offset);
     offset += CHUNK_WRAPPER_SIZE + idat.length;
     writePngChunk('IEND', new Uint8Array(0), data, offset);
     return createObjectURL(data, 'image/png', forceDataSchema);
    }
    return function convertImgDataToPng(imgData, forceDataSchema) {
     var kind = imgData.kind === undefined ? ImageKind.GRAYSCALE_1BPP : imgData.kind;
     return encode(imgData, kind, forceDataSchema);
    };
   }();
   var SVGExtraState = function SVGExtraStateClosure() {
    function SVGExtraState() {
     this.fontSizeScale = 1;
     this.fontWeight = SVG_DEFAULTS.fontWeight;
     this.fontSize = 0;
     this.textMatrix = IDENTITY_MATRIX;
     this.fontMatrix = FONT_IDENTITY_MATRIX;
     this.leading = 0;
     this.x = 0;
     this.y = 0;
     this.lineX = 0;
     this.lineY = 0;
     this.charSpacing = 0;
     this.wordSpacing = 0;
     this.textHScale = 1;
     this.textRise = 0;
     this.fillColor = SVG_DEFAULTS.fillColor;
     this.strokeColor = '#000000';
     this.fillAlpha = 1;
     this.strokeAlpha = 1;
     this.lineWidth = 1;
     this.lineJoin = '';
     this.lineCap = '';
     this.miterLimit = 0;
     this.dashArray = [];
     this.dashPhase = 0;
     this.dependencies = [];
     this.activeClipUrl = null;
     this.clipGroup = null;
     this.maskId = '';
    }
    SVGExtraState.prototype = {
     clone: function SVGExtraState_clone() {
      return Object.create(this);
     },
     setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
     }
    };
    return SVGExtraState;
   }();
   var SVGGraphics = function SVGGraphicsClosure() {
    function opListToTree(opList) {
     var opTree = [];
     var tmp = [];
     var opListLen = opList.length;
     for (var x = 0; x < opListLen; x++) {
      if (opList[x].fn === 'save') {
       opTree.push({
        'fnId': 92,
        'fn': 'group',
        'items': []
       });
       tmp.push(opTree);
       opTree = opTree[opTree.length - 1].items;
       continue;
      }
      if (opList[x].fn === 'restore') {
       opTree = tmp.pop();
      } else {
       opTree.push(opList[x]);
      }
     }
     return opTree;
    }
    function pf(value) {
     if (value === (value | 0)) {
      return value.toString();
     }
     var s = value.toFixed(10);
     var i = s.length - 1;
     if (s[i] !== '0') {
      return s;
     }
     do {
      i--;
     } while (s[i] === '0');
     return s.substr(0, s[i] === '.' ? i : i + 1);
    }
    function pm(m) {
     if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
       if (m[0] === 1 && m[3] === 1) {
        return '';
       }
       return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
      }
      if (m[0] === m[3] && m[1] === -m[2]) {
       var a = Math.acos(m[0]) * 180 / Math.PI;
       return 'rotate(' + pf(a) + ')';
      }
     } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
       return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
      }
     }
     return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' + pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
    }
    function SVGGraphics(commonObjs, objs, forceDataSchema) {
     this.current = new SVGExtraState();
     this.transformMatrix = IDENTITY_MATRIX;
     this.transformStack = [];
     this.extraStack = [];
     this.commonObjs = commonObjs;
     this.objs = objs;
     this.pendingEOFill = false;
     this.embedFonts = false;
     this.embeddedFonts = Object.create(null);
     this.cssStyle = null;
     this.forceDataSchema = !!forceDataSchema;
    }
    var NS = 'http://www.w3.org/2000/svg';
    var XML_NS = 'http://www.w3.org/XML/1998/namespace';
    var XLINK_NS = 'http://www.w3.org/1999/xlink';
    var LINE_CAP_STYLES = [
     'butt',
     'round',
     'square'
    ];
    var LINE_JOIN_STYLES = [
     'miter',
     'round',
     'bevel'
    ];
    var clipCount = 0;
    var maskCount = 0;
    SVGGraphics.prototype = {
     save: function SVGGraphics_save() {
      this.transformStack.push(this.transformMatrix);
      var old = this.current;
      this.extraStack.push(old);
      this.current = old.clone();
     },
     restore: function SVGGraphics_restore() {
      this.transformMatrix = this.transformStack.pop();
      this.current = this.extraStack.pop();
      this.tgrp = null;
     },
     group: function SVGGraphics_group(items) {
      this.save();
      this.executeOpTree(items);
      this.restore();
     },
     loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var argsArray = operatorList.argsArray;
      var self = this;
      for (var i = 0; i < fnArrayLen; i++) {
       if (OPS.dependency === fnArray[i]) {
        var deps = argsArray[i];
        for (var n = 0, nn = deps.length; n < nn; n++) {
         var obj = deps[n];
         var common = obj.substring(0, 2) === 'g_';
         var promise;
         if (common) {
          promise = new Promise(function (resolve) {
           self.commonObjs.get(obj, resolve);
          });
         } else {
          promise = new Promise(function (resolve) {
           self.objs.get(obj, resolve);
          });
         }
         this.current.dependencies.push(promise);
        }
       }
      }
      return Promise.all(this.current.dependencies);
     },
     transform: function SVGGraphics_transform(a, b, c, d, e, f) {
      var transformMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      this.transformMatrix = Util.transform(this.transformMatrix, transformMatrix);
      this.tgrp = null;
     },
     getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
      this.viewport = viewport;
      var svgElement = this._initialize(viewport);
      return this.loadDependencies(operatorList).then(function () {
       this.transformMatrix = IDENTITY_MATRIX;
       var opTree = this.convertOpList(operatorList);
       this.executeOpTree(opTree);
       return svgElement;
      }.bind(this));
     },
     convertOpList: function SVGGraphics_convertOpList(operatorList) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var REVOPS = [];
      var opList = [];
      for (var op in OPS) {
       REVOPS[OPS[op]] = op;
      }
      for (var x = 0; x < fnArrayLen; x++) {
       var fnId = fnArray[x];
       opList.push({
        'fnId': fnId,
        'fn': REVOPS[fnId],
        'args': argsArray[x]
       });
      }
      return opListToTree(opList);
     },
     executeOpTree: function SVGGraphics_executeOpTree(opTree) {
      var opTreeLen = opTree.length;
      for (var x = 0; x < opTreeLen; x++) {
       var fn = opTree[x].fn;
       var fnId = opTree[x].fnId;
       var args = opTree[x].args;
       switch (fnId | 0) {
       case OPS.beginText:
        this.beginText();
        break;
       case OPS.setLeading:
        this.setLeading(args);
        break;
       case OPS.setLeadingMoveText:
        this.setLeadingMoveText(args[0], args[1]);
        break;
       case OPS.setFont:
        this.setFont(args);
        break;
       case OPS.showText:
        this.showText(args[0]);
        break;
       case OPS.showSpacedText:
        this.showText(args[0]);
        break;
       case OPS.endText:
        this.endText();
        break;
       case OPS.moveText:
        this.moveText(args[0], args[1]);
        break;
       case OPS.setCharSpacing:
        this.setCharSpacing(args[0]);
        break;
       case OPS.setWordSpacing:
        this.setWordSpacing(args[0]);
        break;
       case OPS.setHScale:
        this.setHScale(args[0]);
        break;
       case OPS.setTextMatrix:
        this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
        break;
       case OPS.setLineWidth:
        this.setLineWidth(args[0]);
        break;
       case OPS.setLineJoin:
        this.setLineJoin(args[0]);
        break;
       case OPS.setLineCap:
        this.setLineCap(args[0]);
        break;
       case OPS.setMiterLimit:
        this.setMiterLimit(args[0]);
        break;
       case OPS.setFillRGBColor:
        this.setFillRGBColor(args[0], args[1], args[2]);
        break;
       case OPS.setStrokeRGBColor:
        this.setStrokeRGBColor(args[0], args[1], args[2]);
        break;
       case OPS.setDash:
        this.setDash(args[0], args[1]);
        break;
       case OPS.setGState:
        this.setGState(args[0]);
        break;
       case OPS.fill:
        this.fill();
        break;
       case OPS.eoFill:
        this.eoFill();
        break;
       case OPS.stroke:
        this.stroke();
        break;
       case OPS.fillStroke:
        this.fillStroke();
        break;
       case OPS.eoFillStroke:
        this.eoFillStroke();
        break;
       case OPS.clip:
        this.clip('nonzero');
        break;
       case OPS.eoClip:
        this.clip('evenodd');
        break;
       case OPS.paintSolidColorImageMask:
        this.paintSolidColorImageMask();
        break;
       case OPS.paintJpegXObject:
        this.paintJpegXObject(args[0], args[1], args[2]);
        break;
       case OPS.paintImageXObject:
        this.paintImageXObject(args[0]);
        break;
       case OPS.paintInlineImageXObject:
        this.paintInlineImageXObject(args[0]);
        break;
       case OPS.paintImageMaskXObject:
        this.paintImageMaskXObject(args[0]);
        break;
       case OPS.paintFormXObjectBegin:
        this.paintFormXObjectBegin(args[0], args[1]);
        break;
       case OPS.paintFormXObjectEnd:
        this.paintFormXObjectEnd();
        break;
       case OPS.closePath:
        this.closePath();
        break;
       case OPS.closeStroke:
        this.closeStroke();
        break;
       case OPS.closeFillStroke:
        this.closeFillStroke();
        break;
       case OPS.nextLine:
        this.nextLine();
        break;
       case OPS.transform:
        this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
        break;
       case OPS.constructPath:
        this.constructPath(args[0], args[1]);
        break;
       case OPS.endPath:
        this.endPath();
        break;
       case 92:
        this.group(opTree[x].items);
        break;
       default:
        warn('Unimplemented operator ' + fn);
        break;
       }
      }
     },
     setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
      this.current.wordSpacing = wordSpacing;
     },
     setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
      this.current.charSpacing = charSpacing;
     },
     nextLine: function SVGGraphics_nextLine() {
      this.moveText(0, this.current.leading);
     },
     setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
      var current = this.current;
      this.current.textMatrix = this.current.lineMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      current.xcoords = [];
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.txtElement = document.createElementNS(NS, 'svg:text');
      current.txtElement.appendChild(current.tspan);
     },
     beginText: function SVGGraphics_beginText() {
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.lineMatrix = IDENTITY_MATRIX;
      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
      this.current.txtElement = document.createElementNS(NS, 'svg:text');
      this.current.txtgrp = document.createElementNS(NS, 'svg:g');
      this.current.xcoords = [];
     },
     moveText: function SVGGraphics_moveText(x, y) {
      var current = this.current;
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
      current.xcoords = [];
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
     },
     showText: function SVGGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      if (fontSize === 0) {
       return;
      }
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
       var glyph = glyphs[i];
       if (glyph === null) {
        x += fontDirection * wordSpacing;
        continue;
       } else if (isNum(glyph)) {
        x += -glyph * fontSize * 0.001;
        continue;
       }
       current.xcoords.push(current.x + x * textHScale);
       var width = glyph.width;
       var character = glyph.fontChar;
       var charWidth = width * widthAdvanceScale + charSpacing * fontDirection;
       x += charWidth;
       current.tspan.textContent += character;
      }
      if (vertical) {
       current.y -= x * textHScale;
      } else {
       current.x += x * textHScale;
      }
      current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
      if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
       current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
      }
      if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
       current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
      }
      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
       current.tspan.setAttributeNS(null, 'fill', current.fillColor);
      }
      current.txtElement.setAttributeNS(null, 'transform', pm(current.textMatrix) + ' scale(1, -1)');
      current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
      current.txtElement.appendChild(current.tspan);
      current.txtgrp.appendChild(current.txtElement);
      this._ensureTransformGroup().appendChild(current.txtElement);
     },
     setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
     },
     addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
      if (!this.cssStyle) {
       this.cssStyle = document.createElementNS(NS, 'svg:style');
       this.cssStyle.setAttributeNS(null, 'type', 'text/css');
       this.defs.appendChild(this.cssStyle);
      }
      var url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
      this.cssStyle.textContent += '@font-face { font-family: "' + fontObj.loadedName + '";' + ' src: url(' + url + '); }\n';
     },
     setFont: function SVGGraphics_setFont(details) {
      var current = this.current;
      var fontObj = this.commonObjs.get(details[0]);
      var size = details[1];
      this.current.font = fontObj;
      if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
       this.addFontStyle(fontObj);
       this.embeddedFonts[fontObj.loadedName] = fontObj;
      }
      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
      var bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      if (size < 0) {
       size = -size;
       current.fontDirection = -1;
      } else {
       current.fontDirection = 1;
      }
      current.fontSize = size;
      current.fontFamily = fontObj.loadedName;
      current.fontWeight = bold;
      current.fontStyle = italic;
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.xcoords = [];
     },
     endText: function SVGGraphics_endText() {
     },
     setLineWidth: function SVGGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
     },
     setLineCap: function SVGGraphics_setLineCap(style) {
      this.current.lineCap = LINE_CAP_STYLES[style];
     },
     setLineJoin: function SVGGraphics_setLineJoin(style) {
      this.current.lineJoin = LINE_JOIN_STYLES[style];
     },
     setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
      this.current.miterLimit = limit;
     },
     setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.strokeColor = color;
     },
     setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.fillColor = color;
      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
      this.current.xcoords = [];
     },
     setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
      this.current.dashArray = dashArray;
      this.current.dashPhase = dashPhase;
     },
     constructPath: function SVGGraphics_constructPath(ops, args) {
      var current = this.current;
      var x = current.x, y = current.y;
      current.path = document.createElementNS(NS, 'svg:path');
      var d = [];
      var opLength = ops.length;
      for (var i = 0, j = 0; i < opLength; i++) {
       switch (ops[i] | 0) {
       case OPS.rectangle:
        x = args[j++];
        y = args[j++];
        var width = args[j++];
        var height = args[j++];
        var xw = x + width;
        var yh = y + height;
        d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
        break;
       case OPS.moveTo:
        x = args[j++];
        y = args[j++];
        d.push('M', pf(x), pf(y));
        break;
       case OPS.lineTo:
        x = args[j++];
        y = args[j++];
        d.push('L', pf(x), pf(y));
        break;
       case OPS.curveTo:
        x = args[j + 4];
        y = args[j + 5];
        d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
        j += 6;
        break;
       case OPS.curveTo2:
        x = args[j + 2];
        y = args[j + 3];
        d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
        j += 4;
        break;
       case OPS.curveTo3:
        x = args[j + 2];
        y = args[j + 3];
        d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
        j += 4;
        break;
       case OPS.closePath:
        d.push('Z');
        break;
       }
      }
      current.path.setAttributeNS(null, 'd', d.join(' '));
      current.path.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
      current.path.setAttributeNS(null, 'stroke-linecap', current.lineCap);
      current.path.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
      current.path.setAttributeNS(null, 'stroke-width', pf(current.lineWidth) + 'px');
      current.path.setAttributeNS(null, 'stroke-dasharray', current.dashArray.map(pf).join(' '));
      current.path.setAttributeNS(null, 'stroke-dashoffset', pf(current.dashPhase) + 'px');
      current.path.setAttributeNS(null, 'fill', 'none');
      this._ensureTransformGroup().appendChild(current.path);
      current.element = current.path;
      current.setCurrentPoint(x, y);
     },
     endPath: function SVGGraphics_endPath() {
     },
     clip: function SVGGraphics_clip(type) {
      var current = this.current;
      var clipId = 'clippath' + clipCount;
      clipCount++;
      var clipPath = document.createElementNS(NS, 'svg:clipPath');
      clipPath.setAttributeNS(null, 'id', clipId);
      clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
      var clipElement = current.element.cloneNode();
      if (type === 'evenodd') {
       clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
      } else {
       clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
      }
      clipPath.appendChild(clipElement);
      this.defs.appendChild(clipPath);
      if (current.activeClipUrl) {
       current.clipGroup = null;
       this.extraStack.forEach(function (prev) {
        prev.clipGroup = null;
       });
      }
      current.activeClipUrl = 'url(#' + clipId + ')';
      this.tgrp = null;
     },
     closePath: function SVGGraphics_closePath() {
      var current = this.current;
      var d = current.path.getAttributeNS(null, 'd');
      d += 'Z';
      current.path.setAttributeNS(null, 'd', d);
     },
     setLeading: function SVGGraphics_setLeading(leading) {
      this.current.leading = -leading;
     },
     setTextRise: function SVGGraphics_setTextRise(textRise) {
      this.current.textRise = textRise;
     },
     setHScale: function SVGGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
     },
     setGState: function SVGGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
       var state = states[i];
       var key = state[0];
       var value = state[1];
       switch (key) {
       case 'LW':
        this.setLineWidth(value);
        break;
       case 'LC':
        this.setLineCap(value);
        break;
       case 'LJ':
        this.setLineJoin(value);
        break;
       case 'ML':
        this.setMiterLimit(value);
        break;
       case 'D':
        this.setDash(value[0], value[1]);
        break;
       case 'Font':
        this.setFont(value);
        break;
       default:
        warn('Unimplemented graphic state ' + key);
        break;
       }
      }
     },
     fill: function SVGGraphics_fill() {
      var current = this.current;
      current.element.setAttributeNS(null, 'fill', current.fillColor);
     },
     stroke: function SVGGraphics_stroke() {
      var current = this.current;
      current.element.setAttributeNS(null, 'stroke', current.strokeColor);
      current.element.setAttributeNS(null, 'fill', 'none');
     },
     eoFill: function SVGGraphics_eoFill() {
      var current = this.current;
      current.element.setAttributeNS(null, 'fill', current.fillColor);
      current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
     },
     fillStroke: function SVGGraphics_fillStroke() {
      this.stroke();
      this.fill();
     },
     eoFillStroke: function SVGGraphics_eoFillStroke() {
      this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
      this.fillStroke();
     },
     closeStroke: function SVGGraphics_closeStroke() {
      this.closePath();
      this.stroke();
     },
     closeFillStroke: function SVGGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
     },
     paintSolidColorImageMask: function SVGGraphics_paintSolidColorImageMask() {
      var current = this.current;
      var rect = document.createElementNS(NS, 'svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', '1px');
      rect.setAttributeNS(null, 'height', '1px');
      rect.setAttributeNS(null, 'fill', current.fillColor);
      this._ensureTransformGroup().appendChild(rect);
     },
     paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
      var imgObj = this.objs.get(objId);
      var imgEl = document.createElementNS(NS, 'svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
      imgEl.setAttributeNS(null, 'width', imgObj.width + 'px');
      imgEl.setAttributeNS(null, 'height', imgObj.height + 'px');
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-h));
      imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');
      this._ensureTransformGroup().appendChild(imgEl);
     },
     paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      this.paintInlineImageXObject(imgData);
     },
     paintInlineImageXObject: function SVGGraphics_paintInlineImageXObject(imgData, mask) {
      var width = imgData.width;
      var height = imgData.height;
      var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema);
      var cliprect = document.createElementNS(NS, 'svg:rect');
      cliprect.setAttributeNS(null, 'x', '0');
      cliprect.setAttributeNS(null, 'y', '0');
      cliprect.setAttributeNS(null, 'width', pf(width));
      cliprect.setAttributeNS(null, 'height', pf(height));
      this.current.element = cliprect;
      this.clip('nonzero');
      var imgEl = document.createElementNS(NS, 'svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-height));
      imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
      imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
      imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / width) + ' ' + pf(-1 / height) + ')');
      if (mask) {
       mask.appendChild(imgEl);
      } else {
       this._ensureTransformGroup().appendChild(imgEl);
      }
     },
     paintImageMaskXObject: function SVGGraphics_paintImageMaskXObject(imgData) {
      var current = this.current;
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = current.fillColor;
      current.maskId = 'mask' + maskCount++;
      var mask = document.createElementNS(NS, 'svg:mask');
      mask.setAttributeNS(null, 'id', current.maskId);
      var rect = document.createElementNS(NS, 'svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', pf(width));
      rect.setAttributeNS(null, 'height', pf(height));
      rect.setAttributeNS(null, 'fill', fillColor);
      rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId + ')');
      this.defs.appendChild(mask);
      this._ensureTransformGroup().appendChild(rect);
      this.paintInlineImageXObject(imgData, mask);
     },
     paintFormXObjectBegin: function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
      if (isArray(matrix) && matrix.length === 6) {
       this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      }
      if (isArray(bbox) && bbox.length === 4) {
       var width = bbox[2] - bbox[0];
       var height = bbox[3] - bbox[1];
       var cliprect = document.createElementNS(NS, 'svg:rect');
       cliprect.setAttributeNS(null, 'x', bbox[0]);
       cliprect.setAttributeNS(null, 'y', bbox[1]);
       cliprect.setAttributeNS(null, 'width', pf(width));
       cliprect.setAttributeNS(null, 'height', pf(height));
       this.current.element = cliprect;
       this.clip('nonzero');
       this.endPath();
      }
     },
     paintFormXObjectEnd: function SVGGraphics_paintFormXObjectEnd() {
     },
     _initialize: function SVGGraphics_initialize(viewport) {
      var svg = document.createElementNS(NS, 'svg:svg');
      svg.setAttributeNS(null, 'version', '1.1');
      svg.setAttributeNS(null, 'width', viewport.width + 'px');
      svg.setAttributeNS(null, 'height', viewport.height + 'px');
      svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
      svg.setAttributeNS(null, 'viewBox', '0 0 ' + viewport.width + ' ' + viewport.height);
      var definitions = document.createElementNS(NS, 'svg:defs');
      svg.appendChild(definitions);
      this.defs = definitions;
      var rootGroup = document.createElementNS(NS, 'svg:g');
      rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
      svg.appendChild(rootGroup);
      this.svg = rootGroup;
      return svg;
     },
     _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
      if (!this.current.clipGroup) {
       var clipGroup = document.createElementNS(NS, 'svg:g');
       clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
       this.svg.appendChild(clipGroup);
       this.current.clipGroup = clipGroup;
      }
      return this.current.clipGroup;
     },
     _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
      if (!this.tgrp) {
       this.tgrp = document.createElementNS(NS, 'svg:g');
       this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
       if (this.current.activeClipUrl) {
        this._ensureClipGroup().appendChild(this.tgrp);
       } else {
        this.svg.appendChild(this.tgrp);
       }
      }
      return this.tgrp;
     }
    };
    return SVGGraphics;
   }();
   exports.SVGGraphics = SVGGraphics;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayAnnotationLayer = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayDOMUtils) {
   var AnnotationBorderStyleType = sharedUtil.AnnotationBorderStyleType;
   var AnnotationType = sharedUtil.AnnotationType;
   var Util = sharedUtil.Util;
   var addLinkAttributes = displayDOMUtils.addLinkAttributes;
   var LinkTarget = displayDOMUtils.LinkTarget;
   var getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
   var warn = sharedUtil.warn;
   var CustomStyle = displayDOMUtils.CustomStyle;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   function AnnotationElementFactory() {
   }
   AnnotationElementFactory.prototype = {
    create: function AnnotationElementFactory_create(parameters) {
     var subtype = parameters.data.annotationType;
     switch (subtype) {
     case AnnotationType.LINK:
      return new LinkAnnotationElement(parameters);
     case AnnotationType.TEXT:
      return new TextAnnotationElement(parameters);
     case AnnotationType.WIDGET:
      var fieldType = parameters.data.fieldType;
      switch (fieldType) {
      case 'Tx':
       return new TextWidgetAnnotationElement(parameters);
      case 'Btn':
       if (parameters.data.radioButton) {
        return new RadioButtonWidgetAnnotationElement(parameters);
       } else if (parameters.data.checkBox) {
        return new CheckboxWidgetAnnotationElement(parameters);
       }
       warn('Unimplemented button widget annotation: pushbutton');
       break;
      case 'Ch':
       return new ChoiceWidgetAnnotationElement(parameters);
      }
      return new WidgetAnnotationElement(parameters);
     case AnnotationType.POPUP:
      return new PopupAnnotationElement(parameters);
     case AnnotationType.HIGHLIGHT:
      return new HighlightAnnotationElement(parameters);
     case AnnotationType.UNDERLINE:
      return new UnderlineAnnotationElement(parameters);
     case AnnotationType.SQUIGGLY:
      return new SquigglyAnnotationElement(parameters);
     case AnnotationType.STRIKEOUT:
      return new StrikeOutAnnotationElement(parameters);
     case AnnotationType.FILEATTACHMENT:
      return new FileAttachmentAnnotationElement(parameters);
     default:
      return new AnnotationElement(parameters);
     }
    }
   };
   var AnnotationElement = function AnnotationElementClosure() {
    function AnnotationElement(parameters, isRenderable) {
     this.isRenderable = isRenderable || false;
     this.data = parameters.data;
     this.layer = parameters.layer;
     this.page = parameters.page;
     this.viewport = parameters.viewport;
     this.linkService = parameters.linkService;
     this.downloadManager = parameters.downloadManager;
     this.imageResourcesPath = parameters.imageResourcesPath;
     this.renderInteractiveForms = parameters.renderInteractiveForms;
     if (isRenderable) {
      this.container = this._createContainer();
     }
    }
    AnnotationElement.prototype = {
     _createContainer: function AnnotationElement_createContainer() {
      var data = this.data, page = this.page, viewport = this.viewport;
      var container = document.createElement('section');
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      container.setAttribute('data-annotation-id', data.id);
      var rect = Util.normalizeRect([
       data.rect[0],
       page.view[3] - data.rect[1] + page.view[1],
       data.rect[2],
       page.view[3] - data.rect[3] + page.view[1]
      ]);
      CustomStyle.setProp('transform', container, 'matrix(' + viewport.transform.join(',') + ')');
      CustomStyle.setProp('transformOrigin', container, -rect[0] + 'px ' + -rect[1] + 'px');
      if (data.borderStyle.width > 0) {
       container.style.borderWidth = data.borderStyle.width + 'px';
       if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
        width = width - 2 * data.borderStyle.width;
        height = height - 2 * data.borderStyle.width;
       }
       var horizontalRadius = data.borderStyle.horizontalCornerRadius;
       var verticalRadius = data.borderStyle.verticalCornerRadius;
       if (horizontalRadius > 0 || verticalRadius > 0) {
        var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
        CustomStyle.setProp('borderRadius', container, radius);
       }
       switch (data.borderStyle.style) {
       case AnnotationBorderStyleType.SOLID:
        container.style.borderStyle = 'solid';
        break;
       case AnnotationBorderStyleType.DASHED:
        container.style.borderStyle = 'dashed';
        break;
       case AnnotationBorderStyleType.BEVELED:
        warn('Unimplemented border style: beveled');
        break;
       case AnnotationBorderStyleType.INSET:
        warn('Unimplemented border style: inset');
        break;
       case AnnotationBorderStyleType.UNDERLINE:
        container.style.borderBottomStyle = 'solid';
        break;
       default:
        break;
       }
       if (data.color) {
        container.style.borderColor = Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
       } else {
        container.style.borderWidth = 0;
       }
      }
      container.style.left = rect[0] + 'px';
      container.style.top = rect[1] + 'px';
      container.style.width = width + 'px';
      container.style.height = height + 'px';
      return container;
     },
     _createPopup: function AnnotationElement_createPopup(container, trigger, data) {
      if (!trigger) {
       trigger = document.createElement('div');
       trigger.style.height = container.style.height;
       trigger.style.width = container.style.width;
       container.appendChild(trigger);
      }
      var popupElement = new PopupElement({
       container: container,
       trigger: trigger,
       color: data.color,
       title: data.title,
       contents: data.contents,
       hideWrapper: true
      });
      var popup = popupElement.render();
      popup.style.left = container.style.width;
      container.appendChild(popup);
     },
     render: function AnnotationElement_render() {
      throw new Error('Abstract method AnnotationElement.render called');
     }
    };
    return AnnotationElement;
   }();
   var LinkAnnotationElement = function LinkAnnotationElementClosure() {
    function LinkAnnotationElement(parameters) {
     AnnotationElement.call(this, parameters, true);
    }
    Util.inherit(LinkAnnotationElement, AnnotationElement, {
     render: function LinkAnnotationElement_render() {
      this.container.className = 'linkAnnotation';
      var link = document.createElement('a');
      addLinkAttributes(link, {
       url: this.data.url,
       target: this.data.newWindow ? LinkTarget.BLANK : undefined
      });
      if (!this.data.url) {
       if (this.data.action) {
        this._bindNamedAction(link, this.data.action);
       } else {
        this._bindLink(link, this.data.dest);
       }
      }
      this.container.appendChild(link);
      return this.container;
     },
     _bindLink: function LinkAnnotationElement_bindLink(link, destination) {
      var self = this;
      link.href = this.linkService.getDestinationHash(destination);
      link.onclick = function () {
       if (destination) {
        self.linkService.navigateTo(destination);
       }
       return false;
      };
      if (destination) {
       link.className = 'internalLink';
      }
     },
     _bindNamedAction: function LinkAnnotationElement_bindNamedAction(link, action) {
      var self = this;
      link.href = this.linkService.getAnchorUrl('');
      link.onclick = function () {
       self.linkService.executeNamedAction(action);
       return false;
      };
      link.className = 'internalLink';
     }
    });
    return LinkAnnotationElement;
   }();
   var TextAnnotationElement = function TextAnnotationElementClosure() {
    function TextAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(TextAnnotationElement, AnnotationElement, {
     render: function TextAnnotationElement_render() {
      this.container.className = 'textAnnotation';
      var image = document.createElement('img');
      image.style.height = this.container.style.height;
      image.style.width = this.container.style.width;
      image.src = this.imageResourcesPath + 'annotation-' + this.data.name.toLowerCase() + '.svg';
      image.alt = '[{{type}} Annotation]';
      image.dataset.l10nId = 'text_annotation_type';
      image.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
      if (!this.data.hasPopup) {
       this._createPopup(this.container, image, this.data);
      }
      this.container.appendChild(image);
      return this.container;
     }
    });
    return TextAnnotationElement;
   }();
   var WidgetAnnotationElement = function WidgetAnnotationElementClosure() {
    function WidgetAnnotationElement(parameters, isRenderable) {
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(WidgetAnnotationElement, AnnotationElement, {
     render: function WidgetAnnotationElement_render() {
      return this.container;
     }
    });
    return WidgetAnnotationElement;
   }();
   var TextWidgetAnnotationElement = function TextWidgetAnnotationElementClosure() {
    var TEXT_ALIGNMENT = [
     'left',
     'center',
     'right'
    ];
    function TextWidgetAnnotationElement(parameters) {
     var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
     WidgetAnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(TextWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function TextWidgetAnnotationElement_render() {
      this.container.className = 'textWidgetAnnotation';
      var element = null;
      if (this.renderInteractiveForms) {
       if (this.data.multiLine) {
        element = document.createElement('textarea');
        element.textContent = this.data.fieldValue;
       } else {
        element = document.createElement('input');
        element.type = 'text';
        element.setAttribute('value', this.data.fieldValue);
       }
       element.disabled = this.data.readOnly;
       if (this.data.maxLen !== null) {
        element.maxLength = this.data.maxLen;
       }
       if (this.data.comb) {
        var fieldWidth = this.data.rect[2] - this.data.rect[0];
        var combWidth = fieldWidth / this.data.maxLen;
        element.classList.add('comb');
        element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
       }
      } else {
       element = document.createElement('div');
       element.textContent = this.data.fieldValue;
       element.style.verticalAlign = 'middle';
       element.style.display = 'table-cell';
       var font = null;
       if (this.data.fontRefName) {
        font = this.page.commonObjs.getData(this.data.fontRefName);
       }
       this._setTextStyle(element, font);
      }
      if (this.data.textAlignment !== null) {
       element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
      }
      this.container.appendChild(element);
      return this.container;
     },
     _setTextStyle: function TextWidgetAnnotationElement_setTextStyle(element, font) {
      var style = element.style;
      style.fontSize = this.data.fontSize + 'px';
      style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';
      if (!font) {
       return;
      }
      style.fontWeight = font.black ? font.bold ? '900' : 'bold' : font.bold ? 'bold' : 'normal';
      style.fontStyle = font.italic ? 'italic' : 'normal';
      var fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
      var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
      style.fontFamily = fontFamily + fallbackName;
     }
    });
    return TextWidgetAnnotationElement;
   }();
   var CheckboxWidgetAnnotationElement = function CheckboxWidgetAnnotationElementClosure() {
    function CheckboxWidgetAnnotationElement(parameters) {
     WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
    }
    Util.inherit(CheckboxWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function CheckboxWidgetAnnotationElement_render() {
      this.container.className = 'buttonWidgetAnnotation checkBox';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'checkbox';
      if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
       element.setAttribute('checked', true);
      }
      this.container.appendChild(element);
      return this.container;
     }
    });
    return CheckboxWidgetAnnotationElement;
   }();
   var RadioButtonWidgetAnnotationElement = function RadioButtonWidgetAnnotationElementClosure() {
    function RadioButtonWidgetAnnotationElement(parameters) {
     WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
    }
    Util.inherit(RadioButtonWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function RadioButtonWidgetAnnotationElement_render() {
      this.container.className = 'buttonWidgetAnnotation radioButton';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'radio';
      element.name = this.data.fieldName;
      if (this.data.fieldValue === this.data.buttonValue) {
       element.setAttribute('checked', true);
      }
      this.container.appendChild(element);
      return this.container;
     }
    });
    return RadioButtonWidgetAnnotationElement;
   }();
   var ChoiceWidgetAnnotationElement = function ChoiceWidgetAnnotationElementClosure() {
    function ChoiceWidgetAnnotationElement(parameters) {
     WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
    }
    Util.inherit(ChoiceWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function ChoiceWidgetAnnotationElement_render() {
      this.container.className = 'choiceWidgetAnnotation';
      var selectElement = document.createElement('select');
      selectElement.disabled = this.data.readOnly;
      if (!this.data.combo) {
       selectElement.size = this.data.options.length;
       if (this.data.multiSelect) {
        selectElement.multiple = true;
       }
      }
      for (var i = 0, ii = this.data.options.length; i < ii; i++) {
       var option = this.data.options[i];
       var optionElement = document.createElement('option');
       optionElement.textContent = option.displayValue;
       optionElement.value = option.exportValue;
       if (this.data.fieldValue.indexOf(option.displayValue) >= 0) {
        optionElement.setAttribute('selected', true);
       }
       selectElement.appendChild(optionElement);
      }
      this.container.appendChild(selectElement);
      return this.container;
     }
    });
    return ChoiceWidgetAnnotationElement;
   }();
   var PopupAnnotationElement = function PopupAnnotationElementClosure() {
    function PopupAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(PopupAnnotationElement, AnnotationElement, {
     render: function PopupAnnotationElement_render() {
      this.container.className = 'popupAnnotation';
      var selector = '[data-annotation-id="' + this.data.parentId + '"]';
      var parentElement = this.layer.querySelector(selector);
      if (!parentElement) {
       return this.container;
      }
      var popup = new PopupElement({
       container: this.container,
       trigger: parentElement,
       color: this.data.color,
       title: this.data.title,
       contents: this.data.contents
      });
      var parentLeft = parseFloat(parentElement.style.left);
      var parentWidth = parseFloat(parentElement.style.width);
      CustomStyle.setProp('transformOrigin', this.container, -(parentLeft + parentWidth) + 'px -' + parentElement.style.top);
      this.container.style.left = parentLeft + parentWidth + 'px';
      this.container.appendChild(popup.render());
      return this.container;
     }
    });
    return PopupAnnotationElement;
   }();
   var PopupElement = function PopupElementClosure() {
    var BACKGROUND_ENLIGHT = 0.7;
    function PopupElement(parameters) {
     this.container = parameters.container;
     this.trigger = parameters.trigger;
     this.color = parameters.color;
     this.title = parameters.title;
     this.contents = parameters.contents;
     this.hideWrapper = parameters.hideWrapper || false;
     this.pinned = false;
    }
    PopupElement.prototype = {
     render: function PopupElement_render() {
      var wrapper = document.createElement('div');
      wrapper.className = 'popupWrapper';
      this.hideElement = this.hideWrapper ? wrapper : this.container;
      this.hideElement.setAttribute('hidden', true);
      var popup = document.createElement('div');
      popup.className = 'popup';
      var color = this.color;
      if (color) {
       var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
       var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
       var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
       popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
      }
      var contents = this._formatContents(this.contents);
      var title = document.createElement('h1');
      title.textContent = this.title;
      this.trigger.addEventListener('click', this._toggle.bind(this));
      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
      popup.addEventListener('click', this._hide.bind(this, true));
      popup.appendChild(title);
      popup.appendChild(contents);
      wrapper.appendChild(popup);
      return wrapper;
     },
     _formatContents: function PopupElement_formatContents(contents) {
      var p = document.createElement('p');
      var lines = contents.split(/(?:\r\n?|\n)/);
      for (var i = 0, ii = lines.length; i < ii; ++i) {
       var line = lines[i];
       p.appendChild(document.createTextNode(line));
       if (i < ii - 1) {
        p.appendChild(document.createElement('br'));
       }
      }
      return p;
     },
     _toggle: function PopupElement_toggle() {
      if (this.pinned) {
       this._hide(true);
      } else {
       this._show(true);
      }
     },
     _show: function PopupElement_show(pin) {
      if (pin) {
       this.pinned = true;
      }
      if (this.hideElement.hasAttribute('hidden')) {
       this.hideElement.removeAttribute('hidden');
       this.container.style.zIndex += 1;
      }
     },
     _hide: function PopupElement_hide(unpin) {
      if (unpin) {
       this.pinned = false;
      }
      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
       this.hideElement.setAttribute('hidden', true);
       this.container.style.zIndex -= 1;
      }
     }
    };
    return PopupElement;
   }();
   var HighlightAnnotationElement = function HighlightAnnotationElementClosure() {
    function HighlightAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(HighlightAnnotationElement, AnnotationElement, {
     render: function HighlightAnnotationElement_render() {
      this.container.className = 'highlightAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return HighlightAnnotationElement;
   }();
   var UnderlineAnnotationElement = function UnderlineAnnotationElementClosure() {
    function UnderlineAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(UnderlineAnnotationElement, AnnotationElement, {
     render: function UnderlineAnnotationElement_render() {
      this.container.className = 'underlineAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return UnderlineAnnotationElement;
   }();
   var SquigglyAnnotationElement = function SquigglyAnnotationElementClosure() {
    function SquigglyAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(SquigglyAnnotationElement, AnnotationElement, {
     render: function SquigglyAnnotationElement_render() {
      this.container.className = 'squigglyAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return SquigglyAnnotationElement;
   }();
   var StrikeOutAnnotationElement = function StrikeOutAnnotationElementClosure() {
    function StrikeOutAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(StrikeOutAnnotationElement, AnnotationElement, {
     render: function StrikeOutAnnotationElement_render() {
      this.container.className = 'strikeoutAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return StrikeOutAnnotationElement;
   }();
   var FileAttachmentAnnotationElement = function FileAttachmentAnnotationElementClosure() {
    function FileAttachmentAnnotationElement(parameters) {
     AnnotationElement.call(this, parameters, true);
     this.filename = getFilenameFromUrl(parameters.data.file.filename);
     this.content = parameters.data.file.content;
    }
    Util.inherit(FileAttachmentAnnotationElement, AnnotationElement, {
     render: function FileAttachmentAnnotationElement_render() {
      this.container.className = 'fileAttachmentAnnotation';
      var trigger = document.createElement('div');
      trigger.style.height = this.container.style.height;
      trigger.style.width = this.container.style.width;
      trigger.addEventListener('dblclick', this._download.bind(this));
      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
       this._createPopup(this.container, trigger, this.data);
      }
      this.container.appendChild(trigger);
      return this.container;
     },
     _download: function FileAttachmentAnnotationElement_download() {
      if (!this.downloadManager) {
       warn('Download cannot be started due to unavailable download manager');
       return;
      }
      this.downloadManager.downloadData(this.content, this.filename, '');
     }
    });
    return FileAttachmentAnnotationElement;
   }();
   var AnnotationLayer = function AnnotationLayerClosure() {
    return {
     render: function AnnotationLayer_render(parameters) {
      var annotationElementFactory = new AnnotationElementFactory();
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
       var data = parameters.annotations[i];
       if (!data) {
        continue;
       }
       var properties = {
        data: data,
        layer: parameters.div,
        page: parameters.page,
        viewport: parameters.viewport,
        linkService: parameters.linkService,
        downloadManager: parameters.downloadManager,
        imageResourcesPath: parameters.imageResourcesPath || getDefaultSetting('imageResourcesPath'),
        renderInteractiveForms: parameters.renderInteractiveForms || false
       };
       var element = annotationElementFactory.create(properties);
       if (element.isRenderable) {
        parameters.div.appendChild(element.render());
       }
      }
     },
     update: function AnnotationLayer_update(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
       var data = parameters.annotations[i];
       var element = parameters.div.querySelector('[data-annotation-id="' + data.id + '"]');
       if (element) {
        CustomStyle.setProp('transform', element, 'matrix(' + parameters.viewport.transform.join(',') + ')');
       }
      }
      parameters.div.removeAttribute('hidden');
     }
    };
   }();
   exports.AnnotationLayer = AnnotationLayer;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayTextLayer = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayDOMUtils) {
   var Util = sharedUtil.Util;
   var createPromiseCapability = sharedUtil.createPromiseCapability;
   var CustomStyle = displayDOMUtils.CustomStyle;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   var renderTextLayer = function renderTextLayerClosure() {
    var MAX_TEXT_DIVS_TO_RENDER = 100000;
    var NonWhitespaceRegexp = /\S/;
    function isAllWhitespace(str) {
     return !NonWhitespaceRegexp.test(str);
    }
    var styleBuf = [
     'left: ',
     0,
     'px; top: ',
     0,
     'px; font-size: ',
     0,
     'px; font-family: ',
     '',
     ';'
    ];
    function appendText(task, geom, styles) {
     var textDiv = document.createElement('div');
     var textDivProperties = {
      style: null,
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1
     };
     task._textDivs.push(textDiv);
     if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;
      task._textDivProperties.set(textDiv, textDivProperties);
      return;
     }
     var tx = Util.transform(task._viewport.transform, geom.transform);
     var angle = Math.atan2(tx[1], tx[0]);
     var style = styles[geom.fontName];
     if (style.vertical) {
      angle += Math.PI / 2;
     }
     var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
     var fontAscent = fontHeight;
     if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
     } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
     }
     var left;
     var top;
     if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
     } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
     }
     styleBuf[1] = left;
     styleBuf[3] = top;
     styleBuf[5] = fontHeight;
     styleBuf[7] = style.fontFamily;
     textDivProperties.style = styleBuf.join('');
     textDiv.setAttribute('style', textDivProperties.style);
     textDiv.textContent = geom.str;
     if (getDefaultSetting('pdfBug')) {
      textDiv.dataset.fontName = geom.fontName;
     }
     if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
     }
     if (geom.str.length > 1) {
      if (style.vertical) {
       textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
       textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
     }
     task._textDivProperties.set(textDiv, textDivProperties);
     if (task._enhanceTextSelection) {
      var angleCos = 1, angleSin = 0;
      if (angle !== 0) {
       angleCos = Math.cos(angle);
       angleSin = Math.sin(angle);
      }
      var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
      var divHeight = fontHeight;
      var m, b;
      if (angle !== 0) {
       m = [
        angleCos,
        angleSin,
        -angleSin,
        angleCos,
        left,
        top
       ];
       b = Util.getAxialAlignedBoundingBox([
        0,
        0,
        divWidth,
        divHeight
       ], m);
      } else {
       b = [
        left,
        top,
        left + divWidth,
        top + divHeight
       ];
      }
      task._bounds.push({
       left: b[0],
       top: b[1],
       right: b[2],
       bottom: b[3],
       div: textDiv,
       size: [
        divWidth,
        divHeight
       ],
       m: m
      });
     }
    }
    function render(task) {
     if (task._canceled) {
      return;
     }
     var textLayerFrag = task._container;
     var textDivs = task._textDivs;
     var capability = task._capability;
     var textDivsLength = textDivs.length;
     if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
     }
     var canvas = document.createElement('canvas');
     canvas.mozOpaque = true;
     var ctx = canvas.getContext('2d', { alpha: false });
     var lastFontSize;
     var lastFontFamily;
     for (var i = 0; i < textDivsLength; i++) {
      var textDiv = textDivs[i];
      var textDivProperties = task._textDivProperties.get(textDiv);
      if (textDivProperties.isWhitespace) {
       continue;
      }
      var fontSize = textDiv.style.fontSize;
      var fontFamily = textDiv.style.fontFamily;
      if (fontSize !== lastFontSize || fontFamily !== lastFontFamily) {
       ctx.font = fontSize + ' ' + fontFamily;
       lastFontSize = fontSize;
       lastFontFamily = fontFamily;
      }
      var width = ctx.measureText(textDiv.textContent).width;
      textLayerFrag.appendChild(textDiv);
      var transform = '';
      if (textDivProperties.canvasWidth !== 0 && width > 0) {
       textDivProperties.scale = textDivProperties.canvasWidth / width;
       transform = 'scaleX(' + textDivProperties.scale + ')';
      }
      if (textDivProperties.angle !== 0) {
       transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
      }
      if (transform !== '') {
       textDivProperties.originalTransform = transform;
       CustomStyle.setProp('transform', textDiv, transform);
      }
      task._textDivProperties.set(textDiv, textDivProperties);
     }
     task._renderingDone = true;
     capability.resolve();
    }
    function expand(task) {
     var bounds = task._bounds;
     var viewport = task._viewport;
     var expanded = expandBounds(viewport.width, viewport.height, bounds);
     for (var i = 0; i < expanded.length; i++) {
      var div = bounds[i].div;
      var divProperties = task._textDivProperties.get(div);
      if (divProperties.angle === 0) {
       divProperties.paddingLeft = bounds[i].left - expanded[i].left;
       divProperties.paddingTop = bounds[i].top - expanded[i].top;
       divProperties.paddingRight = expanded[i].right - bounds[i].right;
       divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
       task._textDivProperties.set(div, divProperties);
       continue;
      }
      var e = expanded[i], b = bounds[i];
      var m = b.m, c = m[0], s = m[1];
      var points = [
       [
        0,
        0
       ],
       [
        0,
        b.size[1]
       ],
       [
        b.size[0],
        0
       ],
       b.size
      ];
      var ts = new Float64Array(64);
      points.forEach(function (p, i) {
       var t = Util.applyTransform(p, m);
       ts[i + 0] = c && (e.left - t[0]) / c;
       ts[i + 4] = s && (e.top - t[1]) / s;
       ts[i + 8] = c && (e.right - t[0]) / c;
       ts[i + 12] = s && (e.bottom - t[1]) / s;
       ts[i + 16] = s && (e.left - t[0]) / -s;
       ts[i + 20] = c && (e.top - t[1]) / c;
       ts[i + 24] = s && (e.right - t[0]) / -s;
       ts[i + 28] = c && (e.bottom - t[1]) / c;
       ts[i + 32] = c && (e.left - t[0]) / -c;
       ts[i + 36] = s && (e.top - t[1]) / -s;
       ts[i + 40] = c && (e.right - t[0]) / -c;
       ts[i + 44] = s && (e.bottom - t[1]) / -s;
       ts[i + 48] = s && (e.left - t[0]) / s;
       ts[i + 52] = c && (e.top - t[1]) / -c;
       ts[i + 56] = s && (e.right - t[0]) / s;
       ts[i + 60] = c && (e.bottom - t[1]) / -c;
      });
      var findPositiveMin = function (ts, offset, count) {
       var result = 0;
       for (var i = 0; i < count; i++) {
        var t = ts[offset++];
        if (t > 0) {
         result = result ? Math.min(t, result) : t;
        }
       }
       return result;
      };
      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
      task._textDivProperties.set(div, divProperties);
     }
    }
    function expandBounds(width, height, boxes) {
     var bounds = boxes.map(function (box, i) {
      return {
       x1: box.left,
       y1: box.top,
       x2: box.right,
       y2: box.bottom,
       index: i,
       x1New: undefined,
       x2New: undefined
      };
     });
     expandBoundsLTR(width, bounds);
     var expanded = new Array(boxes.length);
     bounds.forEach(function (b) {
      var i = b.index;
      expanded[i] = {
       left: b.x1New,
       top: 0,
       right: b.x2New,
       bottom: 0
      };
     });
     boxes.map(function (box, i) {
      var e = expanded[i], b = bounds[i];
      b.x1 = box.top;
      b.y1 = width - e.right;
      b.x2 = box.bottom;
      b.y2 = width - e.left;
      b.index = i;
      b.x1New = undefined;
      b.x2New = undefined;
     });
     expandBoundsLTR(height, bounds);
     bounds.forEach(function (b) {
      var i = b.index;
      expanded[i].top = b.x1New;
      expanded[i].bottom = b.x2New;
     });
     return expanded;
    }
    function expandBoundsLTR(width, bounds) {
     bounds.sort(function (a, b) {
      return a.x1 - b.x1 || a.index - b.index;
     });
     var fakeBoundary = {
      x1: -Infinity,
      y1: -Infinity,
      x2: 0,
      y2: Infinity,
      index: -1,
      x1New: 0,
      x2New: 0
     };
     var horizon = [{
       start: -Infinity,
       end: Infinity,
       boundary: fakeBoundary
      }];
     bounds.forEach(function (boundary) {
      var i = 0;
      while (i < horizon.length && horizon[i].end <= boundary.y1) {
       i++;
      }
      var j = horizon.length - 1;
      while (j >= 0 && horizon[j].start >= boundary.y2) {
       j--;
      }
      var horizonPart, affectedBoundary;
      var q, k, maxXNew = -Infinity;
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       var xNew;
       if (affectedBoundary.x2 > boundary.x1) {
        xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
       } else if (affectedBoundary.x2New === undefined) {
        xNew = (affectedBoundary.x2 + boundary.x1) / 2;
       } else {
        xNew = affectedBoundary.x2New;
       }
       if (xNew > maxXNew) {
        maxXNew = xNew;
       }
      }
      boundary.x1New = maxXNew;
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       if (affectedBoundary.x2New === undefined) {
        if (affectedBoundary.x2 > boundary.x1) {
         if (affectedBoundary.index > boundary.index) {
          affectedBoundary.x2New = affectedBoundary.x2;
         }
        } else {
         affectedBoundary.x2New = maxXNew;
        }
       } else if (affectedBoundary.x2New > maxXNew) {
        affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
       }
      }
      var changedHorizon = [], lastBoundary = null;
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
       if (lastBoundary === useBoundary) {
        changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
       } else {
        changedHorizon.push({
         start: horizonPart.start,
         end: horizonPart.end,
         boundary: useBoundary
        });
        lastBoundary = useBoundary;
       }
      }
      if (horizon[i].start < boundary.y1) {
       changedHorizon[0].start = boundary.y1;
       changedHorizon.unshift({
        start: horizon[i].start,
        end: boundary.y1,
        boundary: horizon[i].boundary
       });
      }
      if (boundary.y2 < horizon[j].end) {
       changedHorizon[changedHorizon.length - 1].end = boundary.y2;
       changedHorizon.push({
        start: boundary.y2,
        end: horizon[j].end,
        boundary: horizon[j].boundary
       });
      }
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       if (affectedBoundary.x2New !== undefined) {
        continue;
       }
       var used = false;
       for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
        used = horizon[k].boundary === affectedBoundary;
       }
       for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
        used = horizon[k].boundary === affectedBoundary;
       }
       for (k = 0; !used && k < changedHorizon.length; k++) {
        used = changedHorizon[k].boundary === affectedBoundary;
       }
       if (!used) {
        affectedBoundary.x2New = maxXNew;
       }
      }
      Array.prototype.splice.apply(horizon, [
       i,
       j - i + 1
      ].concat(changedHorizon));
     });
     horizon.forEach(function (horizonPart) {
      var affectedBoundary = horizonPart.boundary;
      if (affectedBoundary.x2New === undefined) {
       affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
      }
     });
    }
    function TextLayerRenderTask(textContent, container, viewport, textDivs, enhanceTextSelection) {
     this._textContent = textContent;
     this._container = container;
     this._viewport = viewport;
     this._textDivs = textDivs || [];
     this._textDivProperties = new WeakMap();
     this._renderingDone = false;
     this._canceled = false;
     this._capability = createPromiseCapability();
     this._renderTimer = null;
     this._bounds = [];
     this._enhanceTextSelection = !!enhanceTextSelection;
    }
    TextLayerRenderTask.prototype = {
     get promise() {
      return this._capability.promise;
     },
     cancel: function TextLayer_cancel() {
      this._canceled = true;
      if (this._renderTimer !== null) {
       clearTimeout(this._renderTimer);
       this._renderTimer = null;
      }
      this._capability.reject('canceled');
     },
     _render: function TextLayer_render(timeout) {
      var textItems = this._textContent.items;
      var textStyles = this._textContent.styles;
      for (var i = 0, len = textItems.length; i < len; i++) {
       appendText(this, textItems[i], textStyles);
      }
      if (!timeout) {
       render(this);
      } else {
       var self = this;
       this._renderTimer = setTimeout(function () {
        render(self);
        self._renderTimer = null;
       }, timeout);
      }
     },
     expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
       return;
      }
      if (this._bounds !== null) {
       expand(this);
       this._bounds = null;
      }
      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
       var div = this._textDivs[i];
       var divProperties = this._textDivProperties.get(div);
       if (divProperties.isWhitespace) {
        continue;
       }
       if (expandDivs) {
        var transform = '', padding = '';
        if (divProperties.scale !== 1) {
         transform = 'scaleX(' + divProperties.scale + ')';
        }
        if (divProperties.angle !== 0) {
         transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
        }
        if (divProperties.paddingLeft !== 0) {
         padding += ' padding-left: ' + divProperties.paddingLeft / divProperties.scale + 'px;';
         transform += ' translateX(' + -divProperties.paddingLeft / divProperties.scale + 'px)';
        }
        if (divProperties.paddingTop !== 0) {
         padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
         transform += ' translateY(' + -divProperties.paddingTop + 'px)';
        }
        if (divProperties.paddingRight !== 0) {
         padding += ' padding-right: ' + divProperties.paddingRight / divProperties.scale + 'px;';
        }
        if (divProperties.paddingBottom !== 0) {
         padding += ' padding-bottom: ' + divProperties.paddingBottom + 'px;';
        }
        if (padding !== '') {
         div.setAttribute('style', divProperties.style + padding);
        }
        if (transform !== '') {
         CustomStyle.setProp('transform', div, transform);
        }
       } else {
        div.style.padding = 0;
        CustomStyle.setProp('transform', div, divProperties.originalTransform || '');
       }
      }
     }
    };
    function renderTextLayer(renderParameters) {
     var task = new TextLayerRenderTask(renderParameters.textContent, renderParameters.container, renderParameters.viewport, renderParameters.textDivs, renderParameters.enhanceTextSelection);
     task._render(renderParameters.timeout);
     return task;
    }
    return renderTextLayer;
   }();
   exports.renderTextLayer = renderTextLayer;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayWebGL = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayDOMUtils) {
   var shadow = sharedUtil.shadow;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   var WebGLUtils = function WebGLUtilsClosure() {
    function loadShader(gl, code, shaderType) {
     var shader = gl.createShader(shaderType);
     gl.shaderSource(shader, code);
     gl.compileShader(shader);
     var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
     if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error('Error during shader compilation: ' + errorMsg);
     }
     return shader;
    }
    function createVertexShader(gl, code) {
     return loadShader(gl, code, gl.VERTEX_SHADER);
    }
    function createFragmentShader(gl, code) {
     return loadShader(gl, code, gl.FRAGMENT_SHADER);
    }
    function createProgram(gl, shaders) {
     var program = gl.createProgram();
     for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
     }
     gl.linkProgram(program);
     var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
     if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error('Error during program linking: ' + errorMsg);
     }
     return program;
    }
    function createTexture(gl, image, textureId) {
     gl.activeTexture(textureId);
     var texture = gl.createTexture();
     gl.bindTexture(gl.TEXTURE_2D, texture);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
     return texture;
    }
    var currentGL, currentCanvas;
    function generateGL() {
     if (currentGL) {
      return;
     }
     currentCanvas = document.createElement('canvas');
     currentGL = currentCanvas.getContext('webgl', { premultipliedalpha: false });
    }
    var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
    var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
    var smaskCache = null;
    function initSmaskGL() {
     var canvas, gl;
     generateGL();
     canvas = currentCanvas;
     currentCanvas = null;
     gl = currentGL;
     currentGL = null;
     var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
     var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
     var program = createProgram(gl, [
      vertexShader,
      fragmentShader
     ]);
     gl.useProgram(program);
     var cache = {};
     cache.gl = gl;
     cache.canvas = canvas;
     cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
     cache.positionLocation = gl.getAttribLocation(program, 'a_position');
     cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
     cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
     var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
     var texLayerLocation = gl.getUniformLocation(program, 'u_image');
     var texMaskLocation = gl.getUniformLocation(program, 'u_mask');
     var texCoordBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      0.0,
      1.0,
      1.0
     ]), gl.STATIC_DRAW);
     gl.enableVertexAttribArray(texCoordLocation);
     gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
     gl.uniform1i(texLayerLocation, 0);
     gl.uniform1i(texMaskLocation, 1);
     smaskCache = cache;
    }
    function composeSMask(layer, mask, properties) {
     var width = layer.width, height = layer.height;
     if (!smaskCache) {
      initSmaskGL();
     }
     var cache = smaskCache, canvas = cache.canvas, gl = cache.gl;
     canvas.width = width;
     canvas.height = height;
     gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
     gl.uniform2f(cache.resolutionLocation, width, height);
     if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
     } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
     }
     gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
     var texture = createTexture(gl, layer, gl.TEXTURE0);
     var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
     var buffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0,
      0,
      width,
      0,
      0,
      height,
      0,
      height,
      width,
      0,
      width,
      height
     ]), gl.STATIC_DRAW);
     gl.enableVertexAttribArray(cache.positionLocation);
     gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
     gl.clearColor(0, 0, 0, 0);
     gl.enable(gl.BLEND);
     gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
     gl.clear(gl.COLOR_BUFFER_BIT);
     gl.drawArrays(gl.TRIANGLES, 0, 6);
     gl.flush();
     gl.deleteTexture(texture);
     gl.deleteTexture(maskTexture);
     gl.deleteBuffer(buffer);
     return canvas;
    }
    var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
    var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
    var figuresCache = null;
    function initFiguresGL() {
     var canvas, gl;
     generateGL();
     canvas = currentCanvas;
     currentCanvas = null;
     gl = currentGL;
     currentGL = null;
     var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
     var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
     var program = createProgram(gl, [
      vertexShader,
      fragmentShader
     ]);
     gl.useProgram(program);
     var cache = {};
     cache.gl = gl;
     cache.canvas = canvas;
     cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
     cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
     cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
     cache.positionLocation = gl.getAttribLocation(program, 'a_position');
     cache.colorLocation = gl.getAttribLocation(program, 'a_color');
     figuresCache = cache;
    }
    function drawFigures(width, height, backgroundColor, figures, context) {
     if (!figuresCache) {
      initFiguresGL();
     }
     var cache = figuresCache, canvas = cache.canvas, gl = cache.gl;
     canvas.width = width;
     canvas.height = height;
     gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
     gl.uniform2f(cache.resolutionLocation, width, height);
     var count = 0;
     var i, ii, rows;
     for (i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
      case 'lattice':
       rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
       count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
       break;
      case 'triangles':
       count += figures[i].coords.length;
       break;
      }
     }
     var coords = new Float32Array(count * 2);
     var colors = new Uint8Array(count * 3);
     var coordsMap = context.coords, colorsMap = context.colors;
     var pIndex = 0, cIndex = 0;
     for (i = 0, ii = figures.length; i < ii; i++) {
      var figure = figures[i], ps = figure.coords, cs = figure.colors;
      switch (figure.type) {
      case 'lattice':
       var cols = figure.verticesPerRow;
       rows = ps.length / cols | 0;
       for (var row = 1; row < rows; row++) {
        var offset = row * cols + 1;
        for (var col = 1; col < cols; col++, offset++) {
         coords[pIndex] = coordsMap[ps[offset - cols - 1]];
         coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
         coords[pIndex + 2] = coordsMap[ps[offset - cols]];
         coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
         coords[pIndex + 4] = coordsMap[ps[offset - 1]];
         coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
         colors[cIndex] = colorsMap[cs[offset - cols - 1]];
         colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
         colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
         colors[cIndex + 3] = colorsMap[cs[offset - cols]];
         colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
         colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
         colors[cIndex + 6] = colorsMap[cs[offset - 1]];
         colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
         colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
         coords[pIndex + 6] = coords[pIndex + 2];
         coords[pIndex + 7] = coords[pIndex + 3];
         coords[pIndex + 8] = coords[pIndex + 4];
         coords[pIndex + 9] = coords[pIndex + 5];
         coords[pIndex + 10] = coordsMap[ps[offset]];
         coords[pIndex + 11] = coordsMap[ps[offset] + 1];
         colors[cIndex + 9] = colors[cIndex + 3];
         colors[cIndex + 10] = colors[cIndex + 4];
         colors[cIndex + 11] = colors[cIndex + 5];
         colors[cIndex + 12] = colors[cIndex + 6];
         colors[cIndex + 13] = colors[cIndex + 7];
         colors[cIndex + 14] = colors[cIndex + 8];
         colors[cIndex + 15] = colorsMap[cs[offset]];
         colors[cIndex + 16] = colorsMap[cs[offset] + 1];
         colors[cIndex + 17] = colorsMap[cs[offset] + 2];
         pIndex += 12;
         cIndex += 18;
        }
       }
       break;
      case 'triangles':
       for (var j = 0, jj = ps.length; j < jj; j++) {
        coords[pIndex] = coordsMap[ps[j]];
        coords[pIndex + 1] = coordsMap[ps[j] + 1];
        colors[cIndex] = colorsMap[cs[j]];
        colors[cIndex + 1] = colorsMap[cs[j] + 1];
        colors[cIndex + 2] = colorsMap[cs[j] + 2];
        pIndex += 2;
        cIndex += 3;
       }
       break;
      }
     }
     if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
     } else {
      gl.clearColor(0, 0, 0, 0);
     }
     gl.clear(gl.COLOR_BUFFER_BIT);
     var coordsBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
     gl.enableVertexAttribArray(cache.positionLocation);
     gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
     var colorsBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
     gl.enableVertexAttribArray(cache.colorLocation);
     gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
     gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
     gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
     gl.drawArrays(gl.TRIANGLES, 0, count);
     gl.flush();
     gl.deleteBuffer(coordsBuffer);
     gl.deleteBuffer(colorsBuffer);
     return canvas;
    }
    function cleanup() {
     if (smaskCache && smaskCache.canvas) {
      smaskCache.canvas.width = 0;
      smaskCache.canvas.height = 0;
     }
     if (figuresCache && figuresCache.canvas) {
      figuresCache.canvas.width = 0;
      figuresCache.canvas.height = 0;
     }
     smaskCache = null;
     figuresCache = null;
    }
    return {
     get isEnabled() {
      if (getDefaultSetting('disableWebGL')) {
       return false;
      }
      var enabled = false;
      try {
       generateGL();
       enabled = !!currentGL;
      } catch (e) {
      }
      return shadow(this, 'isEnabled', enabled);
     },
     composeSMask: composeSMask,
     drawFigures: drawFigures,
     clear: cleanup
    };
   }();
   exports.WebGLUtils = WebGLUtils;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayPatternHelper = {}, root.pdfjsSharedUtil, root.pdfjsDisplayWebGL);
  }(this, function (exports, sharedUtil, displayWebGL) {
   var Util = sharedUtil.Util;
   var info = sharedUtil.info;
   var isArray = sharedUtil.isArray;
   var error = sharedUtil.error;
   var WebGLUtils = displayWebGL.WebGLUtils;
   var ShadingIRs = {};
   ShadingIRs.RadialAxial = {
    fromIR: function RadialAxial_fromIR(raw) {
     var type = raw[1];
     var colorStops = raw[2];
     var p0 = raw[3];
     var p1 = raw[4];
     var r0 = raw[5];
     var r1 = raw[6];
     return {
      type: 'Pattern',
      getPattern: function RadialAxial_getPattern(ctx) {
       var grad;
       if (type === 'axial') {
        grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
       } else if (type === 'radial') {
        grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
       }
       for (var i = 0, ii = colorStops.length; i < ii; ++i) {
        var c = colorStops[i];
        grad.addColorStop(c[0], c[1]);
       }
       return grad;
      }
     };
    }
   };
   var createMeshCanvas = function createMeshCanvasClosure() {
    function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
     var coords = context.coords, colors = context.colors;
     var bytes = data.data, rowSize = data.width * 4;
     var tmp;
     if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
     }
     if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2;
      p2 = p3;
      p3 = tmp;
      tmp = c2;
      c2 = c3;
      c3 = tmp;
     }
     if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
     }
     var x1 = (coords[p1] + context.offsetX) * context.scaleX;
     var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
     var x2 = (coords[p2] + context.offsetX) * context.scaleX;
     var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
     var x3 = (coords[p3] + context.offsetX) * context.scaleX;
     var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
     if (y1 >= y3) {
      return;
     }
     var c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
     var c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
     var c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
     var minY = Math.round(y1), maxY = Math.round(y3);
     var xa, car, cag, cab;
     var xb, cbr, cbg, cbb;
     var k;
     for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
       k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
       xa = x1 - (x1 - x2) * k;
       car = c1r - (c1r - c2r) * k;
       cag = c1g - (c1g - c2g) * k;
       cab = c1b - (c1b - c2b) * k;
      } else {
       k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
       xa = x2 - (x2 - x3) * k;
       car = c2r - (c2r - c3r) * k;
       cag = c2g - (c2g - c3g) * k;
       cab = c2b - (c2b - c3b) * k;
      }
      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;
      for (var x = x1_; x <= x2_; x++) {
       k = (xa - x) / (xa - xb);
       k = k < 0 ? 0 : k > 1 ? 1 : k;
       bytes[j++] = car - (car - cbr) * k | 0;
       bytes[j++] = cag - (cag - cbg) * k | 0;
       bytes[j++] = cab - (cab - cbb) * k | 0;
       bytes[j++] = 255;
      }
     }
    }
    function drawFigure(data, figure, context) {
     var ps = figure.coords;
     var cs = figure.colors;
     var i, ii;
     switch (figure.type) {
     case 'lattice':
      var verticesPerRow = figure.verticesPerRow;
      var rows = Math.floor(ps.length / verticesPerRow) - 1;
      var cols = verticesPerRow - 1;
      for (i = 0; i < rows; i++) {
       var q = i * verticesPerRow;
       for (var j = 0; j < cols; j++, q++) {
        drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
        drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
       }
      }
      break;
     case 'triangles':
      for (i = 0, ii = ps.length; i < ii; i += 3) {
       drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
      }
      break;
     default:
      error('illigal figure');
      break;
     }
    }
    function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases) {
     var EXPECTED_SCALE = 1.1;
     var MAX_PATTERN_SIZE = 3000;
     var BORDER_SIZE = 2;
     var offsetX = Math.floor(bounds[0]);
     var offsetY = Math.floor(bounds[1]);
     var boundsWidth = Math.ceil(bounds[2]) - offsetX;
     var boundsHeight = Math.ceil(bounds[3]) - offsetY;
     var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
     var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
     var scaleX = boundsWidth / width;
     var scaleY = boundsHeight / height;
     var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
     };
     var paddedWidth = width + BORDER_SIZE * 2;
     var paddedHeight = height + BORDER_SIZE * 2;
     var canvas, tmpCanvas, i, ii;
     if (WebGLUtils.isEnabled) {
      canvas = WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
     } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      var tmpCtx = tmpCanvas.context;
      var data = tmpCtx.createImageData(width, height);
      if (backgroundColor) {
       var bytes = data.data;
       for (i = 0, ii = bytes.length; i < ii; i += 4) {
        bytes[i] = backgroundColor[0];
        bytes[i + 1] = backgroundColor[1];
        bytes[i + 2] = backgroundColor[2];
        bytes[i + 3] = 255;
       }
      }
      for (i = 0; i < figures.length; i++) {
       drawFigure(data, figures[i], context);
      }
      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
     }
     return {
      canvas: canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX: scaleX,
      scaleY: scaleY
     };
    }
    return createMeshCanvas;
   }();
   ShadingIRs.Mesh = {
    fromIR: function Mesh_fromIR(raw) {
     var coords = raw[2];
     var colors = raw[3];
     var figures = raw[4];
     var bounds = raw[5];
     var matrix = raw[6];
     var background = raw[8];
     return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
       var scale;
       if (shadingFill) {
        scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
       } else {
        scale = Util.singularValueDecompose2dScale(owner.baseTransform);
        if (matrix) {
         var matrixScale = Util.singularValueDecompose2dScale(matrix);
         scale = [
          scale[0] * matrixScale[0],
          scale[1] * matrixScale[1]
         ];
        }
       }
       var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases);
       if (!shadingFill) {
        ctx.setTransform.apply(ctx, owner.baseTransform);
        if (matrix) {
         ctx.transform.apply(ctx, matrix);
        }
       }
       ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
       ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
       return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      }
     };
    }
   };
   ShadingIRs.Dummy = {
    fromIR: function Dummy_fromIR() {
     return {
      type: 'Pattern',
      getPattern: function Dummy_fromIR_getPattern() {
       return 'hotpink';
      }
     };
    }
   };
   function getShadingPatternFromIR(raw) {
    var shadingIR = ShadingIRs[raw[0]];
    if (!shadingIR) {
     error('Unknown IR type: ' + raw[0]);
    }
    return shadingIR.fromIR(raw);
   }
   var TilingPattern = function TilingPatternClosure() {
    var PaintType = {
     COLORED: 1,
     UNCOLORED: 2
    };
    var MAX_PATTERN_SIZE = 3000;
    function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
     this.operatorList = IR[2];
     this.matrix = IR[3] || [
      1,
      0,
      0,
      1,
      0,
      0
     ];
     this.bbox = IR[4];
     this.xstep = IR[5];
     this.ystep = IR[6];
     this.paintType = IR[7];
     this.tilingType = IR[8];
     this.color = color;
     this.canvasGraphicsFactory = canvasGraphicsFactory;
     this.baseTransform = baseTransform;
     this.type = 'Pattern';
     this.ctx = ctx;
    }
    TilingPattern.prototype = {
     createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;
      info('TilingType: ' + tilingType);
      var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
      var topLeft = [
       x0,
       y0
      ];
      var botRight = [
       x0 + xstep,
       y0 + ystep
      ];
      var width = botRight[0] - topLeft[0];
      var height = botRight[1] - topLeft[1];
      var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
      var curMatrixScale = Util.singularValueDecompose2dScale(this.baseTransform);
      var combinedScale = [
       matrixScale[0] * curMatrixScale[0],
       matrixScale[1] * curMatrixScale[1]
      ];
      width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])), MAX_PATTERN_SIZE);
      height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])), MAX_PATTERN_SIZE);
      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern', width, height, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;
      this.setFillAndStrokeStyleToContext(tmpCtx, paintType, color);
      this.setScale(width, height, xstep, ystep);
      this.transformToScale(graphics);
      var tmpTranslate = [
       1,
       0,
       0,
       1,
       -topLeft[0],
       -topLeft[1]
      ];
      graphics.transform.apply(graphics, tmpTranslate);
      this.clipBbox(graphics, bbox, x0, y0, x1, y1);
      graphics.executeOperatorList(operatorList);
      return tmpCanvas.canvas;
     },
     setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
      this.scale = [
       width / xstep,
       height / ystep
      ];
     },
     transformToScale: function TilingPattern_transformToScale(graphics) {
      var scale = this.scale;
      var tmpScale = [
       scale[0],
       0,
       0,
       scale[1],
       0,
       0
      ];
      graphics.transform.apply(graphics, tmpScale);
     },
     scaleToContext: function TilingPattern_scaleToContext() {
      var scale = this.scale;
      this.ctx.scale(1 / scale[0], 1 / scale[1]);
     },
     clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (bbox && isArray(bbox) && bbox.length === 4) {
       var bboxWidth = x1 - x0;
       var bboxHeight = y1 - y0;
       graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
       graphics.clip();
       graphics.endPath();
      }
     },
     setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(context, paintType, color) {
      switch (paintType) {
      case PaintType.COLORED:
       var ctx = this.ctx;
       context.fillStyle = ctx.fillStyle;
       context.strokeStyle = ctx.strokeStyle;
       break;
      case PaintType.UNCOLORED:
       var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
       context.fillStyle = cssColor;
       context.strokeStyle = cssColor;
       break;
      default:
       error('Unsupported paint type: ' + paintType);
      }
     },
     getPattern: function TilingPattern_getPattern(ctx, owner) {
      var temporaryPatternCanvas = this.createPatternCanvas(owner);
      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      this.scaleToContext();
      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
     }
    };
    return TilingPattern;
   }();
   exports.getShadingPatternFromIR = getShadingPatternFromIR;
   exports.TilingPattern = TilingPattern;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayCanvas = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils, root.pdfjsDisplayPatternHelper, root.pdfjsDisplayWebGL);
  }(this, function (exports, sharedUtil, displayDOMUtils, displayPatternHelper, displayWebGL) {
   var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
   var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
   var ImageKind = sharedUtil.ImageKind;
   var OPS = sharedUtil.OPS;
   var TextRenderingMode = sharedUtil.TextRenderingMode;
   var Uint32ArrayView = sharedUtil.Uint32ArrayView;
   var Util = sharedUtil.Util;
   var assert = sharedUtil.assert;
   var info = sharedUtil.info;
   var isNum = sharedUtil.isNum;
   var isArray = sharedUtil.isArray;
   var isLittleEndian = sharedUtil.isLittleEndian;
   var error = sharedUtil.error;
   var shadow = sharedUtil.shadow;
   var warn = sharedUtil.warn;
   var TilingPattern = displayPatternHelper.TilingPattern;
   var getShadingPatternFromIR = displayPatternHelper.getShadingPatternFromIR;
   var WebGLUtils = displayWebGL.WebGLUtils;
   var hasCanvasTypedArrays = displayDOMUtils.hasCanvasTypedArrays;
   var MIN_FONT_SIZE = 16;
   var MAX_FONT_SIZE = 100;
   var MAX_GROUP_SIZE = 4096;
   var MIN_WIDTH_FACTOR = 0.65;
   var COMPILE_TYPE3_GLYPHS = true;
   var MAX_SIZE_TO_COMPILE = 1000;
   var FULL_CHUNK_HEIGHT = 16;
   var HasCanvasTypedArraysCached = {
    get value() {
     return shadow(HasCanvasTypedArraysCached, 'value', hasCanvasTypedArrays());
    }
   };
   var IsLittleEndianCached = {
    get value() {
     return shadow(IsLittleEndianCached, 'value', isLittleEndian());
    }
   };
   function createScratchCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
   }
   function addContextCurrentTransform(ctx) {
    if (!ctx.mozCurrentTransform) {
     ctx._originalSave = ctx.save;
     ctx._originalRestore = ctx.restore;
     ctx._originalRotate = ctx.rotate;
     ctx._originalScale = ctx.scale;
     ctx._originalTranslate = ctx.translate;
     ctx._originalTransform = ctx.transform;
     ctx._originalSetTransform = ctx.setTransform;
     ctx._transformMatrix = ctx._transformMatrix || [
      1,
      0,
      0,
      1,
      0,
      0
     ];
     ctx._transformStack = [];
     Object.defineProperty(ctx, 'mozCurrentTransform', {
      get: function getCurrentTransform() {
       return this._transformMatrix;
      }
     });
     Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
      get: function getCurrentTransformInverse() {
       var m = this._transformMatrix;
       var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];
       var ad_bc = a * d - b * c;
       var bc_ad = b * c - a * d;
       return [
        d / ad_bc,
        b / bc_ad,
        c / bc_ad,
        a / ad_bc,
        (d * e - c * f) / bc_ad,
        (b * e - a * f) / ad_bc
       ];
      }
     });
     ctx.save = function ctxSave() {
      var old = this._transformMatrix;
      this._transformStack.push(old);
      this._transformMatrix = old.slice(0, 6);
      this._originalSave();
     };
     ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();
      if (prev) {
       this._transformMatrix = prev;
       this._originalRestore();
      }
     };
     ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
      this._originalTranslate(x, y);
     };
     ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;
      this._originalScale(x, y);
     };
     ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [
       m[0] * a + m[2] * b,
       m[1] * a + m[3] * b,
       m[0] * c + m[2] * d,
       m[1] * c + m[3] * d,
       m[0] * e + m[2] * f + m[4],
       m[1] * e + m[3] * f + m[5]
      ];
      ctx._originalTransform(a, b, c, d, e, f);
     };
     ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      ctx._originalSetTransform(a, b, c, d, e, f);
     };
     ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);
      var m = this._transformMatrix;
      this._transformMatrix = [
       m[0] * cosValue + m[2] * sinValue,
       m[1] * cosValue + m[3] * sinValue,
       m[0] * -sinValue + m[2] * cosValue,
       m[1] * -sinValue + m[3] * cosValue,
       m[4],
       m[5]
      ];
      this._originalRotate(angle);
     };
    }
   }
   var CachedCanvases = function CachedCanvasesClosure() {
    function CachedCanvases() {
     this.cache = Object.create(null);
    }
    CachedCanvases.prototype = {
     getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
      var canvasEntry;
      if (this.cache[id] !== undefined) {
       canvasEntry = this.cache[id];
       canvasEntry.canvas.width = width;
       canvasEntry.canvas.height = height;
       canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
       var canvas = createScratchCanvas(width, height);
       var ctx = canvas.getContext('2d');
       if (trackTransform) {
        addContextCurrentTransform(ctx);
       }
       this.cache[id] = canvasEntry = {
        canvas: canvas,
        context: ctx
       };
      }
      return canvasEntry;
     },
     clear: function () {
      for (var id in this.cache) {
       var canvasEntry = this.cache[id];
       canvasEntry.canvas.width = 0;
       canvasEntry.canvas.height = 0;
       delete this.cache[id];
      }
     }
    };
    return CachedCanvases;
   }();
   function compileType3Glyph(imgData) {
    var POINT_TO_PROCESS_LIMIT = 1000;
    var width = imgData.width, height = imgData.height;
    var i, j, j0, width1 = width + 1;
    var points = new Uint8Array(width1 * (height + 1));
    var POINT_TYPES = new Uint8Array([
     0,
     2,
     4,
     0,
     1,
     0,
     5,
     4,
     8,
     10,
     0,
     8,
     0,
     2,
     1,
     0
    ]);
    var lineSize = width + 7 & ~7, data0 = imgData.data;
    var data = new Uint8Array(lineSize * height), pos = 0, ii;
    for (i = 0, ii = data0.length; i < ii; i++) {
     var mask = 128, elem = data0[i];
     while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
     }
    }
    var count = 0;
    pos = 0;
    if (data[pos] !== 0) {
     points[0] = 1;
     ++count;
    }
    for (j = 1; j < width; j++) {
     if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
     }
     pos++;
    }
    if (data[pos] !== 0) {
     points[j] = 2;
     ++count;
    }
    for (i = 1; i < height; i++) {
     pos = i * lineSize;
     j0 = i * width1;
     if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
     }
     var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
     for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
       points[j0 + j] = POINT_TYPES[sum];
       ++count;
      }
      pos++;
     }
     if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
     }
     if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
     }
    }
    pos = lineSize * (height - 1);
    j0 = i * width1;
    if (data[pos] !== 0) {
     points[j0] = 8;
     ++count;
    }
    for (j = 1; j < width; j++) {
     if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
     }
     pos++;
    }
    if (data[pos] !== 0) {
     points[j0 + j] = 4;
     ++count;
    }
    if (count > POINT_TO_PROCESS_LIMIT) {
     return null;
    }
    var steps = new Int32Array([
     0,
     width1,
     -1,
     0,
     -width1,
     0,
     0,
     0,
     1
    ]);
    var outlines = [];
    for (i = 0; count && i <= height; i++) {
     var p = i * width1;
     var end = p + width;
     while (p < end && !points[p]) {
      p++;
     }
     if (p === end) {
      continue;
     }
     var coords = [
      p % width1,
      i
     ];
     var type = points[p], p0 = p, pp;
     do {
      var step = steps[type];
      do {
       p += step;
      } while (!points[p]);
      pp = points[p];
      if (pp !== 5 && pp !== 10) {
       type = pp;
       points[p] = 0;
      } else {
       type = pp & 0x33 * type >> 4;
       points[p] &= type >> 2 | type << 2;
      }
      coords.push(p % width1);
      coords.push(p / width1 | 0);
      --count;
     } while (p0 !== p);
     outlines.push(coords);
     --i;
    }
    var drawOutline = function (c) {
     c.save();
     c.scale(1 / width, -1 / height);
     c.translate(0, -height);
     c.beginPath();
     for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);
      for (var j = 2, jj = o.length; j < jj; j += 2) {
       c.lineTo(o[j], o[j + 1]);
      }
     }
     c.fill();
     c.beginPath();
     c.restore();
    };
    return drawOutline;
   }
   var CanvasExtraState = function CanvasExtraStateClosure() {
    function CanvasExtraState(old) {
     this.alphaIsShape = false;
     this.fontSize = 0;
     this.fontSizeScale = 1;
     this.textMatrix = IDENTITY_MATRIX;
     this.textMatrixScale = 1;
     this.fontMatrix = FONT_IDENTITY_MATRIX;
     this.leading = 0;
     this.x = 0;
     this.y = 0;
     this.lineX = 0;
     this.lineY = 0;
     this.charSpacing = 0;
     this.wordSpacing = 0;
     this.textHScale = 1;
     this.textRenderingMode = TextRenderingMode.FILL;
     this.textRise = 0;
     this.fillColor = '#000000';
     this.strokeColor = '#000000';
     this.patternFill = false;
     this.fillAlpha = 1;
     this.strokeAlpha = 1;
     this.lineWidth = 1;
     this.activeSMask = null;
     this.resumeSMaskCtx = null;
     this.old = old;
    }
    CanvasExtraState.prototype = {
     clone: function CanvasExtraState_clone() {
      return Object.create(this);
     },
     setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
     }
    };
    return CanvasExtraState;
   }();
   var CanvasGraphics = function CanvasGraphicsClosure() {
    var EXECUTION_TIME = 15;
    var EXECUTION_STEPS = 10;
    function CanvasGraphics(canvasCtx, commonObjs, objs, imageLayer) {
     this.ctx = canvasCtx;
     this.current = new CanvasExtraState();
     this.stateStack = [];
     this.pendingClip = null;
     this.pendingEOFill = false;
     this.res = null;
     this.xobjs = null;
     this.commonObjs = commonObjs;
     this.objs = objs;
     this.imageLayer = imageLayer;
     this.groupStack = [];
     this.processingType3 = null;
     this.baseTransform = null;
     this.baseTransformStack = [];
     this.groupLevel = 0;
     this.smaskStack = [];
     this.smaskCounter = 0;
     this.tempSMask = null;
     this.cachedCanvases = new CachedCanvases();
     if (canvasCtx) {
      addContextCurrentTransform(canvasCtx);
     }
     this.cachedGetSinglePixelWidth = null;
    }
    function putBinaryImageData(ctx, imgData) {
     if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
     }
     var height = imgData.height, width = imgData.width;
     var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
     var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
     var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
     var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
     var srcPos = 0, destPos;
     var src = imgData.data;
     var dest = chunkImgData.data;
     var i, j, thisChunkHeight, elemsInThisChunk;
     if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
      var srcLength = src.byteLength;
      var dest32 = HasCanvasTypedArraysCached.value ? new Uint32Array(dest.buffer) : new Uint32ArrayView(dest);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = width + 7 >> 3;
      var white = 0xFFFFFFFF;
      var black = IsLittleEndianCached.value || !HasCanvasTypedArraysCached.value ? 0xFF000000 : 0x000000FF;
      for (i = 0; i < totalChunks; i++) {
       thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
       destPos = 0;
       for (j = 0; j < thisChunkHeight; j++) {
        var srcDiff = srcLength - srcPos;
        var k = 0;
        var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
        var kEndUnrolled = kEnd & ~7;
        var mask = 0;
        var srcByte = 0;
        for (; k < kEndUnrolled; k += 8) {
         srcByte = src[srcPos++];
         dest32[destPos++] = srcByte & 128 ? white : black;
         dest32[destPos++] = srcByte & 64 ? white : black;
         dest32[destPos++] = srcByte & 32 ? white : black;
         dest32[destPos++] = srcByte & 16 ? white : black;
         dest32[destPos++] = srcByte & 8 ? white : black;
         dest32[destPos++] = srcByte & 4 ? white : black;
         dest32[destPos++] = srcByte & 2 ? white : black;
         dest32[destPos++] = srcByte & 1 ? white : black;
        }
        for (; k < kEnd; k++) {
         if (mask === 0) {
          srcByte = src[srcPos++];
          mask = 128;
         }
         dest32[destPos++] = srcByte & mask ? white : black;
         mask >>= 1;
        }
       }
       while (destPos < dest32DataLength) {
        dest32[destPos++] = 0;
       }
       ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
     } else if (imgData.kind === ImageKind.RGBA_32BPP) {
      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
       dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
       srcPos += elemsInThisChunk;
       ctx.putImageData(chunkImgData, 0, j);
       j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
       elemsInThisChunk = width * partialChunkHeight * 4;
       dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
       ctx.putImageData(chunkImgData, 0, j);
      }
     } else if (imgData.kind === ImageKind.RGB_24BPP) {
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;
      for (i = 0; i < totalChunks; i++) {
       if (i >= fullChunks) {
        thisChunkHeight = partialChunkHeight;
        elemsInThisChunk = width * thisChunkHeight;
       }
       destPos = 0;
       for (j = elemsInThisChunk; j--;) {
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = 255;
       }
       ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
     } else {
      error('bad image kind: ' + imgData.kind);
     }
    }
    function putBinaryImageMask(ctx, imgData) {
     var height = imgData.height, width = imgData.width;
     var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
     var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
     var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
     var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
     var srcPos = 0;
     var src = imgData.data;
     var dest = chunkImgData.data;
     for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      var destPos = 3;
      for (var j = 0; j < thisChunkHeight; j++) {
       var mask = 0;
       for (var k = 0; k < width; k++) {
        if (!mask) {
         var elem = src[srcPos++];
         mask = 128;
        }
        dest[destPos] = elem & mask ? 0 : 255;
        destPos += 4;
        mask >>= 1;
       }
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
     }
    }
    function copyCtxState(sourceCtx, destCtx) {
     var properties = [
      'strokeStyle',
      'fillStyle',
      'fillRule',
      'globalAlpha',
      'lineWidth',
      'lineCap',
      'lineJoin',
      'miterLimit',
      'globalCompositeOperation',
      'font'
     ];
     for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];
      if (sourceCtx[property] !== undefined) {
       destCtx[property] = sourceCtx[property];
      }
     }
     if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
     }
    }
    function composeSMaskBackdrop(bytes, r0, g0, b0) {
     var length = bytes.length;
     for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];
      if (alpha === 0) {
       bytes[i - 3] = r0;
       bytes[i - 2] = g0;
       bytes[i - 1] = b0;
      } else if (alpha < 255) {
       var alpha_ = 255 - alpha;
       bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
       bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
       bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
      }
     }
    }
    function composeSMaskAlpha(maskData, layerData, transferMap) {
     var length = maskData.length;
     var scale = 1 / 255;
     for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = layerData[i] * alpha * scale | 0;
     }
    }
    function composeSMaskLuminosity(maskData, layerData, transferMap) {
     var length = maskData.length;
     for (var i = 3; i < length; i += 4) {
      var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
      layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
     }
    }
    function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
     var hasBackdrop = !!backdrop;
     var r0 = hasBackdrop ? backdrop[0] : 0;
     var g0 = hasBackdrop ? backdrop[1] : 0;
     var b0 = hasBackdrop ? backdrop[2] : 0;
     var composeFn;
     if (subtype === 'Luminosity') {
      composeFn = composeSMaskLuminosity;
     } else {
      composeFn = composeSMaskAlpha;
     }
     var PIXELS_TO_PROCESS = 1048576;
     var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
     for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);
      if (hasBackdrop) {
       composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }
      composeFn(maskData.data, layerData.data, transferMap);
      maskCtx.putImageData(layerData, 0, row);
     }
    }
    function composeSMask(ctx, smask, layerCtx) {
     var mask = smask.canvas;
     var maskCtx = smask.context;
     ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
     var backdrop = smask.backdrop || null;
     if (!smask.transferMap && WebGLUtils.isEnabled) {
      var composed = WebGLUtils.composeSMask(layerCtx.canvas, mask, {
       subtype: smask.subtype,
       backdrop: backdrop
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
     }
     genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
     ctx.drawImage(mask, 0, 0);
    }
    var LINE_CAP_STYLES = [
     'butt',
     'round',
     'square'
    ];
    var LINE_JOIN_STYLES = [
     'miter',
     'round',
     'bevel'
    ];
    var NORMAL_CLIP = {};
    var EO_CLIP = {};
    CanvasGraphics.prototype = {
     beginDrawing: function CanvasGraphics_beginDrawing(transform, viewport, transparency) {
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.ctx.save();
      this.ctx.fillStyle = 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();
      if (transparency) {
       var transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
       this.compositeCtx = this.ctx;
       this.transparentCanvas = transparentCanvas.canvas;
       this.ctx = transparentCanvas.context;
       this.ctx.save();
       this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
      }
      this.ctx.save();
      if (transform) {
       this.ctx.transform.apply(this.ctx, transform);
      }
      this.ctx.transform.apply(this.ctx, viewport.transform);
      this.baseTransform = this.ctx.mozCurrentTransform.slice();
      if (this.imageLayer) {
       this.imageLayer.beginLayout();
      }
     },
     executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;
      if (argsArrayLen === i) {
       return i;
      }
      var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;
      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;
      while (true) {
       if (stepper !== undefined && i === stepper.nextBreakPoint) {
        stepper.breakIt(i, continueCallback);
        return i;
       }
       fnId = fnArray[i];
       if (fnId !== OPS.dependency) {
        this[fnId].apply(this, argsArray[i]);
       } else {
        var deps = argsArray[i];
        for (var n = 0, nn = deps.length; n < nn; n++) {
         var depObjId = deps[n];
         var common = depObjId[0] === 'g' && depObjId[1] === '_';
         var objsPool = common ? commonObjs : objs;
         if (!objsPool.isResolved(depObjId)) {
          objsPool.get(depObjId, continueCallback);
          return i;
         }
        }
       }
       i++;
       if (i === argsArrayLen) {
        return i;
       }
       if (chunkOperations && ++steps > EXECUTION_STEPS) {
        if (Date.now() > endTime) {
         continueCallback();
         return i;
        }
        steps = 0;
       }
      }
     },
     endDrawing: function CanvasGraphics_endDrawing() {
      if (this.current.activeSMask !== null) {
       this.endSMaskGroup();
      }
      this.ctx.restore();
      if (this.transparentCanvas) {
       this.ctx = this.compositeCtx;
       this.ctx.save();
       this.ctx.setTransform(1, 0, 0, 1, 0, 0);
       this.ctx.drawImage(this.transparentCanvas, 0, 0);
       this.ctx.restore();
       this.transparentCanvas = null;
      }
      this.cachedCanvases.clear();
      WebGLUtils.clear();
      if (this.imageLayer) {
       this.imageLayer.endLayout();
      }
     },
     setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
     },
     setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
     },
     setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
     },
     setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
     },
     setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;
      if (ctx.setLineDash !== undefined) {
       ctx.setLineDash(dashArray);
       ctx.lineDashOffset = dashPhase;
      }
     },
     setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {
     },
     setFlatness: function CanvasGraphics_setFlatness(flatness) {
     },
     setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
       var state = states[i];
       var key = state[0];
       var value = state[1];
       switch (key) {
       case 'LW':
        this.setLineWidth(value);
        break;
       case 'LC':
        this.setLineCap(value);
        break;
       case 'LJ':
        this.setLineJoin(value);
        break;
       case 'ML':
        this.setMiterLimit(value);
        break;
       case 'D':
        this.setDash(value[0], value[1]);
        break;
       case 'RI':
        this.setRenderingIntent(value);
        break;
       case 'FL':
        this.setFlatness(value);
        break;
       case 'Font':
        this.setFont(value[0], value[1]);
        break;
       case 'CA':
        this.current.strokeAlpha = state[1];
        break;
       case 'ca':
        this.current.fillAlpha = state[1];
        this.ctx.globalAlpha = state[1];
        break;
       case 'BM':
        if (value && value.name && value.name !== 'Normal') {
         var mode = value.name.replace(/([A-Z])/g, function (c) {
          return '-' + c.toLowerCase();
         }).substring(1);
         this.ctx.globalCompositeOperation = mode;
         if (this.ctx.globalCompositeOperation !== mode) {
          warn('globalCompositeOperation "' + mode + '" is not supported');
         }
        } else {
         this.ctx.globalCompositeOperation = 'source-over';
        }
        break;
       case 'SMask':
        if (this.current.activeSMask) {
         if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
          this.suspendSMaskGroup();
         } else {
          this.endSMaskGroup();
         }
        }
        this.current.activeSMask = value ? this.tempSMask : null;
        if (this.current.activeSMask) {
         this.beginSMaskGroup();
        }
        this.tempSMask = null;
        break;
       }
      }
     },
     beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = 'smaskGroupAt' + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
       [
        'BM',
        'Normal'
       ],
       [
        'ca',
        1
       ],
       [
        'CA',
        1
       ]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
     },
     suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
      this.ctx.restore();
      this.ctx.save();
      copyCtxState(groupCtx, this.ctx);
      this.current.resumeSMaskCtx = groupCtx;
      var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
     },
     resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
     },
     endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);
      var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
     },
     save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
     },
     restore: function CanvasGraphics_restore() {
      if (this.current.resumeSMaskCtx) {
       this.resumeSMaskGroup();
      }
      if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
       this.endSMaskGroup();
      }
      if (this.stateStack.length !== 0) {
       this.current = this.stateStack.pop();
       this.ctx.restore();
       this.pendingClip = null;
       this.cachedGetSinglePixelWidth = null;
      }
     },
     transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);
      this.cachedGetSinglePixelWidth = null;
     },
     constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x, y = current.y;
      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
       switch (ops[i] | 0) {
       case OPS.rectangle:
        x = args[j++];
        y = args[j++];
        var width = args[j++];
        var height = args[j++];
        if (width === 0) {
         width = this.getSinglePixelWidth();
        }
        if (height === 0) {
         height = this.getSinglePixelWidth();
        }
        var xw = x + width;
        var yh = y + height;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(xw, y);
        this.ctx.lineTo(xw, yh);
        this.ctx.lineTo(x, yh);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        break;
       case OPS.moveTo:
        x = args[j++];
        y = args[j++];
        ctx.moveTo(x, y);
        break;
       case OPS.lineTo:
        x = args[j++];
        y = args[j++];
        ctx.lineTo(x, y);
        break;
       case OPS.curveTo:
        x = args[j + 4];
        y = args[j + 5];
        ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
        j += 6;
        break;
       case OPS.curveTo2:
        ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
        x = args[j + 2];
        y = args[j + 3];
        j += 4;
        break;
       case OPS.curveTo3:
        x = args[j + 2];
        y = args[j + 3];
        ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
        j += 4;
        break;
       case OPS.closePath:
        ctx.closePath();
        break;
       }
      }
      current.setCurrentPoint(x, y);
     },
     closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
     },
     stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
      ctx.globalAlpha = this.current.strokeAlpha;
      if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
       ctx.save();
       ctx.strokeStyle = strokeColor.getPattern(ctx, this);
       ctx.stroke();
       ctx.restore();
      } else {
       ctx.stroke();
      }
      if (consumePath) {
       this.consumePath();
      }
      ctx.globalAlpha = this.current.fillAlpha;
     },
     closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
     },
     fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;
      if (isPatternFill) {
       ctx.save();
       if (this.baseTransform) {
        ctx.setTransform.apply(ctx, this.baseTransform);
       }
       ctx.fillStyle = fillColor.getPattern(ctx, this);
       needRestore = true;
      }
      if (this.pendingEOFill) {
       if (ctx.mozFillRule !== undefined) {
        ctx.mozFillRule = 'evenodd';
        ctx.fill();
        ctx.mozFillRule = 'nonzero';
       } else {
        ctx.fill('evenodd');
       }
       this.pendingEOFill = false;
      } else {
       ctx.fill();
      }
      if (needRestore) {
       ctx.restore();
      }
      if (consumePath) {
       this.consumePath();
      }
     },
     eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
     },
     fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);
      this.consumePath();
     },
     eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
     },
     closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
     },
     closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
     },
     endPath: function CanvasGraphics_endPath() {
      this.consumePath();
     },
     clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
     },
     eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
     },
     beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
     },
     endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;
      if (paths === undefined) {
       ctx.beginPath();
       return;
      }
      ctx.save();
      ctx.beginPath();
      for (var i = 0; i < paths.length; i++) {
       var path = paths[i];
       ctx.setTransform.apply(ctx, path.transform);
       ctx.translate(path.x, path.y);
       path.addToPath(ctx, path.fontSize);
      }
      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
     },
     setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
     },
     setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
     },
     setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
     },
     setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
     },
     setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;
      if (!fontObj) {
       error('Can\'t find font for ' + fontRefName);
      }
      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
      if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
       warn('Invalid font matrix for font ' + fontRefName);
      }
      if (size < 0) {
       size = -size;
       current.fontDirection = -1;
      } else {
       current.fontDirection = 1;
      }
      this.current.font = fontObj;
      this.current.fontSize = size;
      if (fontObj.isType3Font) {
       return;
      }
      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = '"' + name + '", ' + fontObj.fallbackName;
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;
      var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
      this.ctx.font = rule;
     },
     setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
     },
     setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
     },
     moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
     },
     setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
     },
     setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
     },
     nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
     },
     paintChar: function CanvasGraphics_paintChar(character, x, y) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
      var addToPath;
      if (font.disableFontFace || isAddToPathSet) {
       addToPath = font.getPathGenerator(this.commonObjs, character);
      }
      if (font.disableFontFace) {
       ctx.save();
       ctx.translate(x, y);
       ctx.beginPath();
       addToPath(ctx, fontSize);
       if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fill();
       }
       if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.stroke();
       }
       ctx.restore();
      } else {
       if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fillText(character, x, y);
       }
       if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.strokeText(character, x, y);
       }
      }
      if (isAddToPathSet) {
       var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
       paths.push({
        transform: ctx.mozCurrentTransform,
        x: x,
        y: y,
        fontSize: fontSize,
        addToPath: addToPath
       });
      }
     },
     get isFontSubpixelAAEnabled() {
      var ctx = document.createElement('canvas').getContext('2d');
      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;
      for (var i = 3; i < data.length; i += 4) {
       if (data[i] > 0 && data[i] < 255) {
        enabled = true;
        break;
       }
      }
      return shadow(this, 'isFontSubpixelAAEnabled', enabled);
     },
     showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      if (font.isType3Font) {
       return this.showType3Text(glyphs);
      }
      var fontSize = current.fontSize;
      if (fontSize === 0) {
       return;
      }
      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);
      if (current.patternFill) {
       ctx.fillStyle = current.fillColor.getPattern(ctx, this);
      }
      if (fontDirection > 0) {
       ctx.scale(textHScale, -1);
      } else {
       ctx.scale(textHScale, 1);
      }
      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;
      if (scale === 0 || lineWidth === 0) {
       var fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
       if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        this.cachedGetSinglePixelWidth = null;
        lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
       }
      } else {
       lineWidth /= scale;
      }
      if (fontSizeScale !== 1.0) {
       ctx.scale(fontSizeScale, fontSizeScale);
       lineWidth /= fontSizeScale;
      }
      ctx.lineWidth = lineWidth;
      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
       var glyph = glyphs[i];
       if (isNum(glyph)) {
        x += spacingDir * glyph * fontSize / 1000;
        continue;
       }
       var restoreNeeded = false;
       var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
       var character = glyph.fontChar;
       var accent = glyph.accent;
       var scaledX, scaledY, scaledAccentX, scaledAccentY;
       var width = glyph.width;
       if (vertical) {
        var vmetric, vx, vy;
        vmetric = glyph.vmetric || defaultVMetrics;
        vx = glyph.vmetric ? vmetric[1] : width * 0.5;
        vx = -vx * widthAdvanceScale;
        vy = vmetric[2] * widthAdvanceScale;
        width = vmetric ? -vmetric[0] : width;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
       } else {
        scaledX = x / fontSizeScale;
        scaledY = 0;
       }
       if (font.remeasure && width > 0) {
        var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
         var characterScaleX = width / measuredWidth;
         restoreNeeded = true;
         ctx.save();
         ctx.scale(characterScaleX, 1);
         scaledX /= characterScaleX;
        } else if (width !== measuredWidth) {
         scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
        }
       }
       if (glyph.isInFont || font.missingFile) {
        if (simpleFillText && !accent) {
         ctx.fillText(character, scaledX, scaledY);
        } else {
         this.paintChar(character, scaledX, scaledY);
         if (accent) {
          scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
          scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
          this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY);
         }
        }
       }
       var charWidth = width * widthAdvanceScale + spacing * fontDirection;
       x += charWidth;
       if (restoreNeeded) {
        ctx.restore();
       }
      }
      if (vertical) {
       current.y -= x * textHScale;
      } else {
       current.x += x * textHScale;
      }
      ctx.restore();
     },
     showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;
      if (isTextInvisible || fontSize === 0) {
       return;
      }
      this.cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(textHScale, fontDirection);
      for (i = 0; i < glyphsLength; ++i) {
       glyph = glyphs[i];
       if (isNum(glyph)) {
        spacingLength = spacingDir * glyph * fontSize / 1000;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continue;
       }
       var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
       var operatorList = font.charProcOperatorList[glyph.operatorListId];
       if (!operatorList) {
        warn('Type3 character \"' + glyph.operatorListId + '\" is not available');
        continue;
       }
       this.processingType3 = glyph;
       this.save();
       ctx.scale(fontSize, fontSize);
       ctx.transform.apply(ctx, fontMatrix);
       this.executeOperatorList(operatorList);
       this.restore();
       var transformed = Util.applyTransform([
        glyph.width,
        0
       ], fontMatrix);
       width = transformed[0] * fontSize + spacing;
       ctx.translate(width, 0);
       current.x += width * textHScale;
      }
      ctx.restore();
      this.processingType3 = null;
     },
     setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {
     },
     setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
     },
     getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var pattern;
      if (IR[0] === 'TilingPattern') {
       var color = IR[1];
       var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
       var self = this;
       var canvasGraphicsFactory = {
        createCanvasGraphics: function (ctx) {
         return new CanvasGraphics(ctx, self.commonObjs, self.objs);
        }
       };
       pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
      } else {
       pattern = getShadingPatternFromIR(IR);
      }
      return pattern;
     },
     setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments);
     },
     setFillColorN: function CanvasGraphics_setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments);
      this.current.patternFill = true;
     },
     setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
     },
     setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
     },
     shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;
      this.save();
      var pattern = getShadingPatternFromIR(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);
      var inv = ctx.mozCurrentTransformInverse;
      if (inv) {
       var canvas = ctx.canvas;
       var width = canvas.width;
       var height = canvas.height;
       var bl = Util.applyTransform([
        0,
        0
       ], inv);
       var br = Util.applyTransform([
        0,
        height
       ], inv);
       var ul = Util.applyTransform([
        width,
        0
       ], inv);
       var ur = Util.applyTransform([
        width,
        height
       ], inv);
       var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
       var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
       var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
       var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
       this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
       this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }
      this.restore();
     },
     beginInlineImage: function CanvasGraphics_beginInlineImage() {
      error('Should not call beginInlineImage');
     },
     beginImageData: function CanvasGraphics_beginImageData() {
      error('Should not call beginImageData');
     },
     paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);
      if (isArray(matrix) && matrix.length === 6) {
       this.transform.apply(this, matrix);
      }
      this.baseTransform = this.ctx.mozCurrentTransform;
      if (isArray(bbox) && bbox.length === 4) {
       var width = bbox[2] - bbox[0];
       var height = bbox[3] - bbox[1];
       this.ctx.rect(bbox[0], bbox[1], width, height);
       this.clip();
       this.endPath();
      }
     },
     paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
     },
     beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;
      if (!group.isolated) {
       info('TODO: Support non-isolated groups.');
      }
      if (group.knockout) {
       warn('Knockout groups not supported.');
      }
      var currentTransform = currentCtx.mozCurrentTransform;
      if (group.matrix) {
       currentCtx.transform.apply(currentCtx, group.matrix);
      }
      assert(group.bbox, 'Bounding box is required.');
      var bounds = Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
      var canvasBounds = [
       0,
       0,
       currentCtx.canvas.width,
       currentCtx.canvas.height
      ];
      bounds = Util.intersect(bounds, canvasBounds) || [
       0,
       0,
       0,
       0
      ];
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1, scaleY = 1;
      if (drawnWidth > MAX_GROUP_SIZE) {
       scaleX = drawnWidth / MAX_GROUP_SIZE;
       drawnWidth = MAX_GROUP_SIZE;
      }
      if (drawnHeight > MAX_GROUP_SIZE) {
       scaleY = drawnHeight / MAX_GROUP_SIZE;
       drawnHeight = MAX_GROUP_SIZE;
      }
      var cacheId = 'groupAt' + this.groupLevel;
      if (group.smask) {
       cacheId += '_smask_' + this.smaskCounter++ % 2;
      }
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      if (group.smask) {
       this.smaskStack.push({
        canvas: scratchCanvas.canvas,
        context: groupCtx,
        offsetX: offsetX,
        offsetY: offsetY,
        scaleX: scaleX,
        scaleY: scaleY,
        subtype: group.smask.subtype,
        backdrop: group.smask.backdrop,
        transferMap: group.smask.transferMap || null,
        startTransformInverse: null
       });
      } else
       {
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
       }
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
       [
        'BM',
        'Normal'
       ],
       [
        'ca',
        1
       ],
       [
        'CA',
        1
       ]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
      this.current.activeSMask = null;
     },
     endGroup: function CanvasGraphics_endGroup(group) {
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();
      if (this.ctx.imageSmoothingEnabled !== undefined) {
       this.ctx.imageSmoothingEnabled = false;
      } else {
       this.ctx.mozImageSmoothingEnabled = false;
      }
      if (group.smask) {
       this.tempSMask = this.smaskStack.pop();
      } else {
       this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.restore();
     },
     beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();
      this.current = new CanvasExtraState();
      if (this.baseTransform) {
       this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
     },
     endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
     },
     beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
      this.save();
      if (isArray(rect) && rect.length === 4) {
       var width = rect[2] - rect[0];
       var height = rect[3] - rect[1];
       this.ctx.rect(rect[0], rect[1], width, height);
       this.clip();
       this.endPath();
      }
      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
     },
     endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
     },
     paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.objs.get(objId);
      if (!domImage) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      this.save();
      var ctx = this.ctx;
      ctx.scale(1 / w, -1 / h);
      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);
      if (this.imageLayer) {
       var currentTransform = ctx.mozCurrentTransformInverse;
       var position = this.getCanvasPosition(0, 0);
       this.imageLayer.appendImage({
        objId: objId,
        left: position[0],
        top: position[1],
        width: w / currentTransform[0],
        height: h / currentTransform[3]
       });
      }
      this.restore();
     },
     paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      var ctx = this.ctx;
      var width = img.width, height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var glyph = this.processingType3;
      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
       if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
        glyph.compiled = compileType3Glyph({
         data: img.data,
         width: width,
         height: height
        });
       } else {
        glyph.compiled = null;
       }
      }
      if (glyph && glyph.compiled) {
       glyph.compiled(ctx);
       return;
      }
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      this.paintInlineImageXObject(maskCanvas.canvas);
     },
     paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, imgData);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      var ctx = this.ctx;
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
       ctx.save();
       ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
       ctx.scale(1, -1);
       ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
       ctx.restore();
      }
     },
     paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      for (var i = 0, ii = images.length; i < ii; i++) {
       var image = images[i];
       var width = image.width, height = image.height;
       var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
       var maskCtx = maskCanvas.context;
       maskCtx.save();
       putBinaryImageMask(maskCtx, image);
       maskCtx.globalCompositeOperation = 'source-in';
       maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
       maskCtx.fillRect(0, 0, width, height);
       maskCtx.restore();
       ctx.save();
       ctx.transform.apply(ctx, image.transform);
       ctx.scale(1, -1);
       ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
       ctx.restore();
      }
     },
     paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      this.paintInlineImageXObject(imgData);
     },
     paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      var width = imgData.width;
      var height = imgData.height;
      var map = [];
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
       map.push({
        transform: [
         scaleX,
         0,
         0,
         scaleY,
         positions[i],
         positions[i + 1]
        ],
        x: 0,
        y: 0,
        w: width,
        h: height
       });
      }
      this.paintInlineImageXObjectGroup(imgData, map);
     },
     paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;
      this.save();
      ctx.scale(1 / width, -1 / height);
      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0], b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2], d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
      var imgToPaint, tmpCanvas;
      if (imgData instanceof HTMLElement || !imgData.data) {
       imgToPaint = imgData;
      } else {
       tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
       var tmpCtx = tmpCanvas.context;
       putBinaryImageData(tmpCtx, imgData);
       imgToPaint = tmpCanvas.canvas;
      }
      var paintWidth = width, paintHeight = height;
      var tmpCanvasId = 'prescale1';
      while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
       var newWidth = paintWidth, newHeight = paintHeight;
       if (widthScale > 2 && paintWidth > 1) {
        newWidth = Math.ceil(paintWidth / 2);
        widthScale /= paintWidth / newWidth;
       }
       if (heightScale > 2 && paintHeight > 1) {
        newHeight = Math.ceil(paintHeight / 2);
        heightScale /= paintHeight / newHeight;
       }
       tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
       tmpCtx = tmpCanvas.context;
       tmpCtx.clearRect(0, 0, newWidth, newHeight);
       tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
       imgToPaint = tmpCanvas.canvas;
       paintWidth = newWidth;
       paintHeight = newHeight;
       tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }
      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
      if (this.imageLayer) {
       var position = this.getCanvasPosition(0, -height);
       this.imageLayer.appendImage({
        imgData: imgData,
        left: position[0],
        top: position[1],
        width: width / currentTransform[0],
        height: height / currentTransform[3]
       });
      }
      this.restore();
     },
     paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;
      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      for (var i = 0, ii = map.length; i < ii; i++) {
       var entry = map[i];
       ctx.save();
       ctx.transform.apply(ctx, entry.transform);
       ctx.scale(1, -1);
       ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
       if (this.imageLayer) {
        var position = this.getCanvasPosition(entry.x, entry.y);
        this.imageLayer.appendImage({
         imgData: imgData,
         left: position[0],
         top: position[1],
         width: w,
         height: h
        });
       }
       ctx.restore();
      }
     },
     paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
      this.ctx.fillRect(0, 0, 1, 1);
     },
     paintXObject: function CanvasGraphics_paintXObject() {
      warn('Unsupported \'paintXObject\' command.');
     },
     markPoint: function CanvasGraphics_markPoint(tag) {
     },
     markPointProps: function CanvasGraphics_markPointProps(tag, properties) {
     },
     beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
     },
     beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {
     },
     endMarkedContent: function CanvasGraphics_endMarkedContent() {
     },
     beginCompat: function CanvasGraphics_beginCompat() {
     },
     endCompat: function CanvasGraphics_endCompat() {
     },
     consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;
      if (this.pendingClip) {
       if (this.pendingClip === EO_CLIP) {
        if (ctx.mozFillRule !== undefined) {
         ctx.mozFillRule = 'evenodd';
         ctx.clip();
         ctx.mozFillRule = 'nonzero';
        } else {
         ctx.clip('evenodd');
        }
       } else {
        ctx.clip();
       }
       this.pendingClip = null;
      }
      ctx.beginPath();
     },
     getSinglePixelWidth: function CanvasGraphics_getSinglePixelWidth(scale) {
      if (this.cachedGetSinglePixelWidth === null) {
       this.ctx.save();
       var inverse = this.ctx.mozCurrentTransformInverse;
       this.ctx.restore();
       this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
      }
      return this.cachedGetSinglePixelWidth;
     },
     getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [
       transform[0] * x + transform[2] * y + transform[4],
       transform[1] * x + transform[3] * y + transform[5]
      ];
     }
    };
    for (var op in OPS) {
     CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
    }
    return CanvasGraphics;
   }();
   exports.CanvasGraphics = CanvasGraphics;
   exports.createScratchCanvas = createScratchCanvas;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayAPI = {}, root.pdfjsSharedUtil, root.pdfjsDisplayFontLoader, root.pdfjsDisplayCanvas, root.pdfjsDisplayMetadata, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayFontLoader, displayCanvas, displayMetadata, displayDOMUtils, amdRequire) {
   var InvalidPDFException = sharedUtil.InvalidPDFException;
   var MessageHandler = sharedUtil.MessageHandler;
   var MissingPDFException = sharedUtil.MissingPDFException;
   var PageViewport = sharedUtil.PageViewport;
   var PasswordResponses = sharedUtil.PasswordResponses;
   var PasswordException = sharedUtil.PasswordException;
   var StatTimer = sharedUtil.StatTimer;
   var UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
   var UnknownErrorException = sharedUtil.UnknownErrorException;
   var Util = sharedUtil.Util;
   var createPromiseCapability = sharedUtil.createPromiseCapability;
   var error = sharedUtil.error;
   var deprecated = sharedUtil.deprecated;
   var getVerbosityLevel = sharedUtil.getVerbosityLevel;
   var info = sharedUtil.info;
   var isInt = sharedUtil.isInt;
   var isArray = sharedUtil.isArray;
   var isArrayBuffer = sharedUtil.isArrayBuffer;
   var isSameOrigin = sharedUtil.isSameOrigin;
   var loadJpegStream = sharedUtil.loadJpegStream;
   var stringToBytes = sharedUtil.stringToBytes;
   var globalScope = sharedUtil.globalScope;
   var warn = sharedUtil.warn;
   var FontFaceObject = displayFontLoader.FontFaceObject;
   var FontLoader = displayFontLoader.FontLoader;
   var CanvasGraphics = displayCanvas.CanvasGraphics;
   var createScratchCanvas = displayCanvas.createScratchCanvas;
   var Metadata = displayMetadata.Metadata;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   var DEFAULT_RANGE_CHUNK_SIZE = 65536;
   var isWorkerDisabled = false;
   var workerSrc;
   var isPostMessageTransfersDisabled = false;
   var fakeWorkerFilesLoader = null;
   var useRequireEnsure = false;
   if (typeof window === 'undefined') {
    isWorkerDisabled = true;
    if (typeof require.ensure === 'undefined') {
     require.ensure = require('node-ensure');
    }
    useRequireEnsure = true;
   }
   if (typeof __webpack_require__ !== 'undefined') {
    useRequireEnsure = true;
   }
   if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
    workerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
   }
   var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
   fakeWorkerFilesLoader = useRequireEnsure ? function (callback) {
    require.ensure([], function () {
     var worker = require('./pdf.worker.js');
     callback(worker.WorkerMessageHandler);
    });
   } : dynamicLoaderSupported ? function (callback) {
    requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
     callback(worker.WorkerMessageHandler);
    });
   } : null;
   function getDocument(src, pdfDataRangeTransport, passwordCallback, progressCallback) {
    var task = new PDFDocumentLoadingTask();
    if (arguments.length > 1) {
     deprecated('getDocument is called with pdfDataRangeTransport, ' + 'passwordCallback or progressCallback argument');
    }
    if (pdfDataRangeTransport) {
     if (!(pdfDataRangeTransport instanceof PDFDataRangeTransport)) {
      pdfDataRangeTransport = Object.create(pdfDataRangeTransport);
      pdfDataRangeTransport.length = src.length;
      pdfDataRangeTransport.initialData = src.initialData;
      if (!pdfDataRangeTransport.abort) {
       pdfDataRangeTransport.abort = function () {
       };
      }
     }
     src = Object.create(src);
     src.range = pdfDataRangeTransport;
    }
    task.onPassword = passwordCallback || null;
    task.onProgress = progressCallback || null;
    var source;
    if (typeof src === 'string') {
     source = { url: src };
    } else if (isArrayBuffer(src)) {
     source = { data: src };
    } else if (src instanceof PDFDataRangeTransport) {
     source = { range: src };
    } else {
     if (typeof src !== 'object') {
      error('Invalid parameter in getDocument, need either Uint8Array, ' + 'string or a parameter object');
     }
     if (!src.url && !src.data && !src.range) {
      error('Invalid parameter object: need either .data, .range or .url');
     }
     source = src;
    }
    var params = {};
    var rangeTransport = null;
    var worker = null;
    for (var key in source) {
     if (key === 'url' && typeof window !== 'undefined') {
      params[key] = new URL(source[key], window.location).href;
      continue;
     } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
     } else if (key === 'worker') {
      worker = source[key];
      continue;
     } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];
      if (typeof pdfBytes === 'string') {
       params[key] = stringToBytes(pdfBytes);
      } else if (typeof pdfBytes === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
       params[key] = new Uint8Array(pdfBytes);
      } else if (isArrayBuffer(pdfBytes)) {
       params[key] = new Uint8Array(pdfBytes);
      } else {
       error('Invalid PDF binary data: either typed array, string or ' + 'array-like object is expected in the data property.');
      }
      continue;
     }
     params[key] = source[key];
    }
    params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
    if (!worker) {
     worker = new PDFWorker();
     task._worker = worker;
    }
    var docId = task.docId;
    worker.promise.then(function () {
     if (task.destroyed) {
      throw new Error('Loading aborted');
     }
     return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
      if (task.destroyed) {
       throw new Error('Loading aborted');
      }
      var messageHandler = new MessageHandler(docId, workerId, worker.port);
      var transport = new WorkerTransport(messageHandler, task, rangeTransport);
      task._transport = transport;
      messageHandler.send('Ready', null);
     });
    }).catch(task._capability.reject);
    return task;
   }
   function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
    if (worker.destroyed) {
     return Promise.reject(new Error('Worker was destroyed'));
    }
    source.disableAutoFetch = getDefaultSetting('disableAutoFetch');
    source.disableStream = getDefaultSetting('disableStream');
    source.chunkedViewerLoading = !!pdfDataRangeTransport;
    if (pdfDataRangeTransport) {
     source.length = pdfDataRangeTransport.length;
     source.initialData = pdfDataRangeTransport.initialData;
    }
    return worker.messageHandler.sendWithPromise('GetDocRequest', {
     docId: docId,
     source: source,
     disableRange: getDefaultSetting('disableRange'),
     maxImageSize: getDefaultSetting('maxImageSize'),
     cMapUrl: getDefaultSetting('cMapUrl'),
     cMapPacked: getDefaultSetting('cMapPacked'),
     disableFontFace: getDefaultSetting('disableFontFace'),
     disableCreateObjectURL: getDefaultSetting('disableCreateObjectURL'),
     postMessageTransfers: getDefaultSetting('postMessageTransfers') && !isPostMessageTransfersDisabled,
     docBaseUrl: source.docBaseUrl
    }).then(function (workerId) {
     if (worker.destroyed) {
      throw new Error('Worker was destroyed');
     }
     return workerId;
    });
   }
   var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
    var nextDocumentId = 0;
    function PDFDocumentLoadingTask() {
     this._capability = createPromiseCapability();
     this._transport = null;
     this._worker = null;
     this.docId = 'd' + nextDocumentId++;
     this.destroyed = false;
     this.onPassword = null;
     this.onProgress = null;
     this.onUnsupportedFeature = null;
    }
    PDFDocumentLoadingTask.prototype = {
     get promise() {
      return this._capability.promise;
     },
     destroy: function () {
      this.destroyed = true;
      var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
      return transportDestroyed.then(function () {
       this._transport = null;
       if (this._worker) {
        this._worker.destroy();
        this._worker = null;
       }
      }.bind(this));
     },
     then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
     }
    };
    return PDFDocumentLoadingTask;
   }();
   var PDFDataRangeTransport = function pdfDataRangeTransportClosure() {
    function PDFDataRangeTransport(length, initialData) {
     this.length = length;
     this.initialData = initialData;
     this._rangeListeners = [];
     this._progressListeners = [];
     this._progressiveReadListeners = [];
     this._readyCapability = createPromiseCapability();
    }
    PDFDataRangeTransport.prototype = {
     addRangeListener: function PDFDataRangeTransport_addRangeListener(listener) {
      this._rangeListeners.push(listener);
     },
     addProgressListener: function PDFDataRangeTransport_addProgressListener(listener) {
      this._progressListeners.push(listener);
     },
     addProgressiveReadListener: function PDFDataRangeTransport_addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
     },
     onDataRange: function PDFDataRangeTransport_onDataRange(begin, chunk) {
      var listeners = this._rangeListeners;
      for (var i = 0, n = listeners.length; i < n; ++i) {
       listeners[i](begin, chunk);
      }
     },
     onDataProgress: function PDFDataRangeTransport_onDataProgress(loaded) {
      this._readyCapability.promise.then(function () {
       var listeners = this._progressListeners;
       for (var i = 0, n = listeners.length; i < n; ++i) {
        listeners[i](loaded);
       }
      }.bind(this));
     },
     onDataProgressiveRead: function PDFDataRangeTransport_onDataProgress(chunk) {
      this._readyCapability.promise.then(function () {
       var listeners = this._progressiveReadListeners;
       for (var i = 0, n = listeners.length; i < n; ++i) {
        listeners[i](chunk);
       }
      }.bind(this));
     },
     transportReady: function PDFDataRangeTransport_transportReady() {
      this._readyCapability.resolve();
     },
     requestDataRange: function PDFDataRangeTransport_requestDataRange(begin, end) {
      throw new Error('Abstract method PDFDataRangeTransport.requestDataRange');
     },
     abort: function PDFDataRangeTransport_abort() {
     }
    };
    return PDFDataRangeTransport;
   }();
   var PDFDocumentProxy = function PDFDocumentProxyClosure() {
    function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
     this.pdfInfo = pdfInfo;
     this.transport = transport;
     this.loadingTask = loadingTask;
    }
    PDFDocumentProxy.prototype = {
     get numPages() {
      return this.pdfInfo.numPages;
     },
     get fingerprint() {
      return this.pdfInfo.fingerprint;
     },
     getPage: function PDFDocumentProxy_getPage(pageNumber) {
      return this.transport.getPage(pageNumber);
     },
     getPageIndex: function PDFDocumentProxy_getPageIndex(ref) {
      return this.transport.getPageIndex(ref);
     },
     getDestinations: function PDFDocumentProxy_getDestinations() {
      return this.transport.getDestinations();
     },
     getDestination: function PDFDocumentProxy_getDestination(id) {
      return this.transport.getDestination(id);
     },
     getPageLabels: function PDFDocumentProxy_getPageLabels() {
      return this.transport.getPageLabels();
     },
     getAttachments: function PDFDocumentProxy_getAttachments() {
      return this.transport.getAttachments();
     },
     getJavaScript: function PDFDocumentProxy_getJavaScript() {
      return this.transport.getJavaScript();
     },
     getOutline: function PDFDocumentProxy_getOutline() {
      return this.transport.getOutline();
     },
     getMetadata: function PDFDocumentProxy_getMetadata() {
      return this.transport.getMetadata();
     },
     getData: function PDFDocumentProxy_getData() {
      return this.transport.getData();
     },
     getDownloadInfo: function PDFDocumentProxy_getDownloadInfo() {
      return this.transport.downloadInfoCapability.promise;
     },
     getStats: function PDFDocumentProxy_getStats() {
      return this.transport.getStats();
     },
     cleanup: function PDFDocumentProxy_cleanup() {
      this.transport.startCleanup();
     },
     destroy: function PDFDocumentProxy_destroy() {
      return this.loadingTask.destroy();
     }
    };
    return PDFDocumentProxy;
   }();
   var PDFPageProxy = function PDFPageProxyClosure() {
    function PDFPageProxy(pageIndex, pageInfo, transport) {
     this.pageIndex = pageIndex;
     this.pageInfo = pageInfo;
     this.transport = transport;
     this.stats = new StatTimer();
     this.stats.enabled = getDefaultSetting('enableStats');
     this.commonObjs = transport.commonObjs;
     this.objs = new PDFObjects();
     this.cleanupAfterRender = false;
     this.pendingCleanup = false;
     this.intentStates = Object.create(null);
     this.destroyed = false;
    }
    PDFPageProxy.prototype = {
     get pageNumber() {
      return this.pageIndex + 1;
     },
     get rotate() {
      return this.pageInfo.rotate;
     },
     get ref() {
      return this.pageInfo.ref;
     },
     get userUnit() {
      return this.pageInfo.userUnit;
     },
     get view() {
      return this.pageInfo.view;
     },
     getViewport: function PDFPageProxy_getViewport(scale, rotate) {
      if (arguments.length < 2) {
       rotate = this.rotate;
      }
      return new PageViewport(this.view, scale, rotate, 0, 0);
     },
     getAnnotations: function PDFPageProxy_getAnnotations(params) {
      var intent = params && params.intent || null;
      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
       this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, intent);
       this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
     },
     render: function PDFPageProxy_render(params) {
      var stats = this.stats;
      stats.time('Overall');
      this.pendingCleanup = false;
      var renderingIntent = params.intent === 'print' ? 'print' : 'display';
      var renderInteractiveForms = params.renderInteractiveForms === true ? true : false;
      if (!this.intentStates[renderingIntent]) {
       this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      if (!intentState.displayReadyCapability) {
       intentState.receivingOperatorList = true;
       intentState.displayReadyCapability = createPromiseCapability();
       intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false
       };
       this.stats.time('Page Request');
       this.transport.messageHandler.send('RenderPageRequest', {
        pageIndex: this.pageNumber - 1,
        intent: renderingIntent,
        renderInteractiveForms: renderInteractiveForms
       });
      }
      var internalRenderTask = new InternalRenderTask(complete, params, this.objs, this.commonObjs, intentState.operatorList, this.pageNumber);
      internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
      if (!intentState.renderTasks) {
       intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      if (params.continueCallback) {
       deprecated('render is used with continueCallback parameter');
       renderTask.onContinue = params.continueCallback;
      }
      var self = this;
      intentState.displayReadyCapability.promise.then(function pageDisplayReadyPromise(transparency) {
       if (self.pendingCleanup) {
        complete();
        return;
       }
       stats.time('Rendering');
       internalRenderTask.initializeGraphics(transparency);
       internalRenderTask.operatorListChanged();
      }, function pageDisplayReadPromiseError(reason) {
       complete(reason);
      });
      function complete(error) {
       var i = intentState.renderTasks.indexOf(internalRenderTask);
       if (i >= 0) {
        intentState.renderTasks.splice(i, 1);
       }
       if (self.cleanupAfterRender) {
        self.pendingCleanup = true;
       }
       self._tryCleanup();
       if (error) {
        internalRenderTask.capability.reject(error);
       } else {
        internalRenderTask.capability.resolve();
       }
       stats.timeEnd('Rendering');
       stats.timeEnd('Overall');
      }
      return renderTask;
     },
     getOperatorList: function PDFPageProxy_getOperatorList() {
      function operatorListChanged() {
       if (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        var i = intentState.renderTasks.indexOf(opListTask);
        if (i >= 0) {
         intentState.renderTasks.splice(i, 1);
        }
       }
      }
      var renderingIntent = 'oplist';
      if (!this.intentStates[renderingIntent]) {
       this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      var opListTask;
      if (!intentState.opListReadCapability) {
       opListTask = {};
       opListTask.operatorListChanged = operatorListChanged;
       intentState.receivingOperatorList = true;
       intentState.opListReadCapability = createPromiseCapability();
       intentState.renderTasks = [];
       intentState.renderTasks.push(opListTask);
       intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false
       };
       this.transport.messageHandler.send('RenderPageRequest', {
        pageIndex: this.pageIndex,
        intent: renderingIntent
       });
      }
      return intentState.opListReadCapability.promise;
     },
     getTextContent: function PDFPageProxy_getTextContent(params) {
      return this.transport.messageHandler.sendWithPromise('GetTextContent', {
       pageIndex: this.pageNumber - 1,
       normalizeWhitespace: params && params.normalizeWhitespace === true ? true : false,
       combineTextItems: params && params.disableCombineTextItems === true ? false : true
      });
     },
     _destroy: function PDFPageProxy_destroy() {
      this.destroyed = true;
      this.transport.pageCache[this.pageIndex] = null;
      var waitOn = [];
      Object.keys(this.intentStates).forEach(function (intent) {
       if (intent === 'oplist') {
        return;
       }
       var intentState = this.intentStates[intent];
       intentState.renderTasks.forEach(function (renderTask) {
        var renderCompleted = renderTask.capability.promise.catch(function () {
        });
        waitOn.push(renderCompleted);
        renderTask.cancel();
       });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
     },
     destroy: function () {
      deprecated('page destroy method, use cleanup() instead');
      this.cleanup();
     },
     cleanup: function PDFPageProxy_cleanup() {
      this.pendingCleanup = true;
      this._tryCleanup();
     },
     _tryCleanup: function PDFPageProxy_tryCleanup() {
      if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
        var intentState = this.intentStates[intent];
        return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
       }, this)) {
       return;
      }
      Object.keys(this.intentStates).forEach(function (intent) {
       delete this.intentStates[intent];
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
     },
     _startRenderPage: function PDFPageProxy_startRenderPage(transparency, intent) {
      var intentState = this.intentStates[intent];
      if (intentState.displayReadyCapability) {
       intentState.displayReadyCapability.resolve(transparency);
      }
     },
     _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk, intent) {
      var intentState = this.intentStates[intent];
      var i, ii;
      for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
       intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
       intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
      for (i = 0; i < intentState.renderTasks.length; i++) {
       intentState.renderTasks[i].operatorListChanged();
      }
      if (operatorListChunk.lastChunk) {
       intentState.receivingOperatorList = false;
       this._tryCleanup();
      }
     }
    };
    return PDFPageProxy;
   }();
   var PDFWorker = function PDFWorkerClosure() {
    var nextFakeWorkerId = 0;
    function getWorkerSrc() {
     if (typeof workerSrc !== 'undefined') {
      return workerSrc;
     }
     if (getDefaultSetting('workerSrc')) {
      return getDefaultSetting('workerSrc');
     }
     if (pdfjsFilePath) {
      return pdfjsFilePath.replace(/\.js$/i, '.worker.js');
     }
     error('No PDFJS.workerSrc specified');
    }
    var fakeWorkerFilesLoadedCapability;
    function setupFakeWorkerGlobal() {
     var WorkerMessageHandler;
     if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
     }
     fakeWorkerFilesLoadedCapability = createPromiseCapability();
     var loader = fakeWorkerFilesLoader || function (callback) {
      Util.loadScript(getWorkerSrc(), function () {
       callback(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
      });
     };
     loader(fakeWorkerFilesLoadedCapability.resolve);
     return fakeWorkerFilesLoadedCapability.promise;
    }
    function FakeWorkerPort(defer) {
     this._listeners = [];
     this._defer = defer;
     this._deferred = Promise.resolve(undefined);
    }
    FakeWorkerPort.prototype = {
     postMessage: function (obj, transfers) {
      function cloneValue(value) {
       if (typeof value !== 'object' || value === null) {
        return value;
       }
       if (cloned.has(value)) {
        return cloned.get(value);
       }
       var result;
       var buffer;
       if ((buffer = value.buffer) && isArrayBuffer(buffer)) {
        var transferable = transfers && transfers.indexOf(buffer) >= 0;
        if (value === buffer) {
         result = value;
        } else if (transferable) {
         result = new value.constructor(buffer, value.byteOffset, value.byteLength);
        } else {
         result = new value.constructor(value);
        }
        cloned.set(value, result);
        return result;
       }
       result = isArray(value) ? [] : {};
       cloned.set(value, result);
       for (var i in value) {
        var desc, p = value;
        while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
         p = Object.getPrototypeOf(p);
        }
        if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
         continue;
        }
        result[i] = cloneValue(desc.value);
       }
       return result;
      }
      if (!this._defer) {
       this._listeners.forEach(function (listener) {
        listener.call(this, { data: obj });
       }, this);
       return;
      }
      var cloned = new WeakMap();
      var e = { data: cloneValue(obj) };
      this._deferred.then(function () {
       this._listeners.forEach(function (listener) {
        listener.call(this, e);
       }, this);
      }.bind(this));
     },
     addEventListener: function (name, listener) {
      this._listeners.push(listener);
     },
     removeEventListener: function (name, listener) {
      var i = this._listeners.indexOf(listener);
      this._listeners.splice(i, 1);
     },
     terminate: function () {
      this._listeners = [];
     }
    };
    function createCDNWrapper(url) {
     var wrapper = 'importScripts(\'' + url + '\');';
     return URL.createObjectURL(new Blob([wrapper]));
    }
    function PDFWorker(name) {
     this.name = name;
     this.destroyed = false;
     this._readyCapability = createPromiseCapability();
     this._port = null;
     this._webWorker = null;
     this._messageHandler = null;
     this._initialize();
    }
    PDFWorker.prototype = {
     get promise() {
      return this._readyCapability.promise;
     },
     get port() {
      return this._port;
     },
     get messageHandler() {
      return this._messageHandler;
     },
     _initialize: function PDFWorker_initialize() {
      if (!isWorkerDisabled && !getDefaultSetting('disableWorker') && typeof Worker !== 'undefined') {
       var workerSrc = getWorkerSrc();
       try {
        if (!isSameOrigin(window.location.href, workerSrc)) {
         workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
        }
        var worker = new Worker(workerSrc);
        var messageHandler = new MessageHandler('main', 'worker', worker);
        var terminateEarly = function () {
         worker.removeEventListener('error', onWorkerError);
         messageHandler.destroy();
         worker.terminate();
         if (this.destroyed) {
          this._readyCapability.reject(new Error('Worker was destroyed'));
         } else {
          this._setupFakeWorker();
         }
        }.bind(this);
        var onWorkerError = function (event) {
         if (!this._webWorker) {
          terminateEarly();
         }
        }.bind(this);
        worker.addEventListener('error', onWorkerError);
        messageHandler.on('test', function PDFWorker_test(data) {
         worker.removeEventListener('error', onWorkerError);
         if (this.destroyed) {
          terminateEarly();
          return;
         }
         var supportTypedArray = data && data.supportTypedArray;
         if (supportTypedArray) {
          this._messageHandler = messageHandler;
          this._port = worker;
          this._webWorker = worker;
          if (!data.supportTransfers) {
           isPostMessageTransfersDisabled = true;
          }
          this._readyCapability.resolve();
          messageHandler.send('configure', { verbosity: getVerbosityLevel() });
         } else {
          this._setupFakeWorker();
          messageHandler.destroy();
          worker.terminate();
         }
        }.bind(this));
        messageHandler.on('console_log', function (data) {
         console.log.apply(console, data);
        });
        messageHandler.on('console_error', function (data) {
         console.error.apply(console, data);
        });
        messageHandler.on('ready', function (data) {
         worker.removeEventListener('error', onWorkerError);
         if (this.destroyed) {
          terminateEarly();
          return;
         }
         try {
          sendTest();
         } catch (e) {
          this._setupFakeWorker();
         }
        }.bind(this));
        var sendTest = function () {
         var postMessageTransfers = getDefaultSetting('postMessageTransfers') && !isPostMessageTransfersDisabled;
         var testObj = new Uint8Array([postMessageTransfers ? 255 : 0]);
         try {
          messageHandler.send('test', testObj, [testObj.buffer]);
         } catch (ex) {
          info('Cannot use postMessage transfers');
          testObj[0] = 0;
          messageHandler.send('test', testObj);
         }
        };
        sendTest();
        return;
       } catch (e) {
        info('The worker has been disabled.');
       }
      }
      this._setupFakeWorker();
     },
     _setupFakeWorker: function PDFWorker_setupFakeWorker() {
      if (!isWorkerDisabled && !getDefaultSetting('disableWorker')) {
       warn('Setting up fake worker.');
       isWorkerDisabled = true;
      }
      setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
       if (this.destroyed) {
        this._readyCapability.reject(new Error('Worker was destroyed'));
        return;
       }
       var isTypedArraysPresent = Uint8Array !== Float32Array;
       var port = new FakeWorkerPort(isTypedArraysPresent);
       this._port = port;
       var id = 'fake' + nextFakeWorkerId++;
       var workerHandler = new MessageHandler(id + '_worker', id, port);
       WorkerMessageHandler.setup(workerHandler, port);
       var messageHandler = new MessageHandler(id, id + '_worker', port);
       this._messageHandler = messageHandler;
       this._readyCapability.resolve();
      }.bind(this));
     },
     destroy: function PDFWorker_destroy() {
      this.destroyed = true;
      if (this._webWorker) {
       this._webWorker.terminate();
       this._webWorker = null;
      }
      this._port = null;
      if (this._messageHandler) {
       this._messageHandler.destroy();
       this._messageHandler = null;
      }
     }
    };
    return PDFWorker;
   }();
   var WorkerTransport = function WorkerTransportClosure() {
    function WorkerTransport(messageHandler, loadingTask, pdfDataRangeTransport) {
     this.messageHandler = messageHandler;
     this.loadingTask = loadingTask;
     this.pdfDataRangeTransport = pdfDataRangeTransport;
     this.commonObjs = new PDFObjects();
     this.fontLoader = new FontLoader(loadingTask.docId);
     this.destroyed = false;
     this.destroyCapability = null;
     this._passwordCapability = null;
     this.pageCache = [];
     this.pagePromises = [];
     this.downloadInfoCapability = createPromiseCapability();
     this.setupMessageHandler();
    }
    WorkerTransport.prototype = {
     destroy: function WorkerTransport_destroy() {
      if (this.destroyCapability) {
       return this.destroyCapability.promise;
      }
      this.destroyed = true;
      this.destroyCapability = createPromiseCapability();
      if (this._passwordCapability) {
       this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
      }
      var waitOn = [];
      this.pageCache.forEach(function (page) {
       if (page) {
        waitOn.push(page._destroy());
       }
      });
      this.pageCache = [];
      this.pagePromises = [];
      var self = this;
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
       self.fontLoader.clear();
       if (self.pdfDataRangeTransport) {
        self.pdfDataRangeTransport.abort();
        self.pdfDataRangeTransport = null;
       }
       if (self.messageHandler) {
        self.messageHandler.destroy();
        self.messageHandler = null;
       }
       self.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
     },
     setupMessageHandler: function WorkerTransport_setupMessageHandler() {
      var messageHandler = this.messageHandler;
      var loadingTask = this.loadingTask;
      var pdfDataRangeTransport = this.pdfDataRangeTransport;
      if (pdfDataRangeTransport) {
       pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
        messageHandler.send('OnDataRange', {
         begin: begin,
         chunk: chunk
        });
       });
       pdfDataRangeTransport.addProgressListener(function (loaded) {
        messageHandler.send('OnDataProgress', { loaded: loaded });
       });
       pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
        messageHandler.send('OnDataRange', { chunk: chunk });
       });
       messageHandler.on('RequestDataRange', function transportDataRange(data) {
        pdfDataRangeTransport.requestDataRange(data.begin, data.end);
       }, this);
      }
      messageHandler.on('GetDoc', function transportDoc(data) {
       var pdfInfo = data.pdfInfo;
       this.numPages = data.pdfInfo.numPages;
       var loadingTask = this.loadingTask;
       var pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
       this.pdfDocument = pdfDocument;
       loadingTask._capability.resolve(pdfDocument);
      }, this);
      messageHandler.on('PasswordRequest', function transportPasswordRequest(exception) {
       this._passwordCapability = createPromiseCapability();
       if (loadingTask.onPassword) {
        var updatePassword = function (password) {
         this._passwordCapability.resolve({ password: password });
        }.bind(this);
        loadingTask.onPassword(updatePassword, exception.code);
       } else {
        this._passwordCapability.reject(new PasswordException(exception.message, exception.code));
       }
       return this._passwordCapability.promise;
      }, this);
      messageHandler.on('PasswordException', function transportPasswordException(exception) {
       loadingTask._capability.reject(new PasswordException(exception.message, exception.code));
      }, this);
      messageHandler.on('InvalidPDF', function transportInvalidPDF(exception) {
       this.loadingTask._capability.reject(new InvalidPDFException(exception.message));
      }, this);
      messageHandler.on('MissingPDF', function transportMissingPDF(exception) {
       this.loadingTask._capability.reject(new MissingPDFException(exception.message));
      }, this);
      messageHandler.on('UnexpectedResponse', function transportUnexpectedResponse(exception) {
       this.loadingTask._capability.reject(new UnexpectedResponseException(exception.message, exception.status));
      }, this);
      messageHandler.on('UnknownError', function transportUnknownError(exception) {
       this.loadingTask._capability.reject(new UnknownErrorException(exception.message, exception.details));
      }, this);
      messageHandler.on('DataLoaded', function transportPage(data) {
       this.downloadInfoCapability.resolve(data);
      }, this);
      messageHandler.on('PDFManagerReady', function transportPage(data) {
       if (this.pdfDataRangeTransport) {
        this.pdfDataRangeTransport.transportReady();
       }
      }, this);
      messageHandler.on('StartRenderPage', function transportRender(data) {
       if (this.destroyed) {
        return;
       }
       var page = this.pageCache[data.pageIndex];
       page.stats.timeEnd('Page Request');
       page._startRenderPage(data.transparency, data.intent);
      }, this);
      messageHandler.on('RenderPageChunk', function transportRender(data) {
       if (this.destroyed) {
        return;
       }
       var page = this.pageCache[data.pageIndex];
       page._renderPageChunk(data.operatorList, data.intent);
      }, this);
      messageHandler.on('commonobj', function transportObj(data) {
       if (this.destroyed) {
        return;
       }
       var id = data[0];
       var type = data[1];
       if (this.commonObjs.hasData(id)) {
        return;
       }
       switch (type) {
       case 'Font':
        var exportedData = data[2];
        if ('error' in exportedData) {
         var exportedError = exportedData.error;
         warn('Error during font loading: ' + exportedError);
         this.commonObjs.resolve(id, exportedError);
         break;
        }
        var fontRegistry = null;
        if (getDefaultSetting('pdfBug') && globalScope.FontInspector && globalScope['FontInspector'].enabled) {
         fontRegistry = {
          registerFont: function (font, url) {
           globalScope['FontInspector'].fontAdded(font, url);
          }
         };
        }
        var font = new FontFaceObject(exportedData, {
         isEvalSuported: getDefaultSetting('isEvalSupported'),
         disableFontFace: getDefaultSetting('disableFontFace'),
         fontRegistry: fontRegistry
        });
        this.fontLoader.bind([font], function fontReady(fontObjs) {
         this.commonObjs.resolve(id, font);
        }.bind(this));
        break;
       case 'FontPath':
        this.commonObjs.resolve(id, data[2]);
        break;
       default:
        error('Got unknown common object type ' + type);
       }
      }, this);
      messageHandler.on('obj', function transportObj(data) {
       if (this.destroyed) {
        return;
       }
       var id = data[0];
       var pageIndex = data[1];
       var type = data[2];
       var pageProxy = this.pageCache[pageIndex];
       var imageData;
       if (pageProxy.objs.hasData(id)) {
        return;
       }
       switch (type) {
       case 'JpegStream':
        imageData = data[3];
        loadJpegStream(id, imageData, pageProxy.objs);
        break;
       case 'Image':
        imageData = data[3];
        pageProxy.objs.resolve(id, imageData);
        var MAX_IMAGE_SIZE_TO_STORE = 8000000;
        if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
         pageProxy.cleanupAfterRender = true;
        }
        break;
       default:
        error('Got unknown object type ' + type);
       }
      }, this);
      messageHandler.on('DocProgress', function transportDocProgress(data) {
       if (this.destroyed) {
        return;
       }
       var loadingTask = this.loadingTask;
       if (loadingTask.onProgress) {
        loadingTask.onProgress({
         loaded: data.loaded,
         total: data.total
        });
       }
      }, this);
      messageHandler.on('PageError', function transportError(data) {
       if (this.destroyed) {
        return;
       }
       var page = this.pageCache[data.pageNum - 1];
       var intentState = page.intentStates[data.intent];
       if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.reject(data.error);
       } else {
        error(data.error);
       }
       if (intentState.operatorList) {
        intentState.operatorList.lastChunk = true;
        for (var i = 0; i < intentState.renderTasks.length; i++) {
         intentState.renderTasks[i].operatorListChanged();
        }
       }
      }, this);
      messageHandler.on('UnsupportedFeature', function transportUnsupportedFeature(data) {
       if (this.destroyed) {
        return;
       }
       var featureId = data.featureId;
       var loadingTask = this.loadingTask;
       if (loadingTask.onUnsupportedFeature) {
        loadingTask.onUnsupportedFeature(featureId);
       }
       _UnsupportedManager.notify(featureId);
      }, this);
      messageHandler.on('JpegDecode', function (data) {
       if (this.destroyed) {
        return Promise.reject(new Error('Worker was destroyed'));
       }
       var imageUrl = data[0];
       var components = data[1];
       if (components !== 3 && components !== 1) {
        return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
       }
       return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
         var width = img.width;
         var height = img.height;
         var size = width * height;
         var rgbaLength = size * 4;
         var buf = new Uint8Array(size * components);
         var tmpCanvas = createScratchCanvas(width, height);
         var tmpCtx = tmpCanvas.getContext('2d');
         tmpCtx.drawImage(img, 0, 0);
         var data = tmpCtx.getImageData(0, 0, width, height).data;
         var i, j;
         if (components === 3) {
          for (i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
           buf[j] = data[i];
           buf[j + 1] = data[i + 1];
           buf[j + 2] = data[i + 2];
          }
         } else if (components === 1) {
          for (i = 0, j = 0; i < rgbaLength; i += 4, j++) {
           buf[j] = data[i];
          }
         }
         resolve({
          data: buf,
          width: width,
          height: height
         });
        };
        img.onerror = function () {
         reject(new Error('JpegDecode failed to load image'));
        };
        img.src = imageUrl;
       });
      }, this);
     },
     getData: function WorkerTransport_getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
     },
     getPage: function WorkerTransport_getPage(pageNumber, capability) {
      if (!isInt(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
       return Promise.reject(new Error('Invalid page request'));
      }
      var pageIndex = pageNumber - 1;
      if (pageIndex in this.pagePromises) {
       return this.pagePromises[pageIndex];
      }
      var promise = this.messageHandler.sendWithPromise('GetPage', { pageIndex: pageIndex }).then(function (pageInfo) {
       if (this.destroyed) {
        throw new Error('Transport destroyed');
       }
       var page = new PDFPageProxy(pageIndex, pageInfo, this);
       this.pageCache[pageIndex] = page;
       return page;
      }.bind(this));
      this.pagePromises[pageIndex] = promise;
      return promise;
     },
     getPageIndex: function WorkerTransport_getPageIndexByRef(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', { ref: ref }).catch(function (reason) {
       return Promise.reject(new Error(reason));
      });
     },
     getAnnotations: function WorkerTransport_getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
       pageIndex: pageIndex,
       intent: intent
      });
     },
     getDestinations: function WorkerTransport_getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
     },
     getDestination: function WorkerTransport_getDestination(id) {
      return this.messageHandler.sendWithPromise('GetDestination', { id: id });
     },
     getPageLabels: function WorkerTransport_getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
     },
     getAttachments: function WorkerTransport_getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
     },
     getJavaScript: function WorkerTransport_getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
     },
     getOutline: function WorkerTransport_getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
     },
     getMetadata: function WorkerTransport_getMetadata() {
      return this.messageHandler.sendWithPromise('GetMetadata', null).then(function transportMetadata(results) {
       return {
        info: results[0],
        metadata: results[1] ? new Metadata(results[1]) : null
       };
      });
     },
     getStats: function WorkerTransport_getStats() {
      return this.messageHandler.sendWithPromise('GetStats', null);
     },
     startCleanup: function WorkerTransport_startCleanup() {
      this.messageHandler.sendWithPromise('Cleanup', null).then(function endCleanup() {
       for (var i = 0, ii = this.pageCache.length; i < ii; i++) {
        var page = this.pageCache[i];
        if (page) {
         page.cleanup();
        }
       }
       this.commonObjs.clear();
       this.fontLoader.clear();
      }.bind(this));
     }
    };
    return WorkerTransport;
   }();
   var PDFObjects = function PDFObjectsClosure() {
    function PDFObjects() {
     this.objs = Object.create(null);
    }
    PDFObjects.prototype = {
     ensureObj: function PDFObjects_ensureObj(objId) {
      if (this.objs[objId]) {
       return this.objs[objId];
      }
      var obj = {
       capability: createPromiseCapability(),
       data: null,
       resolved: false
      };
      this.objs[objId] = obj;
      return obj;
     },
     get: function PDFObjects_get(objId, callback) {
      if (callback) {
       this.ensureObj(objId).capability.promise.then(callback);
       return null;
      }
      var obj = this.objs[objId];
      if (!obj || !obj.resolved) {
       error('Requesting object that isn\'t resolved yet ' + objId);
      }
      return obj.data;
     },
     resolve: function PDFObjects_resolve(objId, data) {
      var obj = this.ensureObj(objId);
      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
     },
     isResolved: function PDFObjects_isResolved(objId) {
      var objs = this.objs;
      if (!objs[objId]) {
       return false;
      }
      return objs[objId].resolved;
     },
     hasData: function PDFObjects_hasData(objId) {
      return this.isResolved(objId);
     },
     getData: function PDFObjects_getData(objId) {
      var objs = this.objs;
      if (!objs[objId] || !objs[objId].resolved) {
       return null;
      }
      return objs[objId].data;
     },
     clear: function PDFObjects_clear() {
      this.objs = Object.create(null);
     }
    };
    return PDFObjects;
   }();
   var RenderTask = function RenderTaskClosure() {
    function RenderTask(internalRenderTask) {
     this._internalRenderTask = internalRenderTask;
     this.onContinue = null;
    }
    RenderTask.prototype = {
     get promise() {
      return this._internalRenderTask.capability.promise;
     },
     cancel: function RenderTask_cancel() {
      this._internalRenderTask.cancel();
     },
     then: function RenderTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
     }
    };
    return RenderTask;
   }();
   var InternalRenderTask = function InternalRenderTaskClosure() {
    function InternalRenderTask(callback, params, objs, commonObjs, operatorList, pageNumber) {
     this.callback = callback;
     this.params = params;
     this.objs = objs;
     this.commonObjs = commonObjs;
     this.operatorListIdx = null;
     this.operatorList = operatorList;
     this.pageNumber = pageNumber;
     this.running = false;
     this.graphicsReadyCallback = null;
     this.graphicsReady = false;
     this.useRequestAnimationFrame = false;
     this.cancelled = false;
     this.capability = createPromiseCapability();
     this.task = new RenderTask(this);
     this._continueBound = this._continue.bind(this);
     this._scheduleNextBound = this._scheduleNext.bind(this);
     this._nextBound = this._next.bind(this);
    }
    InternalRenderTask.prototype = {
     initializeGraphics: function InternalRenderTask_initializeGraphics(transparency) {
      if (this.cancelled) {
       return;
      }
      if (getDefaultSetting('pdfBug') && globalScope.StepperManager && globalScope.StepperManager.enabled) {
       this.stepper = globalScope.StepperManager.create(this.pageNumber - 1);
       this.stepper.init(this.operatorList);
       this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }
      var params = this.params;
      this.gfx = new CanvasGraphics(params.canvasContext, this.commonObjs, this.objs, params.imageLayer);
      this.gfx.beginDrawing(params.transform, params.viewport, transparency);
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      if (this.graphicsReadyCallback) {
       this.graphicsReadyCallback();
      }
     },
     cancel: function InternalRenderTask_cancel() {
      this.running = false;
      this.cancelled = true;
      this.callback('cancelled');
     },
     operatorListChanged: function InternalRenderTask_operatorListChanged() {
      if (!this.graphicsReady) {
       if (!this.graphicsReadyCallback) {
        this.graphicsReadyCallback = this._continueBound;
       }
       return;
      }
      if (this.stepper) {
       this.stepper.updateOperatorList(this.operatorList);
      }
      if (this.running) {
       return;
      }
      this._continue();
     },
     _continue: function InternalRenderTask__continue() {
      this.running = true;
      if (this.cancelled) {
       return;
      }
      if (this.task.onContinue) {
       this.task.onContinue(this._scheduleNextBound);
      } else {
       this._scheduleNext();
      }
     },
     _scheduleNext: function InternalRenderTask__scheduleNext() {
      if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
       window.requestAnimationFrame(this._nextBound);
      } else {
       Promise.resolve(undefined).then(this._nextBound);
      }
     },
     _next: function InternalRenderTask__next() {
      if (this.cancelled) {
       return;
      }
      this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
      if (this.operatorListIdx === this.operatorList.argsArray.length) {
       this.running = false;
       if (this.operatorList.lastChunk) {
        this.gfx.endDrawing();
        this.callback();
       }
      }
     }
    };
    return InternalRenderTask;
   }();
   var _UnsupportedManager = function UnsupportedManagerClosure() {
    var listeners = [];
    return {
     listen: function (cb) {
      deprecated('Global UnsupportedManager.listen is used: ' + ' use PDFDocumentLoadingTask.onUnsupportedFeature instead');
      listeners.push(cb);
     },
     notify: function (featureId) {
      for (var i = 0, ii = listeners.length; i < ii; i++) {
       listeners[i](featureId);
      }
     }
    };
   }();
   if (typeof pdfjsVersion !== 'undefined') {
    exports.version = pdfjsVersion;
   }
   if (typeof pdfjsBuild !== 'undefined') {
    exports.build = pdfjsBuild;
   }
   exports.getDocument = getDocument;
   exports.PDFDataRangeTransport = PDFDataRangeTransport;
   exports.PDFWorker = PDFWorker;
   exports.PDFDocumentProxy = PDFDocumentProxy;
   exports.PDFPageProxy = PDFPageProxy;
   exports._UnsupportedManager = _UnsupportedManager;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayGlobal = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils, root.pdfjsDisplayAPI, root.pdfjsDisplayAnnotationLayer, root.pdfjsDisplayTextLayer, root.pdfjsDisplayMetadata, root.pdfjsDisplaySVG);
  }(this, function (exports, sharedUtil, displayDOMUtils, displayAPI, displayAnnotationLayer, displayTextLayer, displayMetadata, displaySVG) {
   var globalScope = sharedUtil.globalScope;
   var deprecated = sharedUtil.deprecated;
   var warn = sharedUtil.warn;
   var LinkTarget = displayDOMUtils.LinkTarget;
   var DEFAULT_LINK_REL = displayDOMUtils.DEFAULT_LINK_REL;
   var isWorker = typeof window === 'undefined';
   if (!globalScope.PDFJS) {
    globalScope.PDFJS = {};
   }
   var PDFJS = globalScope.PDFJS;
   if (typeof pdfjsVersion !== 'undefined') {
    PDFJS.version = pdfjsVersion;
   }
   if (typeof pdfjsBuild !== 'undefined') {
    PDFJS.build = pdfjsBuild;
   }
   PDFJS.pdfBug = false;
   if (PDFJS.verbosity !== undefined) {
    sharedUtil.setVerbosityLevel(PDFJS.verbosity);
   }
   delete PDFJS.verbosity;
   Object.defineProperty(PDFJS, 'verbosity', {
    get: function () {
     return sharedUtil.getVerbosityLevel();
    },
    set: function (level) {
     sharedUtil.setVerbosityLevel(level);
    },
    enumerable: true,
    configurable: true
   });
   PDFJS.VERBOSITY_LEVELS = sharedUtil.VERBOSITY_LEVELS;
   PDFJS.OPS = sharedUtil.OPS;
   PDFJS.UNSUPPORTED_FEATURES = sharedUtil.UNSUPPORTED_FEATURES;
   PDFJS.isValidUrl = displayDOMUtils.isValidUrl;
   PDFJS.shadow = sharedUtil.shadow;
   PDFJS.createBlob = sharedUtil.createBlob;
   PDFJS.createObjectURL = function PDFJS_createObjectURL(data, contentType) {
    return sharedUtil.createObjectURL(data, contentType, PDFJS.disableCreateObjectURL);
   };
   Object.defineProperty(PDFJS, 'isLittleEndian', {
    configurable: true,
    get: function PDFJS_isLittleEndian() {
     var value = sharedUtil.isLittleEndian();
     return sharedUtil.shadow(PDFJS, 'isLittleEndian', value);
    }
   });
   PDFJS.removeNullCharacters = sharedUtil.removeNullCharacters;
   PDFJS.PasswordResponses = sharedUtil.PasswordResponses;
   PDFJS.PasswordException = sharedUtil.PasswordException;
   PDFJS.UnknownErrorException = sharedUtil.UnknownErrorException;
   PDFJS.InvalidPDFException = sharedUtil.InvalidPDFException;
   PDFJS.MissingPDFException = sharedUtil.MissingPDFException;
   PDFJS.UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
   PDFJS.Util = sharedUtil.Util;
   PDFJS.PageViewport = sharedUtil.PageViewport;
   PDFJS.createPromiseCapability = sharedUtil.createPromiseCapability;
   PDFJS.maxImageSize = PDFJS.maxImageSize === undefined ? -1 : PDFJS.maxImageSize;
   PDFJS.cMapUrl = PDFJS.cMapUrl === undefined ? null : PDFJS.cMapUrl;
   PDFJS.cMapPacked = PDFJS.cMapPacked === undefined ? false : PDFJS.cMapPacked;
   PDFJS.disableFontFace = PDFJS.disableFontFace === undefined ? false : PDFJS.disableFontFace;
   PDFJS.imageResourcesPath = PDFJS.imageResourcesPath === undefined ? '' : PDFJS.imageResourcesPath;
   PDFJS.disableWorker = PDFJS.disableWorker === undefined ? false : PDFJS.disableWorker;
   PDFJS.workerSrc = PDFJS.workerSrc === undefined ? null : PDFJS.workerSrc;
   PDFJS.disableRange = PDFJS.disableRange === undefined ? false : PDFJS.disableRange;
   PDFJS.disableStream = PDFJS.disableStream === undefined ? false : PDFJS.disableStream;
   PDFJS.disableAutoFetch = PDFJS.disableAutoFetch === undefined ? false : PDFJS.disableAutoFetch;
   PDFJS.pdfBug = PDFJS.pdfBug === undefined ? false : PDFJS.pdfBug;
   PDFJS.postMessageTransfers = PDFJS.postMessageTransfers === undefined ? true : PDFJS.postMessageTransfers;
   PDFJS.disableCreateObjectURL = PDFJS.disableCreateObjectURL === undefined ? false : PDFJS.disableCreateObjectURL;
   PDFJS.disableWebGL = PDFJS.disableWebGL === undefined ? true : PDFJS.disableWebGL;
   PDFJS.externalLinkTarget = PDFJS.externalLinkTarget === undefined ? LinkTarget.NONE : PDFJS.externalLinkTarget;
   PDFJS.externalLinkRel = PDFJS.externalLinkRel === undefined ? DEFAULT_LINK_REL : PDFJS.externalLinkRel;
   PDFJS.isEvalSupported = PDFJS.isEvalSupported === undefined ? true : PDFJS.isEvalSupported;
   var savedOpenExternalLinksInNewWindow = PDFJS.openExternalLinksInNewWindow;
   delete PDFJS.openExternalLinksInNewWindow;
   Object.defineProperty(PDFJS, 'openExternalLinksInNewWindow', {
    get: function () {
     return PDFJS.externalLinkTarget === LinkTarget.BLANK;
    },
    set: function (value) {
     if (value) {
      deprecated('PDFJS.openExternalLinksInNewWindow, please use ' + '"PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.');
     }
     if (PDFJS.externalLinkTarget !== LinkTarget.NONE) {
      warn('PDFJS.externalLinkTarget is already initialized');
      return;
     }
     PDFJS.externalLinkTarget = value ? LinkTarget.BLANK : LinkTarget.NONE;
    },
    enumerable: true,
    configurable: true
   });
   if (savedOpenExternalLinksInNewWindow) {
    PDFJS.openExternalLinksInNewWindow = savedOpenExternalLinksInNewWindow;
   }
   PDFJS.getDocument = displayAPI.getDocument;
   PDFJS.PDFDataRangeTransport = displayAPI.PDFDataRangeTransport;
   PDFJS.PDFWorker = displayAPI.PDFWorker;
   Object.defineProperty(PDFJS, 'hasCanvasTypedArrays', {
    configurable: true,
    get: function PDFJS_hasCanvasTypedArrays() {
     var value = displayDOMUtils.hasCanvasTypedArrays();
     return sharedUtil.shadow(PDFJS, 'hasCanvasTypedArrays', value);
    }
   });
   PDFJS.CustomStyle = displayDOMUtils.CustomStyle;
   PDFJS.LinkTarget = LinkTarget;
   PDFJS.addLinkAttributes = displayDOMUtils.addLinkAttributes;
   PDFJS.getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
   PDFJS.isExternalLinkTargetSet = displayDOMUtils.isExternalLinkTargetSet;
   PDFJS.AnnotationLayer = displayAnnotationLayer.AnnotationLayer;
   PDFJS.renderTextLayer = displayTextLayer.renderTextLayer;
   PDFJS.Metadata = displayMetadata.Metadata;
   PDFJS.SVGGraphics = displaySVG.SVGGraphics;
   PDFJS.UnsupportedManager = displayAPI._UnsupportedManager;
   exports.globalScope = globalScope;
   exports.isWorker = isWorker;
   exports.PDFJS = globalScope.PDFJS;
  }));
 }.call(pdfjsLibs));
 exports.PDFJS = pdfjsLibs.pdfjsDisplayGlobal.PDFJS;
 exports.build = pdfjsLibs.pdfjsDisplayAPI.build;
 exports.version = pdfjsLibs.pdfjsDisplayAPI.version;
 exports.getDocument = pdfjsLibs.pdfjsDisplayAPI.getDocument;
 exports.PDFDataRangeTransport = pdfjsLibs.pdfjsDisplayAPI.PDFDataRangeTransport;
 exports.PDFWorker = pdfjsLibs.pdfjsDisplayAPI.PDFWorker;
 exports.renderTextLayer = pdfjsLibs.pdfjsDisplayTextLayer.renderTextLayer;
 exports.AnnotationLayer = pdfjsLibs.pdfjsDisplayAnnotationLayer.AnnotationLayer;
 exports.CustomStyle = pdfjsLibs.pdfjsDisplayDOMUtils.CustomStyle;
 exports.PasswordResponses = pdfjsLibs.pdfjsSharedUtil.PasswordResponses;
 exports.InvalidPDFException = pdfjsLibs.pdfjsSharedUtil.InvalidPDFException;
 exports.MissingPDFException = pdfjsLibs.pdfjsSharedUtil.MissingPDFException;
 exports.SVGGraphics = pdfjsLibs.pdfjsDisplaySVG.SVGGraphics;
 exports.UnexpectedResponseException = pdfjsLibs.pdfjsSharedUtil.UnexpectedResponseException;
 exports.OPS = pdfjsLibs.pdfjsSharedUtil.OPS;
 exports.UNSUPPORTED_FEATURES = pdfjsLibs.pdfjsSharedUtil.UNSUPPORTED_FEATURES;
 exports.isValidUrl = pdfjsLibs.pdfjsDisplayDOMUtils.isValidUrl;
 exports.createValidAbsoluteUrl = pdfjsLibs.pdfjsSharedUtil.createValidAbsoluteUrl;
 exports.createObjectURL = pdfjsLibs.pdfjsSharedUtil.createObjectURL;
 exports.removeNullCharacters = pdfjsLibs.pdfjsSharedUtil.removeNullCharacters;
 exports.shadow = pdfjsLibs.pdfjsSharedUtil.shadow;
 exports.createBlob = pdfjsLibs.pdfjsSharedUtil.createBlob;
 exports.getFilenameFromUrl = pdfjsLibs.pdfjsDisplayDOMUtils.getFilenameFromUrl;
 exports.addLinkAttributes = pdfjsLibs.pdfjsDisplayDOMUtils.addLinkAttributes;
}));
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

/*global window*/

function getEmailLink(to, subject, body) {
    "use strict";
    to = String(to);
    subject = String(subject);
    body = String(body);
    var link = "mailto:";
    var params = [];
    if (to) {
        link += encodeURIComponent(String(to));
    }
    if (subject) {
        params.push("subject=" + encodeURIComponent(String(subject)));
    }
    if (body) {
        params.push("body=" + encodeURIComponent(String(body)));
    }
    if (params.length) {
        link += "?" + params.join("&");
    }
    return link;
}
window.getEmailLink = getEmailLink;

function sendEmail(to, subject, body) {
    "use strict";
    // window.open(getEmailLink(to, subject, body));
    document.location.href = getEmailLink(to, subject, body);
    return false;
}
window.sendEmail = sendEmail;

/*global window, Tool, addEvent*/

/**
 * Creates toolbar
 *
 * @class
 * @param {object} config       - ``{containerEl: DOMElement}``
 */
function Toolbar(config) {
    "use strict";
    this.config = config;
    this.icons = config.icons;

    if (!config.containerEl) {
        throw new Error("Toolbar::constructor", "config must contain ``containerEl``");
    }
    this.containerEl = config.containerEl;

    if (!config.outerContainerEl) {
        throw new Error("Toolbar::constructor", "config must contain ``outerContainerEl``");
    }
    this.outerContainerEl = config.outerContainerEl;


    this.initContainer();
    this.keyshortcuts = config.keyshortcuts;

    var that = this;

    window.addEventListener("keydown", function (e) {
        var keyCode = e.keyCode;
        if (keyCode === 16) {//shift down
            that.changeLabel("shift");
        }
    });

    window.addEventListener("keyup", function (e) {
        var keyCode = e.keyCode;
        if (keyCode === 16) {//shift up
            that.changeLabel("default");
        }
    });

}


Toolbar.prototype = {
    buttons: [],
    disabledList: {},
    activeBtn: undefined,
    changeLabel: function changeLabel(alt) {
        "use strict";
        this.buttons.forEach(function (button) {
            var label;
            if (!button.buttonEl.classList.contains("active")) {
                return false;
            }
            switch (alt) {
            case "shift":
                if (button.shiftLabel) {
                    label = button.shiftLabel;
                } else {
                    label = button.label;
                }
                break;
            default:
                label = button.label;
            }
            if (label) {
                button.buttonEl.innerHTML = label;
            }
        });
    },
    updateScrolls: function updateScrolls() {
        "use strict";
        var el = this.containerEl;

        var scrolls = false;
        if (el.scrollLeft === 0) {
            this.scrollLeftEl.style.display = "none";
        } else {
            this.scrollLeftEl.style.display = "block";
            scrolls = true;
        }
        // console.log(el.scrollLeft, (el.scrollWidth - el.offsetWidth));
        if (Math.abs(el.scrollLeft - (el.scrollWidth - el.clientWidth)) < 1) {
            this.scrollRightEl.style.display = "none";
        } else {
            this.scrollRightEl.style.display = "block";
            scrolls = true;
        }
        if (scrolls) {
            el.classList.add("scrolls");
        } else {
            el.classList.remove("scrolls");
        }
    },

    scrollBy: function scrollBy(x, y) {
        "use strict";
        var el = this.containerEl;
        if (!x && !y) {
            return;
        }
        var dx = Math.round(x / 10);
        var dy = Math.round(y / 10);
        el.scrollLeft += dx;
        el.scrollTop += dy;
        x -= dx;
        y -= dy;
        var that = this;
        setTimeout(function () {
            that.scrollBy(x, y);
        }, 20);
    },
    scrollLeft: function scrollLeft() {
        "use strict";
        this.scrollBy(-this.outerContainerEl.clientWidth / 2, 0);
        this.updateScrolls();
    },
    scrollRight: function scrollRight() {
        "use strict";
        this.scrollBy(this.outerContainerEl.clientWidth / 2, 0);
        this.updateScrolls();
    },
    initContainer: function initContainer() {
        "use strict";
        this.containerEl.innerHTML = "";
        this.containerEl.className = "toolbar icon-color";

        this.scrollLeftEl = document.createElement("div");
        this.scrollLeftEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.left) || '&laquo;';
        this.scrollLeftEl.className = "scroll left";
        this.scrollRightEl = document.createElement("div");
        this.scrollRightEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.right) || '&raquo;';
        this.scrollRightEl.className = "scroll right";
        addEvent(this.scrollLeftEl, "tap", this.scrollLeft.bind(this));
        addEvent(this.scrollRightEl, "tap", this.scrollRight.bind(this));
        this.outerContainerEl.appendChild(this.scrollLeftEl);
        this.outerContainerEl.appendChild(this.scrollRightEl);
        addEvent(this.containerEl, "scroll", this.updateScrolls.bind(this));
        this.updateScrolls();
    },

    pushButton: function pushButton(buttonId) {
        "use strict";
        this.buttons.forEach(function (button) {
            if (buttonId === button.buttonId) {
                button.buttonEl.classList.add("active");
            } else {
                button.buttonEl.classList.remove("active");
            }
        });
    },
    setDisplay: function setDisplay(buttonId, show) {
        "use strict";
        this.buttons.forEach(function (button) {
            if (buttonId === button.buttonId) {
                if (show) {
                    button.buttonEl.style.display = "inline-block";
                } else {
                    button.buttonEl.style.display = "none";
                }
            }
        });
        this.updateScrolls();
    },

    setDisabled: function setDisabled(buttonId, disabled) {
        "use strict";
        this.buttons.forEach(function (button) {
            if (buttonId === button.buttonId) {
                if (disabled) {
                    button.buttonEl.setAttribute("disabled", true);
                    button.buttonEl.classList.add("disabled");
                    // button.buttonEl.setAttribute("disabled", true);
                } else {
                    button.buttonEl.removeAttribute("disabled");
                    button.buttonEl.classList.remove("disabled");
                    // button.buttonEl.removeAttribute("disabled");
                }
            }
        });
    },

    hideButton: function hideButton(buttonId) {
        "use strict";
        this.buttons.forEach(function (button) {
            if (buttonId === button.buttonId) {
                button.buttonEl.style.display = "none";
            }
        });
        this.updateScrolls();
    },
    hideAll: function hideAll() {
        "use strict";
        this.buttons.forEach(function (button) {
            button.buttonEl.style.display = "none";
        });
        this.updateScrolls();
    },
    showButton: function showButton(buttonId) {
        "use strict";
        this.buttons.forEach(function (button) {
            if (buttonId === button.buttonId) {
                button.buttonEl.style.display = "inline-block";
            }
        });
        this.updateScrolls();
    },
    addButton: function addButton(button) {
        "use strict";
        button = button || {};
        var buttonEl = document.createElement("button");
        button.buttonEl = buttonEl;
        if (typeof button.onTap !== "function") {
            throw new Error("Toolbar::addButton - button.onTap must be a function");
        }

        if (button.keyShortCut) {
            button.title += " (" + this.keyshortcuts.getShortcutStr(button.keyShortCut) + ")";
            this.keyshortcuts.addShortcut(button.keyShortCut, function (e) {
                if (typeof button.onTap === "function") {
                    // shortcut
                    if (typeof window.ga === "function") {
                        var gaEvent = {
                            hitType: 'event',
                            eventCategory: 'Sketchboard',
                            eventAction: 'toolbar-shortcut-' + button.buttonId,
                            eventLabel: 'Toolbar shortcut [' + button.buttonId + ']',
                            eventValue: 1
                        };
                        // console.log('gaEvent', gaEvent);
                        window.ga('send', gaEvent);
                    }
                    button.onTap(e);
                }
            }, button.onKeyUp && button.onKeyUp.bind(button));
        }
        // console.log("button", button);
        buttonEl.className = "button";
        if (button.className) {
            buttonEl.className += " " + button.className;
        }
        if (button.addClass) {
            buttonEl.className += " " + button.addClass;
        }
        if (button.buttonId) {
            buttonEl.className += " " + button.buttonId;
        }
        buttonEl.innerHTML = button.label || "?";
        buttonEl.title = button.title || "";
        buttonEl.style.display = "none";
        // debugger;
        addEvent(buttonEl, "click", function (e) {
            if (typeof window.ga === "function") {
                var gaEvent = {
                    hitType: 'event',
                    eventCategory: 'Sketchboard',
                    eventAction: 'toolbar-click-' + button.buttonId,
                    eventLabel: 'Toolbar click [' + button.buttonId + ']',
                    eventValue: 1
                };
                // console.log('gaEvent', gaEvent);
                window.ga('send', gaEvent);
            }
            button.onTap(e);//.bind(button)
            buttonEl.blur();//e.preventDefault(); //prevent focus
            return false;
        });
        this.buttons.push(button);
        this.containerEl.appendChild(buttonEl);
        this.updateScrolls();
        return button;
    },
    addSeparator: function addSeparator(separator) {
        "use strict";
        separator = separator || {};
        var separatorEl = document.createElement("div");
        separatorEl.className = "separator";
        separator.buttonEl = separatorEl;
        separatorEl.style.display = "none";

        this.buttons.push(separator);
        this.containerEl.appendChild(separatorEl);
        this.updateScrolls();
        return separator;
    },
    addTray: function addTray(tray) {
        "use strict";
        tray = tray || {};
        if (!tray.buttonEl) {
            throw new Error("Toolbar::addTray - tray.buttonEl must be a HTMLElement");
        }
        if (tray.onTap && typeof tray.onTap !== "function") {
            throw new Error("Toolbar::addTray - tray.onTap must be a function or empty");
        }
        if (tray.onTap) {
            addEvent(tray.buttonEl, "click", tray.onTap.bind(tray));
        }
        if (tray.className) {
            tray.buttonEl.className = "tray " + tray.className;
        } else {
            tray.buttonEl.className = "tray";
        }
        tray.buttonEl.style.display = "none";
        this.buttons.push(tray);
        this.containerEl.appendChild(tray.buttonEl);
        this.updateScrolls();
        return tray;
    },
    count: function count() {
        "use strict";
        return this.buttons.length;
    },
    displayCount: function displayCount() {
        "use strict";
        var count = 0;
        this.buttons.forEach(function (button) {
            if (button.buttonEl.style.display !== "none") {
                count += 1;
            }
        });
        return count;
    },
    getButton: function getButton(buttonId) {
        "use strict";
        return this.buttons.find(function (button) {
            return button.buttonId === buttonId;
        });
    }
};
window.Toolbar = Toolbar;
/*global window, Colorpalette, Eventsmanager, addEvent*/
/**
 * Creates toolbar
 * @class
 * @param {object} config       - ``{containerEl: DOMElement}``
 */
function Toolbox(config) {
    "use strict";
    Eventsmanager.call(this, config);

    this.config = config;
    if (!config.containerEl) {
        throw new Error("Toolbox::constructor", "config must contain ``containerEl``");
    }
    this.containerEl = config.containerEl;
    this.initContainer();
}
            // var panel = document.getElementById("toolbox");

            // if (panel.style.display === "none") {
            //     panel.style.display = "block";
            // } else {
            //     panel.style.display = "none";
            // }

Toolbox.prototype = Object.create(Eventsmanager.prototype);

Object.assign(Toolbox.prototype, {
    hidden: false,
    tools: {},
    initContainer: function initContainer() {
        "use strict";
        this.containerEl.innerHTML = "";
        this.containerEl.className = "toolbox panel-background frame-color";
        this.containerEl.style.position = "absolute";
        this.containerEl.style.zIndex = 5;
        // this.containerEl.style.top = "33px";
        // this.containerEl.style.left = "0px";
        // this.containerEl.style.width = "800px";
        // this.containerEl.style.height = "230px";
        // this.containerEl.style.display = "block";

    },
    show: function show() {
        "use strict";
        this.hidden = false;
        this.containerEl.style.display = "block";
        this.dispatch("show");
    },
    hide: function hide() {
        "use strict";
        this.hidden = true;
        this.containerEl.style.display = "none";
        this.dispatch("hide");
    },
    toggle: function toggle() {
        "use strict";
        if (this.hidden) {
            this.show();
        } else {
            this.hide();
        }
    },

    setTools: function setTools(toolsIdks) {
        "use strict";
        toolsIdks = toolsIdks || [];
        // var that = this;
        // console.log("setTools", toolsIdks);
        var that = this,
            tool;
        Object.keys(this.tools).forEach(function (key) {
            tool = that.tools[key];
            if (toolsIdks.indexOf(key) !== -1) {
                tool.el.style.display = "inline-block";
            } else {
                tool.el.style.display = "none";
            }
        });
    },

    addSeparator: function addSeparator() {
        "use strict";
        var separatorEl = document.createElement("div");
        separatorEl.className = "separator";
        separatorEl.innerHTML = "&nbsp;";
        this.containerEl.appendChild(separatorEl);
    },
    addLabel: function addLabel(idk, label, m) {
        "use strict";
        var el = document.createElement("div");
        el.style.position = "relative";
        el.style.width = "20px";
        el.style.height = "220px";
        el.style.display = "inline-block";
        // el.style.backgroundColor = "#eee";

        var textEl = document.createElement("div");
        textEl.style.position = "absolute";
        // el.style.top = "absolute";

        textEl.style.transformOrigin = "0 0";
        textEl.style.webkitTransformOrigin = "0 0";
        textEl.style.MozTransformOrigin = "0 0";
        textEl.style.msTransformOrigin = "0 0";
        textEl.style.OTransformOrigin = "0 0";

        textEl.style.transform = "rotate(-90deg)";
        textEl.style.webkitTransform = "rotate(-90deg)";
        textEl.style.MozTransform = "rotate(-90deg)";
        textEl.style.msTransform = "rotate(-90deg)";
        textEl.style.OTransform = "rotate(-90deg)";


        textEl.style.display = "inline-block";
        textEl.style.left = "0px";
        textEl.style.top = "220px";
        textEl.style.width = "220px";
        textEl.style.fontSize = "13px";
        textEl.style.color = "black";
        textEl.textContent = label;

        if (m) {
            el.style.marginLeft = "10px";
            el.style.width = "30px";
            el.style.borderLeft = "1px solid #bbb";
            textEl.style.left = "10px";
        }


        el.appendChild(textEl);

        this.tools[idk] = {
            idk: idk,
            el: el
        };

        this.containerEl.appendChild(el);
    },
    addTool: function addElement(config) {
        "use strict";
        // console.log(config);
        config = config || {};
        var el = config.el;

        this.tools[config.idk] = config;

        this.containerEl.appendChild(el);
    }

    // addPalette: function addPalette(palette) {
    //     "use strict";
    //     if (!palette instanceof Colorpalette) {
    //         console.error("Toolbox::addPalette - palette is not instanceof Colorpalette");
    //         return;
    //     }
    //     this.addElement({
    //         idk:
    //         el: palette.containerEl
    //     });
    // }
});
window.Toolbox = Toolbox;



/*global window, Tool, addEvent, Sketchpad, Keyshortcuts*/
/*global isMacFlag*/

/**
 * Creates pages
 *
 * @class
 * @param {object} config       - ``{containerEl: DOMElement}``
 */
function Pages(config) {
    "use strict";
    this.config = config;
    if (!config.containerEl) {
        throw new Error("Pages::constructor", "config must contain ``containerEl``");
    }
    this.containerEl = config.containerEl;
    if (!config.outerContainerEl) {
        throw new Error("Pages::constructor", "config must contain ``outerContainerEl``");
    }
    if (config.sketchpad instanceof Sketchpad) {
        this.sketchpad = config.sketchpad;
    } else {
        throw new Error("Pages::constructor", "config must contain ``sketchpad``");
    }
    if (config.keyshortcuts instanceof Keyshortcuts) {
        this.keyshortcuts = config.keyshortcuts;
    } else {
        throw new Error("Pages::constructor", "config must contain ``keyshortcuts``");
    }

    this.outerContainerEl = config.outerContainerEl;
    // this.width = 150;

    this.icons = config.icons;

    this.initContainer();

    var that = this;
    this.sketchpad.on("sketch-added", function (sketch) {
        // console.log("sketch-added receive", sketch);
        that.addPage({
            label: sketch.config.titleNo,
            sketch: sketch
        });
    });
    this.sketchpad.on("sketch-removed", function (sketch) {
        // console.log("sketch-removed receive", sketch);
        var i;
        for (i = that.pages.length - 1; i >= 0; i -= 1) {
            if (that.pages[i].sketch === sketch) {
                that.removePage(i);
            }
        }
    });
    this.sketchpad.on("sketch-changed", function (sketch) {
        // console.log("sketch-added receive", sketch);
        var i, pageNo;
        for (i = 0; i < that.pages.length; i += 1) {
            if (that.pages[i].sketch === sketch) {
                pageNo = i;
            }
        }
        //mark in ui
        that.setActivePage(pageNo, sketch.doNotScroll);
    });

    this.sketchpad.on("reset", function () {
        that.reset();
    });


}


Pages.prototype = {
    pages: [],
    activePage: undefined,
    isActive: function isActive() {
        "use strict";
        return this.sketchpad && this.sketchpad.config && this.sketchpad.config.features && this.sketchpad.config.features.displayPages;
    },
    reorderPages: function reorderPages() {
        "use strict";
        var i, page;
        for (i = 0; i < this.pages.length; i += 1) {
            page = this.pages[i];
            page.buttonEl.textContent = String(i + 1);
        }

    },
    setActivePage: function setActivePage(pageNo, doNotScroll) {
        "use strict";
        if (!this.pages[pageNo]) {
            throw new Error("Page", pageNo, "not exists!");
        }
        var that = this;
        this.pages.forEach(function (page, i) {
            if (i === pageNo) {
                page.buttonEl.classList.add("active");
                that.activePage = page;
                // that.sketchpad.room.setActiveSketch(that.sketchpad, page.sketch);
            } else {
                page.buttonEl.classList.remove("active");
            }
        });
        if (!doNotScroll) {
            this.scrollToActivePage();
        }
        return this.page;
    },
    updateScrolls: function updateScrolls() {
        "use strict";
        var el = this.containerEl;

        if (el.scrollLeft === 0) {
            this.scrollLeftEl.style.display = "none";
        } else {
            this.scrollLeftEl.style.display = "block";
        }
        if (Math.abs(el.scrollLeft - (el.scrollWidth - el.clientWidth)) < 1) {
            this.scrollRightEl.style.display = "none";
        } else {
            this.scrollRightEl.style.display = "block";
        }

    },
    scrollMovePos: {
        x: 0,
        y: 0
    },
    scrollToActivePage: function scrollToActivePage() {
        // alert("scrollToActivePage");
        "use strict";
        if (!this.activePage || !this.activePage.buttonEl) {
            return;
        }
        var activePagePosLeft = this.activePage.buttonEl.offsetLeft - Math.round(this.outerContainerEl.clientWidth / 2) + 15;
        if (activePagePosLeft < 0) {
            activePagePosLeft = 0;
        }
        this.scrollMovePos.x = activePagePosLeft - this.containerEl.scrollLeft;
        // console.log("activePagePosLeft", activePagePosLeft, "scrollMovePos", this.scrollMovePos);
        this.scrollBy(0, 0);
        this.updateScrolls();
    },

    scrollBy: function scrollBy(x, y, ignore) {
        "use strict";
        var el = this.containerEl;

        this.scrollMovePos.x += x;
        this.scrollMovePos.y += y;

        var dx = Math.round(this.scrollMovePos.x * 1 / 2) || this.scrollMovePos.x;
        var dy = Math.round(this.scrollMovePos.y * 1 / 2) || this.scrollMovePos.y;
        this.scrollMovePos.x -= dx;
        this.scrollMovePos.y -= dy;
        el.scrollLeft += dx;
        el.scrollTop += dy;
        var that = this;
        if (this.scrollMovePos.x || this.scrollMovePos.y) {
            setTimeout(function () {
                that.scrollBy(0, 0);
            }, 100);
        } else {
            this.updateScrolls();//update scrolls at end of anim
        }
    },
    scrollLeft: function scrollLeft() {
        "use strict";
        this.scrollBy(-this.outerContainerEl.clientWidth / 2, 0);
        this.updateScrolls();
    },
    scrollRight: function scrollRight() {
        "use strict";
        this.scrollBy(this.outerContainerEl.clientWidth / 2, 0);
        this.updateScrolls();
    },
    scrollRightMax: function scrollRightMax() {
        "use strict";
        this.scrollBy(this.containerEl.clientWidth);
    },
    selectLeft: function selectLeft() {
        "use strict";
        if (!this.isActive()) {
            return false;
        }
        var position = this.pages.indexOf(this.activePage) - 1;
        if (this.pages[position]) {
            this.sketchpad.room.setActiveSketch(this.sketchpad, this.pages[position].sketch);
            //this.scrollBy(-(this.pages[position].buttonEl.offsetWidth + 0), 0);
        }
    },
    selectRight: function selectRight() {
        "use strict";
        if (!this.isActive()) {
            return false;
        }
        var position = this.pages.indexOf(this.activePage) + 1;
        if (this.pages[position]) {
            this.sketchpad.room.setActiveSketch(this.sketchpad, this.pages[position].sketch);
            // this.scrollBy((this.pages[position].buttonEl.offsetWidth + 0), 0);
        }
    },

    initContainer: function initContainer() {
        "use strict";
        this.containerEl.innerHTML = "";
        this.containerEl.className = "pages";

        this.scrollLeftEl = document.createElement("div");
        this.scrollLeftEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.left) || "<";
        this.scrollLeftEl.className = "scroll left";
        this.scrollRightEl = document.createElement("div");
        this.scrollRightEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.right) || ">";
        this.scrollRightEl.className = "scroll right";
        addEvent(this.scrollLeftEl, "tap", this.scrollLeft.bind(this));
        addEvent(this.scrollRightEl, "tap", this.scrollRight.bind(this));
        this.outerContainerEl.appendChild(this.scrollLeftEl);
        this.outerContainerEl.appendChild(this.scrollRightEl);
        addEvent(this.containerEl, "scroll", this.updateScrolls.bind(this));
        // this.outerContainerEl.style.width = this.width + "px";
        var addPageButtonEl = document.createElement("button");
        addPageButtonEl.className = "button page";
        addPageButtonEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.addPage) || "+";
        var that = this;

        function addPageClick(e) {
            if (!that.isActive()) {
                return false;
            }
            if (typeof window.ga === "function") {
                var gaEvent = {
                    hitType: 'event',
                    eventCategory: 'Sketchboard',
                    eventAction: 'pages-add',
                    eventLabel: 'addPageClick',
                    eventValue: 1
                };
                // console.log('gaEvent', gaEvent);
                window.ga('send', gaEvent);
            }

            //prevent default and stop propagation in keys events
            if (e && e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
            //var sketch = that.sketchpad.room.addSketch(that.sketchpad, that.sketchpad.getSketchConfig());
            // console.log("sendingPageConfig", clearConfig);
            var clearConfig = {
                backgroundType: "color",
                backgroundColor: "rgba(255,255,255,1)",
                startPosition: "center",
                viewportX: 0,
                viewportY: 0,
                viewportZRotation: 0,
                viewportScale: 1,
                foregroundImage: "",
                backgroundImage: "",
                backgroundUrl: "",
                backgroundMapsLocation: "",
                backgroundMapsType: "roadmap",
                backgroundMapsZoom: 15,
                width: 1024,
                height: 1536
            };
            that.sketchpad.addSketchPage(clearConfig, function (sketch) {
                that.sketchpad.room.setActiveSketch(that.sketchpad, sketch);
                that.sketchpad.setViewportPosition(0, 0);
                that.sketchpad.setScale(1);
                that.sketchpad.setRotation(0);
            });

            // that.sketchpad.sendMessageToServer({
            //     cmd: "page",
            //     config: clearConfig
            // }, false, function onError() {//offline mode
            //     var sketch = that.sketchpad.room.addSketch(that.sketchpad, clearConfig, "no_autoselect");
            //     that.sketchpad.room.setActiveSketch(that.sketchpad, sketch);
            // });
        }
        addEvent(addPageButtonEl, "click", addPageClick);
        this.keyshortcuts.addShortcut({metaKey: true, keyCode: 78, repeatable: true}, addPageClick);
        this.keyshortcuts.addShortcut({ctrlKey: true, keyCode: 78, repeatable: true}, addPageClick);
        this.keyshortcuts.addShortcut({keyCode: 78, repeatable: true}, addPageClick);

        addPageButtonEl.title += "New page (" + this.keyshortcuts.getShortcutStr((isMacFlag)
            ? {keyCode: 78, repeatable: true}/*metaKey: true, */
            : {keyCode: 78, repeatable: true}) + ")";/*ctrlKey: true, */
        addPageButtonEl.className = "button page new-page";
        //< > navigation
        this.keyshortcuts.addShortcut({keyCode: 188, repeatable: true}, this.selectLeft.bind(this));//page left
        this.keyshortcuts.addShortcut({keyCode: 190, repeatable: true}, this.selectRight.bind(this));//page left

        this.addPageButtonEl = addPageButtonEl;
        this.containerEl.appendChild(addPageButtonEl);
        this.updateScrolls();
    },

    addPage: function addPage(page) {
        "use strict";
        page = page || {};
        var buttonEl = document.createElement("button");
        page.buttonEl = buttonEl;
        if (page.className) {
            buttonEl.className = "button page page-number " + page.className;
        } else {
            buttonEl.className = "button page page-number";
        }
        buttonEl.innerHTML = page.label || "?";
        buttonEl.title = page.title || "";
        // buttonEl.style.display = "none";

        // var pageNo = this.pages.length;//get page no before push
        var that = this;
        addEvent(buttonEl, "click", function () {
            page.sketch.doNotScroll = true;
            that.sketchpad.room.setActiveSketch(that.sketchpad, page.sketch);
            delete page.sketch.doNotScroll;
        });
        this.pages.push(page);
        this.scrollRightMax();
        this.containerEl.insertBefore(buttonEl, this.addPageButtonEl);
        this.updateScrolls();
        this.reorderPages();
        return page;
    },
    removePage: function removePage(pageNo) {
        "use strict";
        var page = this.pages.splice(pageNo, 1)[0];
        this.containerEl.removeChild(page.buttonEl);
        this.reorderPages();
        this.updateScrolls();
    },
    reset: function reset() {
        "use strict";
        var i,
            page;
        for (i = this.pages.length - 1; i >= 0; i -= 1) {
            page = this.pages.splice(i, 1)[0];
            this.containerEl.removeChild(page.buttonEl);
        }
        this.reorderPages();
        this.updateScrolls();
    },
    count: function count() {
        "use strict";
        return this.pages.length;
    },
    getPage: function getButton(pageId) {
        "use strict";
        return this.pages.find(function (page) {
            return page.pageId === pageId;
        });
    }
};
window.Pages = Pages;
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();
/*global window, Clipboard, Colorpalette, addEvent, getEmailLink, saveFile, QRCode, pages*/
/*global ICONFIG*/
/**
 * Creates toolbar
 * @class
 * @param {object} config       - ``{containerEl: DOMElement}``
 */
function Popup(config) {
    "use strict";
    this.config = config;
    this.icons = config.icons;
    this.width = config.width || 480;
    this.height = config.height;
    if (!config.parentEl) {
        throw new Error("Popup::constructor", "config must contain ``parentEl``");
    }
    this.parentEl = config.parentEl;
    this.sketchpad = config.sketchpad;
    this.containerEl = document.createElement("div");


    this.hidden = true;
    this.containerEl.style.display = "none";
    this.containerEl.style.zIndex = 10;
    this.initContainer();
    this.parentEl.appendChild(this.containerEl);
}


Popup.prototype = {
    tools: {},
    doExit: function doExit() {
        "use strict";
        this.hide();
        window.location.href = ICONFIG.exitUrl || "/";//"sketchbook.html";
    },
    initExit: function initExit(config) {
        "use strict";
        config = Object.assign({
            title: "Save before quit?"
        }, config);

        var result = document.createElement("div");

        // this.containerEl.style.height = "374px";

        var els = {
            title: document.createElement("div"),
            titleClose: document.createElement("div"),
            head: document.createElement("div"),
            body: document.createElement("div"),
            buttons: document.createElement("div"),
            buttonExit: document.createElement("div")
        };

        var that = this;
        addEvent(els.titleClose, "tap", function (e) {
            if (e && typeof e.stopPropagation === "function") {//if not touch part
                e.stopPropagation();
            }
            that.hide();
        });


        els.titleClose.className = "close";
        els.titleClose.innerHTML = (this.icons && this.icons.ui && this.icons.ui.close) || "&times;";
        els.title.className = "title background-color";
        els.title.textContent = config.title;
        els.title.appendChild(els.titleClose);
        //
        result.appendChild(els.title);

        // els.body.className = "body";
        // els.body.innerHTML = this.config.bodyHtml;
        // //
        // result.appendChild(els.body);

        els.buttonExit.className = "button";
        els.buttonExit.innerHTML = "<i class=\"fal fa-sign-out\" aria-hidden=\"true\"></i> Quit";


        addEvent(els.buttonExit, "tap", function () {
            //lol
            window.onbeforeunload = null;
            that.doExit();
        });

        this.containerEl.classList.add("exit");
        //
        this.containerEl.appendChild(result);
        this.initShareForm();

        // this.shareElements.footLabel.classList.add("");
        this.shareElements.footLabel.textContent = "save as sketchpad.json";

        els.buttons.className = "buttons";
        // els.buttons.appendChild(els.buttonExit);


        this.containerEl.appendChild(els.buttons);
        this.mainElements = els;
        return this;
    },
    limitShareMode: function limitShareMode(mode) {
        "use strict";
        switch (mode) {
        case "readonly":
            this.shareElements.modeSelect.value = "read";
            this.shareElements.modeSelect.disabled = true;
            break;
        case "readwrite":
            this.shareElements.modeSelect.disabled = false;
            break;
        case "offline":
            // this.shareElements.bodyEmail.style.display = "none";
            // this.shareElements.foot.style.display = "none";
            // this.shareElements.switcher.style.display = "none";
            this.containerEl.classList.add("mode-offline");
            this.containerEl.classList.remove("mode-online");
            break;
        case "online":
            // this.shareElements.bodyEmail.style.display = "none";
            // this.shareElements.foot.style.display = "none";
            // this.shareElements.switcher.style.display = "none";
            this.containerEl.classList.add("mode-online");
            this.containerEl.classList.remove("mode-offline");
            break;
        }
    },

    shareSetMode: function shareSetMode(mode) {
        "use strict";

        if (window.sketchpad.canDraw()) {
            this.limitShareMode("readwrite");
        } else {
            this.limitShareMode("readonly");
            mode = "read"; //force only read mode
        }
        if (window.offline) {
            this.limitShareMode("offline");
        } else {
            this.limitShareMode("online");
        }
        //!!!!
        // var url = "https://sketchpad.pro/" + window.sketchpad.token;
        var url = "https://" + ICONFIG.domain + "/" + window.sketchpad.token;
        switch (mode) {
        case "write":
            url += ":" + window.password;
            this.shareElements.modeIcon.innerHTML = (this.icons && this.icons.ui && this.icons.ui.open) || "🔓";
            break;
        case "read":
            this.shareElements.modeIcon.innerHTML = (this.icons && this.icons.ui && this.icons.ui.closed) || "🔒";
            break;
        }
        if (window.location.hash) {
            url += window.location.hash;
        }
        this.shareElements.footInput.value = url;
        this.qrcode.makeCode(url);
        this.shareMode = mode;
        this.updateMailtoLink();

    },

    updateMailtoLink: function updateMailtoLink() {
        "use strict";
        var subject = ICONFIG.mailtoSubject;
        if (this.shareMode === "write") {
            subject += " (edit whiteboard)";
        } else {
            subject += " (view whiteboard)";
        }
        this.shareElements.bodyEmail.href = getEmailLink("", subject, this.shareElements.footInput.value + ICONFIG.mailtoFooter);
    },
    initShareForm: function initShareForm() {
        "use strict";
        var result = document.createElement("div");

        var els = {
            head: document.createElement("div"),
            switcher: document.createElement("div"),
            offlineMessage: document.createElement("div"),
            modeLabel: document.createElement("label"),
            modeSelect: document.createElement("select"),
            modeSelectOptionRead: document.createElement("option"),
            modeSelectOptionWrite: document.createElement("option"),
            modeIcon: document.createElement("span"),
            body: document.createElement("div"),
            copyBtn: document.createElement("button"),
            qrCode: document.createElement("div"),
            bodyFacebook: document.createElement("div"),
            bodyTwitter: document.createElement("div"),
            bodyGoogle: document.createElement("div"),
            bodyPinterest: document.createElement("div"),
            bodyInstagram: document.createElement("div"),
            bodySnapchat: document.createElement("div"),
            bodyEmail: document.createElement("a"),
            bodyDownload: document.createElement("div"),
            bodyPng: document.createElement("div"),
            foot: document.createElement("div"),
            footInput: document.createElement("input"),
            footInputIcon: document.createElement("span"),
            footLabel: document.createElement("div"),
            emailSend: document.createElement("div")
        };
        this.shareElements = els;

        var that = this;


        els.footLabel.className = "footLabel";
        els.footLabel.innerHTML = "&nbsp;";

        els.head.className = "head";
        els.head.textContent = "ad here";
        //
        // result.appendChild(els.head);

        els.modeLabel.innerHTML = "Anyone with the link can ";
        els.modeSelect.name = "mode";
        els.modeSelect.className = "select-mode";
        function updateMode() {
            that.shareSetMode(els.modeSelect.value);
        }
        els.modeSelect.addEventListener("change", updateMode);
        els.modeSelectOptionRead.value = "read";
        els.modeSelectOptionRead.textContent = "view";
        els.modeSelectOptionWrite.value = "write";
        els.modeSelectOptionWrite.textContent = "edit";
        els.modeSelect.appendChild(els.modeSelectOptionRead);
        els.modeSelect.appendChild(els.modeSelectOptionWrite);


        els.offlineMessage.className = "mode-online-hide top-message";
        if (window.isMobile()) {
            els.offlineMessage.innerHTML = "You are working offline<br/>Save sketch on your device before quit";
        } else {
            els.offlineMessage.innerHTML = "You are working offline<br/>Save sketch on your computer before quit";
        }


        els.switcher.className = "mode-offline-hide switcher";
        // els.switcher.style.marginTop = "20px";
        // els.switcher.style.textAlign = "center";
        els.modeIcon.innerHTML = (this.icons && this.icons.ui && this.icons.ui.closed) || "🔒";
        els.modeIcon.className = "mode-icon";
        els.switcher.appendChild(els.modeLabel);
        els.switcher.appendChild(els.modeSelect);
        els.switcher.appendChild(els.modeIcon);
        //
        result.appendChild(els.offlineMessage);
        result.appendChild(els.switcher);


        els.bodyEmail.className = "mode-offline-hide share-button email";
        els.bodyEmail.innerHTML = (this.icons && this.icons.ui && this.icons.ui.email) || "@";//'<span class="fal fa-at" aria-hidden="true"></span>';

        this.updateMailtoLink();

        // addEvent(els.bodyEmail, "tap", function () {
        //     var subject = "";
        //     var body = that.shareElements.footInput.value + ICONFIG.mailtoFooter;
        //     if (els.modeSelect.value === "write") {
        //         subject = "Link to Sketchpad (edit mode)";
        //     } else {
        //         subject = "Link to Sketchpad";
        //     }

        //     sendEmail("", subject, body);
        // });

        addEvent(els.bodyDownload, "tap", function () {
            var data = window.sketchpad.saveSketchpad(els.modeSelect.value === "write");
            if (data && data[0] && typeof data[0].config === "object") {
                if (pages.activePage && pages.activePage.label) {
                    data[0].config.currentPageNo = String(pages.activePage.label);
                }
                if (els.modeSelect.value === "write") {
                    data[0].config.password = String(window.password);
                }
            }
            // console.log("bodyDownload", els.modeSelect.value, data);
            var suffix = "";
            if (els.modeSelect.value === "write") {
                suffix = "_editable";
            }
            // if (window.offline) {
            //     suffix = "_offline";
            // }
            // var data = window.sketchpad.saveSketchpad("save_write_password_if_you_can");
            saveFile(JSON.stringify(data), window.sketchpad.room.room_token + suffix + ".sketchpad.json", "text/csv");
        });

        addEvent(els.bodyPng, "tap", function () {
            window.sketchpad.screenshot(function (blob) {
                saveFile(blob, window.sketchpad.room.room_token + ".png", "image/png");
            }, "image/png", 1);

            // window.location.href = window.sketchpad.toDataURL("image/jpeg");
        });


        // addEvent(els.bodyEmail, "hover-in", function () {
        //     els.footLabel.textContent = "send link by e-mail";
        //     addEvent(els.bodyEmail, "hover-out", function () {
        //         els.footLabel.innerHTML = "&nbsp;";
        //     });
        // });

        addEvent(els.bodyDownload, "hover-in", function () {
            els.footLabel.textContent = "save as sketchpad.json";
            // addEvent(els.bodyDownload, "hover-out", function () {
            //     els.footLabel.innerHTML = "&nbsp;";
            // });
        });

        addEvent(els.bodyPng, "hover-in", function () {
            els.footLabel.textContent = "export as png";
            addEvent(els.bodyPng, "hover-out", function () {
                els.footLabel.innerHTML = "&nbsp;";
            });
        });


        els.bodyFacebook.className = "share-button facebook";
        els.bodyFacebook.innerHTML = '<span class="fal fa-facebook" aria-hidden="true"></span>';

        els.bodyTwitter.className = "share-button twitter";
        els.bodyTwitter.innerHTML = '<span class="fal fa-twitter" aria-hidden="true"></span>';

        els.bodyGoogle.className = "share-button googleplus";
        els.bodyGoogle.innerHTML = '<span class="fal fa-google-plus" aria-hidden="true"></span>';

        els.bodyPinterest.className = "share-button pinterest";
        els.bodyPinterest.innerHTML = '<span class="fal fa-pinterest-p" aria-hidden="true"></span>';

        els.bodyInstagram.className = "share-button instagram";
        els.bodyInstagram.innerHTML = '<span class="fal fa-instagram" aria-hidden="true"></span>';

        els.bodySnapchat.className = "share-button snapchat";
        els.bodySnapchat.innerHTML = '<span class="fal fa-snapchat-ghost" aria-hidden="true"></span>';

        els.bodyDownload.className = "share-button save";
        els.bodyDownload.innerHTML = '<span class="fal fa-floppy-o" aria-hidden="true"></span>';

        els.bodyPng.className = "mode-offline-hide share-button png";
        els.bodyPng.innerHTML = '<span class="fal fa-image" aria-hidden="true"></span>';

// els.bodyPng.className = "mode-offline-hide share-button png";

        els.body.appendChild(els.bodyDownload);
        els.emailSend.appendChild(els.bodyEmail);
        // els.body.appendChild(els.bodyEmail);
        els.body.appendChild(els.bodyPng);

        els.copyBtn.innerHTML = "Copy";
        // els.copyBtn.dataset.clipboardText = document.location.href;
        // els.body.appendChild(els.bodyGoogle);
        // els.body.appendChild(els.bodySnapchat);
        // els.body.appendChild(els.bodyInstagram);
        // els.body.appendChild(els.bodyFacebook);
        // els.body.appendChild(els.bodyPinterest);
        // els.body.appendChild(els.bodyTwitter);

        els.body.className = "body";
        //

        els.footInput.className = "footInput";
        els.footInput.value = window.location.href;
        els.footInput.readOnly = true;

        var id = "id_" + Date.now();
        els.footInput.id = id;

        // els.footInput.dataset["clipboard-text"] = document.location.href;
        var clipboard = new Clipboard(els.copyBtn, {
            text: function () {
                return document.location.href;
            }
        });
        // console.log("new Clipboard('#' + id);", id, clipboard);
        this.clipboard = clipboard;
        window.clipboard = clipboard;

        clipboard.on('success', function (e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

        function getSelectedText() {
            var text = "";
            if (window.getSelection) {
                text = window.getSelection().toString();
            } else if (document.selection !== undefined && document.selection.type === "Text") {
                text = document.selection.createRange().text;
            }
            return text;
        }
        function eventSelectText(ignore) {
            // if (typeof e.stopPropagation === "function") {
            //     e.stopPropagation();
            // }
            // if (typeof e.stopPropagation === "function") {
            //     e.preventDefault();
            // }

            // e.stopPropagation();
            // e.preventDefault();


            if (document.activeElement !== that.shareElements.footInput || !getSelectedText()) {
                // els.footInput.value = window.location.href;
                that.shareElements.footInput.focus();
                that.shareElements.footInput.setSelectionRange(0, that.shareElements.footInput.value.length);
            }


        }
        addEvent(els.footInput, "mousedown", eventSelectText);
        addEvent(els.footInput, "touchstart", eventSelectText);
        addEvent(els.footInput, "mouseup", function (e) {
            if (e.button === 0) {
                e.preventDefault();
            }
        });
        clipboard.on("success", function () {
            // els.footInput.value = "Copied to clipboard!";
            els.copyBtn.innerHTML = "Copied successfully";
            els.copyBtn.disabled = true;
            setTimeout(function () {
                els.copyBtn.disabled = false;
                els.copyBtn.innerHTML = "Copy";
            }, 2000);
        });
        clipboard.on("error", function () {
            // els.footInput.value = "Copied to clipboard!";
            els.copyBtn.innerHTML = "Copy error";
        });

        // els.footInput.setSelectionRange(0, els.footInput.value.length); <- IE problems

        els.foot.style.textAlign = "right";
        els.footInputIcon.innerHTML = (this.icons && this.icons.ui && this.icons.ui.link) || "🔗";
        els.footInputIcon.className = "footInputIcon";

        els.foot.appendChild(els.footInput);
        els.foot.appendChild(els.footInputIcon);
        els.foot.appendChild(els.copyBtn);


        els.foot.className = "mode-offline-hide foot";
        //
        els.qrCode.style.display = "inline-block";
        els.qrCode.className = "mode-offline-hide second";
        els.qrCode.style.marginLeft = "60px";
        els.qrCode.style.width = "100px";
        els.qrCode.style.height = "100px";
        // els.qrCode.style.padding = "36px";
        els.qrCode.style.backgroundColor = "white";
        // els.qrCode.style.margin = "auto";
        // els.qrCode.style.marginTop = "20px";

        this.qrcode = new QRCode(els.qrCode, {
            width: 100,
            height: 100
        });
        // this.qrcode.makeCode(els.footInput.value);


        var emailSendDesc = document.createElement("div");
        emailSendDesc.textContent = "Send e-mail to invite...";
        els.emailSend.appendChild(emailSendDesc);
        els.emailSend.style.display = "inline-block";
        els.emailSend.className = "mode-offline-hide second";
        els.emailSend.style.width = "128px";
        els.emailSend.style.height = "100px";
        // els.emailSend.style.padding = "36px";
        els.emailSend.style.backgroundColor = "white";
        els.emailSend.style.position = "absolute";
        els.emailSend.style.right = "0px";
        // els.emailSend.style.top = "0px";

        result.appendChild(els.foot);
        result.appendChild(els.qrCode);
        var orEl = document.createElement("div");
        orEl.textContent = "or";
        orEl.style.display = "inline-block";
        orEl.className = "mode-offline-hide";
        orEl.style.position = "absolute";
        orEl.style.width = "10px";
        orEl.style.lineHeight = "100px";
        orEl.style.marginTop = "36px";
        els.emailSend.style.backgroundColor = "white";


        // result.appendChild(orEl);
        result.appendChild(els.emailSend);

        els.body.classList.add("mode-online-hide");
        result.appendChild(els.body);

        // result.appendChild(els.footLabel);

        this.containerEl.appendChild(result);
        this.shareSetMode("write");
        els.modeSelect.value = "write";
        return result;

    },
    initShare: function initShare() {
        "use strict";
        // console.log("!popup:initShare");
        var result = document.createElement("div");

        var els = {
            title: document.createElement("div"),
            titleClose: document.createElement("div"),
            head: document.createElement("div"),
            switcher: document.createElement("div"),
            modeLabel: document.createElement("label"),
            modeSelect: document.createElement("select"),
            modeSelectOptionRead: document.createElement("option"),
            modeSelectOptionWrite: document.createElement("option"),
            modeIcon: document.createElement("span"),
            body: document.createElement("div"),
            bodyFacebook: document.createElement("div"),
            bodyTwitter: document.createElement("div"),
            bodyGoogle: document.createElement("div"),
            bodyPinterest: document.createElement("div"),
            bodyInstagram: document.createElement("div"),
            bodySnapchat: document.createElement("div"),
            bodyEmail: document.createElement("div"),
            bodyDownload: document.createElement("div"),
            bodyPng: document.createElement("div"),
            foot: document.createElement("div"),
            footInput: document.createElement("input"),
            footInputIcon: document.createElement("span")
        };
        this.mainElements = els;
        this.shareElements = els;

        els.titleClose.innerHTML = (this.icons && this.icons.ui && this.icons.ui.close) || "&times;";
        var that = this;

        addEvent(els.titleClose, "tap", function (e) {
            if (e && typeof e.stopPropagation === "function") {//if not touch part
                e.stopPropagation();
            }
            that.hide();
        });
        els.titleClose.className = "close";
        result.appendChild(els.titleClose);

        els.title.className = "title background-color";
        els.title.textContent = "Share";
        result.appendChild(els.title);



        this.containerEl.appendChild(result);

        this.initShareForm();
        return this;
    },

    initContainer: function initContainer() {
        "use strict";
        // console.log("!popup:initContainer");
        this.containerEl.innerHTML = "";
        this.containerEl.className = "popup frame-color";
        this.overlayEl = document.createElement("div");
        this.overlayEl.className = "overlay";
        this.overlayEl.style.display = "none";
        this.parentEl.appendChild(this.overlayEl);
        var that = this;
        addEvent(this.overlayEl, "tap", function (e) {
            if (e && typeof e.stopPropagation === "function") {//if not touch part
                e.stopPropagation();
            }
            that.hide();
        });
    },

    show: function show(new_title) {
        "use strict";
        this.sketchpad.disableInputEvents();
        this.hidden = false;
        this.overlayEl.style.display = "block";
        this.containerEl.style.display = "block";
        if (new_title) {
            // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", this.mainElements.title.innerHTML);
            this.mainElements.title.innerHTML = new_title;
        }
        this.shareSetMode(this.shareMode);//refresh share url
        // console.log("this", this);
        // alert("show");
        // this.shareElements.footInput.focus();

    },
    hide: function hide() {
        "use strict";
        this.hidden = true;
        this.containerEl.style.display = "none";
        this.overlayEl.style.display = "none";
        this.sketchpad.enableInputEvents();
    },
    toggle: function toggle() {
        "use strict";
        if (this.hidden) {
            this.show();
        } else {
            this.hide();
        }
    }

};
window.Popup = Popup;



/*global addEvent, window, confirm*/
function SketchbookHistory() {
    "use strict";

    this.history = [];
    this.loadSate();
    return this;
}
SketchbookHistory.prototype = {
    loadSate: function () {
        "use strict";
        var sketchHistory = [];
        try {
            sketchHistory = JSON.parse(localStorage.getItem("sketch-history"));
        } catch (e) {
            console.error("Error loadState", e);
            sketchHistory = [];
        }
        if (!sketchHistory) {
            sketchHistory = [];
        }

        this.history = sketchHistory;
    },
    getObj: function (key) {
        'use strict';
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error("Error getValue", key, e);
            return false;
        }
    },
    assignObj: function (key, value) {
        'use strict';
        try {
            var item = this.getObj(key) || {};
            Object.assign(item, value);
            localStorage.setItem(key, JSON.stringify(item));
        } catch (e) {
            console.error("Error assignObj", e);
        }
    },
    saveSate: function () {
        "use strict";
        try {
            localStorage.setItem("sketch-history", JSON.stringify(this.history));
        } catch (e) {
            if (this.history && this.history.length > 0) {
                this.history.pop();
                this.saveSate();
            }
            console.error("Error saveSate", e);
        }

    },
    count: function () {
        "use strict";
        return this.history.length;
    },
    setRecord: function setRecord(record) {
        "use strict";
        //remove old version of record
        this.history = this.history.filter(function (item) {
            return item.token !== record.token;
        });
        //add new record
        this.history.unshift(record);
        this.saveSate();
    },
    getCard: function (record) {
        "use strict";
        var that = this;
        if (!record.url) {
            record.url = record.token;
            if (record.password) {
                record.url += ":" + record.password;
            }
        }
        var cardEl = document.createElement("div");
        var bgType = record.backgroundType || "default";
        cardEl.className = "card mb-3 " + bgType;
        // cardEl.style.width = "20rem";

        var cardImg = document.createElement("div");
        var cardLinkEl = document.createElement("a");
        var userEl = document.createElement("div");
        var lastUser = this.getObj(record.token);
        var userColorStr = "black";
        var userNameStr = "";
        if (lastUser) {
            if (lastUser.user_color && lastUser.user_color.r !== undefined && lastUser.user_color.g !== undefined && lastUser.user_color.b !== undefined) {
                userColorStr = "rgb(" + lastUser.user_color.r + "," + lastUser.user_color.g + "," + lastUser.user_color.b + ")";
            }
            if (lastUser.user_color_str) {
                userColorStr = lastUser.user_color_str;
            }
            userNameStr = lastUser.user_name;
        }
        Object.assign(userEl.style, {
            position: "absolute",
            right: 0,
            top: 0,
            backgroundColor: userColorStr,
            paddingRight: "10px",
            paddingLeft: "10px",
            borderRadius: "0 0 0 3px",
            fontFamily: "monospace",
            color: "white",
            fontSize: "10px"

        });
        cardEl.style.border = "2px solid " + userColorStr;
        userEl.textContent = userNameStr;

        cardImg.style.cursor = "pointer";
        cardImg.style.width = "100%";
        cardImg.style.height = "100%";
        cardImg.style.objectFit = "cover";
        cardImg.style.backgroundSize = "cover";
        cardImg.style.backgroundRepeat = "no-repeat";
        // cardImg.src = record.thumbnail;
        cardImg.style.backgroundImage = "url(" + record.thumbnail + ")";
        cardLinkEl.href = record.url;
        cardLinkEl.className = "link-block";
        // addEvent(cardImg, "click", function () {
        //     if (typeof window.ga === "function") {
        //         var gaEvent = {
        //             hitType: 'event',
        //             eventCategory: 'Sketchbook',
        //             eventAction: 'click-image-open',
        //             eventLabel: 'Click open ' + record.token,
        //             eventValue: 1
        //         };
        //         // console.log('gaEvent', gaEvent);
        //         window.ga('send', gaEvent);
        //     }
        //     setTimeout(function () { //wait for ga??? or dont use reload?
        //         window.location.href = record.url;
        //     }, 10);
        // });
        // var downloadBtnEl = document.createElement("span");
//         downloadBtnEl.className = "download btn btn-success pull-left";
//         downloadBtnEl.style.cursor = "pointer";
//         downloadBtnEl.innerHTML = 'open';//<i class="fal fa-download" aria-hidden="true"></i><span class="hidden"> download image</span>';
//         addEvent(downloadBtnEl, "click", function () {
//             if (typeof window.ga === "function") {
//                 var gaEvent = {
//                     hitType: 'event',
//                     eventCategory: 'Sketchbook',
//                     eventAction: 'click-button-open',
//                     eventLabel: 'Click open ' + record.token,
//                     eventValue: 1
//                 };
//                 // console.log('gaEvent', gaEvent);
//                 window.ga('send', gaEvent);
//             }
//             setTimeout(function () { //wait for ga??? or dont use reload?
//                 window.location.href = record.url;
//             }, 10);

// //            window.open(record.thumbnail);
//         });
        // addEvent(downloadBtnEl, "mouseover", function () {
        //     downloadBtnEl.classList.add("hover");
        // });
        // addEvent(downloadBtnEl, "mouseout", function () {
        //     downloadBtnEl.classList.remove("hover");
        // });

        var contexMenuEl = document.createElement("div");
        contexMenuEl.className = "contextmenu";
        // var contexMenuBtnEl = document.createElement("span");
        // contexMenuBtnEl.className = "btn-sm";
        // contexMenuBtnEl.innerHTML = '<i class="fal fa-ellipsis-v" aria-hidden="true"></i>';
        // contexMenuBtnEl.innerHTML = '<i class="fal fa-trash" aria-hidden="true"></i>';
        // contexMenuBtnEl.className = "contextmenu-more";
        var deleteBtnEl = document.createElement("span");
        deleteBtnEl.className = "delete btn btn-danger btn-sm pull-right";
        deleteBtnEl.style.cursor = "pointer";
        deleteBtnEl.innerHTML = '<i class="fal fa-trash" aria-hidden="true"></i><span class="desc"> delete</span>';
        // addEvent(deleteBtnEl, "mouseover", function () {
        //     deleteBtnEl.classList.add("hover");
        // });
        // addEvent(deleteBtnEl, "mouseout", function () {
        //     deleteBtnEl.classList.remove("hover");
        // });


        addEvent(deleteBtnEl, "click", function () {
            if (confirm("Are you sure you want to delete this image?")) {
                cardEl.parentElement.removeChild(cardEl);
                // console.log(that.history.indexOf(record));
                that.history.splice(that.history.indexOf(record), 1);
                that.saveSate();
            }
        });

        // cardEl.appendChild(downloadBtnEl);
        // contexMenuEl.appendChild(contexMenuBtnEl);
        contexMenuEl.appendChild(deleteBtnEl);
        cardLinkEl.appendChild(cardImg);
        cardEl.appendChild(cardLinkEl);
        cardEl.appendChild(userEl);
        cardEl.appendChild(contexMenuEl);


        return cardEl;
    },
    getList: function (listEl) {
        "use strict";
        var that = this;
        if (!listEl) {
            listEl = document.createElement("div");
        }
        this.history.forEach(function (record) {
            listEl.appendChild(that.getCard(record));
        });
        return listEl;
    }
};
var sketchbookHistory = new SketchbookHistory();
window.sketchbookHistory = sketchbookHistory;

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.adapter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 /* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parts[1],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      default: // Unknown extensions are silently ignored.
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress); // was: relAddr
    sdp.push('rport');
    sdp.push(candidate.relatedPort); // was: relPort
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  // was: channels
  parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
       ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      params.push(param + '=' + codec.parameters[param]);
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var fpLine = lines.filter(function(line) {
    return line.indexOf('a=fingerprint:') === 0;
  })[0].substr(14);
  // Note: a=setup line is ignored since we use the 'auto' role.
  var dtlsParameters = {
    role: 'auto',
    fingerprints: [{
      algorithm: fpLine.split(' ')[0],
      value: fpLine.split(' ')[1]
    }]
  };
  return dtlsParameters;
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  sdp += 'a=rtcp-mux\r\n';

  caps.headerExtensions.forEach(function(extension) {
    sdp += SDPUtils.writeExtmap(extension);
  });
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.split(' ');
    parts.shift();
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
        rtx: {
          payloadType: codec.payloadType,
          ssrc: secondarySsrc
        }
      };
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: secondarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(5), 10);
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

SDPUtils.writeSessionBoilerplate = function() {
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  // FIXME: for RTX there might be multiple SSRCs. Not implemented in Edge yet.
  if (transceiver.rtpSender) {
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

// Expose public methods.
module.exports = SDPUtils;

},{}],2:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

// Shimming starts here.
(function() {
  // Utils.
  var utils = require('./utils');
  var logging = utils.log;
  var browserDetails = utils.browserDetails;
  // Export to the adapter global object visible in the browser.
  module.exports.browserDetails = browserDetails;
  module.exports.extractVersion = utils.extractVersion;
  module.exports.disableLog = utils.disableLog;

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = require('./chrome/chrome_shim') || null;
  var edgeShim = require('./edge/edge_shim') || null;
  var firefoxShim = require('./firefox/firefox_shim') || null;
  var safariShim = require('./safari/safari_shim') || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection) {
        logging('Chrome shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = chromeShim;

      chromeShim.shimGetUserMedia();
      chromeShim.shimMediaStream();
      utils.shimCreateObjectURL();
      chromeShim.shimSourceObject();
      chromeShim.shimPeerConnection();
      chromeShim.shimOnTrack();
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection) {
        logging('Firefox shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia();
      utils.shimCreateObjectURL();
      firefoxShim.shimSourceObject();
      firefoxShim.shimPeerConnection();
      firefoxShim.shimOnTrack();
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection) {
        logging('MS edge shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = edgeShim;

      edgeShim.shimGetUserMedia();
      utils.shimCreateObjectURL();
      edgeShim.shimPeerConnection();
      break;
    case 'safari':
      if (!safariShim) {
        logging('Safari shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = safariShim;

      safariShim.shimGetUserMedia();
      break;
    default:
      logging('Unsupported browser!');
  }
})();

},{"./chrome/chrome_shim":3,"./edge/edge_shim":5,"./firefox/firefox_shim":7,"./safari/safari_shim":9,"./utils":10}],3:[function(require,module,exports){

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var logging = require('../utils.js').log;
var browserDetails = require('../utils.js').browserDetails;

var chromeShim = {
  shimMediaStream: function() {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function() {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          var self = this;
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var event = new Event('track');
              event.track = te.track;
              event.receiver = {track: te.track};
              event.streams = [e.stream];
              self.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = {track: track};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
  },

  shimSourceObject: function() {
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return undefined;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimPeerConnection: function() {
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    }

    var origGetStats = RTCPeerConnection.prototype.getStats;
    RTCPeerConnection.prototype.getStats = function(selector,
        successCallback, errorCallback) {
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 ||
          typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function(stats) {
        return new Map(Object.keys(stats).map(function(key) {
          return[key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_,
            arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        origGetStats.apply(self, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function(method) {
            var nativeMethod = RTCPeerConnection.prototype[method];
            RTCPeerConnection.prototype[method] = function() {
              var args = arguments;
              var self = this;
              var promise = new Promise(function(resolve, reject) {
                nativeMethod.apply(self, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
          var self = this;
          if (arguments.length < 1 || (arguments.length === 1 &&
              typeof arguments[0] === 'object')) {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(self, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        RTCPeerConnection.prototype.addIceCandidate;
    RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }
};


// Expose public methods.
module.exports = {
  shimMediaStream: chromeShim.shimMediaStream,
  shimOnTrack: chromeShim.shimOnTrack,
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils.js":10,"./getusermedia":4}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var logging = require('../utils.js').log;

// Expose public methods.
module.exports = function() {
  var constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function(constraints, func) {
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && constraints.audio) {
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile, where it defaults to "user".
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode)) {
        delete constraints.video.facingMode;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          // Look for "back" in label, or use last cam (typically back cam).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var back = devices.find(function(d) {
              return d.label.toLowerCase().indexOf('back') !== -1;
            }) || (devices.length && devices[devices.length - 1]);
            if (back) {
              constraints.video.deviceId = face.exact ? {exact: back.deviceId} :
                                                        {ideal: back.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        ConstraintNotSatisfiedError: 'OverconstrainedError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraintName,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        onError(shimError_(e));
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function() {
        return new Promise(function(resolve) {
          var kinds = {audio: 'audioinput', video: 'videoinput'};
          return MediaStreamTrack.getSources(function(devices) {
            resolve(devices.map(function(device) {
              return {label: device.label,
                      kind: kinds[device.kind],
                      deviceId: device.id,
                      groupId: ''};
            }));
          });
        });
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(function(stream) {
          if (c.audio && !stream.getAudioTracks().length ||
              c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function(e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};

},{"../utils.js":10}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');
var browserDetails = require('../utils').browserDetails;

var edgeShim = {
  shimPeerConnection: function() {
    if (window.RTCIceGatherer) {
      // ORTC defines an RTCIceCandidate object but no constructor.
      // Not implemented in Edge.
      if (!window.RTCIceCandidate) {
        window.RTCIceCandidate = function(args) {
          return args;
        };
      }
      // ORTC does not have a session description object but
      // other browsers (i.e. Chrome) that will support both PC and ORTC
      // in the future might have this defined already.
      if (!window.RTCSessionDescription) {
        window.RTCSessionDescription = function(args) {
          return args;
        };
      }
      // this adds an additional event listener to MediaStrackTrack that signals
      // when a tracks enabled property was changed.
      var origMSTEnabled = Object.getOwnPropertyDescriptor(
          MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(MediaStreamTrack.prototype, 'enabled', {
        set: function(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }

    window.RTCPeerConnection = function(config) {
      var self = this;

      var _eventTarget = document.createDocumentFragment();
      ['addEventListener', 'removeEventListener', 'dispatchEvent']
          .forEach(function(method) {
            self[method] = _eventTarget[method].bind(_eventTarget);
          });

      this.onicecandidate = null;
      this.onaddstream = null;
      this.ontrack = null;
      this.onremovestream = null;
      this.onsignalingstatechange = null;
      this.oniceconnectionstatechange = null;
      this.onnegotiationneeded = null;
      this.ondatachannel = null;

      this.localStreams = [];
      this.remoteStreams = [];
      this.getLocalStreams = function() {
        return self.localStreams;
      };
      this.getRemoteStreams = function() {
        return self.remoteStreams;
      };

      this.localDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.remoteDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.signalingState = 'stable';
      this.iceConnectionState = 'new';
      this.iceGatheringState = 'new';

      this.iceOptions = {
        gatherPolicy: 'all',
        iceServers: []
      };
      if (config && config.iceTransportPolicy) {
        switch (config.iceTransportPolicy) {
          case 'all':
          case 'relay':
            this.iceOptions.gatherPolicy = config.iceTransportPolicy;
            break;
          case 'none':
            // FIXME: remove once implementation and spec have added this.
            throw new TypeError('iceTransportPolicy "none" not supported');
          default:
            // don't set iceTransportPolicy.
            break;
        }
      }
      this.usingBundle = config && config.bundlePolicy === 'max-bundle';

      if (config && config.iceServers) {
        // Edge does not like
        // 1) stun:
        // 2) turn: that does not have all of turn:host:port?transport=udp
        // 3) turn: with ipv6 addresses
        var iceServers = JSON.parse(JSON.stringify(config.iceServers));
        this.iceOptions.iceServers = iceServers.filter(function(server) {
          if (server && server.urls) {
            var urls = server.urls;
            if (typeof urls === 'string') {
              urls = [urls];
            }
            urls = urls.filter(function(url) {
              return (url.indexOf('turn:') === 0 &&
                  url.indexOf('transport=udp') !== -1 &&
                  url.indexOf('turn:[') === -1) ||
                  (url.indexOf('stun:') === 0 &&
                    browserDetails.version >= 14393);
            })[0];
            return !!urls;
          }
          return false;
        });
      }
      this._config = config;

      // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
      // everything that is needed to describe a SDP m-line.
      this.transceivers = [];

      // since the iceGatherer is currently created in createOffer but we
      // must not emit candidates until after setLocalDescription we buffer
      // them in this array.
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
      var self = this;
      var sections = SDPUtils.splitSections(self.localDescription.sdp);
      // FIXME: need to apply ice candidates in a way which is async but
      // in-order
      this._localIceCandidatesBuffer.forEach(function(event) {
        var end = !event.candidate || Object.keys(event.candidate).length === 0;
        if (end) {
          for (var j = 1; j < sections.length; j++) {
            if (sections[j].indexOf('\r\na=end-of-candidates\r\n') === -1) {
              sections[j] += 'a=end-of-candidates\r\n';
            }
          }
        } else {
          sections[event.candidate.sdpMLineIndex + 1] +=
              'a=' + event.candidate.candidate + '\r\n';
        }
        self.localDescription.sdp = sections.join('');
        self.dispatchEvent(event);
        if (self.onicecandidate !== null) {
          self.onicecandidate(event);
        }
        if (!event.candidate && self.iceGatheringState !== 'complete') {
          var complete = self.transceivers.every(function(transceiver) {
            return transceiver.iceGatherer &&
                transceiver.iceGatherer.state === 'completed';
          });
          if (complete) {
            self.iceGatheringState = 'complete';
          }
        }
      });
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype.getConfiguration = function() {
      return this._config;
    };

    window.RTCPeerConnection.prototype.addStream = function(stream) {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      this.localStreams.push(clonedStream);
      this._maybeFireNegotiationNeeded();
    };

    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var idx = this.localStreams.indexOf(stream);
      if (idx > -1) {
        this.localStreams.splice(idx, 1);
        this._maybeFireNegotiationNeeded();
      }
    };

    window.RTCPeerConnection.prototype.getSenders = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpSender;
      })
      .map(function(transceiver) {
        return transceiver.rtpSender;
      });
    };

    window.RTCPeerConnection.prototype.getReceivers = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpReceiver;
      })
      .map(function(transceiver) {
        return transceiver.rtpReceiver;
      });
    };

    // Determines the intersection of local and remote capabilities.
    window.RTCPeerConnection.prototype._getCommonCapabilities =
        function(localCapabilities, remoteCapabilities) {
          var commonCapabilities = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: []
          };
          localCapabilities.codecs.forEach(function(lCodec) {
            for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
              var rCodec = remoteCapabilities.codecs[i];
              if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
                  lCodec.clockRate === rCodec.clockRate) {
                // number of channels is the highest common number of channels
                rCodec.numChannels = Math.min(lCodec.numChannels,
                    rCodec.numChannels);
                // push rCodec so we reply with offerer payload type
                commonCapabilities.codecs.push(rCodec);

                // determine common feedback mechanisms
                rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
                  for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                    if (lCodec.rtcpFeedback[j].type === fb.type &&
                        lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                      return true;
                    }
                  }
                  return false;
                });
                // FIXME: also need to determine .parameters
                //  see https://github.com/openpeer/ortc/issues/569
                break;
              }
            }
          });

          localCapabilities.headerExtensions
              .forEach(function(lHeaderExtension) {
                for (var i = 0; i < remoteCapabilities.headerExtensions.length;
                     i++) {
                  var rHeaderExtension = remoteCapabilities.headerExtensions[i];
                  if (lHeaderExtension.uri === rHeaderExtension.uri) {
                    commonCapabilities.headerExtensions.push(rHeaderExtension);
                    break;
                  }
                }
              });

          // FIXME: fecMechanisms
          return commonCapabilities;
        };

    // Create ICE gatherer, ICE transport and DTLS transport.
    window.RTCPeerConnection.prototype._createIceAndDtlsTransports =
        function(mid, sdpMLineIndex) {
          var self = this;
          var iceGatherer = new RTCIceGatherer(self.iceOptions);
          var iceTransport = new RTCIceTransport(iceGatherer);
          iceGatherer.onlocalcandidate = function(evt) {
            var event = new Event('icecandidate');
            event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

            var cand = evt.candidate;
            var end = !cand || Object.keys(cand).length === 0;
            // Edge emits an empty object for RTCIceCandidateComplete‥
            if (end) {
              // polyfill since RTCIceGatherer.state is not implemented in
              // Edge 10547 yet.
              if (iceGatherer.state === undefined) {
                iceGatherer.state = 'completed';
              }
            } else {
              // RTCIceCandidate doesn't have a component, needs to be added
              cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
              event.candidate.candidate = SDPUtils.writeCandidate(cand);
            }

            // update local description.
            var sections = SDPUtils.splitSections(self.localDescription.sdp);
            if (!end) {
              sections[event.candidate.sdpMLineIndex + 1] +=
                  'a=' + event.candidate.candidate + '\r\n';
            } else {
              sections[event.candidate.sdpMLineIndex + 1] +=
                  'a=end-of-candidates\r\n';
            }
            self.localDescription.sdp = sections.join('');
            var transceivers = self._pendingOffer ? self._pendingOffer :
                self.transceivers;
            var complete = transceivers.every(function(transceiver) {
              return transceiver.iceGatherer &&
                  transceiver.iceGatherer.state === 'completed';
            });

            // Emit candidate if localDescription is set.
            // Also emits null candidate when all gatherers are complete.
            switch (self.iceGatheringState) {
              case 'new':
                if (!end) {
                  self._localIceCandidatesBuffer.push(event);
                }
                if (end && complete) {
                  self._localIceCandidatesBuffer.push(
                      new Event('icecandidate'));
                }
                break;
              case 'gathering':
                self._emitBufferedCandidates();
                if (!end) {
                  self.dispatchEvent(event);
                  if (self.onicecandidate !== null) {
                    self.onicecandidate(event);
                  }
                }
                if (complete) {
                  self.dispatchEvent(new Event('icecandidate'));
                  if (self.onicecandidate !== null) {
                    self.onicecandidate(new Event('icecandidate'));
                  }
                  self.iceGatheringState = 'complete';
                }
                break;
              case 'complete':
                // should not happen... currently!
                break;
              default: // no-op.
                break;
            }
          };
          iceTransport.onicestatechange = function() {
            self._updateConnectionState();
          };

          var dtlsTransport = new RTCDtlsTransport(iceTransport);
          dtlsTransport.ondtlsstatechange = function() {
            self._updateConnectionState();
          };
          dtlsTransport.onerror = function() {
            // onerror does not set state to failed by itself.
            dtlsTransport.state = 'failed';
            self._updateConnectionState();
          };

          return {
            iceGatherer: iceGatherer,
            iceTransport: iceTransport,
            dtlsTransport: dtlsTransport
          };
        };

    // Start the RTP Sender and Receiver for a transceiver.
    window.RTCPeerConnection.prototype._transceive = function(transceiver,
        send, recv) {
      var params = this._getCommonCapabilities(transceiver.localCapabilities,
          transceiver.remoteCapabilities);
      if (send && transceiver.rtpSender) {
        params.encodings = transceiver.sendEncodingParameters;
        params.rtcp = {
          cname: SDPUtils.localCName
        };
        if (transceiver.recvEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
        }
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver) {
        // remove RTX field in Edge 14942
        if (transceiver.kind === 'video'
            && transceiver.recvEncodingParameters) {
          transceiver.recvEncodingParameters.forEach(function(p) {
            delete p.rtx;
          });
        }
        params.encodings = transceiver.recvEncodingParameters;
        params.rtcp = {
          cname: transceiver.cname
        };
        if (transceiver.sendEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
        }
        transceiver.rtpReceiver.receive(params);
      }
    };

    window.RTCPeerConnection.prototype.setLocalDescription =
        function(description) {
          var self = this;
          var sections;
          var sessionpart;
          if (description.type === 'offer') {
            // FIXME: What was the purpose of this empty if statement?
            // if (!this._pendingOffer) {
            // } else {
            if (this._pendingOffer) {
              // VERY limited support for SDP munging. Limited to:
              // * changing the order of codecs
              sections = SDPUtils.splitSections(description.sdp);
              sessionpart = sections.shift();
              sections.forEach(function(mediaSection, sdpMLineIndex) {
                var caps = SDPUtils.parseRtpParameters(mediaSection);
                self._pendingOffer[sdpMLineIndex].localCapabilities = caps;
              });
              this.transceivers = this._pendingOffer;
              delete this._pendingOffer;
            }
          } else if (description.type === 'answer') {
            sections = SDPUtils.splitSections(self.remoteDescription.sdp);
            sessionpart = sections.shift();
            var isIceLite = SDPUtils.matchPrefix(sessionpart,
                'a=ice-lite').length > 0;
            sections.forEach(function(mediaSection, sdpMLineIndex) {
              var transceiver = self.transceivers[sdpMLineIndex];
              var iceGatherer = transceiver.iceGatherer;
              var iceTransport = transceiver.iceTransport;
              var dtlsTransport = transceiver.dtlsTransport;
              var localCapabilities = transceiver.localCapabilities;
              var remoteCapabilities = transceiver.remoteCapabilities;

              var rejected = mediaSection.split('\n', 1)[0]
                  .split(' ', 2)[1] === '0';

              if (!rejected && !transceiver.isDatachannel) {
                var remoteIceParameters = SDPUtils.getIceParameters(
                    mediaSection, sessionpart);
                var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                    mediaSection, sessionpart);
                if (isIceLite) {
                  remoteDtlsParameters.role = 'server';
                }

                if (!self.usingBundle || sdpMLineIndex === 0) {
                  iceTransport.start(iceGatherer, remoteIceParameters,
                      isIceLite ? 'controlling' : 'controlled');
                  dtlsTransport.start(remoteDtlsParameters);
                }

                // Calculate intersection of capabilities.
                var params = self._getCommonCapabilities(localCapabilities,
                    remoteCapabilities);

                // Start the RTCRtpSender. The RTCRtpReceiver for this
                // transceiver has already been started in setRemoteDescription.
                self._transceive(transceiver,
                    params.codecs.length > 0,
                    false);
              }
            });
          }

          this.localDescription = {
            type: description.type,
            sdp: description.sdp
          };
          switch (description.type) {
            case 'offer':
              this._updateSignalingState('have-local-offer');
              break;
            case 'answer':
              this._updateSignalingState('stable');
              break;
            default:
              throw new TypeError('unsupported type "' + description.type +
                  '"');
          }

          // If a success callback was provided, emit ICE candidates after it
          // has been executed. Otherwise, emit callback after the Promise is
          // resolved.
          var hasCallback = arguments.length > 1 &&
            typeof arguments[1] === 'function';
          if (hasCallback) {
            var cb = arguments[1];
            window.setTimeout(function() {
              cb();
              if (self.iceGatheringState === 'new') {
                self.iceGatheringState = 'gathering';
              }
              self._emitBufferedCandidates();
            }, 0);
          }
          var p = Promise.resolve();
          p.then(function() {
            if (!hasCallback) {
              if (self.iceGatheringState === 'new') {
                self.iceGatheringState = 'gathering';
              }
              // Usually candidates will be emitted earlier.
              window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
            }
          });
          return p;
        };

    window.RTCPeerConnection.prototype.setRemoteDescription =
        function(description) {
          var self = this;
          var stream = new MediaStream();
          var receiverList = [];
          var sections = SDPUtils.splitSections(description.sdp);
          var sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart,
              'a=ice-lite').length > 0;
          this.usingBundle = SDPUtils.matchPrefix(sessionpart,
              'a=group:BUNDLE ').length > 0;
          sections.forEach(function(mediaSection, sdpMLineIndex) {
            var lines = SDPUtils.splitLines(mediaSection);
            var mline = lines[0].substr(2).split(' ');
            var kind = mline[0];
            var rejected = mline[1] === '0';
            var direction = SDPUtils.getDirection(mediaSection, sessionpart);

            var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:');
            if (mid.length) {
              mid = mid[0].substr(6);
            } else {
              mid = SDPUtils.generateIdentifier();
            }

            // Reject datachannels which are not implemented yet.
            if (kind === 'application' && mline[2] === 'DTLS/SCTP') {
              self.transceivers[sdpMLineIndex] = {
                mid: mid,
                isDatachannel: true
              };
              return;
            }

            var transceiver;
            var iceGatherer;
            var iceTransport;
            var dtlsTransport;
            var rtpSender;
            var rtpReceiver;
            var sendEncodingParameters;
            var recvEncodingParameters;
            var localCapabilities;

            var track;
            // FIXME: ensure the mediaSection has rtcp-mux set.
            var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
            var remoteIceParameters;
            var remoteDtlsParameters;
            if (!rejected) {
              remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                  sessionpart);
              remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
                  sessionpart);
              remoteDtlsParameters.role = 'client';
            }
            recvEncodingParameters =
                SDPUtils.parseRtpEncodingParameters(mediaSection);

            var cname;
            // Gets the first SSRC. Note that with RTX there might be multiple
            // SSRCs.
            var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
                .map(function(line) {
                  return SDPUtils.parseSsrcMedia(line);
                })
                .filter(function(obj) {
                  return obj.attribute === 'cname';
                })[0];
            if (remoteSsrc) {
              cname = remoteSsrc.value;
            }

            var isComplete = SDPUtils.matchPrefix(mediaSection,
                'a=end-of-candidates', sessionpart).length > 0;
            var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
                .map(function(cand) {
                  return SDPUtils.parseCandidate(cand);
                })
                .filter(function(cand) {
                  return cand.component === '1';
                });
            if (description.type === 'offer' && !rejected) {
              var transports = self.usingBundle && sdpMLineIndex > 0 ? {
                iceGatherer: self.transceivers[0].iceGatherer,
                iceTransport: self.transceivers[0].iceTransport,
                dtlsTransport: self.transceivers[0].dtlsTransport
              } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);

              if (isComplete && (!self.usingBundle || sdpMLineIndex === 0)) {
                transports.iceTransport.setRemoteCandidates(cands);
              }

              localCapabilities = RTCRtpReceiver.getCapabilities(kind);

              // filter RTX until additional stuff needed for RTX is implemented
              // in adapter.js
              localCapabilities.codecs = localCapabilities.codecs.filter(
                  function(codec) {
                    return codec.name !== 'rtx';
                  });

              sendEncodingParameters = [{
                ssrc: (2 * sdpMLineIndex + 2) * 1001
              }];

              rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);

              track = rtpReceiver.track;
              receiverList.push([track, rtpReceiver]);
              // FIXME: not correct when there are multiple streams but that is
              // not currently supported in this shim.
              stream.addTrack(track);

              // FIXME: look at direction.
              if (self.localStreams.length > 0 &&
                  self.localStreams[0].getTracks().length >= sdpMLineIndex) {
                var localTrack;
                if (kind === 'audio') {
                  localTrack = self.localStreams[0].getAudioTracks()[0];
                } else if (kind === 'video') {
                  localTrack = self.localStreams[0].getVideoTracks()[0];
                }
                if (localTrack) {
                  rtpSender = new RTCRtpSender(localTrack,
                      transports.dtlsTransport);
                }
              }

              self.transceivers[sdpMLineIndex] = {
                iceGatherer: transports.iceGatherer,
                iceTransport: transports.iceTransport,
                dtlsTransport: transports.dtlsTransport,
                localCapabilities: localCapabilities,
                remoteCapabilities: remoteCapabilities,
                rtpSender: rtpSender,
                rtpReceiver: rtpReceiver,
                kind: kind,
                mid: mid,
                cname: cname,
                sendEncodingParameters: sendEncodingParameters,
                recvEncodingParameters: recvEncodingParameters
              };
              // Start the RTCRtpReceiver now. The RTPSender is started in
              // setLocalDescription.
              self._transceive(self.transceivers[sdpMLineIndex],
                  false,
                  direction === 'sendrecv' || direction === 'sendonly');
            } else if (description.type === 'answer' && !rejected) {
              transceiver = self.transceivers[sdpMLineIndex];
              iceGatherer = transceiver.iceGatherer;
              iceTransport = transceiver.iceTransport;
              dtlsTransport = transceiver.dtlsTransport;
              rtpSender = transceiver.rtpSender;
              rtpReceiver = transceiver.rtpReceiver;
              sendEncodingParameters = transceiver.sendEncodingParameters;
              localCapabilities = transceiver.localCapabilities;

              self.transceivers[sdpMLineIndex].recvEncodingParameters =
                  recvEncodingParameters;
              self.transceivers[sdpMLineIndex].remoteCapabilities =
                  remoteCapabilities;
              self.transceivers[sdpMLineIndex].cname = cname;

              if ((isIceLite || isComplete) && cands.length) {
                iceTransport.setRemoteCandidates(cands);
              }
              if (!self.usingBundle || sdpMLineIndex === 0) {
                iceTransport.start(iceGatherer, remoteIceParameters,
                    'controlling');
                dtlsTransport.start(remoteDtlsParameters);
              }

              self._transceive(transceiver,
                  direction === 'sendrecv' || direction === 'recvonly',
                  direction === 'sendrecv' || direction === 'sendonly');

              if (rtpReceiver &&
                  (direction === 'sendrecv' || direction === 'sendonly')) {
                track = rtpReceiver.track;
                receiverList.push([track, rtpReceiver]);
                stream.addTrack(track);
              } else {
                // FIXME: actually the receiver should be created later.
                delete transceiver.rtpReceiver;
              }
            }
          });

          this.remoteDescription = {
            type: description.type,
            sdp: description.sdp
          };
          switch (description.type) {
            case 'offer':
              this._updateSignalingState('have-remote-offer');
              break;
            case 'answer':
              this._updateSignalingState('stable');
              break;
            default:
              throw new TypeError('unsupported type "' + description.type +
                  '"');
          }
          if (stream.getTracks().length) {
            self.remoteStreams.push(stream);
            window.setTimeout(function() {
              var event = new Event('addstream');
              event.stream = stream;
              self.dispatchEvent(event);
              if (self.onaddstream !== null) {
                window.setTimeout(function() {
                  self.onaddstream(event);
                }, 0);
              }

              receiverList.forEach(function(item) {
                var track = item[0];
                var receiver = item[1];
                var trackEvent = new Event('track');
                trackEvent.track = track;
                trackEvent.receiver = receiver;
                trackEvent.streams = [stream];
                self.dispatchEvent(trackEvent);
                if (self.ontrack !== null) {
                  window.setTimeout(function() {
                    self.ontrack(trackEvent);
                  }, 0);
                }
              });
            }, 0);
          }
          if (arguments.length > 1 && typeof arguments[1] === 'function') {
            window.setTimeout(arguments[1], 0);
          }
          return Promise.resolve();
        };

    window.RTCPeerConnection.prototype.close = function() {
      this.transceivers.forEach(function(transceiver) {
        /* not yet
        if (transceiver.iceGatherer) {
          transceiver.iceGatherer.close();
        }
        */
        if (transceiver.iceTransport) {
          transceiver.iceTransport.stop();
        }
        if (transceiver.dtlsTransport) {
          transceiver.dtlsTransport.stop();
        }
        if (transceiver.rtpSender) {
          transceiver.rtpSender.stop();
        }
        if (transceiver.rtpReceiver) {
          transceiver.rtpReceiver.stop();
        }
      });
      // FIXME: clean up tracks, local streams, remote streams, etc
      this._updateSignalingState('closed');
    };

    // Update the signaling state.
    window.RTCPeerConnection.prototype._updateSignalingState =
        function(newState) {
          this.signalingState = newState;
          var event = new Event('signalingstatechange');
          this.dispatchEvent(event);
          if (this.onsignalingstatechange !== null) {
            this.onsignalingstatechange(event);
          }
        };

    // Determine whether to fire the negotiationneeded event.
    window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
        function() {
          // Fire away (for now).
          var event = new Event('negotiationneeded');
          this.dispatchEvent(event);
          if (this.onnegotiationneeded !== null) {
            this.onnegotiationneeded(event);
          }
        };

    // Update the connection state.
    window.RTCPeerConnection.prototype._updateConnectionState = function() {
      var self = this;
      var newState;
      var states = {
        'new': 0,
        closed: 0,
        connecting: 0,
        checking: 0,
        connected: 0,
        completed: 0,
        failed: 0
      };
      this.transceivers.forEach(function(transceiver) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      });
      // ICETransport.completed and connected are the same for this purpose.
      states.connected += states.completed;

      newState = 'new';
      if (states.failed > 0) {
        newState = 'failed';
      } else if (states.connecting > 0 || states.checking > 0) {
        newState = 'connecting';
      } else if (states.disconnected > 0) {
        newState = 'disconnected';
      } else if (states.new > 0) {
        newState = 'new';
      } else if (states.connected > 0 || states.completed > 0) {
        newState = 'connected';
      }

      if (newState !== self.iceConnectionState) {
        self.iceConnectionState = newState;
        var event = new Event('iceconnectionstatechange');
        this.dispatchEvent(event);
        if (this.oniceconnectionstatechange !== null) {
          this.oniceconnectionstatechange(event);
        }
      }
    };

    window.RTCPeerConnection.prototype.createOffer = function() {
      var self = this;
      if (this._pendingOffer) {
        throw new Error('createOffer called while there is a pending offer.');
      }
      var offerOptions;
      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
        offerOptions = arguments[0];
      } else if (arguments.length === 3) {
        offerOptions = arguments[2];
      }

      var tracks = [];
      var numAudioTracks = 0;
      var numVideoTracks = 0;
      // Default to sendrecv.
      if (this.localStreams.length) {
        numAudioTracks = this.localStreams[0].getAudioTracks().length;
        numVideoTracks = this.localStreams[0].getVideoTracks().length;
      }
      // Determine number of audio and video tracks we need to send/recv.
      if (offerOptions) {
        // Reject Chrome legacy constraints.
        if (offerOptions.mandatory || offerOptions.optional) {
          throw new TypeError(
              'Legacy mandatory/optional constraints not supported.');
        }
        if (offerOptions.offerToReceiveAudio !== undefined) {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
        if (offerOptions.offerToReceiveVideo !== undefined) {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
      if (this.localStreams.length) {
        // Push local streams.
        this.localStreams[0].getTracks().forEach(function(track) {
          tracks.push({
            kind: track.kind,
            track: track,
            wantReceive: track.kind === 'audio' ?
                numAudioTracks > 0 : numVideoTracks > 0
          });
          if (track.kind === 'audio') {
            numAudioTracks--;
          } else if (track.kind === 'video') {
            numVideoTracks--;
          }
        });
      }
      // Create M-lines for recvonly streams.
      while (numAudioTracks > 0 || numVideoTracks > 0) {
        if (numAudioTracks > 0) {
          tracks.push({
            kind: 'audio',
            wantReceive: true
          });
          numAudioTracks--;
        }
        if (numVideoTracks > 0) {
          tracks.push({
            kind: 'video',
            wantReceive: true
          });
          numVideoTracks--;
        }
      }

      var sdp = SDPUtils.writeSessionBoilerplate();
      var transceivers = [];
      tracks.forEach(function(mline, sdpMLineIndex) {
        // For each track, create an ice gatherer, ice transport,
        // dtls transport, potentially rtpsender and rtpreceiver.
        var track = mline.track;
        var kind = mline.kind;
        var mid = SDPUtils.generateIdentifier();

        var transports = self.usingBundle && sdpMLineIndex > 0 ? {
          iceGatherer: transceivers[0].iceGatherer,
          iceTransport: transceivers[0].iceTransport,
          dtlsTransport: transceivers[0].dtlsTransport
        } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);

        var localCapabilities = RTCRtpSender.getCapabilities(kind);
        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
        localCapabilities.codecs.forEach(function(codec) {
          // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
          // by adding level-asymmetry-allowed=1
          if (codec.name === 'H264' &&
              codec.parameters['level-asymmetry-allowed'] === undefined) {
            codec.parameters['level-asymmetry-allowed'] = '1';
          }
        });

        var rtpSender;
        var rtpReceiver;

        // generate an ssrc now, to be used later in rtpSender.send
        var sendEncodingParameters = [{
          ssrc: (2 * sdpMLineIndex + 1) * 1001
        }];
        if (track) {
          rtpSender = new RTCRtpSender(track, transports.dtlsTransport);
        }

        if (mline.wantReceive) {
          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
        }

        transceivers[sdpMLineIndex] = {
          iceGatherer: transports.iceGatherer,
          iceTransport: transports.iceTransport,
          dtlsTransport: transports.dtlsTransport,
          localCapabilities: localCapabilities,
          remoteCapabilities: null,
          rtpSender: rtpSender,
          rtpReceiver: rtpReceiver,
          kind: kind,
          mid: mid,
          sendEncodingParameters: sendEncodingParameters,
          recvEncodingParameters: null
        };
      });
      if (this.usingBundle) {
        sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      tracks.forEach(function(mline, sdpMLineIndex) {
        var transceiver = transceivers[sdpMLineIndex];
        sdp += SDPUtils.writeMediaSection(transceiver,
            transceiver.localCapabilities, 'offer', self.localStreams[0]);
      });

      this._pendingOffer = transceivers;
      var desc = new RTCSessionDescription({
        type: 'offer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.createAnswer = function() {
      var self = this;

      var sdp = SDPUtils.writeSessionBoilerplate();
      if (this.usingBundle) {
        sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.isDatachannel) {
          sdp += 'm=application 0 DTLS/SCTP 5000\r\n' +
              'c=IN IP4 0.0.0.0\r\n' +
              'a=mid:' + transceiver.mid + '\r\n';
          return;
        }
        // Calculate intersection of capabilities.
        var commonCapabilities = self._getCommonCapabilities(
            transceiver.localCapabilities,
            transceiver.remoteCapabilities);

        sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
            'answer', self.localStreams[0]);
      });

      var desc = new RTCSessionDescription({
        type: 'answer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
      if (!candidate) {
        for (var j = 0; j < this.transceivers.length; j++) {
          this.transceivers[j].iceTransport.addRemoteCandidate({});
          if (this.usingBundle) {
            return Promise.resolve();
          }
        }
      } else {
        var mLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < this.transceivers.length; i++) {
            if (this.transceivers[i].mid === candidate.sdpMid) {
              mLineIndex = i;
              break;
            }
          }
        }
        var transceiver = this.transceivers[mLineIndex];
        if (transceiver) {
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return Promise.resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component !== '1') {
            return Promise.resolve();
          }
          transceiver.iceTransport.addRemoteCandidate(cand);

          // update the remoteDescription.
          var sections = SDPUtils.splitSections(this.remoteDescription.sdp);
          sections[mLineIndex + 1] += (cand.type ? candidate.candidate.trim()
              : 'a=end-of-candidates') + '\r\n';
          this.remoteDescription.sdp = sections.join('');
        }
      }
      if (arguments.length > 1 && typeof arguments[1] === 'function') {
        window.setTimeout(arguments[1], 0);
      }
      return Promise.resolve();
    };

    window.RTCPeerConnection.prototype.getStats = function() {
      var promises = [];
      this.transceivers.forEach(function(transceiver) {
        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
            'dtlsTransport'].forEach(function(method) {
              if (transceiver[method]) {
                promises.push(transceiver[method].getStats());
              }
            });
      });
      var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
          arguments[1];
      var fixStatsType = function(stat) {
        stat.type = {
          inboundrtp: 'inbound-rtp',
          outboundrtp: 'outbound-rtp',
          candidatepair: 'candidate-pair',
          localcandidate: 'local-candidate',
          remotecandidate: 'remote-candidate'
        }[stat.type] || stat.type;
        return stat;
      };
      return new Promise(function(resolve) {
        // shim getStats with maplike support
        var results = new Map();
        Promise.all(promises).then(function(res) {
          res.forEach(function(result) {
            Object.keys(result).forEach(function(id) {
              result[id].type = fixStatsType(result[id]);
              results.set(id, result[id]);
            });
          });
          if (cb) {
            window.setTimeout(cb, 0, results);
          }
          resolve(results);
        });
      });
    };
  }
};

// Expose public methods.
module.exports = {
  shimPeerConnection: edgeShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils":10,"./getusermedia":6,"sdp":1}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

// Expose public methods.
module.exports = function() {
  var shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(function(e) {
      return Promise.reject(shimError_(e));
    });
  };
};

},{}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var browserDetails = require('../utils').browserDetails;

var firefoxShim = {
  shimOnTrack: function() {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            e.stream.getTracks().forEach(function(track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = {track: track};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
  },

  shimSourceObject: function() {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function() {
    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
        window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
          // .urls is not supported in FF < 38.
          // create RTCIceServers with a single url.
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty('urls')) {
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = {
                    url: server.urls[j]
                  };
                  if (server.urls[j].indexOf('turn') === 0) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
        }
        return new mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = mozRTCSessionDescription;
      window.RTCIceCandidate = mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        RTCPeerConnection.prototype.addIceCandidate;
    RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = RTCPeerConnection.prototype.getStats;
    RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
      return nativeGetStats.apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) {
            stats = makeMapStats(stats);
          }
          if (browserDetails.version < 53 && !onSucc) {
            // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
              stats.forEach(function(stat) {
                stat.type = modernStatsTypes[stat.type] || stat.type;
              });
            } catch (e) {
              if (e.name !== 'TypeError') {
                throw e;
              }
              // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
              stats.forEach(function(stat, i) {
                stats.set(i, Object.assign({}, stat, {
                  type: modernStatsTypes[stat.type] || stat.type
                }));
              });
            }
          }
          return stats;
        })
        .then(onSucc, onErr);
    };
  }
};

// Expose public methods.
module.exports = {
  shimOnTrack: firefoxShim.shimOnTrack,
  shimSourceObject: firefoxShim.shimSourceObject,
  shimPeerConnection: firefoxShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils":10,"./getusermedia":8}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var logging = require('../utils').log;
var browserDetails = require('../utils').browserDetails;

// Expose public methods.
module.exports = function() {
  var shimError_ = function(e) {
    return {
      name: {
        SecurityError: 'NotAllowedError',
        PermissionDeniedError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' +
        'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r. min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
        return new Promise(function(resolve) {
          var infos = [
            {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
            {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
          ];
          resolve(infos);
        });
      };

  if (browserDetails.version < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(function(stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          throw new DOMException('The object can not be found here.',
                                 'NotFoundError');
        }
        return stream;
      }, function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    console.warn('navigator.getUserMedia has been replaced by ' +
                 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};

},{"../utils":10}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';
var safariShim = {
  // TODO: DrAlex, should be here, double check against LayoutTests
  // shimOnTrack: function() { },

  // TODO: once the back-end for the mac port is done, add.
  // TODO: check for webkitGTK+
  // shimPeerConnection: function() { },

  shimGetUserMedia: function() {
    navigator.getUserMedia = navigator.webkitGetUserMedia;
  }
};

// Expose public methods.
module.exports = {
  shimGetUserMedia: safariShim.shimGetUserMedia
  // TODO
  // shimOnTrack: safariShim.shimOnTrack,
  // shimPeerConnection: safariShim.shimPeerConnection
};

},{}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var logDisabled_ = true;

// Utility methods.
var utils = {
  disableLog: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return (bool) ? 'adapter.js logging disabled' :
        'adapter.js logging enabled';
  },

  log: function() {
    if (typeof window === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Extract browser version out of the provided user agent string.
   *
   * @param {!string} uastring userAgent string.
   * @param {!string} expr Regular expression used as match criteria.
   * @param {!number} pos position in the version string to be returned.
   * @return {!number} browser version.
   */
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function() {
    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    // Firefox.
    if (navigator.mozGetUserMedia) {
      result.browser = 'firefox';
      result.version = this.extractVersion(navigator.userAgent,
          /Firefox\/([0-9]+)\./, 1);

    // all webkit-based browsers
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
      if (window.webkitRTCPeerConnection) {
        result.browser = 'chrome';
        result.version = this.extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/([0-9]+)\./, 2);

      // Safari or unknown webkit-based
      // for the time being Safari has support for MediaStreams but not webRTC
      } else {
        // Safari UA substrings of interest for reference:
        // - webkit version:           AppleWebKit/602.1.25 (also used in Op,Cr)
        // - safari UI version:        Version/9.0.3 (unique to Safari)
        // - safari UI webkit version: Safari/601.4.4 (also used in Op,Cr)
        //
        // if the webkit version and safari UI webkit versions are equals,
        // ... this is a stable version.
        //
        // only the internal webkit version is important today to know if
        // media streams are supported
        //
        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent,
            /AppleWebKit\/([0-9]+)\./, 1);

        // unknown webkit-based browser
        } else {
          result.browser = 'Unsupported webkit-based browser ' +
              'with GUM support but no WebRTC support.';
          return result;
        }
      }

    // Edge.
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
      result.browser = 'edge';
      result.version = this.extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);

    // Default fallthrough: not supported.
    } else {
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function() {
    if (!(typeof window === 'object' && window.HTMLMediaElement &&
          'srcObject' in window.HTMLMediaElement.prototype)) {
      // Only shim CreateObjectURL using srcObject if srcObject exists.
      return undefined;
    }

    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(), newId = 0;

    URL.createObjectURL = function(stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + (++newId);
        streams.set(url, stream);
        console.log('URL.createObjectURL(stream) is deprecated! ' +
                    'Use elem.srcObject = stream instead!');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                              'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });
  }
};

// Export.
module.exports = {
  log: utils.log,
  disableLog: utils.disableLog,
  browserDetails: utils.detectBrowser(),
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL
};

},{}]},{},[2])(2)
});
/*!
* screenfull
* v3.2.2 - 2017-06-14
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			document.addEventListener(fn.fullscreenchange, callback, false);
		},
		onerror: function (callback) {
			document.addEventListener(fn.fullscreenerror, callback, false);
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();

/*global window, console, Eventsmanager, HTMLAudioElement, HTMLVideoElement */





function Speakmonitor(stream, config) {
    "use strict";
    Eventsmanager.call(this, config);

    this.config = Object.assign(this.config, config);
    this.init(stream);
}
Speakmonitor.prototype = Object.create(Eventsmanager.prototype);
Object.assign(Speakmonitor.prototype, {
    config: {
        volumeThreshold: -50,
        interval: 50,
        smoothing: 0.1,
        historyProbes: 3, // how many probes from histore we should test
        historyThreshold: 1, // how maby positive tests means speaking
        historyLength: 10
    },
    speaking: false,
    play: undefined,
    running: true,
    audioContext: null,
    sourceNode: null,
    analyser: null,
    speakingHistory: [],

    getMaxVolume: function getMaxVolume(analyser, dataArray) {
        "use strict";
        var maxVolume = -Infinity;
        analyser.getFloatFrequencyData(dataArray);
        var i;
        for (i = 4; i < dataArray.length; i += 1) {
            if (dataArray[i] > maxVolume && dataArray[i] < 0) {
                maxVolume = dataArray[i];
            }
        }
        return maxVolume;
    },

    // setThreshold: function (t) {
    //     "use strict";
    //     this.config.threshold = t;
    // },

    // setInterval: function (i) {
    //     "use strict";
    //     this.config.interval = i;
    // },

    stop: function () {
        "use strict";
        this.running = false;
        this.dispatch('volume_change', -100, this.config.volumeThreshold);
        if (this.speaking) {
            this.speaking = false;
            this.dispatch('stopped_speaking');
        }
        this.analyser.disconnect();
        this.sourceNode.disconnect();
        if (this.audioContext.state === "running") {
            this.audioContext.close();
        }
    },

    init: function init(stream) {
        "use strinct";
        var AudioContextApi = window.AudioContext || window.webkitAudioContext;
        // make it not break in non-supported browsers
        if (!AudioContextApi) {
            return false;
        }

        var config = this.config;

        this.audioContext = new AudioContextApi();
        // this.audioContext.addEventListener("statechange", function (e) {
        //     console.log("statechange", e.target.state);
        // });
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 512;

        this.analyser.smoothingTimeConstant = config.smoothing;

        var dataArray = new Float32Array(this.analyser.frequencyBinCount);

        // if (stream.jquery) {
        //     stream = stream[0];
        // }

        if (stream instanceof HTMLAudioElement || stream instanceof HTMLVideoElement) {
            //Audio Tag
            this.sourceNode = this.audioContext.createMediaElementSource(stream);
            if (this.play === undefined) {
                this.play = true;
            }
        } else {
            //WebRTC Stream
            this.sourceNode = this.audioContext.createMediaStreamSource(stream);
        }

        this.sourceNode.connect(this.analyser);

        if (this.play) {
            this.analyser.connect(this.audioContext.destination);
        }


        var i;
        for (i = 0; i < config.historyLength; i += 1) {
            this.speakingHistory.push(0);
        }

        // Poll the analyser node to determine if speaking
        // and emit events if changed
        var that = this;
        function looper() {
            setTimeout(function () {
                // console.log(that.speakingHistory);
                //check if stop has been called
                if (!that.running) {
                    return;
                }

                var currentVolume = that.getMaxVolume(that.analyser, dataArray);

                that.dispatch('volume_change', currentVolume, config.volumeThreshold);

                var j = 0;
                var speakHits = 0;
                if (currentVolume > config.volumeThreshold && !that.speaking) {
                    // trigger quickly, short history
                    for (j = that.speakingHistory.length - config.historyProbes; j < that.speakingHistory.length; j += 1) {
                        speakHits += that.speakingHistory[j];
                    }
                    if (speakHits >= config.historyThreshold) {
                        that.speaking = true;
                        that.dispatch('speaking');
                    }
                } else if (currentVolume < config.volumeThreshold && that.speaking) {
                    for (j = 0; j < that.speakingHistory.length; j += 1) {
                        speakHits += that.speakingHistory[j];
                    }
                    if (speakHits === 0) {
                        that.speaking = false;
                        that.dispatch('stopped_speaking');
                    }
                }

                that.speakingHistory.shift();//remove tail
                that.speakingHistory.push((currentVolume > config.volumeThreshold)
                    ? 1
                    : 0);

                looper();
            }, config.interval);
        }
        looper();


        return this;
    }
});


window.Speakmonitor = Speakmonitor;
/*global Eventsmanager, RTCPeerConnection, URL, window, alert, RTCSessionDescription, RTCIceCandidate, debugger, addEvent*/

/**
 * Single peer connection
 */
function WebRTCPeer(config) {
    "use strict";
    Eventsmanager.call(this, config);
    this.remotePeerId = config.remotePeerId || (alert("error no peer id!"));
    this.localStream = config.localStream || null;
    this.chat = config.chat || "error";
    this.connected = false;
    this.configuration = config.configuration || {
        iceServers: [
            {url: "stun:stun.l.google.com:19302"},
            {url: "stun:stun1.l.google.com:19302"},
            {url: "stun:stun2.l.google.com:19302"},
            {url: "stun:stun3.l.google.com:19302"},
            {url: "stun:stun4.l.google.com:19302"},
            {url: "stun:stun.services.mozilla.com"}
        ]
    };
    this.offerOptions = config.offerOptions || {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
        voiceActivityDetection: true
    };
    this.pc = new RTCPeerConnection(this.configuration);
    this.pc.addEventListener("icecandidate", this.onIceCandidate.bind(this));
    this.pc.addEventListener("addstream", this.onAddRemoteStream.bind(this));
    // console.log("%cCreateWebRTCPeer", "background-color:red", config);
}
WebRTCPeer.prototype = Object.create(Eventsmanager.prototype);

WebRTCPeer.prototype = Object.assign(WebRTCPeer.prototype, {
    isConnected: function isConnected() {
        "use strict";
        return !!this.connected;
    },
    startTransmitting: function startTransmitting(localStream) {
        "use strict";
        this.localStream = localStream;
        // console.log("startTransmitting", localStream);
        this.connected = true;
        this.pc.addStream(this.localStream);
        this.pc.createOffer(this.offerOptions).then(this.onGotLocalDescriptionOffer.bind(this));
    },
    stopTransmitting: function stopTransmitting() {
        "use strict";
        if (this.localStream) {
            if (typeof this.pc.removeStream === "function") {
                this.pc.removeStream(this.localStream);
            }
            //  else if (typeof this.pc.removeTrack === "function") {
            //     var that = this;
            //     this.localStream.getTracks().forEach(function (track) {
            //         that.pc.removeTrack(track);
            //     });
            // }
            delete this.localStream;
            this.sendToRemote({
                peer_cmd: "stop-transmitting"
            });
        }
    },
    startReceiving: function startReceiving(offerMessage) {
        "use strict";
        this.connected = true;
        this.receiveFromRemote(offerMessage);
        this.pc.createAnswer(this.offerOptions).then(this.onGotLocalDescriptionAnswer.bind(this));
    },
    stopReceiving: function stopReceiving() {
        "use strict";
        this.chat.removeUserVideoStream(this.remotePeerId);
    },
    onAddRemoteStream: function onAddRemoteStream(e) {
        "use strict";
        // console.log("addStream", e);
        this.chat.removeUserVideoStream(this.remotePeerId);
        this.chat.setUserVideoStream(this.remotePeerId, e.stream);
    },

    destructor: function destructor() {
        "use strict";
        this.chat.removeUserVideoStream(this.remotePeerId);
    },

    receiveFromRemote: function receiveFromRemote(obj) {
        "use strict";
        // console.log("obj", obj);
        switch (obj.peer_cmd) {
        case "answer-description":
        case "offer-description":
            if (obj.description) {
                this.pc.setRemoteDescription(new RTCSessionDescription(obj.description));
            }
            break;
        case "icecandidate":
            if (obj.icecandidate) {
                this.pc.addIceCandidate(new RTCIceCandidate(obj.icecandidate));
            }
            break;
        }
    },

    sendToRemote: function sendToRemote(obj) {
        "use strict";
        obj.cmd = "peer-message";
        obj.recipient_id = this.remotePeerId;
        var sketchpad = window.sketchpad;
        // console.log("sending to remote", obj);
        sketchpad.sendMessageToServer(obj);
    },

    onGotLocalDescriptionOffer: function onGotLocalDescriptionOffer(description) {
        "use strict";
        //Note that RTCPeerConnection won't start gathering candidates until setLocalDescription() is called: this is codified in JSEP IETF draft.
        this.pc.setLocalDescription(description);
        this.sendToRemote({
            peer_cmd: "offer-description",//offer-sdp ?
            description: description
        });
    },

    onGotLocalDescriptionAnswer: function onGotLocalDescriptionAnswer(description) {
        "use strict";
        //Note that RTCPeerConnection won't start gathering candidates until setLocalDescription() is called: this is codified in JSEP IETF draft.
        this.pc.setLocalDescription(description);
        this.sendToRemote({
            peer_cmd: "answer-description",//answer-sdp ?
            description: description
        });
    },

    onIceCandidate: function onIceCandidate(e) {
        "use strict";
        this.sendToRemote({
            peer_cmd: "icecandidate",//ice?
            icecandidate: e.candidate
        });
    }

});


/**
 * WebRTC connections manager
 */
function WebRTCConference(config) {
    "use strict";
    Eventsmanager.call(this, config);
    this.config = config;
    this.peers = [];
    this.chat = config.chat || "error";
}
WebRTCConference.prototype = Object.create(Eventsmanager.prototype);
WebRTCConference.prototype = Object.assign(WebRTCConference.prototype, {
    active: false,
    microphoneMuted: false,
    speakerMuted: false,
    isTransmitting: false,
    startTransmitting: function startTransmitting(config) {
        "use strict";
        // alert("start transmitting");
        if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function") {
            navigator.mediaDevices.getUserMedia(config.getUserMedia)
                .then(this.gotLocalStream.bind(this))
                .catch(this.error.bind(this));
        } else {
            // make event loop for subscriptions
            var that = this;
            setTimeout(function () {
                that.error("navigator.mediaDevices.getUserMedia not exists.");
            }, 0);
        }
    },
    gotLocalStream: function gotLocalStream(localStream) {
        "use strict";

        this.localStream = localStream;
        this.peers.forEach(function (peer) {
            peer.startTransmitting(localStream);
        });
        this.isTransmitting = true;


        this.dispatch("gotLocalStream", localStream);
        this.dispatch("startTransmitting", this.isTransmitting);
    },

    stopTransmitting: function stopTransmitting() {
        "use strict";
        if (this.localStream) {
            this.localStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        this.peers.forEach(function (peer) {
            peer.stopTransmitting();
        });
        delete this.localStream;
        this.isTransmitting = false;
        this.dispatch("stopTransmitting", this.isTransmitting);
    },
    getPeer: function getPeer(remotePeerId) {
        "use strict";
        var peer = this.peers.find(function (element) {
            if (element.remotePeerId === remotePeerId) {
                return element;
            }
        });
        return peer;
    },
    addPeer: function addPeer(remotePeerId, ignore) {
        "use strict";
        if (this.getPeer(remotePeerId)) {
            return;
        }
        var config = {
            remotePeerId: remotePeerId,
            chat: this.chat
        };
        var peer = new WebRTCPeer(config);
        this.peers.push(peer);
        if (this.isTransmitting) {
            peer.startTransmitting(this.localStream);
        }
    },
    removePeer: function removePeer(remotePeerId) {
        "use strict";
        // console.log("removePeer", remotePeerId);
        var removed = 0;
        var i = this.peers.length;
        for (i = this.peers.length - 1; i >= 0; i -= 1) {
            if (this.peers[i].remotePeerId === remotePeerId) {
                this.peers[i].destructor();
                this.peers.splice(i, 1);
                removed += 1;
            }
        }
        return removed;
    },

    receiveSignal: function receiveSignal(obj) {
        "use strict";
        var peer;
        // console.log("receiveSignal", obj);
        switch (obj.cmd) {
        case "peer-message":
            switch (obj.peer_cmd) {
            case "icecandidate":
            case "answer-description":
                peer = this.getPeer(obj.uid);
                if (peer) {
                    peer.receiveFromRemote(obj);
                } else {
                    console.error("Can not pass signal to non existing peer", "message", obj);
                }
                break;
            case "offer-description":
                peer = this.getPeer(obj.uid);
                peer.startReceiving(obj);
                break;
            case "stop-transmitting":
                peer = this.getPeer(obj.uid);
                peer.stopReceiving();
                break;

            }
            break;
        }
    },
    setTracksEnabled: function setTracksEnabled(enabled) {
        "use strict";
        this.stream.getTracks().forEach(function (track) {
            track.enabled = enabled;
        });
        this.tracksEnabled = enabled;
        this.dispatch("changeTracksEnabled", this.tracksEnabled);
        // console.log("mute mic", muted);
    },
    error: function error(e) {
        "use strict";
        console.error("WebRTCConference", e);
        this.dispatch("error", e);
    }
});

function isWebRTCSupported() {
    "use strict";
    return navigator.mediaDevices && navigator.mediaDevices.getUserMedia && RTCPeerConnection && RTCSessionDescription && RTCIceCandidate;
}
window.isWebRTCSupported = isWebRTCSupported;

function initWebRTC(sketchpad, chat) {
    "use strict";
    var webRTCConference = new WebRTCConference({chat: chat});
    sketchpad.on("customMessageFromServer", function (obj) {
        switch (obj.cmd) {
        case "peer-message":
            webRTCConference.receiveSignal(obj);
            break;
        }
    });
    sketchpad.sendMessageToServer({
        cmd: "webrtc-status",
        status: "ready"
    });

    function onAddOrUpdateClient(user) {
        if (user.webrtc && user.user_id !== sketchpad.user.user_id) {
            webRTCConference.addPeer(user.user_id);
        }
    }

    function onRemoveClient(user) {
        webRTCConference.removePeer(user.user_id);
    }

    sketchpad.on("addClient", onAddOrUpdateClient);
    sketchpad.on("updateClient", onAddOrUpdateClient);

    sketchpad.on("removeClient", onRemoveClient);
    chat.webrtcVideoButtonEl.classList.remove("disabled");
    chat.webrtcMicrophoneButtonEl.classList.remove("disabled");
    // alert("webrtc-status");
    webRTCConference.on("gotLocalStream", function (stream) {
        if (stream.getAudioTracks().length) {
            chat.webrtcMicrophoneButtonEl.classList.add("recording");
        } else {
            chat.webrtcMicrophoneButtonEl.classList.remove("recording");
        }
        if (stream.getVideoTracks().length) {
            chat.webrtcVideoButtonEl.classList.add("recording");
        } else {
            chat.webrtcVideoButtonEl.classList.remove("recording");
        }
        chat.setUserVideoStream(sketchpad.user.user_id, stream, "muted");
    });
    webRTCConference.on("stopTransmitting", function () {
        chat.webrtcMicrophoneButtonEl.classList.remove("recording");
        chat.webrtcVideoButtonEl.classList.remove("recording");
        chat.removeUserVideoStream(sketchpad.user.user_id);
    });


    // console.log("XXXX", chat.webrtcVideoButtonEl);

    var getUserMedia = {
        video: false,
        audio: false
    };
    addEvent(chat.webrtcVideoButtonEl, "tap", function () {
        getUserMedia.video = !getUserMedia.video;
        if (typeof window.ga === "function") {
            var gaEvent = {
                hitType: 'event',
                eventCategory: 'Sketchboard',
                eventAction: 'webrtc-video',
                eventLabel: 'WebRTC Video',
                eventValue: getUserMedia.video
            };
            // console.log('gaEvent', gaEvent);
            window.ga('send', gaEvent);
        }
        webRTCConference.stopTransmitting();
        if (getUserMedia.video || getUserMedia.audio) {
            webRTCConference.startTransmitting({
                getUserMedia: getUserMedia
            });
        }
    });

    addEvent(chat.webrtcMicrophoneButtonEl, "tap", function () {
        getUserMedia.audio = !getUserMedia.audio;
        if (typeof window.ga === "function") {
            var gaEvent = {
                hitType: 'event',
                eventCategory: 'Sketchboard',
                eventAction: 'webrtc-audio',
                eventLabel: 'WebRTC Audio',
                eventValue: getUserMedia.audio
            };
            // console.log('gaEvent', gaEvent);
            window.ga('send', gaEvent);
        }
        webRTCConference.stopTransmitting();
        if (getUserMedia.video || getUserMedia.audio) {
            webRTCConference.startTransmitting({
                getUserMedia: getUserMedia
            });
        }
    });

    return webRTCConference;

}
window.initWebRTC = initWebRTC;

/*global window, YT, URL, addEvent*/
function YTPlayer(videoContainerEl, sketchpad) {
    "use strict";
    var that = this;
    this.pauseFromServerThreshold = 1000;
    this.pauseBeforePlayThreshold = 1000;
    this.pauseFromServerTs = 0;
    this.videoContainerEl = videoContainerEl;
    this.sketchpad = sketchpad;

    // addEvent(document.body, "tap", function () {
    //     console.log("PLAYER CLICK");
    // }, true);
    addEvent(document.getElementById('room-video-close'), "click", function () {
        that.close("sendToOthers");
    });
    function handleVideoObj(obj) {
        switch (obj.cmd) {
        case "room-video-close":
            that.close();
            break;
        case "room-video-pause":
            that.pauseFromServer(obj);
            break;
        case "room-video-buffer":
            that.setFromServer(obj);
            break;
        case "room-video-play":
            that.playFromServer(obj);
            break;
        case "room-video-set":
            that.setFromServer(obj);
            break;
        }
    }
    sketchpad.on("customMessageFromServer", handleVideoObj);
    sketchpad.on("setMetaConfig", function (obj) {
        // console.log("!!!!!!!!!!!!!!!!!!!!!setMetaConfig", obj.roomVideoObj);
        if (obj.roomVideoObj && obj.roomVideoObj.cmd !== 'room-video-close') {
            var serverTimeDelata = (obj.timestamp - obj.roomVideoObj.timestamp) / 1000;
            that.setFromServer(obj.roomVideoObj, serverTimeDelata);
        }
    });


    // console.log("yt player");
    this.prepareElements();//init that.ytContainerEl


    window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {

        // var obj = {};
        // alert(that.currentStart);
        that.ytPlayer = new YT.Player(that.ytContainerEl, {
            height: videoContainerEl.clientHeight,
            width: videoContainerEl.clientWidth,
            enablejsapi: 1,
            color: "white",
            playerVars: {
                autoplay: 0
                // start: that.currentStart
                // controls: 1,
                // disablekb: 1,
                // fs: 1,
                // modestbranding: 1,
                // rel: 0,
                // showinfo: 0
            },            // videoId: that.currentYtId,
            // startSeconds: that.currentStart,
            // start: that.currentStart,
            events: {
                onReady: function onReady(event) {
                    // debugger;
                    that.apiReady = true;
                    // console.log("YT Ready", event, that.currentStart);
                    if (that.postponePlayerObj) {
                        var deltaTime = parseFloat(that.postponeAddTime) + parseFloat((Date.now() - that.postponeTimestamp) / 1000);
                        that.setFromServer(that.postponePlayerObj, deltaTime);
                    }
                    // setTimeout(function () {
                        // event.target.seekTo(that.currentStart);
                        // event.target.playVideo();
                    // }, 1000);
                },
                onStateChange: function onStateChange(event) {
                    var obj = {};
                    var currentTime = that.ytPlayer.getCurrentTime();
                    var stateChanged = false;
                    switch (event.data) {
                    case YT.PlayerState.ENDED:
                        that.setDisplayMode("ended");
                        console.log("%cYT.PlayerState.ENDED", "background-color:orange", that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event.m);
                        // that.hide();
                        break;
                    case YT.PlayerState.PLAYING:
                        that.setDisplayMode("playing");
                        console.log("%cYT.PlayerState.PLAYING", "background-color:orange", that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event);
                        obj = {
                            cmd: 'room-video-play',
                            videoUrl: that.ytPlayer.getVideoUrl()
                        };
                        that.sketchpad.sendMessageToServer(obj);
                        console.log("%cthat.sketchpad.sendMessageToServer:YT.PlayerState.PLAYING", "background-color: red", obj);
                        break;
                    case YT.PlayerState.PAUSED:
                        if (that.ignorePauseAfterServerPause) {
                            that.ignorePauseAfterServerPause = false;
                        }
                        if (that.ignorePauseAfterBuffering) {
                            that.ignorePauseAfterBuffering = false;
                        }
                        if ((that.pauseFromServerThreshold + that.pauseFromServerTs) < Date.now()) {
                            that.pauseQueueTo = setTimeout(function () {
                                that.pauseQueueTo = false;
                                obj = {
                                    cmd: 'room-video-pause',
                                    videoUrl: that.ytPlayer.getVideoUrl(),
                                    start: that.ytPlayer.getCurrentTime()
                                };
                                that.sketchpad.sendMessageToServer(obj);
                                console.log("%cthat.sketchpad.sendMessageToServer:YT.PlayerState.PAUSED", "background-color:red", obj);
                            }, that.pauseBeforePlayThreshold);
                        }
                        console.log("%cYT.PlayerState.PAUSED", "background-color:orange", that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event);
                        that.setDisplayMode("paused");
                        break;
                    case YT.PlayerState.BUFFERING:
                        that.ignorePauseAfterBuffering = true;
                        that.setDisplayMode("buffering");
                        console.log("%cYT.PlayerState.BUFFERING", "background-color:orange", that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event);
                        if (that.pauseQueueTo) {
                            clearTimeout(that.pauseQueueTo);
                            that.pauseQueueTo = 0;
                        }
                        if (that.currentStart !== currentTime) {
                            stateChanged = true;
                        }
                        if (stateChanged) {
                            that.currentVideoUrl = that.ytPlayer.getVideoUrl();
                            that.currentYtId = that.url2yt(that.currentVideoUrl);
                            that.currentStart = currentTime;
                            obj = {
                                cmd: 'room-video-buffer',
                                videoUrl: that.currentVideoUrl,
                                // video_id: that.currentYtId,
                                start: that.currentStart
                            };
                            that.sketchpad.sendMessageToServer(obj);
                            console.log("%cthat.sketchpad.sendMessageToServer:YT.PlayerState.BUFFERING", "background-color:red", obj);
                        }
                        break;
                    case YT.PlayerState.CUED:
                        that.setDisplayMode("cued");
                        console.log("%cYT.PlayerState.CUED", "background-color:orange", that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event);
                        break;
                    case YT.PlayerState.UNSTARTED:
                        that.setDisplayMode("unstarted");
                        console.log("%cYT.PlayerState.UNSTARTED", "background-color:orange", that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event);
                        break;
                    default:
                        that.setDisplayMode("unknown");
                        console.log("%cYT.PlayerState.UNKNOWN", "background-color:orange", event.data, that.ytPlayer.getVideoUrl(), that.ytPlayer.getCurrentTime(), event);
                        break;

                    }
                    // console.log(event.data, " = ", that.ytPlayer.getPlayerState(), JSON.stringify(event.target.m), JSON.stringify(event.target.a), JSON.stringify(event.target.c), JSON.stringify(event.target.s));

                    // console.log("onStateChange", event);
                    // updateState();
                },
                onError: function onError(e) {
                    // debugger;
                    console.error("YT-error", e);
                    switch (parseInt(e.data)) {
                    case 2:
                        console.error("wrong param");
                        break;
                    case 5:
                        console.error("html5 player error");
                        break;
                    case 100:
                        console.error("no found");
                        break;
                    case 101:
                        console.error("can't play in frame");
                        break;
                    case 105:
                        console.error("can't play in frame - spooky");
                        break;
                    default:
                        console.error("unknown player error", e.data);
                    }
                }
            }
        });
        // window.ytPlayer.seekTo()
        window.ytPlayer = that.ytPlayer;
    };

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.updateProgressPosition = this.updateProgressPosition;
    this.hide();
    return that;
}
Object.assign(YTPlayer.prototype, {
    currentStart: 0,
    currentYtId: null,
    url2yt: function url2yt(urlStr) {
        'use strict';
        var ID = '';
        var url = urlStr.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        } else {
            ID = url;
        }
        return ID;
    },
    url2t: function url2yt(urlStr) {
        'use strict';
        try {
            var url = new URL(urlStr);
            var start = url.searchParams.get("start") || url.searchParams.get("t");
            return parseFloat(start);
        } catch (e) {
            console.log("not yt", e, urlStr);
        }
    },
    prepareElements: function () {
        'use strict';
        var ytContainerEl = document.createElement("div");
        Object.assign(ytContainerEl.style, {
            width: "100%",
            height: "100%"
        });
        this.ytContainerEl = ytContainerEl;
        this.videoContainerEl.appendChild(ytContainerEl);
    },

    pauseFromServer: function pauseFromServer() {
        'use strict';
        if (this.ytPlayer.getPlayerState() === YT.PlayerState.PAUSED) {
            return;
        }
        this.ignorePauseAfterServerPause = true;
        this.pauseFromServerTs = Date.now();
        this.ytPlayer.pauseVideo();
        if (typeof window.ga === "function") {
            var gaEventHide = {
                hitType: 'event',
                eventCategory: 'Sketchboard',
                eventAction: 'yt-pauseFromServer',
                eventLabel: this.currentVideoUrl,
                eventValue: 1
            };
            window.ga('send', gaEventHide);
        }
    },
    playFromServer: function playFromServer() {
        'use strict';
        if (this.ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
            // debugger;
            this.ytPlayer.playVideo();
        }
        if (typeof window.ga === "function") {
            var gaEventHide = {
                hitType: 'event',
                eventCategory: 'Sketchboard',
                eventAction: 'yt-playFromServer',
                eventLabel: this.currentVideoUrl,
                eventValue: 1
            };
            window.ga('send', gaEventHide);
        }
    },
    setFromServer: function set(obj, addTime) {
        'use strict';
        if (!this.apiReady) {
            this.postponePlayerObj = obj;
            this.postponeAddTime = addTime;
            this.postponeTimestamp = Date.now();
            return;
        }
        console.log("yt:apiReady", this.apiReady);
        var ytId = this.url2yt(obj.videoUrl);
        var start = parseFloat(obj.start) || this.url2t(obj.videoUrl) || 0;
        if (!ytId) {
            return;
        }
        this.show();

        switch (obj.cmd) {
        case 'room-video-set':
        case 'room-video-play':
            if (addTime > 0) {
                start += addTime;
            }
            break;
        }

        if (this.currentYtId !== ytId) {
            this.currentVideoUrl = obj.videoUrl;
            this.currentYtId = ytId;
            this.ytPlayer.loadVideoById(this.currentYtId);
            if (obj.cmd !== 'room-video-play') {
                this.ytPlayer.pauseVideo();
            }
        }
        if (this.currentStart !== start) {
            this.currentStart = start;
            this.ytPlayer.seekTo(this.currentStart);
        }
        if (typeof window.ga === "function") {
            var gaEventHide = {
                hitType: 'event',
                eventCategory: 'Sketchboard',
                eventAction: 'yt-' + obj.cmd,
                eventLabel: obj.videoUrl,
                eventValue: 1
            };
            window.ga('send', gaEventHide);
        }
        switch (obj.cmd) {
        case 'room-video-set':
        case 'room-video-play':
            // debugger;
            this.ytPlayer.playVideo();
            break;
        }

    },
    setDisplayMode: function setDisplayMode(mode) {
        'use strict';
        var states = ['ended', 'paused', 'playing', 'buffering', 'cued', 'unstarted', 'unknown'];
        var that = this;
        states.forEach(function remove(state) {
            that.videoContainerEl.classList.remove(state);
            document.body.classList.remove('room-player-' + state);
        });

        this.videoContainerEl.classList.add(mode);
        document.body.classList.add('room-player-' + mode);
    },
    show: function show() {
        'use strict';
        this.videoContainerEl.style.display = "block";
        // this.ytPlayer.stopV
    },
    hide: function hide() {
        'use strict';
        this.videoContainerEl.style.display = "none";
        // this.ytPlayer.stopV
    },
    close: function close(sendToOthers) {
        'use strict';
        if (sendToOthers) {
            var obj = {
                cmd: 'room-video-close'
            };
            this.sketchpad.sendMessageToServer(obj);
        }

        this.videoContainerEl.style.display = "none";
        this.ytPlayer.stopVideo();
    }
});
window.YTPlayer = YTPlayer;

/*global window, alert, console, escapeHtml, Eventsmanager, addEvent, Speakmonitor, Keyshortcuts, URL, YTPlayer*/
/*global Popnotifications, Sketchpad, Sketch*/
function Chat(config) {
    "use strict";
    Eventsmanager.call(this, config);

    this.config = config;
    this.icons = config.icons;
    this.maxMessages = parseInt(config.maxMessages, 10) || 1024;
    this.maxMessageLength = parseInt(config.maxMessageLength, 10) || 1024;
    this.messagesElements = [];
    this.containerEl = config.containerEl;
    if (!(config.sketchpad instanceof Sketchpad)) {
        throw new Error("chat.js:Chat::constructor - config.sketchpad instanceof Sketchpad is required.");
    }
    this.sketchpad = config.sketchpad;
    this.sendMessageFunction = config.sendMessageFunction;
    this.fullWidth = parseInt(config.fullWidth, 10) || 320; //with border
    this.compactWidth = parseInt(config.compactWidth, 10) || 32; //with border
    if (!(config.popnotifications instanceof Popnotifications)) {
        throw new Error("chat.js:Chat::constructor - config.popnotifications instanceof Popnotifications is required.");
    }
    this.popnotifications = config.popnotifications;
    this.usersElements = {};

    this.prepareElements(this.sketchpad);
    this.onResize();
    // var that = this;
    // this.sketchpad.on("addClient", function (u) {
    //     // var i;
    //     // for (i = 0; i < 40; i += 1) {
    //     //     that.addUser(u);
    //     // }
    //     // that.addUser(u);
    // });
    this.viewportPositionHistory = [];
    this.sketchpad.on("addClient", this.addUser.bind(this));
    this.sketchpad.on("updateClient", this.updateUser.bind(this));
    this.sketchpad.on("removeClient", this.removeUser.bind(this));
    this.unreadMessagesCount = 0;
    this.updateChatIcon();
    var keyshortcuts = new Keyshortcuts();
    var that = this;
    keyshortcuts.addShortcut({keyCode: 191}, function (e) {// "/"
        if (document.activeElement !== that.messageInputEl) {
            e.preventDefault();
            e.stopPropagation();
            that.messageInputEl.focus();
        }
    });
    this.keyshortcuts = keyshortcuts;
    // var that = this;
    window.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
        case 27:
            if (document.activeElement === that.messageInputEl) {
                e.preventDefault();
                e.stopPropagation();
                that.messageInputEl.blur();
            }
            break;
        }
    }, true); //<- set to "true" required to be first and have change to stopPropagation()

}


Chat.prototype = Object.create(Eventsmanager.prototype);
Object.assign(Chat.prototype, {
    hidden: false,
    tools: {},
    features: [],
    getWidth: function getWidth() {
        "use strict";
        switch (this.displayMode) {
        case "full":
            return this.containerEl.clientWidth;
            // return this.fullWidth;
        case "compact":
            return this.compactWidth;
        default:
            return 0;
        }
    },
    highlightLinks: function highlightLinks(text) {
        "use strict";
        // var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var exp = /(\b(https?):\/\/[\-A-Z0-9+&@#\/%?=~_\|!:,.;]*[\-A-Z0-9+&@#\/%=~_\|])/ig;
        return text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
    },
    setUserVideoStream: function setUserVideoStream(user_id, stream, ownStream) {
        "use strict";
        // console.log("Set Video Stream", stream);

        // this.usersElements[user_id].muted = ownStream;
        this.usersElements[user_id].stream = stream;
        var that = this;
        var videoEl = document.createElement("video");

        videoEl.className = "preview";
        videoEl.srcObject = stream;
        if (ownStream) {
            videoEl.muted = true;
        } else {
            if (stream.getAudioTracks().length) {
                this.usersElements[user_id].speakmonitor = new Speakmonitor(stream);
                this.usersElements[user_id].speakmonitor.on("speaking", function () {
                    that.displayUserVideo(user_id);
                });
            }
        }
        videoEl.play();
        this.usersElements[user_id].videoEl = videoEl;
        this.usersElements[user_id].userEl.appendChild(videoEl);
        this.displayUserVideo(user_id);
    },
    // pauseRoomVideo: function playRoomVideo() {
    //     'use strict';
    //     this.roomPlayer.pause();
    // },

    // playRoomVideo: function playRoomVideo(obj) {
    //     'use strict';
    //     this.roomPlayer.set(obj);
    // },

    // playYouTubeVideo: function (url, start) {
    //     'use strict';
    //     console.log('playYouTubeVideo', url);
    //     if (!start) {
    //         start = 0;
    //     }
    //     var obj = {
    //         cmd: 'room-video-play',
    //         start: start,
    //         videoUrl: url
    //     };
    //     this.sketchpad.sendMessageToServer(obj);
    //     // this.playRoomVideo(obj);
    // },

    // pauseYouTubeVideo: function () {
    //     'use strict';
    //     var obj = {
    //         cmd: 'room-video-pause'
    //     };
    //     this.sketchpad.sendMessageToServer(obj);
    // },

    removeUserVideoStream: function removeUserVideoStream(user_id) {
        "use strict";
        // console.log("delete Video Stream", user_id);
        if (this.usersElements[user_id].videoEl) {
            this.usersElements[user_id].userEl.removeChild(this.usersElements[user_id].videoEl);
            this.usersElements[user_id].videoEl.srcObject = null;
            delete this.usersElements[user_id].videoEl;
        }
        if (this.mainVid === user_id) {
            this.videoEl.srcObject = null;
            this.videoEl.style.display = "none";
        }

        if (this.usersElements[user_id].speakmonitor) {
            this.usersElements[user_id].speakmonitor.stop();
        }

        delete this.usersElements[user_id].stream;
    },
    getVideoFrameImage: function getVideoFrameCanvas(user_id) {
        "use strict";
        if (!this.usersElements[user_id]) {
            //user offline
            return false;
        }
        var canvas = document.createElement("canvas");
        var video = this.usersElements[user_id].videoEl;
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL('image/jpeg');
        }
        return false;
    },

    displayUserVideo: function displayUserVideo(user_id) {
        "use strict";
        var stream = this.usersElements[user_id].stream;
        // var muted = this.usersElements[user_id].muted;
        if (stream) {
            if (this.videoEl.srcObject !== stream) {
                this.mainVid = user_id;
                this.videoEl.srcObject = stream;
            }
            this.videoEl.style.display = "block";
            // console.log("USER", user_id, "is streaming");
            var that = this;
            Object.keys(this.usersElements).forEach(function (key) {
                if (that.usersElements[key].videoEl && that.usersElements[key].videoEl.style) {
                    if (key === user_id) {
                        that.usersElements[key].videoEl.style.display = "none";
                    } else {
                        that.usersElements[key].videoEl.style.display = "block";
                    }
                }
            });

        } else {
            this.videoEl.style.display = "none";
            // console.log("USER", user_id, "is NOT streaming");
        }
    },
    updateScrolls: function updateScrolls() {
        "use strict";
        var el = this.usersEl;
        if (el.scrollTop === 0) {
            this.usersScrollUpEl.style.display = "none";
        } else {
            this.usersScrollUpEl.style.display = "block";
        }
        if (Math.abs(el.scrollTop - (el.scrollHeight - el.clientHeight)) < 1) {
            this.usersScrollDownEl.style.display = "none";
        } else {
            this.usersScrollDownEl.style.display = "block";
        }

        if (el.scrollLeft === 0) {
            this.usersScrollLeftEl.style.display = "none";
        } else {
            this.usersScrollLeftEl.style.display = "block";
        }

        if (Math.abs(el.scrollLeft - (el.scrollWidth - el.clientWidth)) < 1) {
            this.usersScrollRightEl.style.display = "none";
        } else {
            this.usersScrollRightEl.style.display = "block";
        }

    },
    scrollBy: function scrollBy(x, y) {
        "use strict";
        var el = this.usersEl;
        if (!x && !y) {
            return;
        }
        var dx = Math.round(x / 10);
        var dy = Math.round(y / 10);
        el.scrollLeft += dx;
        el.scrollTop += dy;
        x -= dx;
        y -= dy;
        var that = this;
        setTimeout(function () {
            that.scrollBy(x, y);
        }, 20);
    },
    prepareElements: function prepareElements(sketchpad) {
        "use strict";
        var that = this;

        this.videoContainerEl = this.containerEl.querySelector(".video-container");
        this.usersOuterEl = this.containerEl.querySelector(".users-outer");

        this.usersScrollLeftEl = this.containerEl.querySelector(".users-outer .scroll.left");
        this.usersScrollRightEl = this.containerEl.querySelector(".users-outer .scroll.right");
        this.usersScrollUpEl = this.containerEl.querySelector(".users-outer .scroll.up");
        this.usersScrollDownEl = this.containerEl.querySelector(".users-outer .scroll.down");

        this.usersEl = this.containerEl.querySelector(".users");
        this.messageHistoryEl = this.containerEl.querySelector(".messageHistory");
        this.messageInputBarEl = this.containerEl.querySelector(".messageInputBar");
        this.messageInputEl = this.containerEl.querySelector(".messageInput");
        this.messageInputEl.maxLength = this.maxMessageLength;
        this.messageSendEl = this.containerEl.querySelector(".messageSend");
        this.videoEl = this.containerEl.querySelector(".video");

        this.roomVideoContainerEl = this.containerEl.querySelector('.room-video');
        if (this.roomVideoContainerEl) {
            this.roomPlayer = new YTPlayer(this.roomVideoContainerEl, sketchpad);
        }

        addEvent(this.sketchpad.containerEl, "touchstart", function () {
            if (document.activeElement === that.messageInputEl) {
                document.activeElement.blur();
            }
        });

        this.videoEl.addEventListener("dragstart", function (e) {
            var canvas = document.createElement("canvas");
            canvas.width = that.videoEl.videoWidth;
            canvas.height = that.videoEl.videoHeight;
            var context2D = canvas.getContext("2d");
            context2D.drawImage(that.videoEl, 0, 0, canvas.width, canvas.height);
            // console.log(canvas.toDataURL());
            e.dataTransfer.setData("url", canvas.toDataURL());
            var img = document.createElement("img");
            img.src = canvas.toDataURL();
            e.dataTransfer.setDragImage(img, 0, 0);

        });
        this.webrtcControlsEl = this.containerEl.querySelector(".webrtc-controls");
        this.webrtcMicrophoneButtonEl = this.containerEl.querySelector(".microphone-btn");
        this.webrtcVideoButtonEl = this.containerEl.querySelector(".video-btn");

        this.chatIconEl = this.containerEl.querySelector(".chat-icon");

        // addEvent(this.containerEl, "swipe-right", function () {
        //     if (that.getDisplayMode() === "full") {
        //         if (typeof window.ga === "function") {
        //             var gaEvent = {
        //                 hitType: 'event',
        //                 eventCategory: 'Sketchbook',
        //                 eventAction: 'hide-chat',
        //                 eventLabel: 'Hide chat - swipe',
        //                 eventValue: 1
        //             };
        //             // console.log('gaEvent', gaEvent);
        //             window.ga('send', gaEvent);
        //         }
        //         that.setDisplayMode("compact");
        //     }
        // }, true);

        // addEvent(this.usersOuterEl, "tap", function (e) {
        //     if (that.getDisplayMode() === "compact") {
        //         that.setDisplayMode("full");
        //         if (e.preventDefault && e.stopPropagation) {
        //             e.preventDefault();
        //             e.stopPropagation();
        //         }
        //     }
        // });

        addEvent(this.chatIconEl, "tap", function () {
            if (that.getDisplayMode() === "full") {
                that.setDisplayMode("compact");
                if (typeof window.ga === "function") {
                    var gaEventHide = {
                        hitType: 'event',
                        eventCategory: 'Sketchbook',
                        eventAction: 'hide-chat',
                        eventLabel: 'Hide chat - click',
                        eventValue: 1
                    };
                    // console.log('gaEvent', gaEvent);
                    window.ga('send', gaEventHide);
                }
            } else {
                that.setDisplayMode("full");
                if (typeof window.ga === "function") {
                    var gaEventShow = {
                        hitType: 'event',
                        eventCategory: 'Sketchbook',
                        eventAction: 'show-chat',
                        eventLabel: 'Hide chat - click',
                        eventValue: 1
                    };
                    // console.log('gaEvent', gaEvent);
                    window.ga('send', gaEventShow);
                }
            }
        });

        addEvent(this.usersEl, "scroll", this.updateScrolls.bind(this));

        // addEvent(this.usersOuterEl, "wheel", function (e) {
        //     e.stopPropagation();
        // });

        addEvent(this.usersScrollUpEl, "tap", function () {
            that.scrollBy(0, -that.usersOuterEl.clientHeight / 2);
        });
        addEvent(this.usersScrollDownEl, "tap", function () {
            that.scrollBy(0, that.usersOuterEl.clientHeight / 2);
        });
        addEvent(this.usersScrollLeftEl, "tap", function () {
            that.scrollBy(-that.usersOuterEl.clientWidth / 2, 0);
        });
        addEvent(this.usersScrollRightEl, "tap", function () {
            that.scrollBy(that.usersOuterEl.clientWidth / 2, 0);
        });
        //!!! no! fuck up with ui(x)
        // addEvent(this.containerEl, "mouseenter", function (e) {
        //     e.stopPropagation();
        //     if (document.activeElement !== that.messageInputEl) {
        //         that.messageInputEl.focus();
        //         // console.log("mouseenter", e);
        //     }
        // });
        // addEvent(this.sketchpad.containerEl, "mouseenter", function (e) {
        //     e.stopPropagation();
        //     that.messageInputEl.blur();
        //     // console.log("mouseleave", e);
        // });
        function refreshSendButton() {
            var message = that.messageInputEl.value;
            if (message.length) {
                that.messageSendEl.classList.remove("disabled");
                that.messageSendEl.disabled = false;
            } else {
                that.messageSendEl.classList.add("disabled");
                that.messageSendEl.disabled = true;
            }
        }
        function sendMessageFromInput() {
            // console.log("MESSAGE INPUT", message);
            var message = that.messageInputEl.value;
            if (message) {
                that.sendMessageFunction(message);
                that.messageInputEl.value = "";
                refreshSendButton();
            }
            if (typeof window.ga === "function") {
                var gaEvent = {
                    hitType: 'event',
                    eventCategory: 'Sketchboard',
                    eventAction: 'chat-message-send',
                    eventLabel: 'Chat message send',
                    eventValue: 1
                };
                // console.log('gaEvent', gaEvent);
                window.ga('send', gaEvent);
            }
        }
        addEvent(this.messageSendEl, "tap", sendMessageFromInput);
        addEvent(this.messageInputEl, "input", refreshSendButton);
        this.messageInputEl.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                sendMessageFromInput();
            }
        });
    },
    onResize: function onResize() {
        "use strict";
        var height = this.containerEl.clientHeight;
        this.height = height;
        var videoElHeight = (this.isFeature("webrtc"))
            ? this.videoContainerEl.offsetHeight
            : 0;
        var chatIconElHeight = this.chatIconEl.offsetHeight;
        var usersOuterElHeight = this.usersOuterEl.offsetHeight;
        var messageInputBarHeight = this.messageInputBarEl.offsetHeight;
        var messageHistoryHieght = this.height - videoElHeight - usersOuterElHeight - messageInputBarHeight - chatIconElHeight;
        if (messageHistoryHieght < 0) {
            messageHistoryHieght = 0;
        }
        usersOuterElHeight = (this.height - chatIconElHeight);
        if (usersOuterElHeight < 0) {
            usersOuterElHeight = 0;
        }

        switch (this.getDisplayMode()) {
        case "compact":
            this.usersOuterEl.style.height = usersOuterElHeight + "px";
            break;
        default:
            this.messageHistoryEl.style.height = messageHistoryHieght + "px";

        }

        this.scrollToBottom();
        this.updateScrolls();

    },

    addFeature: function setFeature(feature) {
        "use strict";
        this.features.push(feature);
        this.containerEl.classList.add("feature-" + feature);
        this.onResize();
        this.dispatch("featuresChanged", this.features);
    },
    isFeature: function isFeature(feature) {
        "use strict";
        return (this.features.indexOf(feature) !== -1);
    },
    removeFeature: function removeFeature(feature) {
        "use strict";
        var i;
        for (i = this.features.length - 1; i >= 0; i -= 1) {
            if (this.features[i] === feature) {
                this.features.splice(i, 1);
            }
        }
        this.containerEl.classList.remove("feature-" + feature);
        this.onResize();
        this.dispatch("featuresChanged", this.features);
    },

    historyBegin: function () {
        "use strict";
        this.disabledNotification = true;
    },
    historyEnd: function () {
        "use strict";
        this.disabledNotification = false;
    },

    updateChatIcon: function updateChatIcon() {
        "use strict";
        switch (this.getDisplayMode()) {
        case "compact":
            if (this.unreadMessagesCount) {
                this.chatIconEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.chatNewMessages) || "!";// '<i class="fal fa-comment-alt" aria-hidden="true"></i>';
            } else {
                this.chatIconEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.chat) || "<";// '<i class="fal fa-comment" aria-hidden="true"></i>';
            }
            break;
        default:
            this.chatIconEl.innerHTML = (this.icons && this.icons.ui && this.icons.ui.right) || ">";//'<i class="fal fa-angle-right" aria-hidden="true"></i>';
        }
    },
    setDisplayMode: function setDisplayMode(mode) {
        "use strict";
        this.containerEl.classList.remove(this.displayMode);
        this.displayMode = mode;
        this.containerEl.classList.add(this.displayMode);
        this.onResize();
        if (mode === "full") {
            this.scrollToBottom();
            this.unreadMessagesCount = 0;
            this.usersOuterEl.style.height = "48px";
        }
        this.usersOuterEl.scrollLeft = 0;
        this.usersOuterEl.scrollTop = 0;
        this.updateChatIcon();
        this.onResize();
        this.dispatch("changeDisplayMode", this.displayMode);
    },

    getDisplayMode: function getDisplayMode() {
        "use strict";
        return this.displayMode;
    },

    getUser: function getUser(userId) {
        "use strict";
        var user = this.sketchpad.room.getClientById(userId);
        user.user_color_str = "rgba(" + user.user_color.r + "," + user.user_color.g + "," + user.user_color.b + "," + user.user_color.a + ")";
        return user;
        // return {
        //     user_name: userId,
        //     user_color: "rgba(255,123,22,1)"
        // };
    },

    getUserEl: function getUserEl(user_id) {
        "use strict";
        return this.usersElements[user_id].userEl;
    },
    addUser: function addUser(user) {
        "use strict";
        var userEl = document.createElement("div");
        userEl.className = "user";
        userEl.style.backgroundColor = "rgba(" + user.user_color.r + "," + user.user_color.g + "," + user.user_color.b + "," + user.user_color.a + ")";
        this.usersElements[user.user_id] = {};
        this.usersElements[user.user_id].userEl = userEl;

        var previewEl = document.createElement("div");
        previewEl.className = "preview";
        previewEl.textContent = user.user_name.substring(0, 1);

        userEl.appendChild(previewEl);

        var that = this;
        var selfClick = (user.user_id === that.sketchpad.user.user_id);//is it me?

        var tmpViewport = {};

        function setViewport(sketchpad, viewport) {
            var sketch = sketchpad.room.getSketchBySid(viewport.sid);
            if (sketch instanceof Sketch) {
                sketchpad.room.setActiveSketch(sketchpad, sketch);
                sketchpad.setViewportPosition(parseFloat(viewport.x), parseFloat(viewport.y));
                sketchpad.setScale(parseFloat(viewport.scale));
                sketchpad.setRotation(parseFloat(viewport.rotation));
            } else {
                console.error("target sketch not exists #:" + viewport.sid);
            }
        }

        function onUserTap() {
            // console.log("onUserClick", e, user);
            // if ((that.getDisplayMode() === "full") && (user.user_id === window.sketchpad.user.user_id)) {
            //     that.setDisplayMode("compact");
            // } else {
            //     that.setDisplayMode("full");
            // }
            //
            // save current viewport
            tmpViewport = Object.assign({}, that.sketchpad.getCurrentViewport());
            var viewport = user.viewport;

            if (selfClick) {
                if (that.viewportPositionHistory.length) {
                    viewport = that.viewportPositionHistory[that.viewportPositionHistory.length - 1];// only preview
                }
            }
            setViewport(that.sketchpad, viewport);
        }
        function onUserPop() {
            // alert("onUserPop", selfClick);
            if (tmpViewport) {
                setViewport(that.sketchpad, tmpViewport);
            }
        }
        function goToViewport() {
            tmpViewport = null;


            var viewport = user.viewport;

            if (selfClick) {
                if (that.viewportPositionHistory.length) {
                    viewport = that.viewportPositionHistory.pop();
                } else {
                    location.reload();
                }
            } else {
                that.viewportPositionHistory.push(that.sketchpad.getCurrentViewport());
                viewport = user.viewport;
            }
            // var sketch = that.sketchpad.room.getSketchBySid(user.viewport.sid);
            setViewport(that.sketchpad, viewport);
        }

        function displayVideo() {
            that.displayUserVideo(user.user_id);
        }
        addEvent(userEl, "tap", displayVideo);
        addEvent(userEl, "tap", onUserTap); //preview vieport
        addEvent(userEl, "pop", onUserPop); // restore viewport
        addEvent(userEl, "dblclick", goToViewport); //go to viewport

        // addEvent(userEl, "mouseenter", displayVideo);
        // console.log("addUser", user);
        this.usersEl.appendChild(userEl);

        this.addStatus({
            message: escapeHtml(user.user_name) + " has entered the room"
        });
        this.updateScrolls();
    },
    updateUser: function updateUser(ignore) {
        "use strict";
        return;
        // console.log("updateUser", user);
    },
    removeUser: function removeUser(user) {
        "use strict";
        this.usersEl.removeChild(this.getUserEl(user.user_id));
        // console.log("removeUser", user);
        this.addStatus({
            message: escapeHtml(user.user_name) + " has left the room"
        });
        this.updateScrolls();
    },

    scrollToBottom: function scrollToBottom() {
        "use strict";
        this.messageHistoryEl.scrollTop = this.messageHistoryEl.scrollHeight;
    },
    addStatus: function addStatus(obj) {
        "use strict";
        var statusElements = {
            containerEl: document.createElement("div"),
            datetimeEl: document.createElement("div"),
            bodyEl: document.createElement("div")
        };
        // var user = this.getUser(obj.user_id);
        statusElements.containerEl.className = "status";

        statusElements.datetimeEl.className = "datetime";
        //statusElements.datetimeEl.textContent = new Date().toISOString().substr(0, 19).replace("T", " ");

        statusElements.bodyEl.className = "body";
        statusElements.bodyEl.innerHTML = obj.message;

        statusElements.containerEl.appendChild(statusElements.datetimeEl);
        statusElements.containerEl.appendChild(statusElements.bodyEl);

        this.messageHistoryEl.appendChild(statusElements.containerEl);
        this.scrollToBottom();
        // console.log("addMessage", obj);
    },

    getTextMessageElements: function getTextMessageElements(obj) {
        "use strict";
        var messageElements = {
            containerEl: document.createElement("div"),
            avatarEl: document.createElement("div"),
            nicknameEl: document.createElement("div"),
            datetimeEl: document.createElement("div"),
            bodyEl: document.createElement("div")
        };
        messageElements.containerEl.className = "message";

        // var img = document.createElement("img");
        // img.src = this.getVideoFrameImage(obj.user_id);
        // img.style.position = "absolute";
        // img.style.left = 0;
        // img.style.top = 0;
        messageElements.avatarEl.className = "avatar";
        messageElements.avatarEl.textContent = String(obj.user_name).substring(0, 1);
        messageElements.avatarEl.style.backgroundColor = String(obj.user_color_str);
        messageElements.avatarEl.style.backgroundSize = "cover";
        messageElements.avatarEl.style.backgroundPosition = "center";
        // messageElements.avatarEl.style.backgroundImage = "url(" + this.getVideoFrameImage(obj.user_id) + ")";
        messageElements.avatarEl.style.fontSize = "48px";
        messageElements.avatarEl.style.lineHeight = "48px";
        messageElements.avatarEl.style.textAlign = "center";
        messageElements.avatarEl.style.color = "rgba(255,255,255,0.5)";
        // messageElements.avatarEl.appendChild(img);
        messageElements.nicknameEl.className = "nickname";
        messageElements.nicknameEl.textContent = obj.user_name;

        messageElements.datetimeEl.className = "datetime";
        messageElements.datetimeEl.textContent = new Date(obj.timestamp).toISOString().substr(0, 19).replace("T", " ");

        messageElements.bodyEl.className = "body";
        messageElements.bodyEl.innerHTML = this.highlightLinks(obj.message);

        messageElements.containerEl.appendChild(messageElements.datetimeEl);
        messageElements.containerEl.appendChild(messageElements.avatarEl);
        messageElements.containerEl.appendChild(messageElements.nicknameEl);
        messageElements.containerEl.appendChild(messageElements.bodyEl);
        return messageElements;

    },
    getWelcomeMessageElements: function getWelcomeMessageElements(obj) {
        "use strict";
        var messageElements = {
            containerEl: document.createElement("div"),
            // datetimeEl: document.createElement("div"),
            bodyEl: document.createElement("div")
        };
        // if (!obj.timestamp) {
        //     obj.timestamp = new Date().getTime();
        // }
        messageElements.containerEl.className = "welcome";

        // messageElements.datetimeEl.className = "datetime";
        // messageElements.datetimeEl.textContent = new Date(obj.timestamp).toISOString().substr(0, 19).replace("T", " ");

        messageElements.bodyEl.className = "body";
        messageElements.bodyEl.innerHTML = obj.html;

        // messageElements.containerEl.appendChild(messageElements.datetimeEl);
        messageElements.containerEl.appendChild(messageElements.bodyEl);
        return messageElements;

    },
    getStatusMessageElements: function getStatusMessageElements(obj) {
        "use strict";
        var messageElements = {
            containerEl: document.createElement("div"),
            // datetimeEl: document.createElement("div"),
            bodyEl: document.createElement("div")
        };
        // if (!obj.timestamp) {
        //     obj.timestamp = new Date().getTime();
        // }
        messageElements.containerEl.className = "status";

        // messageElements.datetimeEl.className = "datetime";
        // messageElements.datetimeEl.textContent = new Date(obj.timestamp).toISOString().substr(0, 19).replace("T", " ");

        messageElements.bodyEl.className = "body";
        messageElements.bodyEl.innerHTML = obj.html;

        // messageElements.containerEl.appendChild(messageElements.datetimeEl);
        messageElements.containerEl.appendChild(messageElements.bodyEl);
        return messageElements;

    },

    changeUserColor: function changeUserColor(user_id, color_str) {
        "use strict";
        var userEl = this.getUserEl(user_id);
        if (!userEl) {
            console.debug("unknown user for change color", user_id, color_str);
            return;
        }
        userEl.style.backgroundColor = color_str;

    },
    addMessage: function addMessage(obj) {
        "use strict";
        var messageElements;
        var displayNotificationIfNeeded = true;
        switch (obj.cmd) {
        case "nick-changed":
            messageElements = this.getStatusMessageElements(obj);
            displayNotificationIfNeeded = false;
            break;
        case "welcome-message":
            messageElements = this.getWelcomeMessageElements(obj);
            displayNotificationIfNeeded = false;
            break;
        default:
            messageElements = this.getTextMessageElements(obj);
        }

        this.messageHistoryEl.appendChild(messageElements.containerEl);
        this.messagesElements.push(messageElements.containerEl);
        if (this.messagesElements.length > this.maxMessages) {
            this.messageHistoryEl.removeChild(this.messagesElements.shift());
        }

        this.scrollToBottom();
        if (this.getDisplayMode() !== "full") {
            this.unreadMessagesCount += 1;
        }
        var that = this;
        if (displayNotificationIfNeeded) {
            if (this.popnotifications && !this.disabledNotification && (this.getDisplayMode() !== "full" || this.sketchpad.away)) {
                this.popnotifications.notification(obj.user_name, obj.message, {type: "leaf", timeout: 3000, onClick: function () {
                    if (that.getDisplayMode() !== "full") {
                        that.setDisplayMode("full");
                    }

                }});
            }
        }

        this.updateChatIcon();
        // console.log("addMessage", obj);
    },
    changeNick: function changeNick(obj) {
        'use strict';
        var userEl = this.getUserEl(obj.user_id);
        console.log("userEl", userEl);
        var firstLetter = String(obj.user_name.substring(0, 1)) || "?";
        userEl.querySelector('.preview').textContent = firstLetter;
        // messageElements.avatarEl.textContent = String(obj.user_name);
        // messageElements.avatarEl.style.backgroundColor = String(obj.user_color_str);
        // messageElements.avatarEl.style.color = "rgba(255,255,255,0.5)";
        // messageElements.nicknameEl.textContent = obj.user_name;

        this.addMessage(obj);
    },
    sendMessage: function sendMessage(ignore) {
        "use strict";
        return;
        // console.log("sendMessage", message);
    }

});
window.Chat = Chat;
/*global window, alert, console, Eventsmanager, addEvent, Notification, btoa, MessageChannel*/

function Popnotifications(config) {
    "use strict";
    Eventsmanager.call(this, config);
    this.config = config;
    // var that = this;
    // if (window && window.Notification) {
    //     Notification.requestPermission().then(function (permission) {
    //         switch (permission) {
    //         case "granted":
    //             that.notification("Notyfikacja", "Body!", {timeout: 2000});
    //             break;
    //         case "blocked":
    //             alert("Please unblock notifications!");
    //             break;
    //         default:
    //             console.log("Requested for notifications permission");
    //         }
    //         console.log("[Popnotifications] Permission:", permission);
    //         that.prepareElements();
    //     });
    // }
}


Popnotifications.prototype = Object.create(Eventsmanager.prototype);
Object.assign(Popnotifications.prototype, {
    isPushEnabled: false,
    notifications: [],
    destroyNotification: function destroyNotification(notification) {
        "use strict";
        notification.close();
        var i;
        for (i = this.notifications.length - 1; i >= 0; i -= 1) {
            if (this.notifications[i] === notification) {
                this.notifications.splice(i, 1);
            }
        }
    },
    destructor: function destructor() {
        "use strict";
        var that = this;
        this.notifications.forEach(function (notification) {
            that.destroyNotification(notification);
        });
    },
    newNotificationWithFallback: function newNotificationWithFallback(theTitle, options) {
        "use strict";
        if (Notification.permission === "granted") {
            var notification = false;
            try {
                notification = new Notification(theTitle, options);
            } catch (e) {
                console.error("Failed to show notification, fallback to alert", e);
                alert(theTitle + "\n" + options.body);
            }
            if (notification) {
                return notification;
            } else {
                return false;
            }
        }


    },
    notification: function notification_fn(theTitle, theBody, options) {
        "use strict";
        if (typeof Notification === "function" && Notification.permission === "granted" && (options && options.type !== "error")) {
            // var image = new Image();
            // image.src =

            options = Object.assign({
                dir: "ltr",
                lang: "en",
                // badge: "data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==",
                tag: "sketchpad",
                body: theBody || "Notification",
                icon: "images/icons/icon-256x256.png",
                // image: "data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==",
                // data: "DATA",
                // vibrate: [100, 20, 60, 20, 10, 20, 60, 20, 100],
                renotify: false,//renotify: A Boolean specifying whether the user should be notified after a new notification replaces an old one. The default is false, which means they won't be notified.
                requireInteraction: false,
                silent: false,
                // sound: "",
                noscreen: false,
                sticky: false
            }, options);
            // console.log("OPTIONS", options);
            var that = this;

            var notification = this.newNotificationWithFallback(theTitle, options);
            if (notification) {
                if (parseInt(options.timeout, 10)) {
                    setTimeout(function () {
                        that.destroyNotification(notification);
                    }, parseInt(options.timeout, 10));
                }
                notification.addEventListener("click", function (e) {
                    window.focus();
                    that.destroyNotification(notification);
                    if (typeof options.onClick === "function") {
                        options.onClick(e);
                    }
                });
                this.notifications.push(notification);
            }
        } else {
            if (!options) {
                options = {
                    type: "none"
                };
            }
            switch (options.type) {
            case "leaf":
                break;
            default:
                alert(theTitle + "\n" + theBody);
            }

        }

    },
    notify: function notify(type, title, message) {
        "use strict";
        var options = {
            type: type
        };
        this.notification(title, message, options);
    },
    message: function message(text, onClick) {
        "use strict";
        if (typeof Notification === "function") {
            var notification = this.newNotificationWithFallback(text);
            if (notification) {
                if (typeof onClick === "function") {
                    notification.onClick = onClick;
                }

                this.notifications.push(notification);
            }
            // console.log(notification);
        } else {
            alert(text);
        }

    },
    alert: function alert(text) {
        "use strict";
        return this.message(text);
    },

    prepareElements: function prepareElements() {
        "use strict";
        // var that = this;
        this.Xignore = 1;

        // console.log("Popnotifications::prepareElements", that);
    },
    addFeature: function setFeature(feature) {
        "use strict";
        this.features.push(feature);
        this.dispatch("featuresChanged", this.features);
    },

    removeFeature: function removeFeature(feature) {
        "use strict";
        var i;
        for (i = this.features.length - 1; i <= 0; i -= 1) {
            if (this.features[i] === feature) {
                this.features.splice(i, 1);
            }
        }
        this.dispatch("featuresChanged", this.features);
    }

});
window.Popnotifications = Popnotifications;
/*global window*/
/*global Eventsmanager, nudged*/
function Multitouch(config) {
    "use strict";
    Eventsmanager.call(this, config);
    this.config = config;
    this.sketchpad = config.sketchpad;
    this.attachEvents(config.targetEl);
}

Multitouch.prototype = Object.create(Eventsmanager.prototype);
Object.assign(Multitouch.prototype, {
    // For ongoing transformation, remember where the pointers started from
    // and keep track where they are now. We store this information to
    // the pointers variable. It has a property for each current pointer.
    //
    // Example:
    // {
    //   'pointerid': {dx: <domainx>, dy: <domainy>, rx: <rangex>, ry}
    // }
    pointers: {},
    startSketchpadTransform: nudged.Transform.IDENTITY,


    getSketchpadTransform: function getSketchpadTransform() {
        "use strict";
        // var viewport = this.sketchpad.getCurrentViewport();
        //
        // return new nudged.Transform(1, 0, -this.sketchpad.width / 2, -this.sketchpad.height / 2);
        // return new nudged.Transform(1, 0, 0, 0);
        return nudged.Transform.IDENTITY;
    },

    updateTransform: function updateTransform(event) {
        "use strict";
        // Calculate the total transformation from the committed transformation
        // and the points of the ongoing transformation.

        var p, domain, range, t;
        domain = [];
        range = [];
        var that = this;

        var continueNavigation = false;

        if (Object.keys(this.pointers).length >= 2) {
            continueNavigation = true;
            Object.keys(this.pointers).forEach(function (id) {
                if (!event.changedTouches[id]) {
                    continueNavigation = false;
                }
            });
        }
        if (!continueNavigation) {
            return false;
        }
        event.stopPropagation();
        event.preventDefault();
        Object.keys(this.pointers).forEach(function (id) {
            //close open touches (used for navigation)
            p = that.sketchpad.mainPos(event.changedTouches[id].clientX, event.changedTouches[id].clientY);
            console.log("Cancel p", p, event);
            that.sketchpad.endPath(event, event.changedTouches[id].identifier + 10, p.x, p.y);
            //

            p = that.pointers[id];
            domain.push([p.dx, p.dy]);
            range.push([p.rx, p.ry]);
            p.dx = p.rx;
            p.dy = p.ry;
        });
        // Calculate ongoing transform and combine it with the committed.
        t = nudged.estimateTSR(domain, range);
        var transform = t.multiplyBy(this.startSketchpadTransform);
        this.dispatch('update', transform, this.startSketchpadTransform);
    },

    startTouchPoint: function startTouchPoint(event, id, x, y) {
        "use strict";
        // if (Object.keys(this.pointers).length >= 2) {
        //     return false;
        // }
        this.pointers[id] = {dx: x, dy: y, rx: x, ry: y};
        this.updateTransform(event);
    },

    moveTouchPoint: function moveTouchPoint(event, id, x, y) {
        "use strict";
        // For each moved touch.
        if (this.pointers.hasOwnProperty(id)) {
            this.pointers[id].rx = x;
            this.pointers[id].ry = y;
            this.updateTransform(event);
        }
    },

    endTouchPoint: function endTouchPoint(ignore, id) {
        "use strict";
        // For each removed touch.
        //this.commit();
        if (this.pointers.hasOwnProperty(id)) {
            delete this.pointers[id];
        }
    },

    calculatePoint: function calculatePoint(target, x, y) {
        "use strict";
        return window.calculateOffsetXY(target, x - this.sketchpad.width / 2, y - this.sketchpad.height / 2);
    },

    attachEvents: function attachEvents(el) {
        "use strict";
        var that = this;
        el.addEventListener("touchstart", function (e) {
            var i, touch, point;
            that.startSketchpadTransform = that.getSketchpadTransform();
            for (i = 0; i < e.changedTouches.length; i += 1) {
                touch = e.changedTouches[i];
                point = that.calculatePoint(that.sketchpad.containerEl, touch.clientX, touch.clientY);
                that.startTouchPoint(e, touch.identifier, point.x, point.y);
            }
            // e.stopPropagation();
            // e.preventDefault();
        }, true);
        el.addEventListener("touchmove", function (e) {
            var i, touch, point;
            if (e.changedTouches.length !== 2) {
                return false;
            }
            for (i = 0; i < e.changedTouches.length; i += 1) {
                touch = e.changedTouches[i];
                point = that.calculatePoint(that.sketchpad.containerEl, touch.clientX, touch.clientY);
                that.moveTouchPoint(e, touch.identifier, point.x, point.y);
            }
            e.stopPropagation();
            e.preventDefault();
        }, true);
        el.addEventListener("touchend", function (e) {
            var i, touch;
            for (i = 0; i < e.changedTouches.length; i += 1) {
                touch = e.changedTouches[i];
                that.endTouchPoint(e, touch.identifier);
            }
            // e.stopPropagation();
            // e.preventDefault();
        }, true);
        el.addEventListener("touchcancel", function (e) {
            var i, touch;
            for (i = 0; i < e.changedTouches.length; i += 1) {
                touch = e.changedTouches[i];
                that.endTouchPoint(touch.identifier);
            }
            // e.stopPropagation();
            // e.preventDefault();
        }, true);
    }
});

window.Multitouch = Multitouch;


/*global window*/
/*global Multitouch, nudged*/
function prepareMultitouch(namespace, sketchpad, ignore) {//features
    "use strict";
    // console.log("Prepare Multitouch", namespace, sketchpad, features);
    var multitouch = new Multitouch({
        targetEl: sketchpad.containerEl,
        sketchpad: sketchpad
    });
    // var lastTransform = nudged.Transform.IDENTITY;
    multitouch.on("update", function (et) {
        if (sketchpad && sketchpad.room && sketchpad.room.sketch && sketchpad.room.sketch.config && sketchpad.room.sketch.config.backgroundType !== "googlemaps") {
            sketchpad.setScale(sketchpad.scale * et.s);
        }
        sketchpad.setRotation(sketchpad.rotation + (et.r) * (180 / Math.PI));
        sketchpad.moveViewportRelative(et.tx, et.ty);
    });
    namespace.multitouch = multitouch;
}
window.prepareMultitouch = prepareMultitouch;

/*global confirm, Popup, isMacFlag, loadFile, saveFile, addEvent*/
/*global performance*/
/*global ToolRotateViewport, ToolPen, ToolAipen, ToolSmoothpen, ToolHighlighter, ToolRainbow, ToolMandala, ToolLine, ToolRect, ToolCirc, ToolType, ToolImage, ToolColorpicker, ToolFillable, ToolCutout, ToolEraser, ToolMoveViewport, ToolRotateViewport, Imagehost*/
/*global screenfull*/
/*global window*/
/*global ICONFIG*/
/**
 * Load sketch from json
 */
function jsonToDraw(sketchpad, inputList) {
    "use strict";
    var i,
//        ii,
        input;

    sketchpad.reset();
    var historyBeginMsg = {
        cmd: "history-begin",
        messagesCount: inputList.length
    };
    sketchpad.sendMessageToServer(historyBeginMsg);
    sketchpad.executeInputCommand(historyBeginMsg);

    for (i = 0; i < inputList.length; i += 1) {
        input = inputList[i];
        input.bid = 0;
        input.uid = sketchpad.UID;
        switch (input.cmd) {
        case "page":
        case "inputs":
            sketchpad.sendMessageToServer(inputList[i]);
            sketchpad.executeInputCommand(inputList[i]);
            break;
        default:
            console.log("Skipping", input.cmd);
        }
    }

    var historyEndMsg = {
        cmd: "history-end"
    };
    sketchpad.sendMessageToServer(historyEndMsg);
    sketchpad.executeInputCommand(historyEndMsg);

    //select current page?
    return inputList;
}

/**
 * Prepare all toolbar elements
 */
function prepareToolbar(namespace, toolbar, icons, features, popnotifications, sketchpad, keyshortcutsNavigation, googleMap) {
    "use strict";
    /**
     * Popup share
     */
    var popupShare = new Popup({
        icons: icons,
        parentEl: sketchpad.containerEl,
        sketchpad: sketchpad
    }).initExit({
        title: (ICONFIG.i18n && ICONFIG.i18n.popupShare && ICONFIG.i18n.popupShare.title) || "Share this link..."
    });

    // console.log("popupShare", popupShare);
    // sketchpad.containerEl.appendChild(popupShare.containerEl);
    popupShare.hide();
    namespace.popupShare = popupShare;

    toolbar.addButton({
        buttonId: "share",
        label: icons.toolbar.share,
        title: "Share this sketchpad",
        keyShortCut: (isMacFlag)
            ? {metaKey: true, shiftKey: true, keyCode: 76}
            : {ctrlKey: true, shiftKey: true, keyCode: 76}, //cmd + l
        onTap: function () {
            function shareFallback() {
                if (!popupShare.hidden) {
                    popupShare.hide();
                } else {
                    popupShare.show();
                }

            }
            if (features.isEnabled("share")) {
                if (navigator.share) {
                    navigator.share({
                        title: ICONFIG.shareTitle,
                        text: ICONFIG.shareText,
                        url: location.href
                    })
                        .then(function () {
                            console.log('Successful share');
                        })
                        .catch(function (err) {
                            console.log('Error sharing', err);
                            shareFallback();
                        });
                } else {
                    shareFallback();
                }
            }
        }
    });
    toolbar.addSeparator({buttonId: "share-sep"});

    toolbar.addButton({
        buttonId: "save",
        label: icons.toolbar.save,
        title: "Save this sketchpad",
        keyShortCut: (isMacFlag)
            ? {metaKey: true, shiftKey: true, keyCode: 83}
            : {ctrlKey: true, shiftKey: true, keyCode: 83}, //cmd + s
        onTap: function () {
            var data = sketchpad.saveSketchpad("save_write_password_if_you_can");
            saveFile(JSON.stringify(data), ICONFIG.domain + "_" + sketchpad.room.room_token + ".sketchpad.json", "text/csv");
        }
    });

    toolbar.addButton({
        buttonId: "export-png",
        label: icons.toolbar.exportPng,
        title: "Export to PNG",
        keyShortCut: (isMacFlag)
            ? {metaKey: true, shiftKey: false, keyCode: 69} //ctrl + shift + e
            : {ctrlKey: true, shiftKey: false, keyCode: 69}, //cmd + shift + e
        onTap: function () {
            // var data = sketchpad.saveSketchpad("save_write_password_if_you_can");
            // saveFile(JSON.stringify(data), sketchpad.room.room_token + ".sketchpad.json", "text/csv");
            // alert("Export PNG");
            sketchpad.screenshot(function (blob) {
                saveFile(blob, ICONFIG.domain + "_" + sketchpad.room.room_token + ".png", "image/png");
            }, "image/png", 1);

        }
    });


    toolbar.addSeparator({buttonId: "load-sep"});
    toolbar.addButton({
        buttonId: "load",
        addClass: "load",
        label: icons.toolbar.load,
        title: "Load sketch from file",
        keyShortCut: (isMacFlag)
            ? {metaKey: true, shiftKey: true, keyCode: 79}
            : {ctrlKey: true, shiftKey: true, keyCode: 79}, //cmd + o
        onTap: function () {
            var imageSupport = features.isEnabled(ToolImage.prototype.toolId);
            if (features.isEnabled("upload")) {
                loadFile((imageSupport)
                    ? ".json,application/json,.jpg,.jpeg,.png,.gif,.svg,.pdf,image/*;capture=camera"
                    : ".json,application/json", function (data, file) {
                    // console.log("onFileOpened[MOBILE]", data, file);
                    var toolImage = sketchpad.getTool("image");
                    if (file && file.type) {
                        switch (file.type) {
                        case "application/json":
                            try {
                                data = JSON.parse(data);
                            } catch (e) {
                                popnotifications.notification("Error loading file " + file.name, "Can't parse JSON. Wrong file format.", {timeout: 4000});
                                console.error("Error parsing file", e);
                                return;
                            }
                            if (Array.isArray(data)) {
                                return jsonToDraw(sketchpad, data);
                            } else {
                                popnotifications.notification("Can't load file content " + file.name, "Can't use this data. Wrong file content.", {timeout: 4000});
                                console.error("Wrong file content");
                                return;
                            }
                            // break;
                        case "application/pdf":
                            if (namespace.openNewPdf) {//pdfSupport?
                                namespace.tmp = new Imagehost({
                                    progressParentEl: sketchpad.progressParentEl,
                                    file: file
                                }).on("success", function (e) {
                                    namespace.openNewPdf(e.url, "append");
                                    // // alert(1);
                                    // sketchpad.reset();
                                    // // sketchpad.addSketchPage(config, onAdded);
                                    // sketchpad.addSketchPage({
                                    //     backgroundColor: "rgba(255,255,255,1)",
                                    //     backgroundType: "pdf§",
                                    //     backgroundImage: e.url
                                    // });
                                    // e.url
                                    // toolImage.onImagehostReady(e.url, 0, 0, 0, 0, "center");
                                }).on("error", toolImage.onImagehostError.bind(toolImage));
                            } else {
                                popnotifications.notification("Can't load file " + file.name, "Filetype not supported.", {timeout: 4000});
                            }
                            break;

                        case "image/jpeg":
                        case "image/jpg":
                        case "image/png":
                        case "image/gif":
                        case "image/svg":
                        case "image/svg+xml":
                        case "image/webp":
                        case "image/pjpeg":
                            if (imageSupport) {
                                namespace.tmp = new Imagehost({
                                    progressParentEl: sketchpad.progressParentEl,
                                    file: file
                                }).on("success", function (e) {
                                    // alert(1);
                                    // sketchpad.reset();
                                    // sketchpad.addSketchPage(config, onAdded);
                                    sketchpad.addSketchPage({
                                        backgroundColor: "rgba(255,255,255,1)",
                                        backgroundType: "image",
                                        backgroundImage: e.url
                                    });
                                    if (sketchpad && sketchpad.room && sketchpad.room.sketches && sketchpad.room.sketches.length) {
                                        var position = {
                                            cmd: "goto",
                                            position: {
                                                pageNo: String(sketchpad.room.sketches.length + 1),
                                                x: 0,
                                                y: 0,
                                                scale: 1,
                                                rotation: 0
                                            }
                                        };
                                        sketchpad.sendMessageToServer(position);
                                    }

                                    // e.url
                                    // toolImage.onImagehostReady(e.url, 0, 0, 0, 0, "center");
                                }).on("error", toolImage.onImagehostError.bind(toolImage));
                            } else {
                                popnotifications.notification("Can't load file " + file.name, "Filetype not supported.", {timeout: 4000});
                            }
                            break;
                        default:
                            popnotifications.notification("Can't load file " + file.name, "Unknown mimetype.", {timeout: 4000});
                        }

                    } else {
                        popnotifications.notification("Can't load file " + file.name, "Unknown file type.", {timeout: 4000});
                    }
                });
            }
            // } else {
            //     alert("Sorry, you have read only access.");
            // }
        }
    });

    // function updateResetButton() {
    //     if (sketchpad.room.sketches.length < 2 && !sketchpad.room.sketch.framesHistory.length) {
    //         toolbar.setDisabled("reset", true);
    //     } else {
    //         toolbar.setDisabled("reset", false);
    //     }
    //     // console.log("updateToolbar!!!", sketchpad.room.sketches);
    // }
    // sketchpad.on("refreshWindow", updateResetButton);
    toolbar.addSeparator({buttonId: "reset-sep"});
    toolbar.addButton({
        buttonId: "reset",
        label: icons.toolbar.resetSketch,//<span class='icon icon-clear-board'></span>", //💣
        title: "Delete sketch",
        keyShortCut: (isMacFlag)
            ? {keyCode: 8, repeatable: true}
            : {keyCode: 8, repeatable: true}, //cmd + back_space
        onTap: function () {
            // if (sketchpad.canDraw()) {
            if (features.isEnabled("reset")) {
                if (!sketchpad.room.sketch || !sketchpad.room.sketch.framesHistory || !sketchpad.room.sketch.framesHistory.length) {
                    if (confirm("Remove this page?")) {
                        sketchpad.room.removeSketch(sketchpad, sketchpad.room.sketch);
                        if (sketchpad.room.sketches.length < 1) {
                            var clearConfig = {
                                backgroundType: "color",
                                backgroundColor: "rgba(255,255,255,1)",
                                startPosition: "center",
                                viewportX: 0,
                                viewportY: 0,
                                viewportZRotation: 0,
                                viewportScale: 1,
                                foregroundImage: "",
                                backgroundImage: "",
                                backgroundUrl: "",
                                backgroundMapsLocation: "",
                                backgroundMapsType: "roadmap",
                                backgroundMapsZoom: 15,
                                width: 1024,
                                height: 1536
                            };
                            sketchpad.addSketchPage(clearConfig, function (sketch) {
                                sketchpad.room.setActiveSketch(sketchpad, sketch);
                                sketchpad.setViewportPosition(0, 0);
                                sketchpad.setScale(1);
                                sketchpad.setRotation(0);
                            });

                            // var sketch = sketchpad.room.addSketch(sketchpad, clearConfig);
                            // sketchpad.sendMessageToServer({
                            //     cmd: "page",
                            //     config: sketch.getConfig()
                            // });
                        }
                    }
                } else {
                    if (confirm("Clear this page?")) {
                        var tmpSketch = sketchpad.room.sketch;

                        tmpSketch.reset();
                        sketchpad.dispatch("sketch-cleared", tmpSketch);
                        // if (!remoteRemoveFlag) {
                        sketchpad.sendMessageToServer({
                            cmd: "clear-page",
                            sid: tmpSketch.getId()
                        });
                        // }
                        sketchpad.planRefreshWindow(0, "ui:clear-page");

                    }

                }


            }
            // } else {
            //     alert("Sorry, you have read only access.");
            // }
        }
    });

    /**
     * drawing tools
     */
    toolbar.addSeparator({buttonId: "drawing-sep"});
    toolbar.addButton({
        buttonId: ToolPen.prototype.toolId,
        label: icons.toolbar.pen,
        title: "Pen",
        keyShortCut: {keyCode: 80}, //p
        toolbox: ["label_line", "color", "label_size", "size"],
        onTap: function () {
            if (features.isEnabled(ToolPen.prototype.toolId)) {
                sketchpad.setTool(ToolPen.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolAipen.prototype.toolId,
        label: icons.toolbar.aipen,
        title: ToolAipen.prototype.toolLabel,
        keyShortCut: {keyCode: ToolAipen.prototype.keyCode},
        toolbox: ["label_line", "color", "label_size", "size", "label_fill", "fillColor"],
        onTap: function () {
            if (features.isEnabled(ToolAipen.prototype.toolId)) {
                sketchpad.setTool(ToolAipen.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolSmoothpen.prototype.toolId,
        label: icons.toolbar.smoothpen,
        title: ToolSmoothpen.prototype.toolLabel,
        keyShortCut: {keyCode: ToolSmoothpen.prototype.keyCode},
        toolbox: ["label_line", "color", "label_size", "size"],
        onTap: function () {
            if (features.isEnabled(ToolSmoothpen.prototype.toolId)) {
                sketchpad.setTool(ToolSmoothpen.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolHighlighter.prototype.toolId,
        label: icons.toolbar.highlighter,
        title: "Highlighter",
        keyShortCut: {keyCode: 72}, //h
        toolbox: ["label_line", "color", "label_size", "size"],
        onTap: function () {
            if (features.isEnabled(ToolHighlighter.prototype.toolId)) {
                sketchpad.setTool(ToolHighlighter.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolRainbow.prototype.toolId,
        label: icons.toolbar.rainbow,
        title: "Rainbow",
        keyShortCut: {keyCode: 66}, //b
        toolbox: ["label_size", "size"],
        onTap: function () {
            if (features.isEnabled(ToolRainbow.prototype.toolId)) {
                sketchpad.setTool(ToolRainbow.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolMandala.prototype.toolId,
        label: icons.toolbar.mandala,
        title: "Mandala",
        keyShortCut: {keyCode: 77}, //m
        toolbox: ["label_line", "color", "label_size", "size", "label_formpalette", "mandalaFormpalette"],
        onTap: function () {
            if (features.isEnabled(ToolMandala.prototype.toolId)) {
                sketchpad.setTool(ToolMandala.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: "line",
        label: icons.toolbar.line,
        shiftLabel: icons.toolbar.lineShift,
        title: "Line",
        keyShortCut: {keyCode: 76}, //l
        toolbox: ["label_line", "color", "label_size", "size"],
        onTap: function () {
            if (features.isEnabled(ToolLine.prototype.toolId)) {
                sketchpad.setTool(ToolLine.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolRect.prototype.toolId,
        label: icons.toolbar.rect,
        shiftLabel: icons.toolbar.rectShift,
        title: "Rectangle",
        keyShortCut: {keyCode: 82}, //r
        toolbox: ["label_line", "color", "label_size", "size", "label_fill", "fillColor"],
        onTap: function () {
            if (features.isEnabled(ToolRect.prototype.toolId)) {
                sketchpad.setTool(ToolRect.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolCirc.prototype.toolId,
        label: icons.toolbar.circ,
        shiftLabel: icons.toolbar.circShift,
        title: "Circle",
        keyShortCut: {keyCode: 67}, //c
        toolbox: ["label_line", "color", "label_size", "size", "label_fill", "fillColor"],
        onTap: function () {
            if (features.isEnabled(ToolCirc.prototype.toolId)) {
                sketchpad.setTool(ToolCirc.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolType.prototype.toolId,
        label: icons.toolbar.type,
        title: "Type text",
        keyShortCut: {keyCode: 84}, //t
        toolbox: ["label_font_color", "color", "label_fontpalette", "fontPalette"],
        onTap: function () {
            if (features.isEnabled(ToolType.prototype.toolId)) {
                sketchpad.setTool(ToolType.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolImage.prototype.toolId,
        label: icons.toolbar.image,
        title: "Image by imagehost.pro",
        keyShortCut: {keyCode: 79}, //o
        onTap: function () {
            if (features.isEnabled(ToolImage.prototype.toolId)) {
                if (sketchpad.getTool() instanceof ToolImage) {
                    loadFile(".json,application/json,.jpg,.jpeg,.png,.gif,.svg,.pdf,image/*;capture=camera", function (ignore, file) {
                        var toolImage = sketchpad.getTool("image");
                        if (file && file.type) {
                            switch (file.type) {
                            // case "application/json":
                            //     try {
                            //         data = JSON.parse(data);
                            //     } catch (e) {
                            //         popnotifications.notification("Error loading file " + file.name, "Can't parse JSON. Wrong file format.", {timeout: 4000});
                            //         console.error("Error parsing file", e);
                            //         return;
                            //     }
                            //     if (Array.isArray(data)) {
                            //         return jsonToDraw(sketchpad, data);
                            //     } else {
                            //         popnotifications.notification("Can't load file content " + file.name, "Can't use this data. Wrong file content.", {timeout: 4000});
                            //         console.error("Wrong file content");
                            //         return;
                            //     }
                            //     // break;
                            case "image/jpeg":
                            case "image/jpg":
                            case "image/png":
                            case "image/gif":
                            case "image/svg":
                            case "image/svg+xml":
                            case "image/webp":
                            case "image/pjpeg":
                            case "application/pdf":
                                namespace.tmp = new Imagehost({
                                    progressParentEl: sketchpad.progressParentEl,
                                    file: file
                                }).on("success", function (e) {
                                    toolImage.onImagehostReady(e.url, 0, 0, 0, 0, "center");
                                }).on("error", toolImage.onImagehostError.bind(toolImage));
                                break;
                            default:
                                popnotifications.notification("Can't load file " + file.name, "Unknown mimetype.", {timeout: 4000});
                            }

                        } else {
                            popnotifications.notification("Can't load file " + file.name, "Unknown file type.", {timeout: 4000});
                        }
                    });

                } else {
                    sketchpad.setTool(ToolImage.prototype.toolId);
                }

            }
        }
    });

    toolbar.addSeparator({buttonId: "extra-sep"});

    toolbar.addButton({
        buttonId: ToolColorpicker.prototype.toolId,
        label: icons.toolbar.colorpicker,
        title: "Color picker",
        keyShortCut: {keyCode: 73, shiftKey: "optional", repeatable: false}, //i
        onTap: function () {
            if (features.isEnabled(ToolColorpicker.prototype.toolId)) {
                var lastToolId = sketchpad.getCurrentToolId();
                sketchpad.setTool(ToolColorpicker.prototype.toolId);
                sketchpad.lastToolId = lastToolId;
            }
        },
        onKeyUp: function () {
            if (features.isEnabled(ToolColorpicker.prototype.toolId)) {
                if (sketchpad.lastToolId) {
                    var colorpickerTool = sketchpad.getTool(ToolColorpicker.prototype.toolId);
                    sketchpad.setTool(sketchpad.lastToolId);
                    if (colorpickerTool.colorChanged) {
                        var color = colorpickerTool.getColor();
                        sketchpad.getCurrentTool().setColor(color.r, color.g, color.b);
                    }
                    if (colorpickerTool.fillColorChanged && sketchpad.getCurrentTool() instanceof ToolFillable) {
                        var fillColor = colorpickerTool.getFillColor();
                        sketchpad.getCurrentTool().setFillColor(fillColor.r, fillColor.g, fillColor.b);
                    }
                }
            }
        }
    });

    toolbar.addSeparator({buttonId: "erase-sep"});
    toolbar.addButton({
        buttonId: ToolCutout.prototype.toolId,
        label: icons.toolbar.cutout,
        title: "Cutout to trash",
        keyShortCut: {keyCode: 88}, //x
        onTap: function () {
            if (features.isEnabled(ToolCutout.prototype.toolId)) {
                sketchpad.setTool(ToolCutout.prototype.toolId);
            }
        }
    });
    toolbar.addButton({
        buttonId: ToolEraser.prototype.toolId,
        label: icons.toolbar.eraser,
        title: "Eraser",
        keyShortCut: {keyCode: 69}, //e
        toolbox: ["label_size", "size"],
        onTap: function () {
            if (features.isEnabled(ToolEraser.prototype.toolId)) {
                sketchpad.setTool(ToolEraser.prototype.toolId);
            }
        }
    });

    /**
     * Layers switcher
     */
    toolbar.addSeparator({buttonId: "layers-sep"});
    var layersSwitch = {
        buttonId: "layers",
        layers: [],
        switch: function (layers, layer) {
            var tool = sketchpad.getCurrentTool();
            // console.log("maxLayers", tool.maxLayers);
            if (tool.maxLayers === 0) {
                this.set(layers);
                return layers;
            }
            if (layers.indexOf(layer) !== -1) {
                layers.splice(layers.indexOf(layer), 1);
            } else {
                layers.push(layer);
            }
            if (tool.maxLayers === 1 && layers.length > 1) {
                layers.splice(0, 1);
            }
            if (tool.maxLayers === 0) {
                layers.splice(0, layers.length);
            }

            this.set(layers);
            return layers;
        },
        set: function (layers) {
            if (layers.indexOf("F") !== -1) {
                this.layerFrontEl.style.color = "#000";
            } else {
                this.layerFrontEl.style.color = "#888";
            }
            if (layers.indexOf("B") !== -1) {
                this.layerBackEl.style.color = "#000";
            } else {
                this.layerBackEl.style.color = "#888";
            }

        },
        buttonEl: document.createElement("div"),
        layerFrontEl: document.createElement("div"),
        layerBackEl: document.createElement("div")
    };
    layersSwitch.buttonEl.title = "Layers switcher";
    layersSwitch.layerFrontEl.className = "toolbar-row";
    layersSwitch.layerFrontEl.style.cursor = "pointer";
    layersSwitch.layerFrontEl.style.color = "#000";
    layersSwitch.layerFrontEl.innerHTML = icons.toolbar.layerUp;
    layersSwitch.switchLayerA = function switchLayerA() {
        if (features.isEnabled("layers-switcher")) {
            layersSwitch.switch(layersSwitch.layers, "F");
            sketchpad.getCurrentTool().layers = layersSwitch.layers;
            layersSwitch.set(sketchpad.getCurrentTool().layers);
        }
    };
    addEvent(layersSwitch.layerFrontEl, "tap", layersSwitch.switchLayerA);
    toolbar.keyshortcuts.addShortcut({keyCode: 49}, layersSwitch.switchLayerA); //1

    layersSwitch.layerBackEl.className = "toolbar-row";
    layersSwitch.layerBackEl.style.cursor = "pointer";
    layersSwitch.layerBackEl.style.color = "#888";
    layersSwitch.layerBackEl.innerHTML = icons.toolbar.layerDown;
    layersSwitch.switchLayerB = function switchLayerB() {
        if (features.isEnabled("layers-switcher")) {
            layersSwitch.switch(layersSwitch.layers, "B");
            sketchpad.getCurrentTool().layers = layersSwitch.layers;
            layersSwitch.set(sketchpad.getCurrentTool().layers);
        }
    };
    addEvent(layersSwitch.layerBackEl, "tap", layersSwitch.switchLayerB);
    toolbar.keyshortcuts.addShortcut({keyCode: 50}, layersSwitch.switchLayerB); //2

    layersSwitch.buttonEl.appendChild(layersSwitch.layerFrontEl);
    layersSwitch.buttonEl.appendChild(layersSwitch.layerBackEl);

    layersSwitch.set(layersSwitch.layers);
    toolbar.addTray(layersSwitch);
    namespace.layersSwitch = layersSwitch;


    toolbar.addSeparator({buttonId: "navigate-sep"});
    addEvent(window, "keydown", function (e) {
        var navigtionKeys = [
            0,
            32,//space
            37,//left
            38,//up
            39,//right
            40//down
        ];
        var inputs = ['input', 'select', /*'button', */'textarea'];
        // alert(e.keyCode);
        if (navigtionKeys.indexOf(e.keyCode) !== -1) {
            // alert(document.activeElement.tagName);
            if (document.activeElement && document.activeElement.tagName && (inputs.indexOf(document.activeElement.tagName.toLowerCase()) !== -1)) {
                // alert(document.activeElement.tagName);
                // alert("INPUT");
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            // console.log("XXXXXSPACE!!!");
            return false;
        }

    });

    // addEvent(window, "keydown", function () {
    //     if (document.activeElement && document.activeElement.tagName && document.activeElement.tagName.toLowerCase() === "button") {
    //         document.activeElement.blur();
    //     }
    // });
    toolbar.addButton({
        buttonId: ToolMoveViewport.prototype.toolId,
        label: icons.toolbar.moveViewport,
        title: "Move viewport",
        keyShortCut: {keyCode: 32}, //space
        onTap: function (ignore) {
            // e.preventDefault();//do not scroll page at space
            // e.stopPropagation();//do not scroll page at space
            if (features.isEnabled(ToolMoveViewport.prototype.toolId)) {
                var lastToolId = sketchpad.getCurrentToolId();
                sketchpad.setTool(ToolMoveViewport.prototype.toolId);
                sketchpad.lastToolId = lastToolId;
            }
        },
        onKeyUp: function (ignore) {
            // e.preventDefault();//do not scroll page at space
            // e.stopPropagation();//do not scroll page at space
            if (features.isEnabled(ToolMoveViewport.prototype.toolId)) {
                if (sketchpad.lastToolId) {
                    sketchpad.setTool(sketchpad.lastToolId, "no-toolbox");
                    sketchpad.lastToolId = false;
                }
            }
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 37, repeatable: true}, function () {//left
        if (features.isEnabled(ToolMoveViewport.prototype.toolId)) {
            // console.log(sketchpad.config);
            sketchpad.moveViewportRelative(20, 0);
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 39, repeatable: true}, function () {//right
        if (features.isEnabled(ToolMoveViewport.prototype.toolId)) {
            sketchpad.moveViewportRelative(-20, 0);
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 38, repeatable: true}, function () {//up
        if (features.isEnabled(ToolMoveViewport.prototype.toolId)) {
            sketchpad.moveViewportRelative(0, 20);
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 40, repeatable: true}, function () {//down
        if (features.isEnabled(ToolMoveViewport.prototype.toolId)) {
            sketchpad.moveViewportRelative(0, -20);
        }
    });

    toolbar.addButton({
        buttonId: ToolRotateViewport.prototype.toolId,
        label: icons.toolbar.rotateViewport,
        title: "Rotate viewport",
        keyShortCut: {shiftKey: true, keyCode: 32}, //shift + space
        onTap: function () {
            if (features.isEnabled(ToolRotateViewport.prototype.toolId)) {
                var lastToolId = sketchpad.getCurrentToolId();
                sketchpad.setTool(ToolRotateViewport.prototype.toolId);
                sketchpad.lastToolId = lastToolId;
            }
        },
        onKeyUp: function () {
            if (features.isEnabled(ToolRotateViewport.prototype.toolId)) {
                if (sketchpad.lastToolId) {
                    sketchpad.setTool(sketchpad.lastToolId);
                }
            }
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: true, altKey: false, keyCode: 37, repeatable: true}, function (e) {//shift + left
        if (features.isEnabled(ToolRotateViewport.prototype.toolId)) {
            var rotation = sketchpad.rotation + 15;
            if (e && e.shiftKey) {
                rotation = Math.round(rotation / 15) * 15;
            }
            sketchpad.setRotation(rotation);
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: true, altKey: false, keyCode: 39, repeatable: true}, function (e) {//shift + right
        if (features.isEnabled(ToolRotateViewport.prototype.toolId)) {
            var rotation = sketchpad.rotation - 15;
            if (e && e.shiftKey) {
                rotation = Math.round(rotation / 15) * 15;
            }
            sketchpad.setRotation(rotation);
        }
    });

    toolbar.addSeparator({buttonId: "zoom-sep"});

    toolbar.addButton({
        buttonId: "zoom-out",
        label: icons.toolbar.zoomOut,//⊖
        title: "Zoom out",
        keyShortCut: (isMacFlag)
            ? {keyCode: 189}
            : {keyCode: 189}, //cmd + -
        onTap: function () {
            if (features.isEnabled("zoom")) {
                sketchpad.zoomOut();
            }
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: true, altKey: false, keyCode: 40}, function (e) {//shift + down
        if (features.isEnabled("zoom")) {
            e.preventDefault();
            sketchpad.zoomOut();
        }
    });

    toolbar.addButton({
        buttonId: "zoom-1",
        label: icons.toolbar.zoomCenter,//◎
        title: "Reset zoom and center",
        keyShortCut: {keyCode: 48}, //0
        onTap: function () {
            if (features.isEnabled("center")) {
                if (googleMap) {
                    googleMap.setZoom(parseInt(sketchpad.config.backgroundMapsZoom, 10));
                    googleMap.setCenter(namespace.center);
                }
                sketchpad.setViewportPosition(0, 0);
                sketchpad.setScale(1);
                sketchpad.setRotation(0);
            }
        }
    });

    toolbar.addButton({
        buttonId: "zoom-in",
        title: "Zoom in",
        label: icons.toolbar.zoomIn,//⊕
        keyShortCut: (isMacFlag)
            ? {keyCode: 187}
            : {keyCode: 187}, //cmd + =
        onTap: function () {
            if (features.isEnabled("zoom")) {
                sketchpad.zoomIn();
            }
        }
    });
    keyshortcutsNavigation.addShortcut({metaKey: false, ctrlKey: false, shiftKey: true, altKey: false, keyCode: 38}, function (e) {//shift + up
        if (features.isEnabled("zoom")) {
            e.preventDefault();
            sketchpad.zoomIn();
        }
    });

    /**
     * history & remove
     */
    toolbar.addSeparator({buttonId: "history-sep"});

    toolbar.addButton({
        buttonId: "undo",
        title: "Undo",
        keyShortCut: (isMacFlag)
            ? {metaKey: true, keyCode: 90, repeatable: true}
            : {ctrlKey: true, keyCode: 90, repeatable: true}, //cmd + z
        label: icons.toolbar.undo,
        onTap: function () {
            if (features.isEnabled("undo-redo")) {
                sketchpad.undo();
            }
        }
    });
    toolbar.setDisabled("undo", true);
    toolbar.addButton({
        buttonId: "redo",
        title: "Redo",
        keyShortCut: (isMacFlag)
            ? {metaKey: true, shiftKey: true, keyCode: 90, repeatable: true}
            : {ctrlKey: true, shiftKey: true, keyCode: 90, repeatable: true}, //cmd + shift + z
        label: icons.toolbar.redo,
        onTap: function () {
            if (features.isEnabled("undo-redo")) {
                sketchpad.redo();
            }
        }

    });
    toolbar.setDisabled("redo", true);

    sketchpad.on("undoAvaliable", function () {
        toolbar.setDisabled("undo", false);
        toolbar.setDisabled("reset", false);
    });
    sketchpad.on("undoUnavaliable", function () {
        toolbar.setDisabled("undo", true);
    });
    sketchpad.on("redoAvaliable", function () {
        toolbar.setDisabled("redo", false);
    });
    sketchpad.on("redoUnavaliable", function () {
        toolbar.setDisabled("redo", true);
    });
    sketchpad.on("historySketch-status", function (status) {
        // console.log("ON-historySketch-status", status);
        toolbar.setDisabled("undo", (status.undo === 0));
        toolbar.setDisabled("redo", (status.redo === 0));
    });

    /**
     * display viewport possition
     */

    toolbar.addSeparator({buttonId: "viewport-position-sep"});
    var trayVieport = {
        buttonId: "viewport-position",
        buttonEl: document.createElement("div"),
        positionEl: document.createElement("div"),
        positionXEl: document.createElement("div"),
        positionYEl: document.createElement("div"),
        positionXCaptionEl: document.createElement("div"),
        positionYCaptionEl: document.createElement("div"),
        positionXValueEl: document.createElement("div"),
        positionYValueEl: document.createElement("div"),
        modifiersEl: document.createElement("div"),
        scaleEl: document.createElement("div"),
        scaleCaptionEl: document.createElement("div"),
        scaleValueEl: document.createElement("div"),
        rotateEl: document.createElement("div"),
        rotateCaptionEl: document.createElement("div"),
        rotateValueEl: document.createElement("div")
    };

    trayVieport.positionXCaptionEl.className = "caption";
    trayVieport.positionXValueEl.className = "value";
    trayVieport.positionYCaptionEl.className = "caption";
    trayVieport.positionYValueEl.className = "value";
    trayVieport.scaleCaptionEl.className = "caption";
    trayVieport.scaleValueEl.className = "value";
    trayVieport.rotateCaptionEl.className = "caption";
    trayVieport.rotateValueEl.className = "value";

    trayVieport.updateClientVieport = function updateClientVieport() {
        trayVieport.positionXCaptionEl.textContent = "X";
        trayVieport.positionXValueEl.textContent = parseInt(sketchpad.viewportX * 1000) / 1000;

        trayVieport.positionYCaptionEl.textContent = "Y";
        trayVieport.positionYValueEl.textContent = parseInt(sketchpad.viewportY * 1000) / 1000;

        trayVieport.scaleCaptionEl.textContent = "S";
        trayVieport.scaleValueEl.textContent = parseInt(sketchpad.scale * 1000) / 1000;

        trayVieport.rotateCaptionEl.textContent = "α";
        trayVieport.rotateValueEl.textContent = parseInt(sketchpad.rotation * 1000) / 1000;
    };

    trayVieport.updateClientVieport();
    sketchpad.on("changeViewport", trayVieport.updateClientVieport);


    trayVieport.positionXEl.className = "toolbar-row";
    trayVieport.positionXEl.appendChild(trayVieport.positionXCaptionEl);
    trayVieport.positionXEl.appendChild(trayVieport.positionXValueEl);

    trayVieport.positionYEl.className = "toolbar-row";
    trayVieport.positionYEl.appendChild(trayVieport.positionYCaptionEl);
    trayVieport.positionYEl.appendChild(trayVieport.positionYValueEl);

    trayVieport.scaleEl.className = "toolbar-row";
    trayVieport.scaleEl.appendChild(trayVieport.scaleCaptionEl);
    trayVieport.scaleEl.appendChild(trayVieport.scaleValueEl);

    trayVieport.rotateEl.className = "toolbar-row";
    trayVieport.rotateEl.appendChild(trayVieport.rotateCaptionEl);
    trayVieport.rotateEl.appendChild(trayVieport.rotateValueEl);


    trayVieport.positionEl.className = "column";
    trayVieport.positionEl.appendChild(trayVieport.positionXEl);
    trayVieport.positionEl.appendChild(trayVieport.positionYEl);
    trayVieport.modifiersEl.className = "column";
    trayVieport.modifiersEl.appendChild(trayVieport.scaleEl);
    trayVieport.modifiersEl.appendChild(trayVieport.rotateEl);

    trayVieport.buttonEl.className = "button";
    trayVieport.buttonEl.appendChild(trayVieport.positionEl);
    trayVieport.buttonEl.appendChild(trayVieport.modifiersEl);


    toolbar.addTray(trayVieport);

    /**
     * display users stats
     */
    toolbar.addSeparator({buttonId: "connection-status-sep"});

    // toolbar.addButton({
    //     buttonId: "chat",
    //     label: '<i class="fal fa-commenting-o" aria-hidden="true"></i>',//🚪
    //     // className: "to-right",
    //     keyShortCut: (isMacFlag)
    //         ? {shiftKey: true, keyCode: 13}
    //         : {shiftKey: true, keyCode: 13}, //cmd + c
    //     title: "Chat",
    //     onTap: function () {
    //         if (features.isEnabled("chat")) {
    //             var displayMode = chat.getDisplayMode();
    //             if (displayMode === "full") {
    //                 chat.setDisplayMode("compact");
    //             } else {
    //                 chat.setDisplayMode("full");
    //             }
    //         }
    //     }
    // });

    var trayOnline = {
        buttonId: "connection-status",
        buttonEl: document.createElement("div"),
        editorsEl: document.createElement("div"),
        editorsCaptionEl: document.createElement("div"),
        editorsValueEl: document.createElement("div"),
        spectatorsEl: document.createElement("div"),
        spectatorsCaptionEl: document.createElement("div"),
        spectatorsValueEl: document.createElement("div")
    };

    trayOnline.editorsCaptionEl.className = "caption";
    trayOnline.editorsValueEl.className = "value";
    trayOnline.spectatorsCaptionEl.className = "caption";
    trayOnline.spectatorsValueEl.className = "value";

    trayOnline.updateOnlineInfo = function updateOnlineInfo() {
        trayOnline.editorsCaptionEl.innerHTML = icons.toolbar.editors;
        trayOnline.editorsValueEl.textContent = parseInt(sketchpad.editorsCount);
        trayOnline.spectatorsCaptionEl.innerHTML = icons.toolbar.spectators;
        trayOnline.spectatorsValueEl.textContent = parseInt(sketchpad.viewersCount);
    };

    trayOnline.setOffline = function setOffline() {
        trayOnline.editorsCaptionEl.innerHTML = icons.toolbar.editors;
        trayOnline.editorsValueEl.textContent = "offline";
        trayOnline.editorsValueEl.classList.add("negative");
        trayOnline.spectatorsCaptionEl.innerHTML = icons.toolbar.spectators;
        trayOnline.spectatorsValueEl.textContent = "offline";
        trayOnline.spectatorsValueEl.classList.add("negative");
        trayOnline.buttonEl.style.cursor = "pointer";
        addEvent(trayOnline.buttonEl, "tap", function () {
            location.reload();
        });

    };
    trayOnline.setConnecting = function setConnecting() {
        trayOnline.editorsCaptionEl.innerHTML = icons.toolbar.editors;
        trayOnline.editorsValueEl.textContent = "connecting...";
        trayOnline.spectatorsCaptionEl.innerHTML = icons.toolbar.spectators;
        trayOnline.spectatorsValueEl.textContent = "connecting...";
    };



    namespace.trayOnline = trayOnline;

    trayOnline.setConnecting();
    sketchpad.on("changeRoomStatus", trayOnline.updateOnlineInfo);


    trayOnline.editorsCaptionEl.className = "caption";
    trayOnline.editorsEl.appendChild(trayOnline.editorsCaptionEl);
    trayOnline.editorsValueEl.className = "value";
    trayOnline.editorsEl.appendChild(trayOnline.editorsValueEl);

    trayOnline.spectatorsCaptionEl.className = "caption";
    trayOnline.spectatorsEl.appendChild(trayOnline.spectatorsCaptionEl);
    trayOnline.spectatorsValueEl.className = "value";
    trayOnline.spectatorsEl.appendChild(trayOnline.spectatorsValueEl);
    trayOnline.editorsEl.className = "toolbar-row";
    trayOnline.buttonEl.appendChild(trayOnline.editorsEl);
    trayOnline.spectatorsEl.className = "toolbar-row";
    trayOnline.buttonEl.appendChild(trayOnline.spectatorsEl);
    // trayOnline.className = "to-right";
    toolbar.addTray(trayOnline);


    // toolbar.addSeparator({buttonId: "chat-sep"});

    // toolbar.addButton({
    //     buttonId: "speaker",
    //     title: "Speaker",
    //     label: '<i class="fal fa-volume-up"></i>',//⊕
    //     keyShortCut: {metaKey: true, keyCode: 187}, //cmd + =
    //     onTap: function (e) {
    //         if (features.isEnabled("voice-chat")) {
    //             this.enabled = !this.enabled;
    //             if (this.enabled) {
    //                 this.buttonEl.innerHTML = '<i class="fal fa-volume-up"></i>';
    //             } else {
    //                 this.buttonEl.innerHTML = '<i class="fal fa-volume-off"></i>';
    //             }
    //             console.log("speaker click", e);
    //         }
    //     }
    // });

    /**
     * Popup exit
     */
    // var popupExit = new Popup({
    //     containerEl: document.createElement("div"),
    //     bodyHtml: ""
    // });
    // document.body.appendChild(popupExit.containerEl);
    // popupExit.initExit();
    // popupExit.hide();
    // namespace.popupExit = popupExit;

    // toolbar.addButton({
    //     buttonId: "exit",
    //     label: '<i class="fal fa-sign-out" aria-hidden="true"></i>',//🚪
    //     className: "to-right",
    //     keyShortCut: (isMacFlag)
    //         ? {metaKey: true, keyCode: 88}
    //         : {ctrlKey: true, keyCode: 88}, //cmd + x
    //     title: "Exit",
    //     onTap: function () {
    //         if (features.isEnabled("exit")) {
    //             if (!popupExit.hidden) {
    //                 popupExit.hide();
    //             } else {
    //                 popupExit.show();
    //             }
    //         }
    //     }
    // });
    if (screenfull) {
        toolbar.addButton({
            buttonId: "fullscreen",
            label: icons.toolbar.fullscreenOn,//🚪
            className: "to-right",
            keyShortCut: (isMacFlag)
                ? {altKey: true, keyCode: 13}
                : {altKey: true, keyCode: 13}, //alt + enter
            title: "Fullscreen",
            onTap: function () {
                if (screenfull.enabled) {
                    screenfull.toggle(document.getElementById("drawing-board-container"));
                }

            }
        });

        screenfull.onchange(function () {
            if (screenfull.isFullscreen) {
                toolbar.getButton("fullscreen").buttonEl.innerHTML = icons.toolbar.fullscreenOff;
            } else {
                toolbar.getButton("fullscreen").buttonEl.innerHTML = icons.toolbar.fullscreenOn;
            }

        });
    }

}
window.prepareToolbar = prepareToolbar;
/*global window, addEvent*/
/**
 * Prepare footer
 */
function prepareFooter(namespace, ignore) {//footerEl
    "use strict";
    // console.log("prepareFooter", footerEl);
    // var footerEl = document.getElementById("footer");
    // namespace.footerEl = footerEl;
    var cookiePolicyAutoAcceptTimeout = 10 * 1000;
    var displayAdsTimeout = 1 * 1000;

    function canDisplayAds() {
        return (document.body.clientWidth >= 480);
    }

    function displayAds() {
        // console.log("Display ads");
        if (window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }
    function hideFooter() {
        document.body.classList.add("footer-closed");
        namespace.setPlaneHeight();
    }

    var cookiePolicyEl = document.getElementById("sketchboard-cookie-policy");
    var cookiePolicyCloseEl = document.getElementById("sketchboard-cookie-policy-close");

    function acceptCookiePolicy() {
        if (namespace.cookiePolicyAccepted) {
            return;
        }
        namespace.cookiePolicyAccepted = true;
        localStorage.setItem("cookie_policy_accepted", true);
        cookiePolicyEl.style.display = "none";
        if (canDisplayAds()) {
            setTimeout(displayAds, displayAdsTimeout);
        } else {
            hideFooter();
        }
    }
    function showCookiePolicy() {
        cookiePolicyEl.style.display = "block";
    }

    if (cookiePolicyEl && cookiePolicyCloseEl) {//sketchpad
        addEvent(cookiePolicyCloseEl, "click", acceptCookiePolicy);
        namespace.cookiePolicyAccepted = localStorage.getItem("cookie_policy_accepted");
        if (!namespace.cookiePolicyAccepted) {
            showCookiePolicy();
            setTimeout(acceptCookiePolicy, cookiePolicyAutoAcceptTimeout);
        } else {
            if (canDisplayAds()) {
                setTimeout(displayAds, displayAdsTimeout);
            } else {
                hideFooter();
            }
        }
    } else {//draw.chat
        if (canDisplayAds()) {
            setTimeout(displayAds, displayAdsTimeout);
        } else {
            hideFooter();
        }
    }
}
window.prepareFooter = prepareFooter;
/*global window, screenfull*/
/*global ToolColorpicker, ToolCutout*/
/**
 * Check if toolName is enable in toolset config
 * @param  {object} config   - toolset config
 * @param  {string} toolName - tool key
 * @return {boolean} - true if tool is enabled
 */
function inToolset(sketchpad, config, toolName) {
    "use strict";
    // console.log("inToolset", config, toolName);
    //patch for no tools config
    var tool;
    //if toolbar is hidden
    if (!sketchpad.config || !sketchpad.config.features || !sketchpad.config.features.displayToolbar) {
        return false;
    }
    if (config.toolbarHide && config.toolbarHide.indexOf(toolName) !== -1) {
        return false;
    }

    if (config.toolbar === "*" || config.toolbar === undefined) {
        tool = sketchpad.getTool(toolName);
        if (tool && tool.hideByDefault) {
            return false;
        }
        return true;
    }
    if (!config.toolbar || !config.toolbar.length) {
        return false;
    }
    if (Array.isArray(toolName)) {
        var i;
        for (i = 0; i < toolName.length; i += 1) {
            if (config.toolbar && config.toolbar.indexOf(toolName[i]) !== -1) {
                return true;
            }
        }
    } else {
        if (config.toolbar && config.toolbar.indexOf(toolName) !== -1) {
            return true;
        }
    }
    return false;
}

window.inToolset = inToolset;
/**
 * Set visible toolbar element based od config
 * @param {object} config - toolbar config
 */
function setToolbar(sketchpad, config, lock, toolbox, toolbar, chat, ignore) {//ignore === pages
    "use strict";
    // if (lock) {
    //     console.log(lock);
    // }
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!drawing.js", "setToolbar", "locked:", lock, "config:", config);
    toolbar.hideAll();
    /**
     * cloud
     */
    toolbar.setDisplay("share", inToolset(sketchpad, config, "share"));
    toolbar.setDisplay("save-sep", inToolset(sketchpad, config, ["save", "export-png"]) && toolbar.displayCount());
    toolbar.setDisplay("save", inToolset(sketchpad, config, "save"));
    toolbar.setDisplay("export-png", inToolset(sketchpad, config, "export-png"));
    // toolbar.setDisplay("saveImage", inToolset(sketchpad, config, "export-image"));

    toolbar.setDisplay("load-sep", inToolset(sketchpad, config, ["upload"]) && toolbar.displayCount());
    toolbar.setDisplay("load", inToolset(sketchpad, config, "upload"));
    toolbar.setDisplay("reset-sep", inToolset(sketchpad, config, ["reset"]) && toolbar.displayCount());
    toolbar.setDisplay("reset", inToolset(sketchpad, config, "reset"));

    /**
     * drawing tools
     */
    toolbar.setDisplay("drawing-sep", inToolset(sketchpad, config, ["pen", "aipen", "smoothpen", "highlighter", "rainbow", "mandala", "line", "rectangle", "circle", "type", "image"]) && toolbar.displayCount());
    toolbar.setDisplay("pen", inToolset(sketchpad, config, "pen"));
    toolbar.setDisplay("aipen", inToolset(sketchpad, config, "aipen"));
    toolbar.setDisplay("smoothpen", inToolset(sketchpad, config, "smoothpen"));
    toolbar.setDisplay("highlighter", inToolset(sketchpad, config, "highlighter"));
    toolbar.setDisplay("rainbow", inToolset(sketchpad, config, "rainbow"));
    toolbar.setDisplay("mandala", inToolset(sketchpad, config, "mandala"));
    toolbar.setDisplay("line", inToolset(sketchpad, config, "line"));
    toolbar.setDisplay("rectangle", inToolset(sketchpad, config, "rectangle"));
    toolbar.setDisplay("circle", inToolset(sketchpad, config, "circle"));
    toolbar.setDisplay("type", inToolset(sketchpad, config, "type"));
    toolbar.setDisplay("image", inToolset(sketchpad, config, "image"));
    if (!inToolset(sketchpad, config, "image")) {
        sketchpad.getTool("image").disable();
    }

    /**
     * extra tools
     */
    toolbar.setDisplay("extra-sep", inToolset(sketchpad, config, ["colorpicker"]) && toolbar.displayCount());
    toolbar.setDisplay(ToolColorpicker.prototype.toolId, inToolset(sketchpad, config, "colorpicker"));

    /**
     * erase
     */
    toolbar.setDisplay("erase-sep", inToolset(sketchpad, config, ["cutout", "eraser"]) && toolbar.displayCount());
    toolbar.setDisplay(ToolCutout.prototype.toolId, inToolset(sketchpad, config, "cutout"));
    toolbar.setDisplay("eraser", inToolset(sketchpad, config, "eraser"));

    /**
     * Navigate
     */
    toolbar.setDisplay("navigate-sep", inToolset(sketchpad, config, ["move-viewport", "rotate-viewport"]) && toolbar.displayCount());
    toolbar.setDisplay("move-viewport", inToolset(sketchpad, config, "move-viewport"));
    toolbar.setDisplay("rotate-viewport", inToolset(sketchpad, config, "rotate-viewport"));

    /**
     * Zoom
     */
    toolbar.setDisplay("zoom-sep", inToolset(sketchpad, config, ["zoom", "center"]) && toolbar.displayCount());
    toolbar.setDisplay("zoom-in", inToolset(sketchpad, config, "zoom"));
    toolbar.setDisplay("zoom-1", inToolset(sketchpad, config, "center"));
    toolbar.setDisplay("zoom-out", inToolset(sketchpad, config, "zoom"));


    /**
     * history & remove
     */
    toolbar.setDisplay("history-sep", inToolset(sketchpad, config, ["undo-redo"]) && toolbar.displayCount());//, "cut-out", "eraser"
    toolbar.setDisplay("undo", inToolset(sketchpad, config, "undo-redo"));
    toolbar.setDisplay("redo", inToolset(sketchpad, config, "undo-redo"));

    /**
     * Layers switcher
     */
    toolbar.setDisplay("layers-sep", inToolset(sketchpad, config, "layers-switcher") && toolbar.displayCount());
    toolbar.setDisplay("layers", inToolset(sketchpad, config, "layers-switcher"));


    /**
     * display viewport possition
     */
    toolbar.setDisplay("viewport-position-sep", inToolset(sketchpad, config, "viewport-position") && toolbar.displayCount());
    toolbar.setDisplay("viewport-position", inToolset(sketchpad, config, "viewport-position"));

    /**
     * display users stats
     */
    toolbar.setDisplay("connection-status-sep", inToolset(sketchpad, config, ["connection-status"]) && toolbar.displayCount());

    /**
     * Chat
     */
    // toolbar.setDisplay("chat-sep", inToolset(sketchpad, config, ["chat"]) && toolbar.displayCount());
    // toolbar.setDisplay("chat", inToolset(sketchpad, config, "chat"));
    toolbar.setDisplay("connection-status", inToolset(sketchpad, config, "connection-status"));
    // toolbar.setDisplay("microphone", inToolset(sketchpad, config, "voice-chat"));
    // if (!isWebRTCSupported()) {
    //     features.setDisabled("voice-chat", true);
    //     toolbar.setDisabled("microphone", true);
    // }
    // toolbar.setDisplay("chat", inToolset(sketchpad, config, "chat"));
    if (sketchpad && sketchpad.config && sketchpad.config.features && sketchpad.config.features.displayChat) {

        if (window.innerWidth >= 920) {
            chat.setDisplayMode("full");
        } else {
            chat.setDisplayMode("compact");
            // chat.setDisplayMode("full");
        }
        if (sketchpad.config.features.displayChatWebrtc) {
            chat.addFeature("webrtc");
        } else {
            chat.removeFeature("webrtc");
        }
    } else {
        chat.setDisplayMode("hidden");
    }

    if (sketchpad && sketchpad.config && sketchpad.config.features && sketchpad.config.features.displayPages) {
        document.getElementById("pages-el").style.display = "block";
    } else {
        document.getElementById("pages-el").style.display = "none";
    }

    /**
     * Exit
     */
    toolbar.setDisplay("exit", inToolset(sketchpad, config, "exit"));
    toolbox.hide();
    if (config.features && config.features.displayToolbar !== false) {
        toolbar.outerContainerEl.style.display = "block";
    } else {
        toolbar.outerContainerEl.style.display = "none";
    }

    toolbar.setDisplay("fullscreen", inToolset(sketchpad, config, "fullscreen"));
    // var fullScreenSwitchRegistered = false;
    // document.body.addEventListener("click", function registerFullScreenSwitch() {
    //     if (fullScreenSwitchRegistered) {
    //         return;
    //     }
    //     fullScreenSwitchRegistered = true;
    //     window.addEventListener("orientationchange", function () {
    //         if (!screen || !screen.orientation || !screen.orientation.type) {
    //             return;
    //         }
    //         if (inToolset(sketchpad, config, "fullscreen")) {
    //             if (screenfull && screenfull.enabled) {
    //                 switch (screen.orientation.type) {
    //                 case "landscape-secondary":
    //                 case "landscape-primary":
    //                     screenfull.request(document.getElementById("drawing-board-container"));
    //                     break;
    //                 case "portrait-primary":
    //                 case "portrait-secondary":
    //                     screenfull.exit();
    //                     break;

    //                 }
    //             }
    //         }
    //     });
    // });

    // setTimeout(setFullscreenHeight, 0);// lucky shoot?
    setTimeout(function () {
        toolbox.hide();
        sketchpad.sendCurrentViewport();
    }, 0);//why not?
    window.setPlaneHeight();
    // toolbox.hide();

}
window.setToolbar = setToolbar;

/*global Colorpalette, Thickness, Fontpalette, Formpalette, Toolbox*/
/*global ToolMandala, ToolType*/
function prepareToolbox(namespace, sketchpad, keyshortcutsNavigation) {
    "use strict";

    /**
     * Tools setters
     */
    function setFont(font) {
        var tool = sketchpad.getTool(sketchpad.getCurrentToolId());
        // console.log("setting font", font);
        if (typeof tool.setFont === "function") {
            tool.setFont(font);
        }
    }

    function setSize(s) {
        var tool = sketchpad.getTool(sketchpad.getCurrentToolId());
        if (typeof tool.setSize === "function") {
            tool.setSize(s);
        }
    }

    function setColor(r, g, b, a) {
        var tool = sketchpad.getTool(sketchpad.getCurrentToolId());
        if (typeof tool.setColor === "function") {
            tool.setColor(r, g, b, a);
        }
    }

    function setFillColor(r, g, b, a) {
        var tool = sketchpad.getTool(sketchpad.getCurrentToolId());
        if (typeof tool.setFillColor === "function") {
            tool.setFillColor(r, g, b, a);
        }
    }


    /**
     * General tool config panel
     */
    var thickness = new Thickness({
        minValue: 0.1,
        maxValue: 20,
        containerEl: document.createElement("div"),
        keyModifiers: {
            metaKey: true
        }
    });
    namespace.thickness = thickness;

    var colorpalette = new Colorpalette({
        containerEl: document.createElement("div")
    });
    namespace.colorpalette = colorpalette;
    var colorpaletteFill = new Colorpalette({
        containerEl: document.createElement("div"),
        keyModifiers: {
            shiftKey: true
        }
    });
    namespace.colorpaletteFill = colorpaletteFill;
    /**
     * Type config panel
     */
    var fontpalette = new Fontpalette({
        containerEl: document.createElement("div"),
        keyModifiers: {
            shiftKey: true
        }
    });
    namespace.fontpalette = fontpalette;

    /**
     * Mandala config panel
     */
    var mandalaFormpalette = new Formpalette({
        containerEl: document.createElement("div")
    });

    mandalaFormpalette.addInput({
        name: "axis",
        type: "number",
        minValue: 1,
        maxValue: 24,
        value: 3,
        title: "Axis",
        onChange: function (e) {
            sketchpad.getTool(ToolMandala.prototype.toolId).axis = e.target.value;
        }
    });

    mandalaFormpalette.addInput({
        name: "mirrorV",
        type: "checkbox",
        value: 1,
        title: "Mirror V",
        onChange: function (e) {
            sketchpad.getTool(ToolMandala.prototype.toolId).mirrorV = e.target.checked;
        }
    });

    mandalaFormpalette.addInput({
        name: "mirrorH",
        type: "checkbox",
        value: 1,
        title: "Mirror H",
        onChange: function (e) {
            sketchpad.getTool(ToolMandala.prototype.toolId).mirrorH = e.target.checked;
        }
    });

    mandalaFormpalette.addInput({
        name: "mirrorVH",
        type: "checkbox",
        value: 1,
        title: "Mirror VH",
        onChange: function (e) {
            sketchpad.getTool(ToolMandala.prototype.toolId).mirrorVH = e.target.checked;
        }
    });

    mandalaFormpalette.addInput({
        name: "rainbow",
        type: "checkbox",
        value: 1,
        title: "Rainbow",
        onChange: function (e) {
            sketchpad.getTool(ToolMandala.prototype.toolId).rainbow = e.target.checked;
        }
    });
    namespace.mandalaFormpalette = mandalaFormpalette;

    /**
     * Toolbox - panel with tool settings
     */
    var toolbox = new Toolbox({
        containerEl: document.getElementById("toolbox")
    });

    function updateToolbox(tool) {
        if (tool instanceof ToolMandala) {
            mandalaFormpalette.setInputValue("mirrorH", tool.mirrorH);
            mandalaFormpalette.setInputValue("mirrorV", tool.mirrorV);
            mandalaFormpalette.setInputValue("mirrorVH", tool.mirrorVH);
            mandalaFormpalette.setInputValue("rainbow", tool.rainbow);
            mandalaFormpalette.setInputValue("axis", tool.axis);
        }
        if (typeof tool.getColor === "function") {
            colorpalette.setColor(tool.getColor());
        }

        if (typeof tool.getFillColor === "function") {
            colorpaletteFill.setColor(tool.getFillColor());
        }

        if (tool instanceof ToolType) {
            fontpalette.setSize(tool.getSize());
            fontpalette.setFont(tool.getFont());
            fontpalette.setColor(tool.getColor());
        } else {
            if (typeof tool.getSize === "function") {
                thickness.minValue = tool.minSize;
                thickness.maxValue = tool.maxSize;
                thickness.setSize(tool.getSize());
            }
        }
    }

    toolbox.updateToolbox = updateToolbox;
    toolbox.addLabel("label_font_color", "Color");
    toolbox.addLabel("label_line", "Line style");
    toolbox.addTool({
        idk: "color",
        el: colorpalette.containerEl,
        controller: colorpalette
    });
    toolbox.addLabel("label_size", "Line size");
    toolbox.addTool({
        idk: "size",
        el: thickness.containerEl,
        controller: thickness
    });

    toolbox.addLabel("label_fill", "Fill color", true);
    toolbox.addTool({
        idk: "fillColor",
        el: colorpaletteFill.containerEl,
        controller: colorpaletteFill
    });
    toolbox.addLabel("label_fontpalette", "Font", true);
    toolbox.addTool({
        idk: "fontPalette",
        el: fontpalette.containerEl,
        controller: fontpalette
    });

    toolbox.addLabel("label_formpalette", "Mandala settings", true);
    toolbox.addTool({
        idk: "mandalaFormpalette",
        el: mandalaFormpalette.containerEl,
        controller: mandalaFormpalette
    });


    colorpalette.on("set", function () {
        toolbox.hide();
        toolbox.lastToolbox = colorpalette;
    });
    colorpalette.on("change", function (e) {
        //?if (sketchpad.currentTool === "type") { - niepotrzebne jak fontpalette.setColor nie robi dispatch event
        fontpalette.setColor({r: e.color.red, g: e.color.green, b: e.color.blue, a: e.color.alpha});
        // }
        setColor(e.color.red, e.color.green, e.color.blue, e.color.alpha);
        toolbox.lastToolbox = colorpalette;
    });

    colorpaletteFill.on("set", function () {
        toolbox.hide();
        toolbox.lastToolbox = colorpaletteFill;
    });
    colorpaletteFill.on("change", function (e) {
        setFillColor(e.color.red, e.color.green, e.color.blue, e.color.alpha);
        toolbox.lastToolbox = colorpaletteFill;
    });

    thickness.on("change", function (e) {
        setSize(e.size);
        toolbox.lastToolbox = thickness;
    });

    fontpalette.on("change", function (e) {
        if (e.size) {
            setSize(e.size);
        }
        if (e.font) {
            setFont(e.font);
        }
        toolbox.lastToolbox = fontpalette;
    });


    toolbox.on("show", function () {
        keyshortcutsNavigation.disable();
        colorpalette.keyshortcuts.enable();
        colorpaletteFill.keyshortcuts.enable();
        fontpalette.keyshortcuts.enable();
        thickness.keyshortcuts.enable();
    });
    toolbox.on("hide", function () {
        keyshortcutsNavigation.enable();
        colorpalette.keyshortcuts.disable();
        colorpaletteFill.keyshortcuts.disable();
        fontpalette.keyshortcuts.disable();
        thickness.keyshortcuts.disable();
    });

    return toolbox;
}
window.prepareToolbox = prepareToolbox;
/*global inToolset*/
function prepareFeatures(toolbar, sketchpad) {
    "use strict";
    var features = {
        disabledList: {},
        drawingFeatures: ["upload", "reset", "pen", "aipen", "smoothpen", "highlighter", "rainbow", "mandala", "line", "rectangle", "circle", "type", "image", "colorpicker", "undo-redo", "cutout", "eraser", "layers-switcher"],
        drawingButtons: ["load", "reset", "pen", "highlighter", "rainbow", "mandala", "line", "rectangle", "circle", "type", "image", "colorpicker", /*"undo", "redo",*/ "cutout", "eraser", "layers-switcher"],
        disableDrawing: function disableDrawing() {
            var that = this;
            this.drawingFeatures.forEach(function (feature) {
                that.setDisabled(feature);
            });
            this.drawingButtons.forEach(function (buttonId) {
                toolbar.setDisabled(buttonId, true);
            });
        },
        enableDrawing: function disableDrawing() {
            var that = this;
            this.drawingFeatures.forEach(function (feature) {
                that.setEnabled(feature);
            });
            this.drawingButtons.forEach(function (buttonId) {
                toolbar.setDisabled(buttonId, false);
            });
        },
        isEnabled: function isEnabled(featureName) {
            return inToolset(sketchpad, sketchpad.config, featureName) && !this.disabledList[featureName];
        },
        setEnabled: function setEnabled(featureName) {
            delete this.disabledList[featureName];
        },
        setDisabled: function setDisabled(featureName) {
            this.disabledList[featureName] = true;
        }
    };
    return features;

}

window.prepareFeatures = prepareFeatures;
function initAutosave(namespace, sketchpad) {
    "use strict";
    function saveThumbnail() {
        // console.log('SAVE!');
        if (!sketchpad || !sketchpad.room || !sketchpad.room.sketch || !sketchpad.room.sketch.getCommandsHist().length) {
            return;
        }
        var image = sketchpad.toDataURL("image/png");
        namespace.sketchbookHistory.setRecord({
            token: sketchpad.token,
            password: sketchpad.password,
            backgroundType: sketchpad.config.backgroundType,
            datetime: new Date().getTime(),
            url: window.location.href,
            thumbnail: image
        });

        //
        // *** save thumbnail on server
        //
        // var req = new XMLHttpRequest();
        // req.open("POST", "thumbnailsaver.php", true);
        // req.onreadystatechange = function () {
        //     if (req.readyState === 4) {
        //         if (req.status === 200) {
        //             console.log(req.responseText);
        //         } else {
        //             console.log("Error loading request. Network or service error.\n");
        //         }
        //     }
        // };
        // req.send(image);
        // console.log({
        //     type: "POST",
        //     url: "thumbnailsaver.php",
        //     data: image,
        //     success: success,
        //     dataType: "text"
        // });

    }
    window.addEventListener("beforeunload", function (ignore) {
        if (!namespace.blockHashRefresh) {
            // console.log("beforeunload", e);
            saveThumbnail();
        }

        return null;
    });
}
window.initAutosave = initAutosave;
/*global window*/
function prepareOffline(namespace, ignore, sketchpad, popnotifications, popupShare, popupExit, ws) {/*ignore:chat*/
    "use strict";
    function initSketchpadOffline() {
        var clearConfig = {
            backgroundType: "color",
            backgroundColor: "rgba(255,255,255,1)",
            startPosition: "center",
            viewportX: 0,
            viewportY: 0,
            viewportZRotation: 0,
            viewportScale: 1,
            foregroundImage: "",
            backgroundImage: "",
            backgroundUrl: "",
            backgroundMapsLocation: "",
            backgroundMapsType: "roadmap",
            backgroundMapsZoom: 15,
            width: 1024,
            height: 1536
        };
        Object.assign(clearConfig, sketchpad.config.defaultPageConfig);
        var sketch = sketchpad.room.addSketch(sketchpad, clearConfig);
        sketchpad.room.setActiveSketch(sketchpad, sketch);
        sketchpad.initialised = true;
    }

    window.initSketchpadOffline = initSketchpadOffline;

    /**
     * Other stuff
     */
    function workingOffline() {
        if (!sketchpad.initialised) {
            initSketchpadOffline();
        }

        if (namespace.offline) {
            return;
        }
        if (namespace.chat) {
            namespace.chat.addStatus({message: "Connection lost! Reload page to try again."});
        }
        // features.setDisabled("chat");
        // toolbar.setDisabled("chat", true);
        // chat.setDisplayMode("offline");//not nice user experience
        namespace.offline = true;
        if (sketchpad && sketchpad.hudsEl) {
            sketchpad.hudsEl.style.display = "none";
        }

        if (namespace.trayOnline) {
            namespace.trayOnline.setOffline("websocket");
        }
        popnotifications.notification("You are working offline.", "Everything not saved will be lost.", {
            requireInteraction: true,
            sticky: true,
            onClick: function () {
                if (popupShare) {
                    popupShare.show("Remember to save your work before quit");
                }
            }
        });

        var styleSheet = document.getElementById("css-config").sheet;
        styleSheet.insertRule(".frame-color { border-color: rgba(6,6,7,1)}", styleSheet.cssRules.length);

        // console.log("identify", identify);
        // var colorStr = "rgba(" + identify.user_color.r + "," + identify.user_color.g + "," + identify.user_color.b + "," + identify.user_color.a + ")";
        // styleSheet.insertRule(".frame-color { border-color: " + colorStr + "}", styleSheet.cssRules.length);

        // console.info("Use Load/Save file from your computer.\nYou are working offline.");
        // setTimeout(function () {
        //     window.onbeforeunload = false;
        //     location.reload();
        // }, 5000);

        window.onbeforeunload = function (e) {
            var dialogText = "Your changes could not be saved.";
            e.returnValue = dialogText;
            // e.stopPropagation();
            // e.preventDefault();

            if (popupExit) {
                popupExit.show();
            }
            return dialogText;
        };
        // setTimeout(function () {
        //     if (chat.getDisplayMode() === "full") {
        //         chat.setDisplayMode("compact");
        //     }
        // }, 0);
    }
    function onWSClose() {
        // alert("ws-close");
        workingOffline();
    }
    function onWSError(e) {
        // alert("ws-error");
        workingOffline();
        console.error("WebSocket Error", e);
    }
    ws.addEventListener("error", onWSError);
    ws.addEventListener("close", onWSClose);

    namespace.prepareOffline = prepareOffline;
}

/*global window*/
function getViewportPositionFromHash() {
    "use strict";
    var hash = window.location.hash;
    var match;
    //p[page],[x],[y],r[rotation],s[scale]
    match = String(hash).match(/p([0-9]+),([+\-]?([0-9]*[.])?[0-9]+),([+\-]?([0-9]*[.])?[0-9]+),r([+\-]?([0-9]*[.])?[0-9]+),s([+\-]?([0-9]*[.])?[0-9]+)/) || [];
    var viewportPosition = {
        page: match[1] || 0,
        viewportX: match[2] || 0,
        viewportY: match[4] || 0,
        viewportZRotation: match[6] || 0,
        viewportScale: match[8] || 1
    };
    return viewportPosition;
}
window.getViewportPositionFromHash = getViewportPositionFromHash;


/*global setMapPosition*/



function addressToLocation(google, address, onSuccess, onFail) {
    "use strict";
    var geocoder = new google.maps.Geocoder();

    // console.log("addres", address);//validate utf-8?
    geocoder.geocode({address: address}, function (results, status) {
        if (status === "OK") {
            if (typeof onSuccess === "function") {
                onSuccess(results[0].geometry.location);
            }
        } else {
            if (typeof onFail === "function") {
                onFail(results, status);
            }
        }
    });

}
window.addressToLocation = addressToLocation;




/**
 * Set map position based on sketchpad position
 */
function setMapPosition(namespace, sketchpad, mapEl, googleMap, google, force) {
    "use strict";
    //calculate oversized map for rotation
    var size = Math.ceil(Math.sqrt(Math.pow(sketchpad.width, 2) + Math.pow(sketchpad.height, 2)));
    if (!size) {
        size = 1024;
    }
    mapEl.style.width = size + "px";
    mapEl.style.height = size + "px";

    //center map
    mapEl.style.left = "50%";
    mapEl.style.top = "50%";
    mapEl.style.marginLeft = -size / 2 + "px";
    mapEl.style.marginTop = -size / 2 + "px";
    // console.log("setMapPosition", namespace, sketchpad, mapEl, googleMap, google, force);
    sketchpad.zoomSet();
    var zoom = googleMap.getZoom();

    //if position changed
    if (
        force ||
        !namespace.lastPosition ||
        typeof namespace.center.lat !== "function" ||
        namespace.lastPosition.centerLat !== namespace.center.lat() ||
        typeof namespace.center.lng !== "function" ||
        namespace.lastPosition.centerLng !== namespace.center.lng() ||
        namespace.lastPosition.viewportX !== sketchpad.viewportX ||
        namespace.lastPosition.viewportY !== sketchpad.viewportY ||
        namespace.lastPosition.size !== size ||
        namespace.lastPosition.zoom !== zoom
    ) {
        //trigger resize event
        google.maps.event.trigger(googleMap, "resize");

        if (sketchpad.scale !== 1) {
            google.maps.event.addListenerOnce(
                googleMap,
                "idle",
                function () {
                    mapEl.style.visibility = "";
                }
            );
            mapEl.style.visibility = "hidden";
        }
        //navigate to current point
        googleMap.setTilt(0);

        googleMap.panTo(namespace.center);
        googleMap.setZoom(parseInt(sketchpad.room.sketch.config.backgroundMapsZoom, 10));
        googleMap.panBy(parseFloat(sketchpad.viewportX), parseFloat(sketchpad.viewportY));
        googleMap.setZoom(parseInt(zoom, 10));
        googleMap.setTilt(0);

        // remember last position
        namespace.lastPosition = {
            centerLat: typeof namespace.center.lat === "function" && namespace.center.lat(),
            centerLng: typeof namespace.center.lng === "function" && namespace.center.lng(),
            backgroundMapsZoom: sketchpad.room.sketch.config.backgroundMapsZoom,
            viewportX: sketchpad.viewportX,
            viewportY: sketchpad.viewportY,
            size: size,
            zoom: zoom
        };
    }
    //
    var cX = (size / 2);
    var cY = (size / 2);
    mapEl.style.transformOrigin = cX + "px " + cY + "px";
    mapEl.style.webkitTransformOrigin = cX + "px " + cY + "px";
    mapEl.style.MozTransformOrigin = cX + "px " + cY + "px";
    mapEl.style.msTransformOrigin = cX + "px " + cY + "px";
    mapEl.style.OTransformOrigin = cX + "px " + cY + "px";

    mapEl.style.transform = "rotate(" + (1 * sketchpad.rotation) + "deg)";
    mapEl.style.webkitTransform = "rotate(" + (1 * sketchpad.rotation) + "deg)";
    mapEl.style.MozTransform = "rotate(" + (1 * sketchpad.rotation) + "deg)";
    mapEl.style.msTransform = "rotate(" + (1 * sketchpad.rotation) + "deg)";
    mapEl.style.OTransform = "rotate(" + (1 * sketchpad.rotation) + "deg)";
}
window.setMapPosition = setMapPosition;

function setMapCenter(namespace, google, googleMap, pos) {
    "use strict";
    googleMap.setCenter(pos);
    var center = googleMap.getCenter();
    namespace.center = center;
    namespace.marker = new google.maps.Marker({
        position: center,
        map: googleMap
    });
}




function mapsGoToAddress(namespace, sketchpad, mapEl, googleMap, google, address) {
    "use strict";
    addressToLocation(google, address, function (pos) {
        setMapCenter(namespace, google, googleMap, pos);
        // setMapPosition("force");
        setMapPosition(namespace, sketchpad, mapEl, googleMap, google, "force");
    });
}
window.mapsGoToAddress = mapsGoToAddress;

/**
 * Initialize google maps
 * @param  {location} pos  - start position
 * @param  {number} zoom - start zoom
 * @param  {string} type - map type
 */
function initMap(namespace, sketchpad, google, pos, zoom, type) {
    "use strict";
    //run once
    if (namespace.map) {
        return false;
    }
    /**
     * create maps container
     */
    var mapEl = document.createElement("div");
    mapEl.style.position = "absolute";
    mapEl.style.display = "block";
    mapEl.style.left = "50%";
    mapEl.style.top = "50%";
    sketchpad.containerEl.insertBefore(mapEl, sketchpad.containerEl.firstChild);

    /**
     * create maps
     */
    var gmapsConfig = {
        center: pos,
        animatedZoom: false,
        scrollwheel: false,
        zoom: zoom,
        mapTypeId: type,
        disableDefaultUI: true,
        rotateControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        scaleControl: true
    };
    // console.log("gmapsConfig", gmapsConfig);
    var map = new google.maps.Map(mapEl, gmapsConfig);
    namespace.map = map;
    namespace.mapEl = mapEl;

    map.addListener("idle", function () {
        mapEl.style.opacity = 1;
    });
    var center = map.getCenter();
    namespace.center = center;
    var marker = new google.maps.Marker({
        position: center,
        map: map
    });
    namespace.marker = marker;
    sketchpad.on("refreshWindow", function (force) {
        setMapPosition(namespace, sketchpad, mapEl, map, google, force);
    });
    // setMapPosition("force");
    setMapPosition(namespace, sketchpad, mapEl, map, google, "force");

}
window.initMap = initMap;

function hideMap(namespace) {
    "use strict";
    //run once
    if (!namespace.mapEl) {
        return false;
    }
    namespace.mapEl.style.display = "none";

}
window.hideMap = hideMap;

function showMap(namespace) {
    "use strict";
    //run once
    if (!namespace.mapEl) {
        return false;
    }
    namespace.mapEl.style.display = "block";

}
window.showMap = showMap;

/*global Chat, addEvent, window*/
function prepareChat(namespace, sketchpad, planeEl, popnotifications, icons, compactWidth, fullWidth) {
    "use strict";
    /**
     * Chat
     */
    var chat = new Chat({
        compactWidth: compactWidth || 32,
        fullWidth: fullWidth || 320,
        icons: icons,
        containerEl: document.getElementById("chat"),
        popnotifications: popnotifications,
        sketchpad: sketchpad,
        sendMessageFunction: function (message) {
            var obj = {
                cmd: "text-message",
                message: String(message)
            };
            sketchpad.sendMessageToServer(obj);
        }
    });
    window.chat = chat;
    // console.log("prepareChat-sketchpad", sketchpad);
    function redrawChat() {
        if (sketchpad.config && sketchpad.config.features && sketchpad.config.features.displayToolbar) {
            // console.log("Chat with toolbar");
            chat.containerEl.classList.add("displayToolbar");
        } else {
            // console.log("Chat full without toolbar");
            chat.containerEl.classList.remove("displayToolbar");
        }

        var containerWidth = planeEl.clientWidth;
        var sketchpadWidth = containerWidth;
        var chatWidth = chat.getWidth();
        sketchpadWidth -= chatWidth;
        if (sketchpadWidth < 0) {
            sketchpadWidth = 0;
        }
        sketchpad.containerEl.style.width = sketchpadWidth + "px";
    }
    redrawChat();
    chat.redrawChat = redrawChat;
    chat.on("changeDisplayMode", redrawChat);
    addEvent(window, "resize", function () {
        redrawChat();
    });


    sketchpad.on("customMessageFromServer", function (obj) {
        switch (obj.cmd) {
        case "welcome-message":
            chat.addMessage(obj);
            break;
        case "color-changed":
            if (obj.user_id && obj.user_color_str) {
                chat.changeUserColor(obj.user_id, obj.user_color_str);
            }
            return;
        case "nick-changed":
            chat.changeNick(obj);
            break;
        case "chat-history-begin":
            chat.historyBegin();
            break;
        case "chat-history-end":
            chat.historyEnd();
            break;

        case "text-message":
            chat.addMessage(obj);
            break;
        }
    });
    namespace.chat = chat;
    return chat;
}
window.prepareChat = prepareChat;
/*global PDFJS, Progressbar*/
PDFJS.workerSrc = "js/pdf.worker.min.js";
// PDFJS.disableAutoFetch = true;

function preparePdf(namespace, sketchpad) {
    "use strict";

    var pdfsCache = {};
    namespace.pdfsCache = pdfsCache;

    var pdfsUrlCache = {};
    namespace.pdfsUrlCache = pdfsUrlCache;

    /**
     * Cache PDF and rund callback when Page is rendered, and all pages are rendered
     *
     * @param  {pdf} pdf            [description]
     * @param  {function} onCachePdfPage onCachePdfPage(page, pdfInfo, i)
     * @param  {[type]} onCachePdf     [description]
     * @return {[type]}                [description]
     */
    // function cachePdf(pdf, next, onCachePdfPage, onCachePdf) {
    //     var cachedPdf = {
    //         pdf: pdf
    //     };

    //     function getRenderedPageCb(cachedPdf, i) {
    //         return function renderedPage(page) {
    //             var cachedPdfPage = {
    //                 pdf: cachedPdf,
    //                 page: page,
    //                 pageNo: i
    //             };
    //             cachedPdf.pages[i] = cachedPdfPage;
    //             if (typeof onCachePdfPage === "function") {
    //                 onCachePdfPage(page, cachedPdf, i);
    //             }

    //             // console.log("renderedPage", page);
    //         };
    //     }

    //     if (pdf && pdf.numPages && pdf.pdfInfo) {
    //         var pdfInfo;
    //         //we steal pdfInfo object from PDF.JS
    //         pdfInfo = pdf.pdfInfo;
    //         Object.assign(cachedPdf, {
    //             fingerprint: pdfInfo.fingerprint,
    //             pdfInfo: pdfInfo,
    //             allPagesLoaded: false,
    //             pages: []
    //         });
    //         pdfsCache[pdfInfo.fingerprint] = cachedPdf;

    //         // console.log("%cCache PDF:", "background-color:red", pdfInfo, "replace existed", !!(pdfsCache[pdfInfo.fingerprint]), "cached Pdf", cachedPdf);
    //         // var lastPage = (sketchpad.room.sketches.length || 0);
    //         // console.log("pagesCount", pdf.numPages);
    //         var pagesCount = pdf.numPages;
    //         var i;
    //         var promises = [];
    //         for (i = 1; i <= pagesCount; i += 1) {
    //             cachedPdf.pages[i] = {
    //                 pdf: cachedPdf,
    //                 pageNo: i,
    //                 getPagePromise: pdf.getPage(i).then(getRenderedPageCb(cachedPdf, i))
    //             };
    //             promises.push(cachedPdf.pages[i].getPagePromise);
    //         }
    //         // console.log("pagesCount", cachedPdf.pages.length);

    //         Promise.all(promises).then(function () {
    //             // console.log("All Pages Rendered");
    //             if (typeof onCachePdf === "function") {
    //                 // console.log("to do here! store promises.");
    //                 onCachePdf(pdf, pdfInfo);
    //             }

    //         });
    //         if (typeof next === "function") {
    //             // console.log("cachedPdf", cachedPdf, cachedPdf.pages, cachedPdf.pages.length);
    //             // alert(cachedPdf.pages.length);
    //             next(pdf, cachedPdf);
    //         }
    //     } else {
    //         console.warn("Cache PDF error, pdf:", pdf, "die");
    //     }
    // }

    // function readPdfUrlAsCanvas(pdf, pageNo, viewport) {
    // }
    // /**
    //  * Open PDF file and add all pages to current sketchpad
    //  * @param  {string} pdfUrl - url to PDF file
    //  */
    function cachePdfUrlPromise(pdfUrl) {
        if (pdfsUrlCache[pdfUrl]) {
            // console.log("Cache HIT");
            return pdfsUrlCache[pdfUrl];
        }
        var progressbar = new Progressbar({
            progressParentEl: sketchpad.progressParentEl || document.body,
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 200,
                height: "2px",
                width: "2px",
                backgroundColor: "rgba(0, 0, 155, 0.5)"
            }
        });
        // console.log("cachePdfUrl", pdfUrl);
        pdfsUrlCache[pdfUrl] = PDFJS.getDocument(pdfUrl, undefined, undefined, function updateProgressbar(progress) {
            if (!progressbar || !progress.total) {
                return;
            }
            var p = progress.loaded / progress.total;
            if (p >= 1) {
                progressbar.uploadComplete();
                progressbar = false;
            } else {
                progressbar.uploadProgress({
                    loaded: progress.loaded,
                    total: progress.total
                });
            }
        });
        return pdfsUrlCache[pdfUrl];
    }

    /**
     * Open PDF file and create sketchpad pages
     * @param  {string} pdfUrl - url of pdf
     */
    function openNewPdf(pdfUrl, append) {
        function onLoadPdfAndCreatePages(pdf) {
            // alert(cachedPdf.pages.length);
            var i;
            var numPages = (pdf && pdf.numPages) || 0;
            function createSketchpadPage(i) {
                // console.log("PAGE", page);
                var pageConfig = {
                    backgroundType: "pdf",
                    backgroundColor: "rgba(255,255,250,1)",
                    backgroundPdf: {
                        fingerprint: pdf.fingerprint,
                        url: pdfUrl,
                        // page: page,
                        pageNo: i

                    }
                };
                sketchpad.addSketchPage(pageConfig);
                // sketchpad.sendMessageToServer(position);
            }
            if (!append) {
                sketchpad.reset();
            }
            for (i = 0; i < numPages; i += 1) {
                // alert(1);
                createSketchpadPage(i + 1);
            }
            if (sketchpad && sketchpad.room && sketchpad.room.sketches && sketchpad.room.sketches.length) {
                var position = {
                    cmd: "goto",
                    position: {
                        pageNo: String(sketchpad.room.sketches.length + 1),
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotation: 0
                    }
                };
                sketchpad.sendMessageToServer(position);
            }
            // console.log("To do, create sketchpad pages with config", cachedPdf, "pdf:", pdf);

        }
        cachePdfUrlPromise(pdfUrl).then(onLoadPdfAndCreatePages);
    }
    // loadPdf("https://a.imagehost.pro.local/img/2b5d35d5cc3b8a47f61e9bd5bbbd75d2d997b5fb67328073ee1a8e96689ec05b", onLoadPdf, onLoadPdfPage); //load pdf in background
    // openNewPdf("https://a.imagehost.pro.local/img/0577202359aba3365a23e52b0004dff86644838024f694d85b8136536b4fd7db");

    if (sketchpad.config && sketchpad.config.extra && sketchpad.config.extra.insertPdf) {
        openNewPdf(sketchpad.config.extra.insertPdf);
    }
    namespace.openNewPdf = openNewPdf;
    //
    // openNewPdf("https://a.imagehost.pro.local/img/3e85b9928bbe280f5374a0da424cf7dab6696805db6eed8dd62ec28890d39837");

    /**
     * Pre cache PDF files which are used in sketch
     */
    function watchSketchpadPdfPages(sketch) {
        var config = sketch && sketch.getConfig();
        if (config) {
            if (config.backgroundType === "pdf" && config.backgroundPdf && config.backgroundPdf.url) {
                cachePdfUrlPromise(config.backgroundPdf.url);
            }
        }
    }
    sketchpad.on("sketch-added", watchSketchpadPdfPages);



    var cachePdfPageCanvas = {};
    /**
     * Draw mockup of loading pdf
     * @param  {PDFPage} page - PSF.JS Pdf Page
     * @param  {Sketch} sketch - Sketchpad.pro Sketch
     * @param  {PDF} pdf    - PDF.JS Pdf
     */
    function drawPdfMockupOnBackground(currentSketchRedrawPdf, page, sketch, ignore) {
        // console.log("currentSketchRedrawPdf", currentSketchRedrawPdf);
        function paintMockup(width, height) {
            if (sketchpad.room.sketch !== sketch) {
                //skip if sketch was changed - don't paint background is sketch was changed
                return;
            }
            var backgroundContext = sketchpad.backgroundCanvas.getContext("2d");
            backgroundContext.save();
            backgroundContext.translate(sketchpad.width / 2, sketchpad.height / 2);
            backgroundContext.rotate(sketchpad.rotation * Math.PI / 180);
            backgroundContext.scale(sketchpad.scale, sketchpad.scale);
            backgroundContext.translate(-sketchpad.viewportX, -sketchpad.viewportY);
            // backgroundContext.drawImage(pdfPageCanvas, -pdfPageCanvas.width / 2, -pdfPageCanvas.height / 2);
            backgroundContext.fillStyle = "rgba(215,28,0,.5)";
            backgroundContext.fillRect(-width / 2, -height / 2, width, height);
            backgroundContext.restore();
        }
        var viewport = page.getViewport(1);
        paintMockup(viewport.width, viewport.height);
    }

    function drawPdfPageOnBackground(currentSketchRedrawPdf, page, sketch, pdf) {
        // console.log("currentSketchRedrawPdf", currentSketchRedrawPdf);
        function paint(pdfPageCanvas) {
            if (sketchpad.room.sketch !== sketch) {
                //skip if sketch was changed - don't paint background is sketch was changed
                return;
            }
            var backgroundContext = sketchpad.backgroundCanvas.getContext("2d");

            backgroundContext.clearRect(0, 0, sketchpad.width, sketchpad.height);//clear mockup
            backgroundContext.save();
            backgroundContext.translate(sketchpad.width / 2, sketchpad.height / 2);
            backgroundContext.rotate(sketchpad.rotation * Math.PI / 180);
            backgroundContext.translate(-sketchpad.viewportX * sketchpad.scale, -sketchpad.viewportY * sketchpad.scale);
            backgroundContext.drawImage(pdfPageCanvas, -pdfPageCanvas.width / 2, -pdfPageCanvas.height / 2);
            backgroundContext.restore();
        }
        var scale = sketchpad.scale;
        var pdfPageViewHash = pdf.fingerprint + "|" + page.pageNumber + "|" + scale;
        var pdfPageCanvas;
        var pdfPageCanvasContext;

        if (cachePdfPageCanvas[pdfPageViewHash]) {
            pdfPageCanvas = cachePdfPageCanvas[pdfPageViewHash].canvas;
            pdfPageCanvasContext = cachePdfPageCanvas[pdfPageViewHash].context2d;
            paint(pdfPageCanvas, "cached");
            return;
        }
        var viewport = page.getViewport(scale);
        namespace.pageViewport = viewport;
        pdfPageCanvas = document.createElement("canvas");
        pdfPageCanvasContext = pdfPageCanvas.getContext("2d");
        pdfPageCanvas.height = viewport.height;
        pdfPageCanvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: pdfPageCanvasContext,
            viewport: viewport
        };

        var renderTask = page.render(renderContext);
        renderTask.then(function fulfilled() {
            cachePdfPageCanvas[pdfPageViewHash] = {
                canvas: pdfPageCanvas,
                context2d: pdfPageCanvasContext
            };
            paint(pdfPageCanvas, "render promise");
        }, function reject(e) {
            console.warn("RENDER REJECT!", e);
        });
    }

    /**
     * Singlet(h)on Package Bomb for async promises
     * defines unique task to execute on resolve
     */
    var currentSketchRedrawPdf = false;
    /**
     * Re-Paint background if is type of PDF
     */
    sketchpad.on("refreshWindow", function () {
        var config = sketchpad.room.sketch.config;
        //if background is type of PDF
        if (config.backgroundType === "pdf" && config.backgroundPdf && config.backgroundPdf.url) {
            //set last (current) PDF background
            currentSketchRedrawPdf = {
                pdfUrl: config.backgroundPdf.url,
                sketch: sketchpad.room.sketch,
                config: sketchpad.room.sketch.config,
                onPdfReady: function (currentSketchRedrawPdf, pdf) {
                    var sketch = currentSketchRedrawPdf.sketch;
                    // console.log("PDF Ready", pdf);
                    pdf.getPage(currentSketchRedrawPdf.config.backgroundPdf.pageNo).then(function drawPage(page) {
                        drawPdfMockupOnBackground(currentSketchRedrawPdf, page, sketch, pdf);
                        drawPdfPageOnBackground(currentSketchRedrawPdf, page, sketch, pdf);
                    });
                }
            };
            var pdfUrl = currentSketchRedrawPdf.pdfUrl;
            cachePdfUrlPromise(pdfUrl).then(function (pdf) { //can be executed multiple times, but allways this same promise will be returned
                //runs only if current sketch (currentSketchRedrawPdf) is still from pdfUrl
                if (currentSketchRedrawPdf && currentSketchRedrawPdf.pdfUrl === pdfUrl) {
                    currentSketchRedrawPdf.onPdfReady(currentSketchRedrawPdf, pdf);
                    currentSketchRedrawPdf = false; //clear currentSketchRedrawPdf to not be executed multiple times if multiple promises was queued
                }
            });
        } else {
            currentSketchRedrawPdf = false;
        }
    });

    namespace.preparePdf = preparePdf;
}
// window.preparePdf = preparePdf;

/*global Popnotifications, addEvent*/
function preparePopnotifications(namespace) {
    "use strict";
    namespace.popnotifications = new Popnotifications();

}
window.preparePopnotifications = preparePopnotifications;

/*global Pushnotifications, addEvent, window*/
function preparePushnotifications(namespace, sketchpad) {
    "use strict";
    var pushnotifications = new Pushnotifications({
        sketchpad: sketchpad
    });
    namespace.pushnotifications = pushnotifications;
    pushnotifications.on("ready", function () {

        var pushnotificationsBtnEl = document.getElementById("notifications-btn");
        pushnotificationsBtnEl.disabled = false;
        pushnotificationsBtnEl.classList.remove("disabled");
        // var notificationsActive = false;
        addEvent(pushnotificationsBtnEl, "click", function () {
            // notificationsActive = !notificationsActive;
            pushnotificationsBtnEl.disabled = true;
            if (pushnotifications.isPushEnabled) {
                if (typeof window.ga === "function") {
                    window.ga('send', {
                        hitType: 'event',
                        eventCategory: 'Sketchboard',
                        eventAction: 'notifications-disable',
                        eventLabel: 'Notifications Disable [' + sketchpad.room.room_token + ']',
                        eventValue: 0
                    });
                }
                pushnotifications.unsubscribe();
            } else {
                if (typeof window.ga === "function") {
                    window.ga('send', {
                        hitType: 'event',
                        eventCategory: 'Sketchboard',
                        eventAction: 'notifications-enable',
                        eventLabel: 'Notifications Enable [' + sketchpad.room.room_token + ']',
                        eventValue: 1
                    });
                }
                pushnotifications.subscribe();
                // pushnotificationsBtnEl.classList.add("disabled");
            }
        });
        pushnotifications.on("subscribe", function () {
            pushnotificationsBtnEl.disabled = false;
            pushnotificationsBtnEl.classList.add("active");
        });
        pushnotifications.on("unsubscribe", function () {
            pushnotificationsBtnEl.disabled = false;
            pushnotificationsBtnEl.classList.remove("active");
        });

    });
}

window.preparePushnotifications = preparePushnotifications;
/*global window, Pages*/
function preparePages(namespace, sketchpad, keyshortcutsNavigation, icons) {
    "use strict";
    var pages = new Pages({
        icons: icons,
        sketchpad: sketchpad,
        outerContainerEl: document.getElementById("pages-outer"),
        containerEl: document.getElementById("pages"),
        keyshortcuts: keyshortcutsNavigation
    });

    namespace.pages = pages;

    return pages;

}
window.preparePages = preparePages;
/*global Keyshortcuts*/
function prepareShortcutsExtra(thickness, popupExit, popupShare, toolbox, features) {
    "use strict";
    var keyshortcutsExtra = new Keyshortcuts();
    keyshortcutsExtra.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 219, repeatable: true}, function () {//[
        // var step = Math.pow(10, Math.floor(Math.log10(Math.abs(thickness.size))));
        var size = thickness.size;
        if (thickness.size <= 1) {
            size = Math.round(size * 10 - 1) / 10;
        } else {
            size = Math.round(size - 1);
        }
        thickness.setSize(size);
    });

    keyshortcutsExtra.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 221, repeatable: true}, function () {//]
        // var step = Math.pow(10, Math.floor(Math.log10(Math.abs(thickness.size))));
        var size = thickness.size;
        if (thickness.size < 1) {
            size = Math.round(size * 10 + 1) / 10;
        } else {
            size = Math.round(size + 1);
        }
        thickness.setSize(size);
    });

    keyshortcutsExtra.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 27}, function () {//esc

        if (popupExit && features.isEnabled("exit")) {
            // alert("popupExit" + popupExit);
            if (popupExit && popupExit.hidden && toolbox.hidden) {
                popupExit.show();
            } else {
                if (popupShare) {
                    popupShare.hide();
                }
                if (popupExit) {
                    popupExit.hide();
                }
                toolbox.hide();
            }
        } else if (popupShare && features.isEnabled("share")) {
            // alert("popupShare" + popupShare);
            if (popupShare && popupShare.hidden && toolbox.hidden) {
                popupShare.show();
            } else {
                if (popupShare) {
                    popupShare.hide();
                }
                if (popupExit) {
                    popupExit.hide();
                }
                toolbox.hide();
            }
        }
    });

    keyshortcutsExtra.addShortcut({metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, keyCode: 13}, function () {//enter

        toolbox.toggle();

        // alert(1);
        if (popupExit && !popupExit.hidden) {
            popupExit.doExit();
        }
        if (popupShare && !popupShare.hidden) {
            popupShare.doExit();
        }
    });
    return keyshortcutsExtra;
}
window.prepareShortcutsExtra = prepareShortcutsExtra;
/*global window, confirm, Sketchpad, WebSocket, addEvent, Toolbar, alert, Keyshortcuts, Popnotifications*/
/*global console, window, alert, Sketch, Popup, Room*/
/*global ToolColorpicker, ToolFillable*/
/*global google, Raven*/
/*global getServerAddress*/
/*global isWebRTCSupported*/
/*global ICONFIG*/

// Raven.config('https://c7c239cbf3e34a4caf6eeae1070fbfb2@sentry.io/125768').install();

// function closeAds() {
//     "use strict";
//     document.body.classList.add("close-ads");
//     window.setPlaneHeight();
// }
// closeAds();

//sketchboard-prepareToolbar.js
/*global prepareToolbar*/
//sketchpad-setToolbar.js
/*global inToolset, setToolbar*/
//sketchpad-features.js
/*global prepareFeatures*/
/*global preparePdf*/
//sketchpad-maps.js
/*global mapsGoToAddress, initMap, showMap, hideMap*/
//sketchpad-misc.js
/*global getViewportPositionFromHash*/
//sketchpad-toolbox.js
/*global initWebRTC*/
/*global prepareToolbox*/
/*global prepareShortcutsExtra*/
/*global prepareChat*/
/*global initAutosave*/
/*global prepareOffline*/
/*global preparePages*/
/*global preparePushnotifications*/
/*global preparePopnotifications*/
/*global prepareFooter*/
/*global prepareMultitouch*/
/*global sketchbookHistory*/

var app = {
    isLoading: true,
    spinner: document.querySelector('.spinner'),
    main: document.querySelector('.main')
};
window.app = app;
app.main.style.visibility = "hidden";
app.main.style.opacity = 0;
function closeTutorial() {
    "use strict";
    window.removeEventListener("click", closeTutorial);
    window.removeEventListener("touchstart", closeTutorial);
    window.removeEventListener("mousedown", closeTutorial);
    if (document.getElementById("tutorial").style.display !== "none") {
        document.getElementById("tutorial").style.opacity = 0;
        setTimeout(function () {
            document.getElementById("tutorial").style.display = "none";
        }, 1000);
    }
}
window.addEventListener("click", closeTutorial);
window.addEventListener("touchstart", closeTutorial);
window.addEventListener("mousedown", closeTutorial);


function initSketchpadBoard(initMode) {
    "use strict";
    // alert(document.body.clientWidth);
    // if (document.body.clientWidth < 480) {
    //     document.body.classList.add("close-ads");
    // }
    // console.log("// executes when HTML-Document is loaded and DOM is ready");
    //default config
    var config = {
        // displayCrosshair: true,
        // displayViewports: true,
        toolbar: "*",
        features: {
            displayPages: true,
            displayToolbar: true,
            displayCrosshair: true,
            displayViewports: true,
            displayChat: true,
            displayChatWebrtc: true
        },
        defaultPageConfig: {
            backgroundColor: "rgba(20,255,20,1)",
            backgroundMapsLocation: "gdansk",
            backgroundMapsType: "roadmap",
            backgroundMapsZoom: "15",
            backgroundType: "googlemaps"
        },
        extra: {
            insertPdf: (window.HASHES && window.HASHES.insertPdf)
        }
    };

    //icons set
    var icons = ICONFIG.icons;

    //default values
    if (ICONFIG && typeof ICONFIG.defaultConfig === "object") {
        config = Object.assign(config, ICONFIG.defaultConfig);
    }
    config = Object.assign(config, {defaultPageConfig: window.HASHES});

    if (initMode === "forcegooglemaps" || (config.backgroundType === "googlemaps" && initMode !== "GOOGLEMAPSReady" && initMode !== "GOOGLEMAPSError")) {
        //load google maps dynamicly and try again
        var googleMapsScriptEl = document.createElement("script");
        googleMapsScriptEl.addEventListener("error", function () {
            initSketchpadBoard("GOOGLEMAPSError");
        });
        googleMapsScriptEl.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD8E_IVGHoGAROXA9OS_qTexe6MxIrzX6E&libraries=geometry&callback=googleMapsReady";
        document.body.appendChild(googleMapsScriptEl);
        return;
    }

    var viewportPosition = getViewportPositionFromHash();
    config = Object.assign(config, {
        viewportX: viewportPosition.viewportX,
        viewportY: viewportPosition.viewportY,
        viewportScale: viewportPosition.viewportScale,
        viewportZRotation: viewportPosition.viewportZRotation
    });

    var namespace = window;

    var room_token_password = String(window.location.pathname).match(/([A-F][0-F]{10}[0-9]{2}[0-F]{6})(\:(.*))?/);
    var room_token = room_token_password[1];
    var room_password = room_token_password[3] || "";
    window.password = room_password;
    // if (!room_token) {
    //     var match = String(window.location.pathname).match(/([A-F][0-F]{10}[0-9]{2}[0-F]{6})(\:(.*))?/)
    //     if (match) {
    //         room_token = match[1];
    //         room_password = match[2];
    //     }
    // }
    // var loading = true;
    preparePopnotifications(namespace);
    if (!room_token) {
        namespace.popnotifications.notification("Wrong room token", window.location.pathname, {type: "error"});
        window.location.href = "/";
        return;
    }

    var wsServerAddres = getServerAddress(room_token);

    var ws = new WebSocket(wsServerAddres);

    var sketchpadEl = document.getElementById("sketchpad");
    var planeEl = document.getElementById("plane");



    if (config.backgroundType === "googlemaps") {
        config.backgroundColor = "rgba(255,255,255,0)";
    }

    var savedSketchConfig = sketchbookHistory.getObj(room_token) || {};

    config = Object.assign(config, {
        containerEl: sketchpadEl,
        token: room_token,
        password: room_password,
        ws: ws,
        user_name: savedSketchConfig.user_name,
        user_color: savedSketchConfig.user_color,
        user_id: savedSketchConfig.user_id
    });

    // if (window.sketchbookHistory) {
    //     var myLastId = userwindow.sketchbookHistory.getMyLastId(config);
    // }
    var sketchpad = new Sketchpad(config);
    // this.dispatch("identify",

    /*Facebook Pixel*/
    if (typeof window.fbq === "function") {
        window.fbq('track', 'Lead', {
            content_name: room_token,
            content_category: 'Sketchboard - Init'
        });
    }
    // if (typeof window.ga === "function") {
    //     window.ga('set', 'page', room_token || 'unknown_room_token at url: ' + location.href);
    // }

    sketchpad.progressParentEl = document.getElementById("drawing-board-container") || document.body;
    console.log("%c ░░▒▒ sketchpad.pro ▒▒░░ %c " + new Date(parseInt(ICONFIG.tmpVersion, 10)).toISOString().replace(/[TZ]/g, " "),
    "background-color:darkblue;color:lightblue", "background:silver;color:white");
    var h = Date.now() % 360;
    var hashName = randomName(11).toUpperCase();
    console.log("%c.     .       .  .   . .   .   . .    +  .\r\n\
    .     .  :     .    .. :. .___---------___.\r\n\
         .  .   .    .  :.:. _~.^ .^ ^.  '.. :~-_. .\r\n\
      .  :       .  .  .:../:            . .^  :.:\.\r\n\
          .   . :: +. :.:/: .   .    .        . . .:\r\n\
   .  :    .     . _ :::/:               .  ^ .  . .:\r\n\
    .. . .   . - : :.:./.   " + String(hashName).substr(0, 11) + "          .  .:\r\n\
    .      .     . :..|:                    .  .  ^. .:|\r\n\
      .       . : : ..||        .                . . !:|\r\n\
    .     . . . ::. ::\(                           . :)/\r\n\
   .   .     : . : .:.|. ######              .#######::|\r\n\
    :.. .  :-  : .:  ::|.#######           ..########:|\r\n\
   .  .  .  ..  .  .. :\ ########          :######## :/\r\n\
    .        .+ :: : -.:\ ########       . ########.:/\r\n\
      .  .+   . . . . :.:\. #######       #######..:/\r\n\
        :: . . . . ::.:..:.\           .   .   ..:/\r\n\
     .   .   .  .. :  -::::.\.       | |     . .:/\r\n\
        .  :  .  .  .-:.~:.::.\             ..:/\r\n\
   .      -.   . . . .: .:::.:.\.           .:/\r\n\
  .   .   .  :      : ....::_:..:\   ___.  :/\r\n\
     .   .  .   .:. .. .  .: :.:.:\       :/\r\n\
       +   .   .   : . ::. :.:. .:.|\  .:/|\r\n\
       .         +   .  .  ...:: ..|  --.:|\r\n\
  .      . . .   .  .  . ... :..:..~(  ..)~\r\n\
   .   .       .      :  .   .: ::/  .  .::\\r\n",
        "color:hsla(" + String(parseFloat(h).toFixed(2)) +",100%,40%,1);\
background-color:hsla(" + String(parseFloat((h + 180) % 360).toFixed(2)) +",100%,95%,0.1)");
    console.log("config", config);
    console.log(sketchpad);
    // console.log("namespace", namespace);
    preparePdf(namespace, sketchpad);

    namespace.sketchpad = sketchpad;

    function setViewportPositionFromHash() {
        if (namespace.disableSetViewportPositionFromHash) {
            return;
        }
        viewportPosition = getViewportPositionFromHash();
        // console.log("!!!!!!!!!!!!!!!!!viewportPosition", viewportPosition);
        var sketch = sketchpad.room.getSketchByNo(viewportPosition.page);
        if (sketch instanceof Sketch) {
            sketchpad.room.setActiveSketch(sketchpad, sketch);
            sketchpad.setViewportPosition(viewportPosition.viewportX, viewportPosition.viewportY);
            sketchpad.setRotation(viewportPosition.viewportZRotation);
            sketchpad.setScale(viewportPosition.viewportScale);
        }
        // sketchpad.setPage(viewportPosition.page);
    }
    window.setViewportPositionFromHash = setViewportPositionFromHash;
    addEvent(window, "hashchange", setViewportPositionFromHash);
    sketchpad.on("initialised", setViewportPositionFromHash);


    // window.document.body.addEventListener("wheel", function (e) {
    //     e.preventDefault();
    // }, true);


    function updateViewportPositionHash() {
        if (namespace.hashRefreshTO) {
            clearTimeout(namespace.hashRefreshTO);
        }
        namespace.hashRefreshTO = setTimeout(function () {
            // console.log("updateViewportPositionHash");

            namespace.disableSetViewportPositionFromHash = true;
            history.replaceState(null, null, "#" + "p" + sketchpad.room.getCurrentSketchNo() + "," + sketchpad.viewportX + "," + sketchpad.viewportY + ",r" + sketchpad.rotation + ",s" + sketchpad.scale);
            namespace.disableSetViewportPositionFromHash = false;
        }, 300);
    }
    sketchpad.on("refreshWindow", updateViewportPositionHash);
    sketchpad.on("setRotation", updateViewportPositionHash);

    sketchpad.on("customMessageFromServer", function (obj) {
        // alert(obj.cmd);
        if (obj.cmd === "goto") {
            var position = obj.position;
            var hash = "#" + "p" + position.pageNo + "," + position.x + "," + position.y + ",r" + position.rotation + ",s" + position.scale;
            history.replaceState(null, null, hash);
        }
    });


    addEvent(window, "blur", function () {
        if (!sketchpad.away) {
            sketchpad.away = true;
            sketchpad.sendCurrentViewport();
        }
    });
    addEvent(window, "focus", function () {
        if (sketchpad.away) {
            sketchpad.away = false;
            sketchpad.sendCurrentViewport();
        }
    });
    // addEvent(window, "contextmenu", function (e) {
    //     alert("contectmenu");
    //     // e.preventDefault();
    // });


    /**
     * Set received config from sketchpad
     */
    // function beforeSetPageConfig(config) {
    //     console.log("beforeSetPageConfig", config);
    //     return config;
    // }
    // sketchpad.on("beforeSetPageConfig", beforeSetPageConfig);

    /**
     * Set received config from sketchpad
     */
    function setPageConfig(config) {
        // console.log("setPageConfig", config);
        switch (config.backgroundType) {
        case "googlemaps":
            initMap(namespace, sketchpad, google, {lat: 0, lng: 0}, parseInt(config.backgroundMapsZoom, 10), config.backgroundMapsType);//returns namespace.mapEl, namespace.map
            mapsGoToAddress(namespace, sketchpad, namespace.mapEl, namespace.map, google, config.backgroundMapsLocation);
            showMap(namespace);
            break;
        default:
            hideMap(namespace);
        }
    }
    sketchpad.on("setPageConfig", setPageConfig);

    // function setMetaConfig(config) {
    //     if (config.overlength) {
    //         alert("overlength");
    //     }
    // }
    // sketchpad.on("setMetaConfig", setMetaConfig);


    // preparePushnotifications(namespace, sketchpad);
    prepareChat(namespace, sketchpad, planeEl, namespace.popnotifications, icons, (ICONFIG && ICONFIG.ui && ICONFIG.ui.chatCompactWidth) || 32, (ICONFIG && ICONFIG.ui && ICONFIG.ui.chatFullWidth) || 320);//namespace.chat
    var chat = namespace.chat;

    var styleSheet = document.getElementById("css-config").sheet;
    sketchpad.on("identify", function (identify) {
        var colorStr = "rgba(" + identify.user_color.r + "," + identify.user_color.g + "," + identify.user_color.b + "," + identify.user_color.a + ")";

        styleSheet.insertRule(".frame-color { border-color: " + colorStr + " !important}", styleSheet.cssRules.length);
        // styleSheet.insertRule(".background-color { background-color: " + colorStr + " !important}", styleSheet.cssRules.length);
        // console.log("identify", identify);
        //fix for development
        // alert(1);
        chat.redrawChat();
        preparePushnotifications(namespace, sketchpad);
        // setTimeout(chat.redrawChat, 1000);
        sketchbookHistory.assignObj(sketchpad.token, identify);
    });

    sketchpad.on("my_nick_changed", function (data) {
        sketchbookHistory.assignObj(sketchpad.token, data);
    });
    sketchpad.on("my_color_changed", function (data) {
        styleSheet.insertRule(".frame-color { border-color: " + data.user_color_str + " !important}", styleSheet.cssRules.length);
        sketchbookHistory.assignObj(sketchpad.token, data);
    });

    /**
     * Zoom In/Zoom Out methods that respect Maps
     */
    sketchpad.zoomSet = function () {
        if (!(sketchpad.room.sketch instanceof Sketch)) {
            return;
        }
        var sketchpadScale = sketchpad.scale,
            zoom = parseInt(sketchpad.room.sketch.config.backgroundMapsZoom, 10) + Math.log2(sketchpadScale);
        // console.log("zoomSet", zoom);
        // if (!zoom) {
        //     zoom = 10;
        // }
        switch (sketchpad.room.sketch.config.backgroundType) {
        case "googlemaps":
            if (zoom > 21 || zoom < 1 || parseFloat(zoom, 10) !== zoom) {
                console.error("Wrong zoom level form google maps.", zoom, "init zoom", sketchpad.config.backgroundMapsZoom);
                zoom = 1;
            }
            namespace.map.setZoom(zoom);
            break;
        }

    };
    sketchpad.zoomIn = function () {
        if (!(sketchpad.room.sketch instanceof Sketch)) {
            return;
        }
        var zoom, sketchpadScale;
        switch (sketchpad.room.sketch.config.backgroundType) {
        case "googlemaps":
            zoom = namespace.map.getZoom();
            if ((zoom + 1) > 21) {
                return false;
            }
            namespace.map.setZoom(zoom + 1);
            zoom = namespace.map.getZoom();
            sketchpadScale = zoom - sketchpad.room.sketch.config.backgroundMapsZoom;
            sketchpad.setScale(Math.pow(2, sketchpadScale));
            break;
        default:
            sketchpad.setScale(sketchpad.scale * 2);
            break;
        }
    };

    sketchpad.zoomOut = function () {
        if (!(sketchpad.room.sketch instanceof Sketch)) {
            return;
        }
        var zoom, sketchpadScale;
        switch (sketchpad.room.sketch.config.backgroundType) {
        case "googlemaps":
            zoom = namespace.map.getZoom();
            if ((zoom - 1) < 1) {
                return false;
            }
            namespace.map.setZoom(zoom - 1);
            zoom = namespace.map.getZoom();
            sketchpadScale = zoom - sketchpad.room.sketch.config.backgroundMapsZoom;
            sketchpad.setScale(Math.pow(2, sketchpadScale));
            break;
        default:
            if ((sketchpad.scale / 2) < 0.001) { // css performance bug?
                return false;
            }
            sketchpad.setScale(sketchpad.scale / 2);
            break;
        }
    };


    var keyshortcutsNavigation = new Keyshortcuts();
    keyshortcutsNavigation.addShortcut({altKey: true, keyCode: 18}, function () {//alt
        sketchpad.showGrid();
    }, function () {
        sketchpad.hideGrid();
    });

    var toolbox = prepareToolbox(namespace, sketchpad, keyshortcutsNavigation);

    /**
     * Toolbar - buttons
     */
    var toolbar = new Toolbar({
        icons: icons,
        keyshortcuts: new Keyshortcuts(),
        outerContainerEl: document.getElementById("toolbar-outer"),
        containerEl: document.getElementById("toolbar")
    });
    namespace.toolbar = toolbar;

    var features = prepareFeatures(toolbar, sketchpad);
    sketchpad.on("set-permissions", function (permissions) {
        if (!permissions.canDraw) {
            features.disableDrawing();
            // namespace.popupShare.setShareMode("readonly");
        } else {
            features.enableDrawing();
            // namespace.popupShare.setShareMode("readwrite");
        }
    });

    prepareToolbar(namespace, toolbar, icons, features, namespace.popnotifications, sketchpad, keyshortcutsNavigation, namespace.map);

    var footerEl = document.getElementById("footer");

    function setPagesWidth() {
        var pagesMaxWidth = sketchpad.containerEl.clientWidth - 180;
        if (pagesMaxWidth < 160) {
            pagesMaxWidth = 160;
        }
        document.getElementById('pages-outer').style.maxWidth = pagesMaxWidth + 'px';
    }
    window.setPagesWidth = setPagesWidth;

    function setPlaneHeight() {
        var containerElHeight = (document.getElementById("inline-space") && document.getElementById("inline-space").offsetHeight) || window.innerHeight;//to-fix hardcoded node name
        var fwHeight = containerElHeight - document.getElementById("toolbar-outer").offsetHeight - footerEl.offsetHeight;
        // alert("fwHeight" + fwHeight);
        // console.log(window.innerHeight, document.getElementById("toolbar").clientHeight, document.getElementById("footer").clientHeight);
        document.getElementById("plane").style.height = fwHeight + "px";
        chat.onResize();
        toolbar.updateScrolls();
    }
    // setPlaneHeight();


    namespace.setPlaneHeight = setPlaneHeight;

    prepareFooter(namespace, footerEl);




    sketchpad.on("initConnection", function () {
        if (isWebRTCSupported()) {
            namespace.webRTCConference = initWebRTC(sketchpad, chat);
        }
    });
    var pages = preparePages(namespace, sketchpad, toolbar.keyshortcuts, icons);

    sketchpad.on("setMetaConfig", function (config, lock) {
        // console.log("setMetaConfig", config, lock);
        setToolbar(sketchpad, config, lock, toolbox, toolbar, chat, pages);
        setPlaneHeight();
    });
    addEvent(window, "resize", function () {
        setPlaneHeight();
        setPagesWidth();
    });

    /**
     * Register events
     */
    function onSetTool(e, firstRun) {
        // if (loading) {
        //     return;
        // }
        var tool = e.tool;
        var button = toolbar.getButton(tool.toolId);
        /** rethink **/
        // sketchpad.containerEl.scrollLeft = 0;
        // sketchpad.containerEl.scrollTop = 0;

        // console.log("!!!!setTool", button, tool);
        if (e.hasChanged || firstRun) {
            if (e.lastToolId === "colorpicker") {
                var colorpickerTool = sketchpad.getTool(ToolColorpicker.prototype.toolId);
                if (colorpickerTool.colorChanged) {
                    var color = colorpickerTool.getColor();
                    sketchpad.getCurrentTool().setColor(color.r, color.g, color.b);
                }
                if (colorpickerTool.fillColorChanged && sketchpad.getCurrentTool() instanceof ToolFillable) {
                    var fillColor = colorpickerTool.getFillColor();
                    sketchpad.getCurrentTool().setFillColor(fillColor.r, fillColor.g, fillColor.b);
                }
            }

            // if (inToolset(sketchpad.config, "layers-switcher")) {
            if (tool.maxLayers) {
                namespace.layersSwitch.buttonEl.style.opacity = 1;
            } else {
                namespace.layersSwitch.buttonEl.style.opacity = 0.3;
            }
            namespace.layersSwitch.layers = tool.layers;
            namespace.layersSwitch.set(namespace.layersSwitch.layers);
            // }
            if (button && button.toolbox && button.toolbox.length) {// && !sketchpad.lastToolId
                toolbox.setTools(button.toolbox);
                if (!firstRun && e.extra !== "no-toolbox") {
                    toolbox.show();
                }
            } else {
                sketchpad.lastToolId = false;
                toolbox.hide();
            }
        } else {
            if (button && button.toolbox && button.toolbox.length) {
                toolbox.toggle();
            } else {
                toolbox.hide();
            }
        }
        toolbox.updateToolbox(tool);
        toolbar.pushButton(tool.toolId);
        setPlaneHeight();
    }
    sketchpad.on("setTool", onSetTool);

    prepareShortcutsExtra(namespace.thickness, namespace.popupExit, namespace.popupShare, toolbox, features);

    // sketchpad.on("startPath", function () {
    //     toolbox.hide();
    // });
    sketchpad.on("initialised", function () {
        // alert("init");
        // setTimeout(function () {
        // console.log("initialised");
        pages.scrollToActivePage();
        setPlaneHeight();
        setPagesWidth();
        chat.redrawChat();
        // }, 0);
    });


    prepareMultitouch(namespace, sketchpad, features);

    prepareOffline(namespace, chat, sketchpad, namespace.popnotifications, namespace.popupShare, namespace.popupExit, ws);

    onSetTool({
        tool: sketchpad.getCurrentTool()
    }, "firstRun");
    initAutosave(namespace, sketchpad);

    app.spinner.style.display = "none";

    app.main.style.visibility = "visible";
    app.main.style.opacity = 1;
    setPlaneHeight();
    setTimeout(closeTutorial, 1000 * 5);
    // debugger;
}

window.initSketchpadBoard = initSketchpadBoard;

function googleMapsReady() {
    "use strict";
    // console.log("Google maps - ready");
    initSketchpadBoard("GOOGLEMAPSReady");
}
window.googleMapsReady = googleMapsReady;
// executes when HTML-Document is loaded and DOM is ready
initSketchpadBoard("forcegooglemaps");
// document.addEventListener("ready", windowOnLoad);
