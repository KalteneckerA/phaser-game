class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.add.image("background", "background.png");
        this.add.image("ship","ship.png");
        this.add.image("ship2","ship2.png");
        this.add.image("ship3","ship3.png");
    }
        create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
    
}
