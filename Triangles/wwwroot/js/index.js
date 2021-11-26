// Initialse the variables used in this script
const fn = new JSFunctions();
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var canvas, ctx, chkMaintainAspectRatio, formCanvas, formVertex, lblHoverCoordinates, lblResult;
var txtHeight, txtWidth, txtCellSize, txtV1x, txtV1y, txtV2x, txtV2y, txtV3x, txtV3y, v1X, v1Y, v2X, v2Y, v3X, v3Y;
var highlightCell = null;
var invalid = false;
var mouseX = -1;
var mouseY = -1;

// Set a shape to be selected
function CanvasClick(e) {
    // Check the state of the canvas and canvas and vertex options
    if (invalid || fn.IsEmpty(canvas) || fn.IsEmpty(txtCellSize.value) || fn.IsEmpty(txtHeight.value) || fn.IsEmpty(txtWidth.value))
        return;

    // Add the coordinate values into their corresponding input fields on screen
    txtV1x.value = v1X;
    txtV1y.value = v1Y;
    txtV2x.value = v2X;
    txtV2y.value = v2Y;
    txtV3x.value = v3X;
    txtV3y.value = v3Y;

    // Call the FindShape function
    FindShape();
}

// Set a shape to be highlighted on hover
function CanvasMouseMove(e) {
    // Tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    // Get the mouse position
    mouseX = parseInt(e.clientX - canvas.offsetParent.offsetLeft - canvas.offsetLeft);
    mouseY = parseInt(e.clientY - canvas.offsetTop);

    // Call the DrawCanvas function
    DrawCanvas();
}

// Reset the canvas hover state
function CanvasMouseOut(e) {
    // Tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    // Clear the hover label and mouse coordinates on mouse out
    lblCoordinates.classList.remove("canvas-coordinates");
    lblCoordinates.innerHTML = "";
    mouseX = -1;
    mouseY = -1;

    // Call the DrawCanvas function
    DrawCanvas();
}

