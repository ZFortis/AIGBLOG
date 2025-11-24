export interface ArtPiece {
  id: string;
  title: string;
  imageUrl: string;
  width: number;
  height: number;
  prompt: string;
  negativePrompt: string;
  model: string;
  seed: string;
  tags: string[];
  date: string;
}

export interface GridColumn {
  items: ArtPiece[];
  height: number;
}