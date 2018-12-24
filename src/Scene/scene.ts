

import { DataConfig } from './fakeData';


interface CanvasConfig {
    width: number;
    height: number;
}
class Canvas {
    constructor (config: CanvasConfig = DataConfig) {
        let canvas = document.createElement("canvas");
        canvas.setAttribute("width", config.width + "");
        canvas.setAttribute("height", config.height + "");
        document.querySelector("body").appendChild(canvas);
        return canvas

    }
}

let Scene =  new Canvas;



export {
    Scene
}

