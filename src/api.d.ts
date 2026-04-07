export type ModSetting =
  & {
    name: string;
  }
  & (
    | {
      type: "string" | "color";
      default: string;
      onChange?: (value: string) => void;
    }
    | {
      type: "slider";
      min: number;
      max: number;
      step: number;
      default: number;
      onChange?: (value: number) => void;
    }
    | {
      type: "number";
      default: number;
      onChange?: (value: number) => void;
    }
    | {
      type: "toggle";
      default: boolean;
      onChange?: (value: boolean) => void;
    }
  );
type SettingValue<T extends ModSetting> = T["default"];

declare global {
  const api: {
    onLoad: (cb: () => void) => void;
    patchMethod: (method: string, modifier: (code: string) => string) => void;
    registerSettings: <T extends Record<string, ModSetting>>(
      settings: T,
    ) => { readonly [K in keyof T]: SettingValue<T[K]> };
  };
}
