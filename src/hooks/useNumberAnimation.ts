export function useNumberAnimation() {
  const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (end - start) * easeProgress);

      element.textContent = value.toString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return { animateValue };
}
