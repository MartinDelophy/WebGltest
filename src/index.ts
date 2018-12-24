// import {Scene} from './Scene/scene';
// import {vec3, vec4, quat, mat4} from 'gl-matrix';
 import Router from './Router/router';



let config = [
{
name: "index",
method: function(){
    document.querySelector("#main-container").innerHTML = "123";

},
main:true
},{
    name:"go",
    method: function(){
        document.querySelector("#main-container").innerHTML = "12345";
    }

}];
Router(config);


