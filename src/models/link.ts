interface Link {
  url: string;
}

export interface ListLink extends Link {
  label: string;
}

export interface TileLink extends Link {
  icon: string;
}
