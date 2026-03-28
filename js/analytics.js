/**
 * AI4Change — Privacy-friendly analytics
 *
 * Tracks anonymous page views via a lightweight beacon.
 * No cookies. No fingerprinting. No personal data collected.
 *
 * Replace ANALYTICS_ENDPOINT with your self-hosted collector URL
 * (e.g. Plausible, Umami, or a simple serverless function).
 */
(function () {
  'use strict';

  var ANALYTICS_ENDPOINT = ''; // Set your analytics endpoint here

  // Skip tracking in development / localhost
  if (
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1' ||
    location.protocol === 'file:'
  ) {
    return;
  }

  // Respect Do Not Track
  if (
    navigator.doNotTrack === '1' ||
    window.doNotTrack === '1'
  ) {
    return;
  }

  function trackPageView() {
    var payload = {
      url: location.href,
      ref: document.referrer || '',
      w: window.innerWidth
    };

    // If no endpoint configured, log to console in non-production
    if (!ANALYTICS_ENDPOINT) {
      return;
    }

    // Use sendBeacon for reliability (fires even on page unload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        ANALYTICS_ENDPOINT,
        JSON.stringify(payload)
      );
    } else {
      // Fallback: pixel approach
      var img = new Image();
      img.src =
        ANALYTICS_ENDPOINT +
        '?url=' + encodeURIComponent(payload.url) +
        '&ref=' + encodeURIComponent(payload.ref) +
        '&w=' + payload.w;
    }
  }

  // Track initial page view
  trackPageView();

  // Track SPA-style navigation (History API)
  var pushState = history.pushState;
  if (pushState) {
    history.pushState = function () {
      pushState.apply(history, arguments);
      trackPageView();
    };
    window.addEventListener('popstate', trackPageView);
  }
})();
