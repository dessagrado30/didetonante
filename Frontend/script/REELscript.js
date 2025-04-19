document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('scroll-animation');
  const totalFrames = 587; // Ajusta según tus archivos
  let frames = [];
  let isScrolling = false;

  // 1. Precarga eficiente con Intersection Observer
  const loadFrames = async () => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `Frontend/assets/Video/REEL_frames/${String(i).padStart(4, '0')}.webp`;
      
      img.classList.add('frame');
      img.style.position = 'fixed';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.display = 'none';
      container.appendChild(img);
      frames.push(img);
    }
  };

  await loadFrames();

  // 2. Controlador de scroll optimizado con RAF
  const updateAnimation = () => {
    const scrollTop = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(scrollTop / maxScroll, 1);
    const frameIndex = Math.min(
      Math.floor(scrollProgress * (frames.length - 1)),
      frames.length - 1
    );

    // Solo actualiza si cambia el frame
    frames.forEach((frame, index) => {
      frame.style.display = index === frameIndex ? 'block' : 'none';
    });

    isScrolling = false;
  };

  // 3. Throttling con requestAnimationFrame
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(updateAnimation);
    }
  });

  // Inicializa con el primer frame
  frames[0].style.display = 'block';
});