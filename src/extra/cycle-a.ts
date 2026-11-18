import { cycleB } from "./cycle-b";

export function cycleA(depth: number): number {
  return depth <= 0 ? 0 : cycleB(depth - 1) + 1;
}
