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


/*global $, window*/
function applyConfigToForm(config) {
    "use strict";
    Object.keys(config).forEach(function (key) {
        var value = config[key];
        var $option;
        var $input = $("[name='" + key + "']");
        if (Array.isArray(value)) {
            $input.prop('checked', false);
            value.forEach(function (checkboxValue) {
                $input.filter("[value=" + checkboxValue + "]").prop('checked', true);
            });
        } else {
            switch ($input.attr("type")) {
            case "radio":
                $input.each(function () {
                    $option = $(this);
                    if (value === $option.val()) {
                        $option.prop('checked', 'checked');
                    }
                });
                break;
            case "checkbox":
                $input.prop('checked', value);
                break;
            default:
                $input.val(value);
            }
        }
    });
    // updateBackgroundColorpaletteFromInputValue();
    // onFormChange();
}

window.applyConfigToForm = applyConfigToForm;



function formToJson(formDomId) {
    "use strict";
    // alert(formDomId);
    var form = $(formDomId).serializeArray();
    var i;
    var result = {};
    var val;
    for (i = 0; i < form.length; i += 1) {
        val = form[i];
        if (!result[val.name]) {
            result[val.name] = val.value;
        } else if (typeof(result[val.name]) === "object") {
            result[val.name].push(val.value);
        } else {
            result[val.name] = [result[val.name], val.value];
        }
    }
    return result;
}
window.formToJson = formToJson;


function configDotNotationToObj(config) {
    "use strict";
    Object.keys(config).forEach(function (toolId) {
        var parts = toolId.split(".");
        var value = config[toolId];
        var i;
        var parent = config;
        for (i = 0; i < parts.length - 1; i += 1) {
            if (!parent[parts[i]]) {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];
        }
        parent[parts[parts.length - 1]] = value;
        //remove dotted version
        if (parts.length > 1) {
            delete config[toolId];
        }
    });
}
window.configDotNotationToObj = configDotNotationToObj;


function colorToRgba(colorStr) {
    "use strict";
    var el = document.createElement('div');
    el.style.position = "fixed";
    el.style.color = colorStr;
    var colors = window.getComputedStyle(document.body.appendChild(el)).color.match(/[0-9\.]+/g).map(function (a) {
        return parseFloat(a, 10);
    });
    document.body.removeChild(el);
    // console.log("colors", colors);
    return {
        r: colors[0],
        g: colors[1],
        b: colors[2],
        a: (colors[3] === undefined)
            ? 1
            : colors[3]
    };
}
window.colorToRgba = colorToRgba;

function configObjToDotNotation(config, prefix, newDotProps) {
    "use strict";
    newDotProps = newDotProps || {};
    Object.keys(config).forEach(function (key) {
        var value = config[key];
        if (typeof value === "object" && !Array.isArray(value)) {
            if (prefix) {
                configObjToDotNotation(value, prefix + "." + key, newDotProps);
            } else {
                configObjToDotNotation(value, key, newDotProps);
            }
            delete config[key];
        } else {
            if (prefix) {
                newDotProps[prefix + "." + key] = value;
            }
        }
    });
    if (!prefix) {
        Object.assign(config, newDotProps);
    } else {
        return newDotProps;
    }
}
window.configObjToDotNotation = configObjToDotNotation;

/*global $, Colorpalette*/
// colorpalette in tools
$("input.colorpalette").each(function () {
    "use strict";
    var input = this;
    var colorpalette = new Colorpalette({
        containerEl: document.createElement("div")
    });
    var colorpaletteContainer = document.createElement("div");
    colorpaletteContainer.className = "colorpalettePicker";
    colorpaletteContainer.style.position = "absolute";
    colorpaletteContainer.style.display = "none";
    colorpaletteContainer.style.zIndex = 100;

    var colorpaletteOverlay = document.createElement("div");
    colorpaletteOverlay.className = "overlay";
    // colorpaletteOverlay.style.position = "fixed";
    // colorpaletteOverlay.style.top = "0px";
    // colorpaletteOverlay.style.left = "0px";
    // colorpaletteOverlay.style.right = "0px";
    // colorpaletteOverlay.style.bottom = "0px";
    // colorpaletteOverlay.style.backgroundColor = "rgba(0,0,0,0)";

    colorpaletteContainer.appendChild(colorpaletteOverlay);
    colorpaletteContainer.appendChild(colorpalette.containerEl);
    $(colorpaletteContainer).insertAfter(input);
    function updateColorpaletteFromInputValue() {
        var match = String(input.value).match(/([0-9]+),([0-9]+),([0-9]+),([0-9\.]+)/);
        var col = {
            r: parseInt(match && match[1]) || 0,
            g: parseInt(match && match[2]) || 0,
            b: parseInt(match && match[3]) || 0,
            a: parseFloat(match && match[4]) || 0
        };
        input.style.backgroundColor = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.a + ")";
        // alert(input.style.backgroundColor);
        input.style.color = "rgba(0,0,0,0)";
        colorpalette.setColor(col, "noPropagate");
    }
    function updateButtonColor(e) {
        $(colorpaletteContainer).hide();
        input.value = "rgba(" + e.color.red + "," + e.color.green + "," + e.color.blue + "," + e.color.alpha + ")";
        $(input).change();
        updateColorpaletteFromInputValue();
    }
    colorpalette.on("set", updateButtonColor);
    //input.addEventListener("change", updateColorpaletteFromInputValue);
    $(input).change(updateColorpaletteFromInputValue);
    $(input).click(function () {
        $(colorpaletteContainer).toggle();
    });
    $(colorpaletteOverlay).bind("touchstart mousedown click", function () {
        updateButtonColor({color: colorpalette.getColor()});
    });
    updateColorpaletteFromInputValue();
});

