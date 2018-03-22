//modal window code//
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});


/* Climate Control Code */
var button = document.querySelector('.button');
console.log(button);
button.addEventListener("click", function () {
    var input = document.querySelector('.input').value;

    var temp = document.querySelector('.temp');
    var temp2 = document.querySelector('.temp2');

    if (input.length == 0) {
        modal.setContent("<h1>Please enter some value</h1>");
        modal.open();
        return;
    }

    if (parseInt(input) >= 30) {
        //alert("Tempereature level too high");
        modal.setContent("<h1>Temperature level too high</h1>");
        modal.open();
        return;
    }
    if (parseInt(input) <= 15) {
        modal.setContent("<h1>Temperature level too low</h1>");
        modal.open();
        return;
    }
    temp.textContent = input + String.fromCharCode(176);
    temp2.textContent = input + String.fromCharCode(176);
})

var co2_value = document.querySelector('.co2_data');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(() => {
    var random_value = Math.floor(getRandomArbitrary(200, 250));
    co2_value.textContent = random_value + ' PPM';
    if (parseInt(co2_value.textContent) > 240) {
        console.log('CO2 value too high!!');
    }

}, 5000)

var hum = document.querySelector('.hum');

setInterval(() => {
    var random_value2 = Math.floor(getRandomArbitrary(10, 55));
    hum.textContent = random_value2 + ' %';
    if (parseInt(hum.textContent) > 50) {
        console.log('humidity too high');
    }
    if (parseInt(hum.textContent) < 20) {
        console.log('humidity too low');
    }
}, 20000);

var pre = document.querySelector('.press');

setInterval(() => {
    var random_value3 = Math.floor(getRandomArbitrary(3, 60));
    pre.textContent = random_value3 + ' PSI';
    if (parseInt(pre.textContent) > 50) {
        console.log('pressure too high');
    }
    if (parseInt(pre.textContent) < 7) {
        console.log('pressure too low');
    }
}, 10000);