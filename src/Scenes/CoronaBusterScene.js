import Phaser from "phaser";
export default class CoronaBusterScene extends Phaser.Scene{
    constructor(){
        super('corona-buster-scene')
    }

    //METHOD INIT
    init(){
        this.clouds = undefined;

        //Adding Controler
        this.nav_left = false;
        this.nave_right = false;
        this.shoot = false;
        this.player = undefined;
        this.speed = 100
    }

    //METHOD PRELOAD
    preload(){
        this.load.image('background','images/bg_layer1.png')
        this.load.image('Cloud','images/cloud.png')
        this.load.image('leftButton','images/left-btn.png')
        this.load.image('rightButton','images/right-btn.png')
        this.load.image('shootButton','images/shoot-btn.png')
        this.load.spritesheet('player', 'images/ship.png',{
            frameWidth: 66,
            frameHeight: 66
        })
0    }

    //METHOD CREATE
    create(){
        const gameWidth = this.scale.width*0.5;
        const gameHeight = this.scale.height*0.5;
        this.add.image(gameWidth, gameHeight, 'background')

        //Create Moving Clouds
        this.clouds = this.physics.add.group({
            key: 'cloud',
            repeat: 10,     
        })

        Phaser.Actions.RandomRectangle(
            this.clouds.getChildren(),
            this.physics.world.bounds
        )
    }
    
    //METHOD UPDATE
    update(time){
        this.clouds.children.iterate((child) => {
            // @ts-ignore
            child.setVelocityY(20)
            // @ts-ignore
            if(child.y > this.scale.height){
                // @ts-ignore
                child.x = Phaser.Math.Between(10, 400)
                // @ts-ignore
                child.y = 0
            }
        }
        )
    }

    createButtons(){
        this.input.addPointer(3)

        let shoot = this.add.image(320,550, 'shoot')
        .setInteractive().setDepth(0.5).setAlpha(0.8)

        let nav_left = this.add.image(50,550, 'left-btn')
        .setInteractive().setDepth(0.5).setAlpha(0.8)

        let nave_right = this.add.image(nav_left.x + nav_left.displayWidth+20, 550, 'right-btn')
        .setInteractive().setDepth(0.5).setAlpha(0.8)
    }
    createPlayer(){
        const player = this.physics.add.sprite(200,450, 'player')
        player.setCollideWorldBounds(true)
        return player
        this.player = this.createPlayer()
        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'player',frame: 0
            }],
        })
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {
                start: 1, end: 2
            }),
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', {
                start: 1, end: 2
            })
        })
        return player
    }       
}

