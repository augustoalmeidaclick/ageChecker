const botao = document.querySelector('.btn');
function definirImagem(genero, idade) {
  let img = document.createElement('img');
  let src = '';

  if (genero === 'Homem') {
    if (idade < 10) src = 'homem-bebe.jpg';
    else if (idade < 21) src = 'homem-jovem.jpg';
    else if (idade < 60) src = 'homem-adulto.jpg';
    else src = 'homem-idoso.jpg';
  } else if (genero === 'Mulher') {
    if (idade < 10) src = 'mulher-bebe.jpg';
    else if (idade < 21) src = 'mulher-jovem.jpg';
    else if (idade < 60) src = 'mulher-adulta.jpg';
    else src = 'mulher-idosa.jpg';
  }

  img.setAttribute('src', src);
  return img;
}

botao.addEventListener('click', function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  let nasc = document.querySelector('#txtano');
  let res = document.querySelector('.resultado');
  let avatar = document.querySelector('.imagem');

  if (nasc.value.length === 0 || Number(nasc.value) > ano || Number(nasc.value) < 1900) {
    res.innerHTML = 'Por favor, informe um ano válido.';
    return;
  }

  let sex = document.getElementsByName('radsex');
  let idade = ano - Number(nasc.value);
  let genero = '';

  avatar.innerHTML = '';
  res.innerHTML = '';

  if (sex[0].checked) {
    genero = 'Homem';
  } else if (sex[1].checked) {
    genero = 'Mulher';
  }

  let img = definirImagem(genero, idade);
  avatar.appendChild(img);
  res.innerHTML = `${genero} de ${idade} anos.`;
});

botao.addEventListener('mouseenter', function mouseEntra() {
  botao.classList.add('hover');
})
botao.addEventListener('mouseout', function mouseSai() {
  botao.classList.remove('hover');
})

