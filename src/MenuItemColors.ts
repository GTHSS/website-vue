export enum MenuColors {
  green,
  red,
  orange,
  brown,
  blue,
  rainbow,
}

export function verifyCssName(name: String) {
  switch (name) {
    case "green":
      return true;
    case "red":
      return true;
    case "orange":
      return true;
    case "brown":
      return true;
    case "blue":
      return true;
    case "rainbow":
      return true;
    default:
      return false;
  }
}

export function getCssNameFromColor(color: MenuColors) {
  switch (color) {
    case MenuColors.green:
      return "green";
    case MenuColors.red:
      return "red";
    case MenuColors.orange:
      return "orange";
    case MenuColors.brown:
      return "brown";
    case MenuColors.blue:
      return "blue";
    case MenuColors.rainbow:
      return "rainbow";
    default:
      throw new Error("Sorry, the color is not mapped to a string yet.");
  }
}
