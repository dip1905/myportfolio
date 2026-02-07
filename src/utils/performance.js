// Performance monitoring utilities
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Measure page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    });

    // Measure First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log(`First Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/src/assets/2842680.jpg',
    '/src/assets/dipesh.JPG'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Lazy load images
export const lazyLoadImage = (img) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          observer.unobserve(image);
        }
      });
    });
    observer.observe(img);
  } else {
    // Fallback for older browsers
    img.src = img.dataset.src;
  }
};