//colorpalette in background
var backgroundColorpalette = new Colorpalette({
    containerEl: document.getElementById("colorpalette")
});
function updateBackgroundColorpaletteFromInputValue() {
    "use strict";
    var col = {
        r: $("#backgroundColorR").val() || 0,
        g: $("#backgroundColorG").val() || 0,
        b: $("#backgroundColorB").val() || 0,
        a: $("#backgroundColorA").val() / 100 || 0
    };
    document.getElementById("color-preview").style.backgroundColor = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.a + ")";
    backgroundColorpalette.setColor(col, "noPropagate");
}
function updateBackgroundColor(e) {
    "use strict";
    $("#backgroundColorR").val(e.color.red);
    $("#backgroundColorG").val(e.color.green);
    $("#backgroundColorB").val(e.color.blue);
    $("#backgroundColorA").val(e.color.alpha * 100);
    $("#backgroundColorA").change();
    $("#colorpalettePicker").hide();
}
backgroundColorpalette.on("set", updateBackgroundColor);
$("#backgroundColorR").change(updateBackgroundColorpaletteFromInputValue);
$("#backgroundColorG").change(updateBackgroundColorpaletteFromInputValue);
$("#backgroundColorB").change(updateBackgroundColorpaletteFromInputValue);
$("#backgroundColorA").change(updateBackgroundColorpaletteFromInputValue);
$("#color-preview").click(function () {
    "use strict";
    $("#colorpalettePicker").toggle();
});

$("#overlay").bind("touchstart mousedown click", function () {
    "use strict";
    $("#colorpalettePicker").hide();
    updateBackgroundColor({color: backgroundColorpalette.getColor()});
});
updateBackgroundColorpaletteFromInputValue();

/*global $, Pixelpicker*/
// colorpalette in tools
$("input.pixelpicker").each(function () {
    "use strict";
    var input = this;

    var colorpalette = new Pixelpicker({
        imageSrc: "img/screens/screen-800x596.jpg",
        containerEl: document.createElement("div")
    });
    var colorpaletteContainer = document.createElement("div");
    colorpaletteContainer.className = "colorpalettePicker";
    colorpaletteContainer.style.position = "absolute";
    colorpaletteContainer.style.display = "none";
    colorpaletteContainer.style.zIndex = 100;

    var colorpaletteOverlay = document.createElement("div");
    colorpaletteOverlay.style.position = "fixed";
    colorpaletteOverlay.style.top = "0px";
    colorpaletteOverlay.style.left = "0px";
    colorpaletteOverlay.style.right = "0px";
    colorpaletteOverlay.style.bottom = "0px";
    colorpaletteOverlay.style.backgroundColor = "rgba(0,0,0,0)";

    colorpaletteContainer.appendChild(colorpaletteOverlay);
    colorpaletteContainer.appendChild(colorpalette.containerEl);
    $(colorpaletteContainer).insertAfter(input);
    function updateColorpaletteFromInputValue() {
        var match = String(input.value).match(/([0-9]+),([0-9]+),([0-9]+),([0-9\.]+)/);
        var col = {
            r: parseInt(match && match[1]) || 0,
            g: parseInt(match && match[2]) || 0,
            b: parseInt(match && match[3]) || 0,
            a: parseFloat(match && match[4]) || 0
        };
        input.style.backgroundColor = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.a + ")";
        // alert(input.style.backgroundColor);
        input.style.color = "rgba(0,0,0,0)";
        colorpalette.setColor(col, "noPropagate");
    }
    function updateButtonColor(e) {
        $(colorpaletteContainer).hide();
        input.value = "rgba(" + e.color.red + "," + e.color.green + "," + e.color.blue + "," + e.color.alpha + ")";
        $(input).change();
        updateColorpaletteFromInputValue();
    }
    colorpalette.on("set", updateButtonColor);
    //input.addEventListener("change", updateColorpaletteFromInputValue);
    $(input).change(updateColorpaletteFromInputValue);
    $(input).click(function () {
        $(colorpaletteContainer).toggle();
    });
    $(colorpaletteOverlay).bind("touchstart mousedown click", function () {
        updateButtonColor({color: colorpalette.getColor()});
    });
    updateColorpaletteFromInputValue();
});


