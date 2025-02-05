var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var baiacu; 

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    
    this.load.image('baiacu', 'assets/peixes/baiacu.png');

    this.load.image('fundo do mar', 'assets/peixes/fundo mar.png')


}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 70, 'logo').setScale(0.5);

    this.add.image(400, 358, 'fundo do mar').setScale(0.67)


    baiacu = this.add.image(400, 300, 'baiacu');
    
    baiacu.setFlip(true, false);
}

function update() {

    baiacu.x = this.input.x;
    baiacu.y = this.input.y;
}