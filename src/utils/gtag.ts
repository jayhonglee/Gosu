export const GA_TRACKING_ID = 'G-6BJ7RQGBWP';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
