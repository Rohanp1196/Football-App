
function  init() {

    canvas = document.getElementById("canvasSection");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var shapeArr = [];
    var req = 0;
    var req1 = 0;

    var CW = canvas.width;
    var CH = canvas.height;

    class circle {
        constructor(centerX, centerY, radius) {
            this.centerX = centerX;
            this.centerY = centerY;
            this.radius = radius;
            this.curr_r = 0
            this.opacity = 1;
            this.strokeStyle = "rgba(0, 0, 0, " + this.opacity + ")";
            this.step = 50
            this.r_step = this.radius / this.step
            this.o_step = this.opacity / this.step
        }

        expandCircle() {

            this.curr_r += this.r_step;
            this.opacity -= this.o_step;
            this.strokeStyle = "rgba(0, 0, 0, " + this.opacity + ")";
            if (this.curr_r > this.radius) {
                this.radius = 0;
                this.opacity = 0;
            }
        }
    }

    function createCircle(centerX, centerY, radius) {
        shapeArr.push(new circle(centerX, centerY, radius));
    }

    function drawCircle(centerX, centerY, radius, strokeClr) {
        // console.log(radius)
        ctx.strokeStyle = strokeClr;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        ctx.restore()
    }


    canvas.onclick = function (e) {
        x = e.clientX
        y = e.clientY
        // window.cancelAnimationFrame(req)
        cancelAnimationFrame(req)
        cancelAnimationFrame(req1)

        shapeArr.pop()
        shapeArr.pop()
        createCircle(x, y, 80)
        createCircle(x, y, 100)
        firstWave()
        secondWave()


    }


    function firstWave() {
        ctx.clearRect(0, 0, CW, CH);
        drawCircle(shapeArr[0].centerX, shapeArr[0].centerY, shapeArr[0].curr_r, shapeArr[0].strokeStyle);
        shapeArr[0].expandCircle();
        req = requestAnimationFrame(firstWave);

    }

    function secondWave() {
        drawCircle(shapeArr[1].centerX, shapeArr[1].centerY, shapeArr[1].curr_r, shapeArr[1].strokeStyle);
        shapeArr[1].expandCircle();
        req1 = requestAnimationFrame(secondWave);
    }
}
