import {Scene} from '../Scene/scene';

import createProgram from '../GLTools/WebGLUtils';


let Demo_1 = function() {
    
    var gl = (new Scene).getCanvas().getContext("webgl");

let verte_Xshader = `
attribute vec2 a_position;
 
uniform vec2 u_resolution;
uniform vec2 u_translation;
void main() {
    // 从像素坐标转换到 0.0 到 1.0
    vec2 zeroToOne = a_position / u_resolution + u_translation;
 
    // 再把 0->1 转换 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // 把 0->2 转换到 -1->+1 (裁剪空间)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    gl_Position = vec4(clipSpace * vec2(1, -1) , 0, 1);
  }
`;

let fragment_Shader = `
precision mediump float;
void main() {
  gl_FragColor = vec4(1, 0, 0.5, 1);
}
`;


    var program = createProgram(gl, verte_Xshader, fragment_Shader);
  

  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
  var translationLocation = gl.getUniformLocation(
    program, "u_translation");

  var positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var positions = [
    // 左竖
    0, 0,
    30, 0,
    0, 150,
    0, 150,
    30, 0,
    30, 150,

    // 上横
    30, 0,
    100, 0,
    30, 30,
    30, 30,
    100, 0,
    100, 30,

    // 中横
    30, 60,
    67, 60,
    30, 90,
    30, 90,
    67, 60,
    67, 90,

    //U
    110, 0,
    140, 0,
    110, 150,
    110, 150,
    140, 0,
    140, 150,

    140, 150,
    190, 150,
    140, 120,
    140, 120,
    190, 150,
    190, 120,


    160, 0,
    190, 0,
    160, 150,
    160, 150,
    190, 0,
    190, 150,

    //C
210, 0,
280, 0,
210, 30,
210, 30,
280, 0,
280, 30,

210, 0,
240, 0,
210, 150,
210, 150,
240, 0,
240, 150,

210, 120,
280, 120,
210, 150,
210, 150,
280, 120,
280, 150,

 //C
300, 75,
400, 0,
430, 0,
430, 0,
330, 75,
300, 75,

300, 0,
330, 0,
300, 150,
300, 150,
330, 0,
330, 150,

300, 75,
400, 150,
430, 150,
430, 150,
330, 75,
300, 75,


];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // 清空画布
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

// 告诉它用我们之前写好的着色程序（一个着色器对）
gl.useProgram(program);
gl.enableVertexAttribArray(positionAttributeLocation);

// 将绑定点绑定到缓冲数据（positionBuffer）
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
var translation = [0, 0];
 
// 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
var size = 2;          // 每次迭代运行提取两个单位数据
var type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
var normalize = false; // 不需要归一化数据
var stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
                       // 每次迭代运行运动多少内存到下一个数据开始点
var offset = 0;        // 从缓冲起始位置开始读取
gl.vertexAttribPointer(
    positionAttributeLocation, size, type, normalize, stride, offset)
    // 设置全局变量 分辨率
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

     // 设置平移
     gl.uniform2fv(translationLocation, translation);

     // draw
  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 72;
  gl.drawArrays(primitiveType, offset, count);

}


export default Demo_1;
