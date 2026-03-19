import LayoutProvider from "./layout/LayoutProvider";
import LoaderProvider from "./loader/LoaderProvider";
import ProjectProvider from "./project/ProjectProvider";
import { ColorModeProvider } from "./theme";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <LayoutProvider>
        <LoaderProvider>
          <ProjectProvider>{children}</ProjectProvider>
        </LoaderProvider>
      </LayoutProvider>
    </ColorModeProvider>
  );
}
