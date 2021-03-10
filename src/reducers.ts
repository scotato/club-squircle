// https://elisealcala.com/context-use-reducer-typescript

import {
  initialState,
  SquircleMode,
  SquircleShape,
  SquircleStyle,
  SquircleImage,
} from "./squircle";

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
  ShapeMode = 'SHAPE_MODE',
  ShapeC = 'SHAPE_C',
  ShapeR1 = 'SHAPE_R1',
  ShapeR2 = 'SHAPE_R2',
  ShapeP1 = 'SHAPE_P1',
  ShapeP2 = 'SHAPE_P2',
  StyleFillColor = 'STYLE_FILL_COLOR',
  StyleStrokeWidth = 'STYLE_STROKE_WIDTH',
  StyleStrokeColor = 'STYLE_STROKE_COLOR',
  ImageSet = 'IMAGE_SET',
  ImageRemove = 'IMAGE_REMOVE',
  ImageClip = 'IMAGE_CLIP',
  ImageScale = 'IMAGE_SCALE',
}

type ShapePayload = {
  [Types.ShapeMode] : SquircleMode;
  [Types.ShapeC] : number;
  [Types.ShapeR1] : number;
  [Types.ShapeR2] : number;
  [Types.ShapeP1] : number;
  [Types.ShapeP2] : number;
}

type StylePayload = {
  [Types.StyleFillColor] : string;
  [Types.StyleStrokeWidth] : number;
  [Types.StyleStrokeColor] : string;
}

type ImagePayload = {
  [Types.ImageSet] : {
    filename: string;
    src: string;
  };

  [Types.ImageRemove] : undefined;
  [Types.ImageClip] : boolean;
  [Types.ImageScale] : number;
}

export type ShapeActions =
  ActionMap<ShapePayload>[keyof ActionMap<ShapePayload>];

export type StyleActions =
  ActionMap<StylePayload>[keyof ActionMap<StylePayload>];

export type ImageActions =
  ActionMap<ImagePayload>[keyof ActionMap<ImagePayload>];


export const shapeReducer = (
  state: SquircleShape,
  action: ShapeActions | StyleActions | ImageActions
) => {
  switch (action.type) {
    case Types.ShapeMode:
      return { ...state, mode: action.payload}
    case Types.ShapeC:
      return { ...state, c: action.payload}
    case Types.ShapeR1:
      return { ...state, r1: action.payload}
    case Types.ShapeR2:
      return { ...state, r2: action.payload}
    case Types.ShapeP1:
      return { ...state, p1: action.payload}
    case Types.ShapeP2:
      return { ...state, p2: action.payload}
    default:
      return state
  }
}

export const styleReducer = (
  state: SquircleStyle,
  action: ShapeActions | StyleActions | ImageActions
) => {
  switch (action.type) {
    case Types.StyleFillColor:
      return {...state, fillColor: action.payload};
    case Types.StyleStrokeWidth:
      return {...state, strokeWidth: action.payload};
    case Types.StyleStrokeColor:
      return {...state, strokeColor: action.payload};
    default:
      return state
  }
}

export const imageReducer = (
  state: SquircleImage,
  action: ShapeActions | StyleActions | ImageActions
) => {
  switch (action.type) {
    case Types.ImageSet:
      return {...state, ...action.payload};
    case Types.ImageRemove:
      return initialState.image
    case Types.ImageClip:
      return {...state, clip: action.payload};
    case Types.ImageScale:
      return {...state, scale: action.payload};
    default:
      return state
  }
}
