class helloworld {
 constructor( public message: string ){}
 helloworld() {
   return "<h1>" + this.message + "</h1>" ;
 }
}

var h = new helloworld( "Hello,World" ) ;
var str = h.helloworld() ;
document.body.innerHTML = str ;