/*global $, window, ImagehostForm*/

$("#backgroundImage-browse").click(function () {
    "use strict";
    $("#backgroundImageFile").click();
});

$("#backgroundPdf-browse").click(function () {
    "use strict";
    $("#backgroundPdfFile").click();
});

$("#foregroundImage-browse").click(function () {
    "use strict";
    $("#foregroundImageFile").click();
});

$("#foregroundImage").change(function () {
    "use strict";
    this.style.backgroundImage = "none";
});

$("#backgroundImage").change(function () {
    "use strict";
    this.style.backgroundImage = "none";
});

//load background from file
function openBackgroundImageFile(file) {
    "use strict";
    window.tmp = new ImagehostForm({
        textInputEl: document.getElementById("backgroundImageInput"),
        file: file,
        filename: file.name
    });

}
function loadBackgroundImageFromFile(evt) {
    "use strict";
    var files = evt.target.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        openBackgroundImageFile(f);
    }
}
document.getElementById("backgroundImageFile").addEventListener("change", loadBackgroundImageFromFile, false);
document.getElementById("backgroundImageFile").addEventListener("click", function () {
    "use strict";
    this.value = "";
}, false);

//load pdf background from file
function openBackgroundPdfFile(file) {
    "use strict";
    window.tmp = new ImagehostForm({
        textInputEl: document.getElementById("backgroundPdfInput"),
        file: file,
        filename: file.name
    });

}
function loadBackgroundPdfFromFile(evt) {
    "use strict";
    var files = evt.target.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        openBackgroundPdfFile(f);
    }
}
document.getElementById("backgroundPdfFile").addEventListener("change", loadBackgroundPdfFromFile, false);
document.getElementById("backgroundPdfFile").addEventListener("click", function () {
    "use strict";
    this.value = "";
}, false);

//load foreground from file
function openForegroundFile(file) {
    "use strict";
    // console.log("openForegroundFile", file);
    window.tmp = new ImagehostForm({
        textInputEl: document.getElementById("foregroundImage"),
        file: file,
        filename: file.name
    });
}
function loadForegroundFromFile(evt) {
    "use strict";
    var files = evt.target.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        // console.log("readingFile", f);
        openForegroundFile(f);
    }
}
document.getElementById("foregroundImageFile").addEventListener("change", loadForegroundFromFile, false);
document.getElementById("foregroundImageFile").addEventListener("click", function () {
    "use strict";
    this.value = "";
}, false);


/*global $, applyConfigToForm, formToJosonToConfigPage, form2FormUpdate, colorToRgba*/
/*global window*/
var pageConfigsStash = {
    currentPageNo: String(1),
    configs: [],
    getPages: function getPages() {
        "use strict";
        return this.configs;
    },
    getPageConfig: function getPageConfig(no) {
        "use strict";
        var i;
        for (i = 0; i < this.configs.length; i += 1) {
            if (this.configs[i].no === no) {
                return this.configs[i];
            }
        }
        return false;

    },
    setPageConfig: function setPageConfig(config) {
        "use strict";
        var i;
        if (!config.no) {
            console.error("pageConfigsStash:setPageConfig - config.no required", config);
            throw new Error("pageConfigsStash:setPageConfig - config.no required");
        }
        // console.log("setPageConfig", config);
        config.no = String(config.no);//force to string
        for (i = 0; i < this.configs.length; i += 1) {
            if (this.configs[i].no === config.no) {
                this.configs[i] = Object.assign(this.configs[i], config);
                if (!this.configs[i].sid) {
                    this.configs[i].sid = Date.now() + Math.random();
                }
                return this;//updated
            }
        }
        this.configs.push(config);
        return this;
    },
    removePageConfig: function removePageConfig(no) {
        "use strict";
        var i;
        for (i = this.configs.length - 1; i >= 0; i -= 1) {
            if (this.configs[i].no === no) {
                this.configs.splice(i, 1);
            }
        }
        //recalculate no's
        for (i = 0; i < this.configs.length; i += 1) {
            this.configs[i].no = String(i + 1);
        }
        this.currentPageNo = String(1);
        $("#currentPageNo").val(1);
        applyConfigToForm(this.getPageConfig("1"));
        return this;
    }

};
function resetPagesSelect() {
    "use strict";
    pageConfigsStash.configs = [];
    pageConfigsStash.currentPageNo = 1;
    $("#currentPageNo").children("[value!='add_page']").remove();
}
window.resetPagesSelect = resetPagesSelect;

