import React, { createContext, useMemo, useReducer } from "react";
import {
  imageReducer,
  initialState,
  InitialState,
  ImageActions,
} from "../reducers";

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { image }: InitialState,
  action: ImageActions // | OtherActions
) => ({
  image: imageReducer(image, action),
});

const AppProvider = (props: AppContextProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
