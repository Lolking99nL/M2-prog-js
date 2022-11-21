class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let appNaam = "Yessin.com";
        let versienummer = 0.9;
        let versiedatum = "21-11-2022";
        let autheur = "Yessin";
        let copyright = "Copyright Yessin 2022";
        let distributeur = "Yessin";
        let darkmode = "True";

        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();