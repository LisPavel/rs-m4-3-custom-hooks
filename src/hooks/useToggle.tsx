import { useReducer } from "react";

enum ToggleActionKind {
  TOGGLE = "TOGGLE",
}

interface ToggleAction<T> {
  type: ToggleActionKind;
  payload?: T;
}

interface ToggleState<T> {
  items: T[];
  active: number;
}

const defaultItems = [false, true];

function toggleReducer<T>(
  state: ToggleState<T>,
  action: ToggleAction<(typeof state.items)[number]>,
): ToggleState<T> {
  const { type, payload } = action;

  switch (type) {
    case ToggleActionKind.TOGGLE: {
      if (payload == null) {
        return {
          ...state,
          active:
            state.active + 1 === state.items.length ? 0 : state.active + 1,
        };
      }
      return {
        ...state,
        active: state.items.indexOf(payload),
      };
    }
    default:
      return state;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetItemType<T extends ArrayLike<any>> = T[number];

export function useToggle<T = boolean>(
  toggleArray: ArrayLike<T> = defaultItems as T[],
): [
  GetItemType<typeof toggleArray>,
  (value?: GetItemType<typeof toggleArray>) => void,
] {
  type PossibleValue = (typeof toggleArray)[number];

  const [state, dispatch] = useReducer(toggleReducer<T>, {
    active: 0,
    items: toggleArray,
  } as ToggleState<T>);

  function toggleValue(value?: PossibleValue): void {
    dispatch({ type: ToggleActionKind.TOGGLE, payload: value });
  }

  return [state.items[state.active], toggleValue];
}
