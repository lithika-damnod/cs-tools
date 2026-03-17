import { createContext } from "react";

export type ProjectContextType = {
  projectId: string | null;
  noveraEnabled: boolean;

  setProjectId: (id: string | null) => void;
  setNoveraEnabled: (status: boolean) => void;
};

export const ProjectContext = createContext<ProjectContextType | null>(null);
