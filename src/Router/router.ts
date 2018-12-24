interface RouterConfig {
    name ?: string,
    method(): void,
    main ?: any
}

let Router = function (rc: RouterConfig[]) {
    this.routes = rc;
    let that = this;
    let div = document.createElement("div");
    div.id = "main-container";
    document.querySelector("body").append(div);
    function clear(){
    div.innerHTML = ""
    }

    for (var one of that.routes) {
        console.log("in",one)
        if (one.main == true) {
            
            clear();
            one.method();
            break;
        }
    }
    window.addEventListener('hashchange', function(event) {
        
        for (var one of that.routes) {
            if (location.hash == "#" + one.name) {
                clear();
                one.method();
            }
        }
      })
} 

export default Router;
