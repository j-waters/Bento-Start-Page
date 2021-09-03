import { ListLink, TileLink } from "@/models/link";

export interface Config {
  columns: ColumnsConfig,
  tiles: TileLink[],
  style: Record<string, unknown>,
  greetings: GreetingsConfig,
  name: string,
}

export interface GreetingsConfig {
  morning: Greetings,
  afternoon: Greetings,
  evening: Greetings,
  night: Greetings,
}

export type Greetings = string[];

export type ColumnsConfig = [ColumnConfig, ColumnConfig];

export interface ColumnConfig {
  icon: string;
  links: ListLink[]
}
