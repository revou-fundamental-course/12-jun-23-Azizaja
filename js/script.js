// konversi suhu
var inputField = document.getElementById('inputField');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');
var reverse = document.getElementById('reverse');
var reamur = document.querySelector('.output:nth-child(1) p'); 
var fahrenheit = document.querySelector('.output:nth-child(2) p');
var kelvin = document.querySelector('.output:nth-child(3) p'); 

submit.addEventListener('click', function(){
    let input = inputField.value;
    let result = (4/5) * input;
    reamur.innerHTML = result;
    result = (9/5) * input + 32;
    fahrenheit.innerHTML = result;
    result = parseInt(input) + 273;
    kelvin.innerHTML = result;
});

reverse.addEventListener('click', function(){
    let input = inputField.value;
    let result = (5/4) * input;
    reamur.innerHTML = result;
    result = (5/9) * (input - 32);
    fahrenheit.innerHTML = result;
    result = parseInt(input) - 273;
    kelvin.innerHTML = result;

    // tombol reverse tidak berfungsi jika input kosong
    if(input == ''){
        reamur.innerHTML = 0;
        fahrenheit.innerHTML = 0;
        kelvin.innerHTML = 0;
    }

    // pesan jika input kosong
    if(input == ''){
        alert('masukan suhu terlebih dahulu');
    }
});

reset.addEventListener('click', function(){
    inputField.value = '';
    reamur.innerHTML = 0;
    fahrenheit.innerHTML = 0;
    kelvin.innerHTML = 0;
});

// menampilkan output
var output = document.querySelectorAll('.output p');
output.forEach(function(item){
    item.innerHTML = 0;
});




