export interface User {
  name: string;
  image: string;
}

export interface Friend {
  name: string;
  online: boolean;
}

export type ModeType = 'ranked' | 'private';