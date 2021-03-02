import React, { createContext, useReducer } from "react";
import { initialState, InitialState } from "../squircle";
import {
  shapeReducer,
  styleReducer,
  imageReducer,
  ShapeActions,
  StyleActions,
  ImageActions,
} from "../reducers";

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<ShapeActions | StyleActions | ImageActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { shape, style, image }: InitialState,
  action: ShapeActions | StyleActions | ImageActions
) => ({
  shape: shapeReducer(shape, action),
  style: styleReducer(style, action),
  image: imageReducer(image, action),
});

const AppProvider = (props: AppContextProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
