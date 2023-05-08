import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: {
      background: string;
      text: string;
      text2: string;
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
  }
}