// The DrawCanvas function performs the task of drawing the shapes onto the canvas
// It will also draw selected and hovered shapes depending on user interaction
function DrawCanvas() {
    // Check the state of the canvas and canvas and vertex options
    if (invalid || fn.IsEmpty(canvas) || fn.IsEmpty(txtCellSize.value) || fn.IsEmpty(txtHeight.value) || fn.IsEmpty(txtWidth.value))
        return;

    // Set the height and width of the canvas
    canvas.height = parseInt(txtHeight.value, 0);
    canvas.width = parseInt(txtWidth.value, 0);

    // Create the canvas, defaulting the background colour and size
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Work out how many rows and columns there are in the grid
    var cellSize = parseInt(txtCellSize.value, 0);
    var rows = canvas.height / cellSize;
    var cols = canvas.width / cellSize;

    // Create the Left Triangles
    for (var r = 0; r < rows; r++) {
        var cellNum = 1;
        var x = (r + cellSize) - (r + cellSize);
        for (var c = 0; c < cols; c++) {
            var y = r * cellSize;

            // Draw the left triangle shape
            ctx.beginPath();
            ctx.moveTo(x, y);                        // Top Left
            ctx.lineTo(x, y + cellSize);             // Angle
            ctx.lineTo(x + cellSize, y + cellSize);  // Bottom Right
            ctx.closePath();

            // If the user is hovering over the shape, store the coordinates
            if (ctx.isPointInPath(mouseX, mouseY)) {
                // Store the coordinates
                v1X = x;
                v1Y = (y + cellSize);
                v2X = x;
                v2Y = y;
                v3X = (x + cellSize);
                v3Y = (y + cellSize);
            }

            // Fill the triangle shape if Show All Triangles is selected or the shape has been highlighted 
            if (chkShowAllTriangles.getAttribute("checked") !== null || highlightCell === alphabet[r] + cellNum) {
                ctx.strokeStyle = "rgb(220, 220, 220)";
                ctx.stroke();

                // If the user is hovering over the shape, highlight the shape in a different colour
                if (ctx.isPointInPath(mouseX, mouseY)) {
                    // Display different colours dependent on different states
                    ctx.fillStyle = (chkShowAllTriangles.getAttribute("checked") !== null && highlightCell === alphabet[r] + cellNum) ? "rgb(155, 187, 89)" : "rgb(55, 102, 204)";

                    // Check if the canvas-coordinates class needs to be added
                    if (!lblCoordinates.classList.contains("canvas-coordinates"))
                        lblCoordinates.classList.add("canvas-coordinates");

                    // Display the coordinates info on hover
                    lblCoordinates.innerHTML = "Row: " + alphabet[r] + ", Col: " + cellNum + ", V1x: " + v1X + ", V1y: " + v1Y + ", V2x: " + v2X + ", V2y: " + v2Y + ", V3x: " + v3X + ", V3y: " + v3Y;
                } else {
                    // Display different colours dependent on different states
                    ctx.fillStyle = (chkShowAllTriangles.getAttribute("checked") !== null && highlightCell === alphabet[r] + cellNum) ? "rgb(146, 208, 80)" : "rgb(91, 155, 213)";                    
                }
                ctx.fill();

                // Draw the text into the shape
                ctx.beginPath();
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.font = cellSize > 60 ? "16px Arial" : "10px Arial";
                if (cellSize > 20) {
                    ctx.fillText(alphabet[r] + cellNum, x + 5, y + cellSize - 6);
                }
            } else {
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fill();
            }

            // Increment the cellNum by 2 and x by the Cell Size
            cellNum += 2;
            x += cellSize;
        }
    }

    // Create the Right Triangles
    for (var r = 0; r < rows; r++) {
        var cellNum = 2;
        var x = r === 0 ? 0 : (r * cellSize);
        for (var c = 0; c < cols; c++) {
            var y = c * cellSize;

            // Draw the right triangle shape
            ctx.beginPath();
            ctx.moveTo(y, x);                       // Top Left
            ctx.lineTo(y + cellSize, x);            // Angle
            ctx.lineTo(y + cellSize, x + cellSize); // Bottom Right
            ctx.closePath();

            // If the user is hovering over the shape, store the coordinates
            if (ctx.isPointInPath(mouseX, mouseY)) {
                // Store the coordinates
                v1X = (y + cellSize);
                v1Y = x;
                v2X = y;
                v2Y = x;
                v3X = (y + cellSize);
                v3Y = (x + cellSize);
            }

            // Fill the triangle shape if Show All Triangles is selected or the shape has been highlighted 
            if (chkShowAllTriangles.getAttribute("checked") !== null || highlightCell === alphabet[r] + cellNum) {
                ctx.strokeStyle = "rgb(220, 220, 220)";
                ctx.stroke();

                // If the user is hovering over the shape, highlight the shape in a different colour
                if (ctx.isPointInPath(mouseX, mouseY)) {
                    // Display different colours dependent on different states
                    ctx.fillStyle = (chkShowAllTriangles.getAttribute("checked") !== null && highlightCell === alphabet[r] + cellNum) ? "rgb(155, 187, 89)" : "rgb(55, 102, 204)";

                    // Check if the canvas-coordinates class needs to be added
                    if (!lblCoordinates.classList.contains("canvas-coordinates"))
                        lblCoordinates.classList.add("canvas-coordinates");

                    // Display the coordinates info on hover
                    lblCoordinates.innerHTML = "Row: " + alphabet[r] + ", Col: " + cellNum + ", V1x: " + v1X + ", V1y: " + v1Y + ", V2x: " + v2X + ", V2y: " + v2Y + ", V3x: " + v3X + ", V3y: " + v3Y;
                } else {
                    // Display different colours dependent on different states
                    ctx.fillStyle = (chkShowAllTriangles.getAttribute("checked") !== null && highlightCell === alphabet[r] + cellNum) ? "rgb(146, 208, 80)" : "rgb(91, 155, 213)";
                }
                ctx.fill();

                // Draw the text into the shape
                ctx.beginPath();
                ctx.fillStyle = "rgb(255, 255, 255)";
                if (cellSize > 60) {
                    ctx.font = "16px Arial";
                    ctx.fillText(alphabet[r] + cellNum, y + cellSize - 30, x + 20);
                } else {
                    if (cellSize > 20) {
                        ctx.font = "10px Arial";
                        ctx.fillText(alphabet[r] + cellNum, y + cellSize - 20, x + 10);
                    }
                }
            } else {
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fill();
            }

            // Increment the cellNum by 2
            cellNum += 2;
        }
    }
}

function FindShape() {
    // Check the state of the canvas and canvas and vertex options
    if (invalid || fn.IsEmpty(canvas) || fn.IsEmpty(txtCellSize.value) || fn.IsEmpty(txtHeight.value) || fn.IsEmpty(txtWidth.value))
        return;

    // Remove the was-validated class from the formVertex object
    formVertex.classList.remove('was-validated');

    // Create an antiForgeryToken for using in the API call below
    var antiForgeryToken = $('input:hidden[name="__RequestVerificationToken"]').val();

    // Store the info for the grid and shape into a data object
    var data = JSON.stringify({
        cellSize: parseInt(txtCellSize.value, 0),
        gridHeight: parseInt(txtHeight.value, 0),
        gridWidth: parseInt(txtWidth.value, 0),
        v1X: parseInt(txtV1x.value, 0),
        v1Y: parseInt(txtV1y.value, 0),
        v2X: parseInt(txtV2x.value, 0),
        v2Y: parseInt(txtV2y.value, 0),
        v3X: parseInt(txtV3x.value, 0),
        v3Y: parseInt(txtV3y.value, 0)
    })

    // Call the GridTriangleReferenceCalculation API using the antiForgeryToken and data objects 
    fn.AjaxPOST("/api/GridTriangleReferenceCalculation", antiForgeryToken, data, function (result) {
        // Set the highlightCell variable and lblResult object to show the result from the API
        highlightCell = result.row + result.column;
        lblResult.innerHTML = "Row: " + result.row + ", Col: " + result.column;

        // Call the DrawCanvas function
        DrawCanvas();
    });
}

