export interface Suggestion {
  name: string;
  help: string;
  params: string[];
}

export interface Message {
  args: string[];
  template: string;
  params?: { [key: string]: string };
  multiline?: boolean;
  color?: [ number, number, number ];
  templateId?: number;
  mode?: string;
  modeData?: Mode;

  id?: string;
}

export interface Mode {
  name: string;
  displayName: string;
  color: string;
  hidden?: boolean;
  isChannel?: boolean;
  isGlobal?: boolean;
}