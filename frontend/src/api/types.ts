export interface GameSummary {
  slug: string;
  title: string;
  logoPath: string;
}

export interface GameInfo {
  slug: string;
  title: string;
  mainInfo: string;
  datePublished: string;
  publisher: string;
  video: string;
  fontStyle: string;
  fontSize: string;
  fontSizeRight: string;
  gameLogoSize: string[];
  logoPath: string;
}

export interface CharacterInfo {
  gameSlug: string;
  name: string;
  tags: string[];
  overview: string;
  difficulty: string;
  video: string;
  notablePlayers: string[];
  resources: string[];
  color: string;
  pros: string[];
  cons: string[];
  imagePath: string;
  displayOrder: number;
}
