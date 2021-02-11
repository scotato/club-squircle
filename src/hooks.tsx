import createPersistedState from "use-persisted-state";

const useCurvatureState = createPersistedState("curvature");

export const useCurvature = () => {
  const [curvature, setCurvature] = useCurvatureState(10);

  return {
    curvature,
    setCurvature,
    increment: () => setCurvature((currentCurvature) => currentCurvature + 1),
    decrement: () => setCurvature((currentCurvature) => currentCurvature - 1),
  };
};
