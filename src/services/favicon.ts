export function changeFaviconColor(): void {
  const highlightColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--highlight')
    .trim();
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim();

  document.getElementsByName('site-webmanifest')[0]['href'] = '/favicon/dark/site.webmanifest';
  document.getElementsByName('theme-color')[0]['content'] = highlightColor;
  document.getElementsByName('safari-pinned-tab')[0]['color'] = highlightColor;
  document.getElementsByName('msapplication-TileColor')[0]['content'] = bgColor;

  const faviconLinks = document.getElementsByName('favicon');
  for (let i = 0; i < faviconLinks.length; i++) {
    faviconLinks[i]['href'] = faviconLinks[i]['href'].replace('/favicon', '/favicon/dark');
  }
}
