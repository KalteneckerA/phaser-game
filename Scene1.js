class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.add.image("background", "assets/background.png");
        this.add.image("ship","assets/ship.png");
        this.add.image("ship2","assets/ship2.png");
        this.add.image("ship3","assets/ship3.png");
    }
        create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
    
}
