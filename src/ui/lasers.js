import Phaser from 'phaser'
export default class Laser extends
Phaser.Physics.Arcade.Sprite
{
    // @ts-ignore
    constructor(scene, x, y, texture){
        super(scene, x, y, texture)
        this.setScale(2)
    }

    // @ts-ignore
    fire(x, y){
        this.setPosition(x,y-50)
        this.setActive(true)
        this.setVisible(true)
    }

    die(){
        this.destroy()
    }

    // @ts-ignore
    update(time){
        this.setVelocityY(-200)
        if (this.y <-10){
            this.die()
        }
    }
}