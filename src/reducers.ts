// https://elisealcala.com/context-use-reducer-typescript
import { SquircleImage } from "./squircle";

export type InitialState = {
  image: SquircleImage
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Set = 'SET_IMAGE',
  Remove = 'REMOVE_IMAGE',
}

type ImagePayload = {
  [Types.Set] : {
    filename: string;
    src: string;
  };

  [Types.Remove] : null;
}

export type ImageActions =
  ActionMap<ImagePayload>[keyof ActionMap<ImagePayload>];

export const imageReducer = (
  state: SquircleImage,
  action: ImageActions // | OtherActions
) => {
  switch (action.type) {
    case Types.Set:
      return {...state, ...action.payload};
    case Types.Remove:
      return initialState.image
  }
}

export const initialState = {
  image: { filename: "", src: ""}
};
