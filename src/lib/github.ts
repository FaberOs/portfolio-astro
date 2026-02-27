/**
 * Utility for fetching from the GitHub API with rate-limit detection.
 */

export type GitHubResult<T> =
  | { ok: true; data: T }
  | { ok: false; rateLimited: boolean; status: number };

export type GitHubTextResult =
  | { ok: true; text: string }
  | { ok: false; rateLimited: boolean; status: number };

/**
 * Fetch JSON from the GitHub API.
 * Automatically detects rate-limiting (403/429) responses.
 */
export async function githubFetch<T>(
  url: string,
  init?: RequestInit
): Promise<GitHubResult<T>> {
  try {
    const res = await fetch(url, init);
    if (res.ok) {
      const data = (await res.json()) as T;
      return { ok: true, data };
    }
    const rateLimited = res.status === 403 || res.status === 429;
    return { ok: false, rateLimited, status: res.status };
  } catch {
    return { ok: false, rateLimited: false, status: 0 };
  }
}

/**
 * Fetch text/HTML from the GitHub API (e.g., README content).
 * Automatically detects rate-limiting (403/429) responses.
 */
export async function githubFetchText(
  url: string,
  init?: RequestInit
): Promise<GitHubTextResult> {
  try {
    const res = await fetch(url, init);
    if (res.ok) {
      const text = await res.text();
      return { ok: true, text };
    }
    const rateLimited = res.status === 403 || res.status === 429;
    return { ok: false, rateLimited, status: res.status };
  } catch {
    return { ok: false, rateLimited: false, status: 0 };
  }
}
