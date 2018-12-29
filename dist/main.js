/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GLTools/WebGLUtils.ts":
/*!***********************************!*\
  !*** ./src/GLTools/WebGLUtils.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction createProgram(gl, verte_Xshader, fragment_Shader) {\n    // 创建着色器方法，输入参数：渲染上下文，着色器类型，数据源\n    function createShader(gl, type, source) {\n        var shader = gl.createShader(type); // 创建着色器对象\n        gl.shaderSource(shader, source); // 提供数据源\n        gl.compileShader(shader); // 编译 -> 生成着色器\n        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n        if (success) {\n            return shader;\n        }\n        console.log(gl.getShaderInfoLog(shader));\n        gl.deleteShader(shader);\n    }\n    var vertexShaderSource = verte_Xshader;\n    var fragmentShaderSource = fragment_Shader;\n    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);\n    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);\n    function createProgram(gl, vertexShader, fragmentShader) {\n        var program = gl.createProgram();\n        gl.attachShader(program, vertexShader);\n        gl.attachShader(program, fragmentShader);\n        gl.linkProgram(program);\n        var success = gl.getProgramParameter(program, gl.LINK_STATUS);\n        if (success) {\n            return program;\n        }\n        console.log(gl.getProgramInfoLog(program));\n        gl.deleteProgram(program);\n    }\n    var program = createProgram(gl, vertexShader, fragmentShader);\n    return program;\n}\nexports.default = createProgram;\n\n\n//# sourceURL=webpack:///./src/GLTools/WebGLUtils.ts?");

/***/ }),

/***/ "./src/Router/router.ts":
/*!******************************!*\
  !*** ./src/Router/router.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Router = function (rc) {\n    this.routes = rc;\n    var that = this;\n    function clear() {\n        document.querySelector(\"#main-container\").innerHTML = \"\";\n    }\n    for (var _i = 0, _a = that.routes; _i < _a.length; _i++) {\n        var one = _a[_i];\n        if (one.main == true) {\n            clear();\n            one.method();\n            break;\n        }\n    }\n    window.addEventListener('hashchange', function (event) {\n        for (var _i = 0, _a = that.routes; _i < _a.length; _i++) {\n            var one = _a[_i];\n            if (location.hash == \"#\" + one.name) {\n                clear();\n                one.method();\n            }\n        }\n    });\n};\nexports.default = Router;\n\n\n//# sourceURL=webpack:///./src/Router/router.ts?");

/***/ }),

/***/ "./src/Scene/fakeData.ts":
/*!*******************************!*\
  !*** ./src/Scene/fakeData.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataConfig = {\n    height: 500,\n    width: 500\n};\nexports.DataConfig = DataConfig;\nObject.preventExtensions(DataConfig);\n\n\n//# sourceURL=webpack:///./src/Scene/fakeData.ts?");

/***/ }),

/***/ "./src/Scene/scene.ts":
/*!****************************!*\
  !*** ./src/Scene/scene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fakeData_1 = __webpack_require__(/*! ./fakeData */ \"./src/Scene/fakeData.ts\");\nvar Canvas = /** @class */ (function () {\n    function Canvas(config) {\n        if (config === void 0) { config = fakeData_1.DataConfig; }\n        this.canvas = document.createElement(\"canvas\");\n        this.canvas.setAttribute(\"width\", config.width + \"\");\n        this.canvas.setAttribute(\"height\", config.height + \"\");\n        document.querySelector(\"#main-container\").appendChild(this.canvas);\n    }\n    Canvas.prototype.getCanvas = function () {\n        return this.canvas;\n    };\n    return Canvas;\n}());\nvar Scene = Canvas;\nexports.Scene = Scene;\n\n\n//# sourceURL=webpack:///./src/Scene/scene.ts?");

/***/ }),

