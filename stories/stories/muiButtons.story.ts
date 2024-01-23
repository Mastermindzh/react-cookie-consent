import { Button } from "@mui/material";
import { CookieTailorProps } from "../../src/CookieTailor.props";
import { defaultStoryProps } from "../defaults/storyProps";
import { DefaultTemplate } from "../defaults/template";

const CustomMuiButton = DefaultTemplate.bind({});
CustomMuiButton.args = {
  ...defaultStoryProps,
  disableButtonStyles: true,
  ButtonComponent: Button,
  customButtonProps: { variant: "contained", style: { marginRight: "10px" } },
} as CookieTailorProps;

export { CustomMuiButton };
