/**
 * Scales each matched element's font-size so its text fills the parent's width.
 * Skips elements whose parent has zero width (e.g. hidden via display:none).
 */
export function fitText(selector: string, scale = 1): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const containerWidth = el.parentElement?.offsetWidth ?? 0;
    if (containerWidth === 0) return;
    el.style.fontSize = '10px';
    el.style.width = 'max-content';
    const textWidth = el.scrollWidth;
    el.style.width = '';
    el.style.fontSize = `${(10 * containerWidth * scale) / textWidth}px`;
  });
}
