import { GridDirection } from "@mui/material/Grid";
import { IMedia } from "../Media";
import { IRichText } from "../RichText";

export interface FlexRules {
  alignItems: string; //should be exact values
  flexDirection: GridDirection; //should be exact values
  justifyContent: string; //should be exact values
}

export interface IBasicSection extends FlexRules {
  content: IRichText;
  media?: IMedia;
  gridRules: string;
}
