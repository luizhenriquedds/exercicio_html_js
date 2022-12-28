const formulario = document.getElementById('form-js');
  formulario.addEventListener('submit', function(event) {
    

    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);

    if (valor2 > valor1) {
      alert('O segundo valor é maior que o primeiro, está correto.');
      formulario.submit();
    } else {
      alert('O primeiro valor é maior ou igual o segundo, está incorreto');
    }
    event.preventDefault();
})