function addNewPage(newPageConfig) {
    "use strict";
    // if (!newPageConfig) {
    //     newPageConfig = formToJosonToConfigPage();
    // }
    // console.log("newPageConfig", newPageConfig);
    var newPageNo = String(pageConfigsStash.configs.length + 1);//$("#currentPageNo").children().length;

    //reset/clear page config before set page config
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
        backgroundPdf: {
            pageNo: 1,
            url: ""
        },
        backgroundUrl: "",
        backgroundMapsLocation: "",
        backgroundMapsType: "roadmap",
        backgroundMapsZoom: 15,
        width: 1024,
        height: 1536,
        no: newPageNo
    };
    pageConfigsStash.setPageConfig(clearConfig);

    //set page config
    if (newPageConfig) {
        newPageConfig.no = newPageNo;
        pageConfigsStash.setPageConfig(newPageConfig);
    }
    $("<option value='" + newPageNo + "'>" + newPageNo + "</option>").insertBefore($("#currentPageNo").children().last());
    $("#currentPageNo").val(newPageNo);
}
window.addNewPage = addNewPage;


function removePage(ignore) {
    "use strict";
    var $removedItem = $("#currentPageNo").children(":selected");
    if ($("#currentPageNo").children().length < 3) {
        return;
    }
    if ($removedItem.val() === "add_page") {
        return;
    }
    pageConfigsStash.removePageConfig(String($removedItem.val()));
    $removedItem.remove();

    $("#currentPageNo").children().each(function (i, element) {
        var $element = $(element);
        var no = i + 1;
        if ($element.val() === "add_page") {
            return;
        }
        $element.text(no);
        $element.val(String(no));
    });
    form2FormUpdate();
}

$("#remove-page").click(removePage);

function onPageChange(ignore) {//event
    "use strict";
    // console.log("onPageChange - event", event);
    var $selectEl = $("#currentPageNo");
    if (pageConfigsStash.currentPageNo) {
        var pageConfig = formToJosonToConfigPage();
        pageConfig.no = pageConfigsStash.currentPageNo;
        pageConfigsStash.setPageConfig(pageConfig);
    }
    if ($selectEl.val() === "add_page") {
        addNewPage();
    }
    pageConfigsStash.currentPageNo = $selectEl.val();
    var pageConfigForm = Object.assign({}, pageConfigsStash.getPageConfig(pageConfigsStash.currentPageNo));
    var colorRGBA = colorToRgba(pageConfigForm.backgroundColor);
    pageConfigForm.backgroundColorR = colorRGBA.r;
    pageConfigForm.backgroundColorG = colorRGBA.g;
    pageConfigForm.backgroundColorB = colorRGBA.b;
    pageConfigForm.backgroundColorA = colorRGBA.a * 100;

    pageConfigForm.backgroundPdfPage = pageConfigForm.backgroundPdf.pageNo;
    pageConfigForm.backgroundPdfUrl = pageConfigForm.backgroundPdf.url;
    console.log("pageConfigForm", pageConfigForm);

    //patch config - autoset startPosition
    if (pageConfigForm.viewportX !== 0 ||
            pageConfigForm.viewportY !== 0 ||
            pageConfigForm.viewportScale !== 1 ||
            pageConfigForm.viewportZRotation !== 0) {
        pageConfigForm.startPosition = "custom";
    } else {
        pageConfigForm.startPosition = "center";
    }

    applyConfigToForm(pageConfigForm);
    form2FormUpdate();
}
$("#currentPageNo").change(onPageChange);