// Resets the Canvas to a default state
function ResetCanvas() {
    // Hide the Reset modal popup
    $('#msgReset').modal('hide');

    // Reset the Height, Width, CellSize and Vertex Coordinates to the default values 
    txtHeight.value = 600;
    txtWidth.value = 600;
    txtCellSize.value = 100;
    txtV1x.value = 0;
    txtV1y.value = 100;
    txtV2x.value = 0;
    txtV2y.value = 0;
    txtV3x.value = 100;
    txtV3y.value = 100;
    lblResult.innerHTML = "";
    chkShowAllTriangles.checked = false;
    chkShowAllTriangles.removeAttribute("checked");

    // Call the FindShape function
    FindShape();
}

// Hides the Reset popup
function ResetHide() {
    $('#msgReset').modal('hide');
}

// Shows the Reset popup
function ResetShow() {
    $('#msgReset').modal('show');
}

// Sets whether to hide or show all triangles
function SetShowAllTriangles() {
    if (chkShowAllTriangles.getAttribute("checked") !== null)
        chkShowAllTriangles.removeAttribute("checked");
    else
        chkShowAllTriangles.setAttribute("checked", "checked")

    // Call the DrawCanvas function
    DrawCanvas();
}

// Validates the Canvas options
function ValidateCanvas() {
    // If not valid then add the "was-validated" class to the form 
    // otherwise call DrawCanvas function
    if (!formCanvas.checkValidity()) {
        formCanvas.classList.add('was-validated');
        invalid = true;
    } else {
        formCanvas.classList.remove('was-validated');
        invalid = false;

        // Call the DrawCanvas function
        DrawCanvas();
    }
}

// Validates the Cell Size input
function ValidateCellSize() {
    // Set the step for the Vertex options to that of the Cell Size
    if (txtCellSize.value >= 10 && txtCellSize.value <= 200) {
        txtV1x.setAttribute("step", txtCellSize.value);
        txtV1y.setAttribute("step", txtCellSize.value);
        txtV2x.setAttribute("step", txtCellSize.value);
        txtV2y.setAttribute("step", txtCellSize.value);
        txtV3x.setAttribute("step", txtCellSize.value);
        txtV3y.setAttribute("step", txtCellSize.value);
    }
}

// Validates the Vertex options
function ValidateVertex() {
    // If not valid then add the "was-validated" class to the form 
    // otherwise call the FindShape function 
    if (!formVertex.checkValidity()) {
        formVertex.classList.add('was-validated');
        invalid = false;
    } else {
        invalid = true;

        // Call the FindShape function
        FindShape();
    }
}

// Initialise the screen on load
window.addEventListener('load', (event) => {
    // Store the controls into variables
    chkShowAllTriangles = document.getElementById("chkShowAllTriangles");
    txtCellSize = document.getElementById("txtCellSize");
    lblCoordinates = document.getElementById("lblCoordinates");
    lblResult = document.getElementById("lblResult");
    txtHeight = document.getElementById("txtHeight");
    txtWidth = document.getElementById("txtWidth");
    txtV1x = document.getElementById("txtV1x");
    txtV1y = document.getElementById("txtV1y");
    txtV2x = document.getElementById("txtV2x");
    txtV2y = document.getElementById("txtV2y");
    txtV3x = document.getElementById("txtV3x");
    txtV3y = document.getElementById("txtV3y");    

    // Initialse the Canvas and add Event Listeners
    canvas = document.getElementById("gridCanvas");
    canvas.addEventListener('click', (e) => { CanvasClick(e); });
    canvas.addEventListener('mousemove', (e) => { CanvasMouseMove(e); });
    canvas.addEventListener('mouseout', (e) => { CanvasMouseOut(e); });

    // Initialise the formCanvas object and add an event listener to stop the form submitting the page
    formCanvas = document.getElementById("formCanvas");
    formCanvas.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);

    // Initialise the formVertex object and add an event listener to stop the form submitting the page
    formVertex = document.getElementById("formVertex");
    formVertex.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);

    // Call the FindShape function
    FindShape();
});