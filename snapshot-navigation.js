// Captured archive pages exist locally; bypass WordPress AJAX pagination.
document.addEventListener('click', function (event) {
  const link = event.target.closest && event.target.closest('.cpl-pagination a[href], .cpl-archive .pagination a[href]');
  if (!link) return;
  const url = new URL(link.href, location.href);
  if (url.origin === location.origin && !url.search) {
    event.stopImmediatePropagation();
    // Retain the browser's default navigation, including modifier-key behavior.
  }
}, true);
