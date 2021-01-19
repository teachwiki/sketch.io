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

// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3 https://www.gnu.org/licenses/agpl-3.0-standalone.html
/**
 * @source: http://developers.sketchpad.pro/dist/src/events.js
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


/*global window, calculateOffsetXY*/

/**
 * Calculate element offset
 *
 * @param  {HTMLElement} target - target element
 * @param  {number} screenX - coordinate y
 * @param  {number} screenY - coordinate x
 * @return {object}  - {x: number, y: number}
 */
function elementOffset(el) {
    "use strict";
    var
        // style = el.currentStyle || window.getComputedStyle(el, null),
        borderLeftWidth = 0,//parseInt(style.borderLeftWidth, 10),
        borderTopWidth = 0,//parseInt(style.borderTopWidth, 10),
        rect = el.getBoundingClientRect(),
        offsetX = borderLeftWidth - rect.left,
        offsetY = borderTopWidth - rect.top;

    return {
        x: offsetX,
        y: offsetY
    };
}

// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            "use strict";
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {
    console.log("ignore", e);
}
window.supportsPassive = supportsPassive;

function addEvent(el, event, callback, useCapture) {
    "use strict";

    var third = false;
    if (supportsPassive) {
        third = {
            passive: true
        };
    }
    third = false;
    function getSelectedText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection !== undefined && document.selection.type === "Text") {
            text = document.selection.createRange().text;
        }
        return String(text).trim().length;//dbclick selects invisible new line text
    }
    window.getSelectedText = getSelectedText;
    // console.log(third);
    function touch2mouse(e) {
        var i,
            touch,
            offset = elementOffset(el);
        // console.log("offset", offset);
        for (i = 0; i < e.changedTouches.length; i += 1) {
            touch = e.changedTouches[i];
            touch.offsetX = touch.clientX + offset.x;
            touch.offsetY = touch.clientY + offset.y;
            callback(touch);
        }
    }
    var firstTouchStart,
        lastTouchEnd,
        swipeThreshold = 30;
// alert("addEvent");
    switch (event) {
    case "swipe-right":
        el.addEventListener("touchstart", function (e) {
            // var i;
            firstTouchStart = e.changedTouches[0];
            // for (i = 0; i < e.changedTouches.length; i += 1) {
            //     callback(e.changedTouches[i]);
            // }
        }, third);
        el.addEventListener("mousedown", function (e) {
            firstTouchStart = e;
        }, useCapture);

        el.addEventListener("touchend", function (e) {
            lastTouchEnd = e.changedTouches[e.changedTouches.length - 1];
            if (!lastTouchEnd || !firstTouchStart) {
                // console.log("swipe-right-mouseup");
                return;
            }
            if (lastTouchEnd.screenX - firstTouchStart.screenX > swipeThreshold && !getSelectedText() && !(document.activeElement.type === "text")) {
                callback(e);
            }
        }, useCapture);
        el.addEventListener("mouseup", function (e) {
            lastTouchEnd = e;
            if (!lastTouchEnd || !firstTouchStart) {
                return;
            }
            // console.log("swipe-right-mouseup", lastTouchEnd.screenX - firstTouchStart.screenX, !getSelectedText(), !(document.activeElement.type === "text"));
            if (lastTouchEnd.screenX - firstTouchStart.screenX > swipeThreshold && !getSelectedText() && !(document.activeElement.type === "text")) {
                callback(e);
            }
        }, useCapture);

        // el.addEventListener("mouseover", callback, useCapture);
        break;

    case "hover-in":
        el.addEventListener("touchstart", function (e) {
            // e.stopPropagation();
            // e.preventDefault();
            var i;
            for (i = 0; i < e.changedTouches.length; i += 1) {
                // console.log("touchstart", e.changedTouches[i]);
                callback(e.changedTouches[i]);
            }
        }, third);
        el.addEventListener("touchmove", function (e) {
            // e.stopPropagation();
            // e.preventDefault();
            var i;
            for (i = 0; i < e.changedTouches.length; i += 1) {
                // console.log("touchstart", e.changedTouches[i]);
                callback(e.changedTouches[i]);
            }
        }, third);
        el.addEventListener("mouseover", callback, third);
        break;

    case "hover-out":
        el.addEventListener("mouseout", callback, third);
        break;

    case "tap":
        el.addEventListener("touchstart", function (e) {
            // e.stopPropagation();
            // e.preventDefault();
            e.preventDefault();
            if (document.activeElement !== e.target && document.activeElement.tagName === "INPUT") {
                document.activeElement.blur();
            }
            var i;
            for (i = 0; i < e.changedTouches.length; i += 1) {
                e.changedTouches[i].stopPropagation = e.stopPropagation && e.stopPropagation.bind(e);
                e.changedTouches[i].preventDefault = e.preventDefault && e.preventDefault.bind(e);
                // console.log("touchstart", e.changedTouches[i]);
                callback(e.changedTouches[i]);
            }
        }, third);
        el.addEventListener("mousedown", function (e) {
            // e.stopPropagation();
            // e.preventDefault();
            callback(e);
        }, third);
        // el.addEventListener("touchmove", function (e) {
        //     var i;
        //     for (i = 0; i < e.changedTouches.length; i += 1) {
        //         callback(e.changedTouches[i]);
        //     }
        // });
        break;
    case "slide":
        el.addEventListener("mousedown", callback, third);
        el.addEventListener("mouseup", callback, third);
        el.addEventListener("mousemove", function (e) {
            // console.log("mousemove", e);
            if (!e.buttons) {
                return false;
            }
            callback(e);
        }, third);
        el.addEventListener("touchstart", touch2mouse, third);
        el.addEventListener("touchend", touch2mouse, third);
        el.addEventListener("touchmove", touch2mouse, third);

        break;
    default:
        el.addEventListener(event, callback, third);
    }
}
window.addEvent = addEvent;
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



/*global acceptCookiePolicy*/
acceptCookiePolicy();