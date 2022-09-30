function calcular() {
    var av1 = window.document.getElementById('av1');
    var av2 = window.document.getElementById('av2');
    var simuladoAz = window.document.getElementById('simuladoaz');
    var resultado = window.document.getElementById('res1');

    var nota1 = Number(av1.value);
    var nota2 = Number(av2.value);
    var nota3 = Number(simuladoAz.value);
    var calculoMedia = ((nota1*4.5) + (nota2*4.5) + 10) / 10;
    var total = calculoMedia + nota3;
    resultado.innerHTML = ('Sua nota no boletim é:  ' + total.toFixed(2));

    if (total >= 6.0) {
        var resultado2 = window.document.getElementById('res2');
        resultado2.style.color = 'green';
        resultado2.innerHTML = 'APROVADO';
    } else {
        var resultado2 = window.document.getElementById('res2');
        resultado2.style.color = 'red';
        resultado2.innerHTML = 'REPROVADO';
    }
        return
        }