/*global formToJosonToConfig, $, FileReader, bytesToSize, configObjToDotNotation, resetPagesSelect, onPageChange, pageConfigsStash, addNewPage, form2FormUpdate, applyConfigToForm, window, colorToRgba*/
function setFormStateFromFile(config) {
    "use strct";
    config = config || {};
    delete config.token;
    delete config.password;
    //disable all checbox in radio, where undefinted means unchecked
    var $form = $("#config");
    $form.find("input[type=checkbox]").prop('checked', false);
    $form.find("input[type=radio]").prop('checked', false);
    if (config.toolsConfigs) {
        Object.assign(config, configObjToDotNotation(config.toolsConfigs, "toolsConfigs"));
        delete config.toolsConfigs;
    }

    applyConfigToForm(config);
    applyConfigToForm(config.features);
    // if (typeof config.configPage === "object") {
    //     var pageConfigForm = Object.assign({}, config.configPage);
    //     var colorRGBA = colorToRgba(pageConfigForm.backgroundColor);
    //     pageConfigForm.backgroundColorR = colorRGBA.r;
    //     pageConfigForm.backgroundColorG = colorRGBA.g;
    //     pageConfigForm.backgroundColorB = colorRGBA.b;
    //     pageConfigForm.backgroundColorA = colorRGBA.a * 100;
    //     applyConfigToForm(pageConfigForm);
    // }
    $("input.colorpalette").change();
}

function showConfigStats() {
    "use strict";
    var statsDataHtml = "" +
            // "<div>Token: <span class='value'>" + formToJosonToConfig().token + "</span></div>" +
            "<div>File loaded</span></div>" +
            "<div>Pages: <span class='value'>" + pageConfigsStash.configs.length + "</span></div>" +
            "<div>Inputs: <span class='value'>" + window.sketchMessages.length + "</span></div>";
    // alert(statsDataHtml);
    $("#sketch-config-stats").html(statsDataHtml);
    $("#sketch-config-stats").removeAttr("hidden");
}
window.showConfigStats = showConfigStats;

/**
 * Reads file
 * @param  {File} file          [description]
 * @param  {integer} opt_startByte [description]
 * @param  {integer} opt_stopByte  [description]
 * //, opt_startByte, opt_stopByte
 */
function openSketchFile(file, opt_startByte, opt_stopByte) {
    "use strict";
    var start = parseInt(opt_startByte) || 0;
    var stop = parseInt(opt_stopByte) || file.size - 1;

    var reader = new FileReader();
    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        // console.log("openSketchFile:reader:onloadend", evt);
        // if (evt.target.readyState === FileReader.DONE) { // DONE == 2
        var filedata;
        var filenameEl = $("#sketchJsonName");
        var metaConfig = false;
        try {
            filedata = JSON.parse(evt.target.result);
        } catch (e) {
            console.error("openSketchFile:onloadend:wrong file format", e);
            filenameEl.removeClass("bg-success text-white");
            filenameEl.addClass("bg-danger text-white");
            filenameEl.html(file.name + " - <strong>wrong file format</strong>");
            window.sketchMessages = undefined;
            return;
        }
        filenameEl.removeClass("bg-danger text-white");
        filenameEl.addClass("bg-success text-white");
        filenameEl.html(file.name + " <strong>(" + bytesToSize(file.size) + ")</strong>");
        if (filedata && filedata[0] && filedata[0].cmd === "meta" && filedata[0].config) {
            metaConfig = filedata.shift();
            // console.log("XXX", configObjToDotNotation(metaConfig.config.toolsConfigs, "toolsConfigs"));
            //
            // console.log("metaConfig", metaConfig.config);
            setFormStateFromFile(metaConfig.config);
        }
        form2FormUpdate();

        // alert(filedata[0].cmd);
        var pageConfig;
        var i = 0,
            pageNo = 0;
        resetPagesSelect();
        while (i < filedata.length) {
            if (filedata[i].cmd === "page" && filedata[i].config) {
                pageNo += 1;
                pageConfig = filedata.splice(i, 1)[0];
                // console.log("pageConfig", pageConfig);
                if (!pageConfig.config.no) {
                    pageConfig.config.no = (pageConfig.config.titleNo && String(pageConfig.config.titleNo)) || String(pageNo);
                }
                addNewPage(pageConfig.config);
                // pageConfigsStash.setPageConfig(pageConfig.config);
                // console.log(pageConfig.config.no, JSON.parse(JSON.stringify(pageConfig.config)));
                // alert(pageConfig.config.no);
            } else {
                i += 1;
            }
        }
        // if (i > )
        if (i > 1) {
            $("#inaterface-pages").prop("checked", true);
            // $("#pages").val(1);
            // form2FormUpdate();
            // updateFormState({displayPages: true});
        }
        pageConfigsStash.currentPageNo = false;//disable autosave cuurentPage
        onPageChange();
        // applyConfigToForm(pageConfig.config);
        window.sketchMessages = filedata;
        // console.log("metaConfig", metaConfig);
        if (metaConfig && metaConfig.config && metaConfig.config.currentPageNo) {
            $("#currentPageNo").val(String(metaConfig.config.currentPageNo));
            $("#currentPageNo").change();
        }
        $("#password").focus();
        showConfigStats();
        // console.log('byte_content', evt.target.result);
        // console.log('byte_range', 'Read bytes: ', start + 1, ' - ', stop + 1, ' of ', file.size, ' byte file');
        // }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
}

