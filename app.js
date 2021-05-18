const target = document.getElementById("myInput");

function incFunc() {
    target.value = +target.value + 1;
    validate();
}

function decFunc() {
    target.value = +target.value - 1;
    validate();
}

function validate() {
    if (isNaN(+target.value)) {
        alert('Enter only Numbers');
        target.value = '';
    }
}


