import { cycleA } from "./cycle-a";

export function cycleB(depth: number): number {
  return depth <= 0 ? 0 : cycleA(depth - 1) + 1;
}

export const unusedCycleHelper = "unused";
