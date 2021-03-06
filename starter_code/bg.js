function Bg(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.speed = 2;
}

Bg.prototype.draw = function() {
    this.sprite = new Image();
    this.sprite.src = "images/bg.png";
    this.width = this.sprite.width;
    if(this.x <= -this.width) {
        this.x = 0;
    }
    this.ctx.drawImage(this.sprite, this.x, this.y);
    this.ctx.drawImage(this.sprite, this.x + this.width, this.y);
    this.x -= this.speed;
}