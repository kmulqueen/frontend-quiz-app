import { QuizProvider } from "./contexts/QuizProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import AppContent from "./components/App/AppContent";

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <AppContent />
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;
