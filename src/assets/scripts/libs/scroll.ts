/**
 * Anchor link scroll
 */
import animateScrollTo from 'animated-scroll-to';
import { fromEvent } from 'rxjs';

/**
 * Target internal anchor link elements.
 */
const targetElements = document.querySelectorAll('a[href^="#"]');

/**
 * Scroll speed
 */
const scrollSpeed = 120;

/**
 * Scroll min duration
 */
const minDuration = 160;

Array.prototype.slice.call(targetElements, 0).forEach((targetElement: HTMLElement) => {

  fromEvent(targetElement, 'click').subscribe((): void => {

    const targetId = targetElement.getAttribute('href') || '';
    const scrollToElement = document.querySelector(targetId);

    scrollToElement && animateScrollTo(scrollToElement, {
      speed: scrollSpeed,
      minDuration,
    });

  });

});