/***/ "./src/demo_1/demo.ts":
/*!****************************!*\
  !*** ./src/demo_1/demo.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar scene_1 = __webpack_require__(/*! ../Scene/scene */ \"./src/Scene/scene.ts\");\nvar WebGLUtils_1 = __webpack_require__(/*! ../GLTools/WebGLUtils */ \"./src/GLTools/WebGLUtils.ts\");\nvar Demo_1 = function () {\n    var gl = (new scene_1.Scene).getCanvas().getContext(\"webgl\");\n    var verte_Xshader = \"\\nattribute vec2 a_position;\\n \\nuniform vec2 u_resolution;\\nattribute vec4 a_color;\\nuniform vec2 u_translation;\\nvarying vec4 v_color;\\nvoid main() {\\n    // \\u4ECE\\u50CF\\u7D20\\u5750\\u6807\\u8F6C\\u6362\\u5230 0.0 \\u5230 1.0\\n    vec2 zeroToOne = a_position / u_resolution + u_translation;\\n \\n    // \\u518D\\u628A 0->1 \\u8F6C\\u6362 0->2\\n    vec2 zeroToTwo = zeroToOne * 2.0;\\n \\n    // \\u628A 0->2 \\u8F6C\\u6362\\u5230 -1->+1 (\\u88C1\\u526A\\u7A7A\\u95F4)\\n    vec2 clipSpace = zeroToTwo - 1.0;\\n \\n    gl_Position = vec4(clipSpace * vec2(1, -1) , 0, 1);\\n    v_color = a_color;\\n  }\\n\";\n    var fragment_Shader = \"\\nprecision mediump float;\\nvarying vec4 v_color;\\nvoid main() {\\n  gl_FragColor = v_color;\\n}\\n\";\n    var program = WebGLUtils_1.default(gl, verte_Xshader, fragment_Shader);\n    var positionAttributeLocation = gl.getAttribLocation(program, \"a_position\");\n    var resolutionUniformLocation = gl.getUniformLocation(program, \"u_resolution\");\n    var translationLocation = gl.getUniformLocation(program, \"u_translation\");\n    var colorLocation = gl.getAttribLocation(program, \"a_color\");\n    var positionBuffer = gl.createBuffer();\n    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n    var positions = [\n        // 左竖\n        0, 0,\n        30, 0,\n        0, 150,\n        0, 150,\n        30, 0,\n        30, 150,\n        // 上横\n        30, 0,\n        100, 0,\n        30, 30,\n        30, 30,\n        100, 0,\n        100, 30,\n        // 中横\n        30, 60,\n        67, 60,\n        30, 90,\n        30, 90,\n        67, 60,\n        67, 90,\n        //U\n        110, 0,\n        140, 0,\n        110, 150,\n        110, 150,\n        140, 0,\n        140, 150,\n        140, 150,\n        190, 150,\n        140, 120,\n        140, 120,\n        190, 150,\n        190, 120,\n        160, 0,\n        190, 0,\n        160, 150,\n        160, 150,\n        190, 0,\n        190, 150,\n        //C\n        210, 0,\n        280, 0,\n        210, 30,\n        210, 30,\n        280, 0,\n        280, 30,\n        210, 0,\n        240, 0,\n        210, 150,\n        210, 150,\n        240, 0,\n        240, 150,\n        210, 120,\n        280, 120,\n        210, 150,\n        210, 150,\n        280, 120,\n        280, 150,\n        //C\n        300, 75,\n        400, 0,\n        430, 0,\n        430, 0,\n        330, 75,\n        300, 75,\n        300, 0,\n        330, 0,\n        300, 150,\n        300, 150,\n        330, 0,\n        330, 150,\n        300, 75,\n        400, 150,\n        430, 150,\n        430, 150,\n        330, 75,\n        300, 75,\n    ];\n    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);\n    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);\n    gl.enableVertexAttribArray(colorLocation);\n    // Create a buffer to put colors in\n    var colorBuffer = gl.createBuffer();\n    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = colorBuffer)\n    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);\n    // Put geometry data into buffer\n    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array([\n        // left column front\n        200, 70, 120,\n        200, 70, 120,\n        200, 70, 120,\n        200, 70, 120,\n        200, 70, 120,\n        200, 70, 120,\n        // left column back\n        80, 70, 200,\n        80, 70, 200,\n        80, 70, 200,\n        80, 70, 200,\n        80, 70, 200,\n        80, 70, 200,\n        // top rung right\n        200, 200, 70,\n        200, 200, 70,\n        200, 200, 70,\n        200, 200, 70,\n        200, 200, 70,\n        200, 200, 70,\n    ]), gl.STATIC_DRAW);\n    // 清空画布\n    gl.clearColor(0, 0, 0, 0);\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    // 告诉它用我们之前写好的着色程序（一个着色器对）\n    gl.useProgram(program);\n    gl.enableVertexAttribArray(positionAttributeLocation);\n    // 将绑定点绑定到缓冲数据（positionBuffer）\n    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n    var translation = [0, 0];\n    // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)\n    var size = 2; // 每次迭代运行提取两个单位数据\n    var type = gl.FLOAT; // 每个单位的数据类型是32位浮点型\n    var normalize = false; // 不需要归一化数据\n    var stride = 0; // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）\n    // 每次迭代运行运动多少内存到下一个数据开始点\n    var offset = 0; // 从缓冲起始位置开始读取\n    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);\n    // 设置全局变量 分辨率\n    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);\n    // 设置平移\n    gl.uniform2fv(translationLocation, translation);\n    // Tell the attribute how to get data out of colorBuffer (ARRAY_BUFFER)\n    var size = 3; // 3 components per iteration\n    var type = gl.UNSIGNED_BYTE; // the data is 8bit unsigned values\n    var normalize = true; // normalize the data (convert from 0-255 to 0-1)\n    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position\n    var offset = 0; // start at the beginning of the buffer\n    gl.vertexAttribPointer(colorLocation, size, type, normalize, stride, offset);\n    // draw\n    var primitiveType = gl.TRIANGLES;\n    var offset = 0;\n    var count = 72;\n    gl.drawArrays(primitiveType, offset, count);\n};\nexports.default = Demo_1;\n\n\n//# sourceURL=webpack:///./src/demo_1/demo.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar router_1 = __webpack_require__(/*! ./Router/router */ \"./src/Router/router.ts\");\nvar demo_1 = __webpack_require__(/*! ./demo_1/demo */ \"./src/demo_1/demo.ts\");\nvar config = [\n    {\n        name: \"index\",\n        method: demo_1.default,\n        main: true\n    }, {\n        name: \"go\",\n        method: function () {\n            document.querySelector(\"#main-container\").innerHTML = \"12345\";\n        }\n    }\n];\nrouter_1.default(config);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });