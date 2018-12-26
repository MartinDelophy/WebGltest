interface RouterConfig {
    name ?: string,
    method(): void,
    main ?: any
}

let Router = function (rc: RouterConfig[]) {
    this.routes = rc;
    let that = this;
    function clear(){
        document.querySelector("#main-container").innerHTML = ""
    }

    for (var one of that.routes) {
        
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
