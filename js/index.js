
var empInput = document.getElementById('inputempresa');
var estInput = document.getElementById('inputestudiante');
// evento para el input radio del "si"
document.getElementById('empresa').addEventListener('click', function(e) {
    empInput.disabled = false;
    estInput.disabled= true;
});

// evento para el input radio del "no"
document.getElementById('particular').addEventListener('click', function(e) {
    empInput.disabled = true;
    estInput.disabled= true;
});

document.getElementById('estudiante').addEventListener('click', function(e) {
    empInput.disabled = true;
    estInput.disabled= false;
});

