export const ObjectType = {
  SOLID: "solid",
  HAZARD: "hazard",
  DECORATIVE: "deco",
  PORTAL: "portal",
  PAD: "pad",
  RING: "ring",
  TRIGGER: "trigger",
  SPEED: "speed",
  FLY: "fly",
  CUBE: "cube",
} as const;
export type ObjectType = typeof ObjectType[keyof typeof ObjectType];

export const ColorId = {
  Background: 1000,
  Ground: 1001,
} as const;
export type ColorId = typeof ColorId[keyof typeof ColorId];
