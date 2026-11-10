const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) { 
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  } 
};

const handleScrollOpacity = () => {
  // The distance (in pixels) over which the nav will completely fade out
  const fadeRange = 500; 
  
  // Calculate current opacity (clamped strictly between 0 and 1)
  let opacity = 0 + (window.scrollY / fadeRange);
  opacity = Math.max(0, Math.min(1, opacity));
  
  // Send this dynamic value straight to CSS
  document.documentElement.style.setProperty('--nav-opacity', opacity);
}

document.addEventListener('scroll', debounce(handleScrollOpacity), { passive: true });

const handleScrollShrink = () => {
  // The distance (in pixels) over which the nav will completely fade out
  const scaleRange = 500; 
  const widthRange = 7;
  const padRange = 20;
  const heightRange = 13;
  
  // Calculate current opacity (clamped strictly between 0 and 1)
  let size = 1 - (window.scrollY / scaleRange);
  size = Math.max(0.43, Math.min(1, size));

  let width = 50 + (window.scrollY / widthRange);
   width = Math.max(50, Math.min(150, width));

  let pad = 2 + (window.scrollY/padRange);
   pad = Math.max(2, Math.min(20, pad));
   pad = pad + "vw"

  let height = 45 - (window.scrollY/heightRange);
    height = Math.max(25, Math.min(45, height));
    height = height + "vh"

  let trans = (window.scrollY / 30 )
   trans = trans + "px"

  
  // Send this dynamic value straight to CSS
  document.documentElement.style.setProperty('--head-shrink', size);
  document.documentElement.style.setProperty('--head-width', width);
  document.documentElement.style.setProperty('--pad-width', pad);
  document.documentElement.style.setProperty('--banner-height', height);
  document.documentElement.style.setProperty('--trans-dist', trans);
}

document.addEventListener('scroll', debounce(handleScrollShrink), { passive: true });

// Run immediately on load
handleScrollOpacity();  

// Run immediately on load
handleScrollShrink();  