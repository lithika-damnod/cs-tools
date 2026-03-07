import LayoutProvider from "./layout/LayoutProvider";
import ProjectProvider from "./project/ProjectProvider";
import { ColorModeProvider } from "./theme";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <LayoutProvider>
        <ProjectProvider>{children}</ProjectProvider>
      </LayoutProvider>
    </ColorModeProvider>
  );
}
