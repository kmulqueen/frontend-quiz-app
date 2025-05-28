import { QuizProvider } from "./contexts/QuizProvider";
import AppContent from "./components/App/AppContent";

function App() {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
}

export default App;