//load sketch from file
function loadSketchFromFile(evt) {
    "use strict";
    var files = evt.target.files; // FileList object
    var i,
        f;
    for (i = 0; i < files.length; i += 1) {
        f = files[i];
        // console.log("readingFile", f);
        openSketchFile(f);
    }
}
document.getElementById("sketchJson").addEventListener("change", loadSketchFromFile, false);
document.getElementById("sketchJson").addEventListener("click", function () {
    "use strict";
    this.value = "";
}, false);

/*global $, getServerAddress, WebSocket, formToJosonToConfig, window, ICONFIG*/
function updateEmbedCode(config) {
    "use strict";
    $("#embedCode").slideDown();

    var embed = "<iframe src=\"https://" + ICONFIG.domain + "/#queryString#\" width=\"#width#\" height=\"#height#\"></iframe>",
        url = "https://" + ICONFIG.domain + "/#queryString#";
    function getVar(name) {
        // console.log("getVar", name, arguments);
        // var queryString = config.token;
        switch (name) {
        case "#queryString#":
            return config.url;
        case "#width#":
            return $("#width").val() || "800";
        case "#height#":
            return $("#height").val() || "600";
        }
        return "!" + name;
    }
    var varsRegx = /#(queryString)#|#width#|#height#/g;
    embed = embed.replace(varsRegx, getVar);
    url = url.replace(varsRegx, getVar);
    $("#embed").val(embed);

    $("#url").val(url);

}

function createSketchpad(config) {
    "use strct";
    // console.log("createSketchpad", config);
    $("#open-room").attr("disabled", true);
    try {
        var wsServerAddres = getServerAddress(config.token);
        var ws = new WebSocket(wsServerAddres);
        ws.addEventListener("error", function (e) {
            $("#open-room").addClass("error").addClass("btn-danger").html("connection error, try again later");
            setTimeout(function () {
                $("#open-room").attr("disabled", false);
                $("#open-room").text("retry connection");
                $("#open-room").removeClass("error").removeClass("btn-danger");
            }, 10000);
            console.error("WebsocketError", e);
        });
        ws.addEventListener("message", function (e) {
            var msg;
            if (e.data === "ping") {
                // console.log("ping received");
                return;
            }
            try {
                msg = JSON.parse(e.data);
            } catch (err) {
                msg = {
                    cmd: "unknow-response-from-server",
                    err: err
                };
                var lastMessageHtml = $("#open-room").html();
                $("#open-room").addClass("error").addClass("btn-danger").html(JSON.stringify(e.data));
                setTimeout(function () {
                    $("#open-room").attr("disabled", false);
                    $("#open-room").html(lastMessageHtml);
                    $("#open-room").removeClass("error").removeClass("btn-danger");
                    // $("#open-room").removeClass("error").addClass("remove-danger").html(lastMessage);
                    // $("#open-room").removeClass("error").addClass("remove-danger").html(lastMessage);
                }, 1000 * 5);
            }
            // console.log("webmasters-form-create-sketchpad.js", "messageReceived", msg);
            switch (msg.cmd) {
            case "initialised":
                break;
            case "eos":
                ws.close();
                break;
            case "set-permissions":
                break;
            case "pass-in":
                if (msg.canDraw) {
                    ws.send(JSON.stringify({
                        cmd: "init-begin"
                    }));
                    // alert("!!!");
                    ws.send(JSON.stringify({
                        cmd: "reset"
                    }));
                    if (Array.isArray(config.pages)) {
                        config.pages.forEach(function (pageConfig) {
                            ws.send(JSON.stringify({
                                cmd: "page",
                                config: pageConfig
                            }));
                        });
                    } else {
                        console.warn("No pages found - adding default empty page.");
                        ws.send(JSON.stringify({
                            cmd: "page",
                            config: {
                            } //default config
                        }));
                    }
                    if (Array.isArray(window.sketchMessages)) {
                        // console.log("Uploading input data", "count:", window.sketchMessages.length);
                        ws.send(JSON.stringify({
                            cmd: "history-begin"
                        }));
                        window.sketchMessages.forEach(function (message) {
                            switch (message.cmd) {
                            //skip meta and page as are already send
                            case "meta":
                            case "page":
                                break;
                            default:
                                ws.send(JSON.stringify(message));
                            }
                        });
                        ws.send(JSON.stringify({
                            cmd: "history-end"
                        }));
                        ws.send(JSON.stringify({
                            cmd: "init-end"
                        }));

                        ws.send(JSON.stringify({
                            cmd: "eos"
                        }));
                    }
                }
                ws.send(JSON.stringify({
                    cmd: "goto",
                    position: {
                        pageNo: "1",
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotation: 0
                    }
                }));
                updateEmbedCode(msg);
                window.token = msg.token;
                window.url = msg.url;
                $("#embed-code").slideDown();
                setTimeout(function () {
                    $("#open-room").addClass("generated").addClass("btn-success");
                    $("#open-room").html("open room");
                    $("#open-room").attr("disabled", false);
                }, 500);
                break;
            default:
                console.warn("webmasters-form-create-sketchpad.js", "UNKNOWN REPOSNE", msg);
            }
        }, true);

        ws.addEventListener("open", function (ignore) {
            var createObj = {
                cmd: "create",
                room_token: config.token,
                room_password: config.password,
                room_config: config
            };
            // console.log("webmasters-form-create-sketchpad.js", "Create config", createObj);
            var msg = JSON.stringify(createObj);
            ws.send(msg);
        }, true);
    } catch (e) {
        $("#open-room").addClass("error").addClass("btn-danger").html("service error");
        console.error("Service error", e);
    }
}


