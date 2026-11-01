/* SuperIntern roadmap countdown (generated - edits are overwritten)
   Renders live countdowns on the Release & Hardfork Roadmap: every
   [data-si-countdown] element carries an ISO-8601 activation time and is
   rewritten to the time remaining, so the static page never goes stale
   between syncs. */
(function () {
  "use strict";
  function render() {
    var nodes = document.querySelectorAll("[data-si-countdown]");
    var now = Date.now();
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var when = Date.parse(node.getAttribute("data-si-countdown"));
      if (isNaN(when)) continue;
      var ms = when - now;
      var text;
      if (ms <= 0) {
        text = "activated";
      } else if (ms >= 48 * 3600 * 1000) {
        text = Math.round(ms / (24 * 3600 * 1000)) + " days to go";
      } else if (ms >= 2 * 3600 * 1000) {
        text = Math.round(ms / (3600 * 1000)) + " hours to go";
      } else {
        text = "less than 2 hours to go";
      }
      node.textContent = text;
    }
  }
  render();
  setInterval(render, 60 * 1000);
  // Material's instant navigation swaps page content without a full load.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(render);
  }
})();
