const apiBase =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.DEV ? "" : "https://fgc-flow.onrender.com");

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${apiBase}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export function getGames() {
  return request<import("./types").GameSummary[]>("/api/games");
}

export function getGame(slug: string) {
  return request<import("./types").GameInfo>(`/api/games/${slug}`);
}

export function getCharacters(slug: string) {
  return request<import("./types").CharacterInfo[]>(
    `/api/games/${slug}/characters`
  );
}

export function resolveAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${prefix}${normalizedPath}`;
}