$("#open-room").click(function () {
    "use strict";
    if ($("#open-room").hasClass("generated")) {
        $("#open-room").attr("disabled", true);
        $("#open-room")
            .addClass("run")
            .addClass("btn-warning")
            .text("Opening " + window.token);
        window.location.href = "./" + window.url;
    } else {
        createSketchpad(formToJosonToConfig());
    }
    return false;
});

/*global window, $, generateUUID, generatePASSWD*/
/*global formToJson, configDotNotationToObj*/
/*global pageConfigsStash, resetPagesSelect, addNewPage*/
/*global updateBackgroundColorpaletteFromInputValue*/
/*global showConfigStats*/
/*global ImagehostForm*/
$("#sketchJson-browse").click(function () {
    "use strict";
    $("#sketchJson").click();
});


function updateFormView(config) {
    "use strct";
    config = config || {};
    // console.log("updateFormView", config);



    //HIDE
    //reset form - background types
    $("#backgroundColor").hide();
    $("#backgroundImage").hide();
    $("#backgroundUrl").hide();
    $("#backgroundPdf").hide();
    $("#backgroundMaps").hide();
    //reset form - size
    $("#size").slideUp();
    //reset form - tools configs
    $(".toolConfig").not(".toolConfig." + config.defaultTool).slideUp();

    //SHOW
    //show current background type config
    switch (config.currentPageConfig.backgroundType) {
    case "color":
        $("#backgroundColor").show();
        document.getElementById("viewportScale").disabled = false;
        break;
    case "image":
        $("#backgroundImage").show();
        document.getElementById("viewportScale").disabled = false;
        break;
    case "pdf":
        $("#backgroundPdf").show();
        document.getElementById("viewportScale").disabled = false;
        break;
    case "googlemaps":
        $("#backgroundMaps").show();
        document.getElementById("viewportScale").disabled = true;
        document.getElementById("viewportScale").value = 1;
        break;
    case "web":
        $("#backgroundUrl").show();
        $("#size").slideDown();
        document.getElementById("viewportScale").disabled = false;
        break;
    }
    //show default tool config
    $(".toolConfig." + config.defaultTool).slideDown();


    //SHOW/HIDE
    if (config.pages.length > 1) {
        $("#remove-page").show();
    } else {
        $("#remove-page").hide();
    }
    // //password
    // switch (config.mode) {
    // case "public":
    //     $("#form-password").slideUp("fast");
    //     break;
    // case "protected":
    //     $("#form-password").slideDown("fast");
    //     break;
    // }
    $("#form-password").slideDown("fast");

    //position
    switch (config.currentPageConfig.startPosition) {
    case "center":
        $("#form-viewport").slideUp("fast");
        break;
    case "custom":
        $("#form-viewport").slideDown("fast");
        break;
    }
    //pages
    if (config.features.displayPages) {
        $("#form-pages").slideDown("fast");
    } else {
        $("#form-pages").slideUp("fast");
    }
    //toolbar
    if (config.features.displayToolbar) {
        $("#form-tools").slideDown("fast");
    } else {
        $("#form-tools").slideUp("fast");
    }
    //chat webrtc
    if (config.features && config.features.displayChat) {
        $("#feature-webrtc").slideDown("fast");
    } else {
        $("#feature-webrtc").slideUp("fast");
    }
    return false;
}

