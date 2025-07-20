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
