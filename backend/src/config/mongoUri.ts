const DEFAULT_URI_TEMPLATE =
  "mongodb+srv://rickymach7:__PASSWORD__@cluster0.jhjif7w.mongodb.net/fgcflow?appName=Cluster0";

const EXAMPLE_PASSWORD_MARKERS = [
  "your_atlas_password",
  "your_actual_password",
  "<db_password>",
  "__PASSWORD__",
];

function encodePassword(password: string): string {
  return encodeURIComponent(password);
}

function substitutePassword(uri: string, password: string): string {
  const encoded = encodePassword(password);
  return uri
    .replace(/\$\{DB_PASSWORD\}/g, encoded)
    .replace(/<db_password>/gi, encoded)
    .replace(/__PASSWORD__/g, encoded);
}

function hasPasswordPlaceholder(uri: string): boolean {
  return (
    uri.includes("${DB_PASSWORD}") ||
    EXAMPLE_PASSWORD_MARKERS.some((marker) => uri.includes(marker))
  );
}

function isExampleUri(uri: string): boolean {
  return EXAMPLE_PASSWORD_MARKERS.some((marker) => uri.includes(marker));
}

export function getMongoUri(): string {
  const password = process.env.DB_PASSWORD?.trim();
  const configuredUri = process.env.MONGODB_URI?.trim();

  // DB_PASSWORD always wins — avoids stale placeholder passwords in MONGODB_URI
  if (password) {
    if (configuredUri && hasPasswordPlaceholder(configuredUri)) {
      return substitutePassword(configuredUri, password);
    }
    return substitutePassword(DEFAULT_URI_TEMPLATE, password);
  }

  if (configuredUri && !isExampleUri(configuredUri)) {
    return configuredUri;
  }

  throw new Error(
    "Set DB_PASSWORD in backend/.env (recommended) or provide a full MONGODB_URI with your real password"
  );
}