function formToJosonToConfigPage() {
    "use strict";
    var configPage = formToJson("#config .page-config") || {};
    configPage.backgroundColor = "rgba(" + configPage.backgroundColorR + "," + configPage.backgroundColorG + "," + configPage.backgroundColorB + "," + configPage.backgroundColorA / 100 + ")";
    delete configPage.backgroundColorR;
    delete configPage.backgroundColorG;
    delete configPage.backgroundColorB;
    delete configPage.backgroundColorA;

    configPage.foregroundImage = ImagehostForm.prototype.proxyUrl(configPage.foregroundImage);
    configPage.backgroundImage = ImagehostForm.prototype.proxyUrl(configPage.backgroundImage);
    configPage.backgroundPdf = {
        // fingerprint: ,
        url: ImagehostForm.prototype.proxyUrl(configPage.backgroundPdfUrl),
        pageNo: parseInt(configPage.backgroundPdfPage, 10)
    };
    delete configPage.backgroundPdfPage;
    delete configPage.backgroundPdfUrl;

    return configPage;
}
window.formToJosonToConfigPage = formToJosonToConfigPage;
function formToJosonToConfig() {
    "use strict";

    //read config
    var config = formToJson("#config .room-config") || {};
    configDotNotationToObj(config);

    //read sub configs
    var featuresConfig = formToJson("#config .features-config") || {};
    featuresConfig.displayViewports = !!featuresConfig.displayViewports;
    featuresConfig.displayCrosshair = !!featuresConfig.displayCrosshair;
    featuresConfig.displayToolbar = !!featuresConfig.displayToolbar;
    featuresConfig.displayPages = !!featuresConfig.displayPages;

    // console.log("featuresConfig", featuresConfig);
    //save current page
    var currentPageConfig = formToJosonToConfigPage();
    // alert(pageConfigsStash.currentPageNo);
    // if (!pageConfigsStash.currentPageNo) {
    //     currentPageConfig.no = 1;
    // }
    if (pageConfigsStash.currentPageNo) {
        currentPageConfig.no = (pageConfigsStash.currentPageNo);
        pageConfigsStash.setPageConfig(currentPageConfig);
    }
    //read page configs
    config.pages = pageConfigsStash.getPages();
    // var pagesCount = pageConfigsStash.configs.length;//$("#pages").children().length;//pageConfigsStash.configs.length;
    // config.pages = [];
    // var i;
    // for (i = 0; i < pagesCount; i += 1) {
    //     config.pages.push(pageConfigsStash.getPageConfig(String(i + 1)));
    // }
    //save sub configs
    config.features = featuresConfig;
    config.currentPageConfig = currentPageConfig;

    return config;
}

function form2FormUpdate() {
    "use strict";
    $("#open-room")
        .removeClass("run")
        .removeClass("btn-warning")
        .removeClass("generated")
        .removeClass("btn-success")
        .removeClass("error")
        .removeClass("btn-danger")
        .html("create room");
    $("#embed-code").slideUp();
    updateFormView(formToJosonToConfig());
    updateBackgroundColorpaletteFromInputValue();
}

function resetForm() {
    "use strict";
    window.sketchMessages = [];
    showConfigStats();
    $("#sketch-config-stats").attr("hidden", true);
    resetPagesSelect();
    addNewPage(null);//use values from form
    form2FormUpdate();
}

$(".watch").change(form2FormUpdate);

$("#rnd-token").click(function () {
    "use strct";
    resetForm();
    $("#token").val(generateUUID());
    // form2FormUpdate();
});

$("#rnd-password").click(function () {
    "use strct";
    $("#password").val(generatePASSWD(8));
    // form2FormUpdate();
});

//init.js
$("#token").val(generateUUID());
$("#password").val(generatePASSWD(8));
resetForm();

