function preload(){

}
function setup(){
canvas = createCanvas(350,350)
canvas.center()
video = createCapture(VIDEO)
video.hide()
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I4qWsKi6N/model.json', modelLoaded)
}
function draw(){
image(video, 0, 0, 350, 350)
classifier.classify(video, gotResult)
}
function modelLoaded(){
    console.log("Models have been loaded!")
}
function gotResult(results, error){
if(error){
    console.log(error)
}
else{
    console.log(results)
    console.log("Name: " + results[0].label)
    document.getElementById("object_result_name").innerHTML = results[0].label;
    document.getElementById("accuracy_result_name").innerHTML = results[0].confidence.toFixed(3);
}
}
