
var empInput = document.getElementById('inputempresa');
var estInput = document.getElementById('inputestudiante');

document.getElementById('empresa').addEventListener('click', function(e) {
    empInput.disabled = false;
    estInput.disabled= true;
});


document.getElementById('particular').addEventListener('click', function(e) {
    empInput.disabled = true;
    estInput.disabled= true;
});

document.getElementById('estudiante').addEventListener('click', function(e) {
    empInput.disabled = true;
    estInput.disabled= false;
});

