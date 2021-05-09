class Paper{
    constructor(){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image=loadImage("paper.png")
        
        
        

    }
    display(){
        rectMode(CENTER)
        //rect(450,650,50,50)
        imageMode(CENTER)
        image(this.image,450,625,100,100)


    }
}