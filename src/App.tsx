import { Suspense, lazy } from "react";
import ErrorBoundary from "./shared/components/ErrorBoundary";

const LandingPage = lazy(() => import("./features/landing/LandingPage"));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="min-h-screen bg-kinetic-bg flex items-center justify-center text-kinetic-primary font-inter font-medium">
            Loading...
          </div>
        }
      >
        <LandingPage />
      </Suspense>
    </ErrorBoundary>
  );
}
