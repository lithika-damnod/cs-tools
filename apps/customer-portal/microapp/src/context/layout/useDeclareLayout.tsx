import { type DependencyList, useContext, useLayoutEffect } from "react";

import { LayoutContext, type LayoutDeclaration } from "./LayoutContext";

export const useDeclareLayout = (config: Partial<LayoutDeclaration>, deps?: DependencyList) => {
  const { declareLayout } = useContext(LayoutContext);

  useLayoutEffect(() => {
    declareLayout(config);
  }, deps ?? []);
};
