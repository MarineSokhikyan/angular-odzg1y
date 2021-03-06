import { Component } from "@angular/core";
import { SvgIconRegistryService } from "angular-svg-icon";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular";
  icons = data;
  public constructor(private svgIconRegistryService: SvgIconRegistryService) {
    iconNames.forEach((iconName: IconName) => {
      this.svgIconRegistryService.loadSvg(
        `${iconDirectory}/${iconName}.svg`,
        iconName
      );
    });
  }
}

const iconDirectory = "assets/icons";
const iconNames = ["add_photo", "assistant"];
type IconName = typeof iconNames[number];

const data = [
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant",
  "add_photo",
  "assistant"
];
