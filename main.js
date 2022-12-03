
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kH3_EBGpE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
 /*Write code to store the captured_image in a variable 
 img and then use classify() function to classify it*/     
 function modelLoaded() {
  console.log('Model Loaded!');
 }

 function check()
 {
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
 }
 //Define function gotResult() and log if any error is there else log the result.
function gotResult(error, result) {
  if (error) {
    console.error(error)
  } else {
    console.log(results);
    document.getElementById("result_bject_name").innerHTML = results[0].label;
    document.getElementById("reslut_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
}}