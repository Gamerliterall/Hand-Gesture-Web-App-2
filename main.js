Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    png_quality:80
});

camera = document.getElementById("Webcam");

Webcam.attach( '#Webcam' );

function snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifie = ml55.classifier("https://teachablemachine.withgoogle.com/models/pOrJNqnkC/model.json", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded Successfully!");
}

