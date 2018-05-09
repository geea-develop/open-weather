import {Coordinate} from './coordinate';
import {Main} from "./main";
import {Wind} from "./wind";

export class City {
  id: number;
  name: string;
  coord: Coordinate;
  main: Main;
  dt: number;
  wind: Wind;
  rain: any;
  clouds: any;
  weather: any;
}
