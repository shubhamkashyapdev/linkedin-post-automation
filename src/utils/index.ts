/**
 * provide a relative path to the page for example: /dashboard
 * @param path relative path of page
 * @returns string
 */
export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path;
  const url = process.env.NEXTAUTH_URL;
  return `${url}${path}`;
}
