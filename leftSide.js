class leftSide{
    constructor(x,y,w,h){
        let options = {
            isStatic:true,
        }
        this.body = x,y,w,h,options;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(this.body)
    }
    display() {
        var position = this.body.position;
        push();
        rectMode(CENTER);
    }
}