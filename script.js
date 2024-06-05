<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Water Drop Radius Detection</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <script async src="https://docs.opencv.org/4.x/opencv.js" type="text/javascript"></script>
</head>
<body>
    <div class="container">
        <h1 class="text-center">Water Drop Radius Detection</h1>
        <div class="form-group">
            <label for="imageUpload">Upload Image:</label>
            <input type="file" class="form-control-file" id="imageUpload" accept="image/*">
        </div>
        <div id="imageContainer" class="text-center"></div>
        <canvas id="canvasOutput"></canvas>
        <div class="mt-3">
            <label for="tubeDiameterInput">Tube Diameter (D):</label>
            <input type="number" id="tubeDiameterInput" class="form-control" placeholder="Enter tube diameter in meters">
        </div>
        <div class="mt-3">
            <label for="densityInput">Density of Water (ρ):</label>
            <input type="number" id="densityInput" class="form-control" placeholder="Enter density of water in kg/m³">
        </div>
        <div class="mt-3">
            <label for="gravityInput">Acceleration due to Gravity (g):</label>
            <input type="number" id="gravityInput" class="form-control" placeholder="Enter gravity in m/s²">
        </div>
        <button id="calculateButton" class="btn btn-primary mt-3">Calculate Surface Tension</button>
        <h3 class="mt-3">Surface Tension (γ): <span id="surfaceTensionOutput"></span></h3>
    </div>

    <script src="script.js"></script>
</body>
</html>
