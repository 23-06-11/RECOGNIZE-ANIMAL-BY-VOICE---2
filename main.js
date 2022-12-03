//https://teachablemachine.withgoogle.com/models/R0r97PIbL/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/R0r97PIbL/model.json', modelReady);
}
 function modelReady()
 {
    classifier.classify(gotResults);
 }
 