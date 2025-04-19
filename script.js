// Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
  
  // Validação básica do formulário
  const form = document.getElementById('contato-form')
  
  form.addEventListener('submit', function (e) {
    e.preventDefault()
  
    const nome = form.querySelector('input[type="text"]').value.trim()
    const telefone = form.querySelector('input[type="tel"]').value.trim()
    const mensagem = form.querySelector('textarea').value.trim()
  
    if (!nome || !telefone || !mensagem) {
      alert('Por favor, preencha todos os campos.')
      return
    }
  
    // Aqui você pode integrar com backend futuramente (PHP, Node, etc.)
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.')
  
    form.reset()
  })
  