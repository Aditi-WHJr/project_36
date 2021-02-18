class Form {
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Submit");
    }
    display(){
        this.input.position(700,250);
this.button.position(500,200);

    }
    eel(){
        this.button.mousePressed(
            gameState="f"
        )
        if(gameState==="f"){
            this.input.hide();
            this.button.hide();
        }
    }
}