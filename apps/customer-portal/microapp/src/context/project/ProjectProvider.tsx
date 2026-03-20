import { useState } from "react";
import { ProjectContext } from "./ProjectContext";
import { useQueryClient } from "@tanstack/react-query";
import { projects } from "src/services/projects";

export default function ProjectProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const [projectId, setProjectId] = useState<string | null>(null);
  const [noveraEnabled, setNoveraEnabled] = useState<boolean>(false);

  const setProjectIdWithDetails = async (id: string | null) => {
    setProjectId(id);

    if (id) {
      queryClient.fetchQuery(projects.get(id)).then((data) => {
        setNoveraEnabled(data.agentEnabled);
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{ projectId, noveraEnabled, setProjectId: setProjectIdWithDetails, setNoveraEnabled }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
