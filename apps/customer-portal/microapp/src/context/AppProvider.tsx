import LayoutProvider from "./layout/LayoutProvider";
import LoaderProvider from "./loader/LoaderProvider";
import ProjectProvider from "./project/ProjectProvider";
import SnackbarProvider from "./snackbar/SnackbarProvider";
import { ColorModeProvider } from "./theme";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <LayoutProvider>
        <SnackbarProvider>
          <LoaderProvider>
            <ProjectProvider>{children}</ProjectProvider>
          </LoaderProvider>
        </SnackbarProvider>
      </LayoutProvider>
    </ColorModeProvider>
  );
}
