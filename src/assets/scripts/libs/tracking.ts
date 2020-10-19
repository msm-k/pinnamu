/**
 * @file GTM tracking functions
 */

import { fromEvent } from 'rxjs';


// Initialize dataLayer variable.
window.dataLayer = window.dataLayer || [];

/**
 * Tracking event types.
 */
const TrackingEventType = {

  // TODO : define event type this.

};
type TrackingEventType = typeof TrackingEventType[keyof typeof TrackingEventType];

/**
 * Event tracking defititions.
 */
interface EventTrackingDefine {

  /**
   * Target element selector
   */
  targetSelector: string;

  /**
   * Event type
   */
  eventType: TrackingEventType;

}

// Initialize event tracking definitions
// TODO : define event tracking definitions this.
const eventTrackingDefines: EventTrackingDefine[] = [];

/**
 * Tracking events processing.
 */
const processTracking = (): void => {

  eventTrackingDefines.forEach((eventTrackingDefine: EventTrackingDefine): void => {

    const targetElements = document.querySelectorAll(eventTrackingDefine.targetSelector);

    Array.prototype.slice.call(targetElements, 0).forEach((targetElement: HTMLElement) => {

      fromEvent(targetElement, 'click').subscribe((): void => {

        window.dataLayer.push({
          event: eventTrackingDefine.eventType,
          params: {},
        });

      });

    });

  });

};

document.addEventListener('DOMContentLoaded', (): void => {

  processTracking();

});
