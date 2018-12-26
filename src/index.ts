

 import Router from './Router/router';
import Demo_1 from './demo_1/demo';




let config = [
{
name: "index",
method: Demo_1,
main:true
},{
    name:"go",
    method: function(){
        document.querySelector("#main-container").innerHTML = "12345";
    }

}];
Router(config);


