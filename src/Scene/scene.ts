

import { DataConfig } from './fakeData';


interface CanvasConfig {
    width: number;
    height: number;
}
class Canvas {
    canvas: any
    constructor (config: CanvasConfig = DataConfig) {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("width", config.width + "");
        this.canvas.setAttribute("height", config.height + "");
        document.querySelector("#main-container").appendChild(this.canvas);
    }
    getCanvas(){
        return this.canvas;
    }

   
}

let Scene =  Canvas;



export {
    Scene
}

