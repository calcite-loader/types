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

export interface Hotkey {
  name: string;
  default: string | string[];
  onPressed?: () => void;
  onReleased?: () => void;
}

export interface EventCallback {
  (cb: (prevented: boolean) => void): void;
  (cb: (prevented: boolean) => void, when: "after"): void;
  (
    cb: (prevented: boolean, preventDefault: () => void) => void,
    when: "before",
  ): void;
}

declare global {
  const api: {
    onLoad: (cb: () => void) => void;
    onStart: EventCallback;
    onPause: EventCallback;
    onDeath: EventCallback;
    onSpawn: EventCallback;
    onComplete: EventCallback;
    onCube: EventCallback;
    onShip: EventCallback;
    onUpdate: EventCallback;

    patchScript: (name: string, modifier: (code: string) => string) => void;
    patchMethod: (method: string, modifier: (code: string) => string) => void;
    createPatchedMethod: <Args extends any[], R>(
      method: (...args: Args) => R,
      modifier: (code: string) => string,
    ) => (...args: Args) => R;

    registerSettings: <T extends Record<string, ModSetting>>(
      settings: T,
    ) => { readonly [K in keyof T]: SettingValue<T[K]> };

    /**
     * @returns A readonly object where each key corresponds to a hotkey and each value is whether or not that hotkey is currently pressed.
     */
    registerHotkeys: <T extends Record<string, Hotkey>>(
      hotkeys: T,
    ) => { readonly [K in keyof T]: boolean };
  };
}
