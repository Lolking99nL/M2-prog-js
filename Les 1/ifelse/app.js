class App
{
        runApplication()
        {
            let title = document.getElementById("newstitle");
            let randomGetal = Math.random();
            console.log(randomGetal)

            if (randomGetal == 0)
            {
            title.style.backgroundColor ="#00FF00";
            }
            else if (randomGetal < 0.2)
            {
            title.style.backgroundColor ="#FF0000";
            }
            else if (randomGetal >= 0.2 && randomGetal< 0.6)
            {
            title.style.backgroundColor ="#00BFFF";
            }
            else if (randomGetal > 0.6)
            {
            title.style.backgroundColor ="#00FFFF";
            }
        }
}

let app = new App();
app.runApplication();