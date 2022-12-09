class App
{
    runApplication()
    {
        console.log("Hello World!");
        //code gaat hier onder!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(30,10); // rood vierkant
        g.lineTo(70,20); // rood vierkant
        g.lineTo(60,40); // rood vierkant
        g.lineTo(20,30); // rood vierkant
        g.lineTo(30,10); // rood vierkant
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(70,20); // driehoek
        g.lineTo(85,30); // driehoek
        g.lineTo(60,40); // driehoek
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "cyan";
        g.moveTo(20,30);
        g.lineTo(20,60);
        g.lineTo(60,70);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(60,40);
        g.lineTo(60,70);
        g.lineTo(85,60);
        g.lineTo(85,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(65,55);
        g.lineTo(65,68);
        g.lineTo(70,66);
        g.lineTo(70,53);
        g.lineTo(65,55);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(25,45);
        g.lineTo(40,48);
        g.lineTo(40,55);
        g.lineTo(25,52)
        g.closePath();
        g.stroke();
        g.fill();

        console.log(canvas)
    }
}

let app = new App();
app.runApplication();