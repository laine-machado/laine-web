document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById('conteudo').innerHTML = html;
      })
      .catch(error => {
        document.getElementById('conteudo').innerHTML = '<p>Erro ao carregar conteúdo.</p>';
      });
  });
});

document.querySelectorAll('.menu-hidden a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById('conteudo').innerHTML = html;
      })
      .catch(error => {
        document.getElementById('conteudo').innerHTML = '<p>Erro ao carregar conteúdo.</p>';
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (window.innerWidth <= 768) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});

function abrirPopup(src) {
      const largura = 800;
      const altura = 600;
      const left = (screen.width - largura) / 2;
      const top = (screen.height - altura) / 2;
      window.open(src, 'ImagemAmpliada', `width=${largura},height=${altura},top=${top},left=${left}`);
}
function alertaEnvio() {
    alert("Mensagem enviada com sucesso!");
    window.location.href = "Web project - 2 - teste.html"; 
    return false; 
}
const openBtn = document.getElementById('openMenuBtn');
const closeBtn = document.getElementById('closeMenuBtn');
const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  menu.classList.add('menu-show');
  overlay.classList.add('overlay-show');
  menu.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu-show');
  overlay.classList.remove('overlay-show');
  menu.setAttribute('aria-hidden', 'true');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('menu-show');
  overlay.classList.remove('overlay-show');
  menu.setAttribute('aria-hidden', 'true');
});
