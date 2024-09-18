export function isURL(url: string): boolean {
  return /^(http|https):\/\/[^ "]+$/.test(url);
}

export function createImagePath(url: string): string {
  return isURL(url) ? url : `/assets/projects/${url}`;
}
