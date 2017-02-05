import { Offset } from './offset';
import { Floormap } from './floormap';
import { Modifier } from './modifier';

// todo: We need a file for these
enum Mode { Execution, Visualization };
enum App { PTLUSH, PLUSH };
enum Axis { X, Y, Z };

export class Project {
  name: string;
  mode: Mode;
  app: App;
  analysisAxis: Axis;
  soilStrata: number;
  offsets: Offset[];
  floormap: Floormap[];
  modifier: Modifier[];
}
