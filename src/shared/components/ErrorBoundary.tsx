import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-kinetic-bg p-6 text-center">
          <div className="max-w-md bg-kinetic-surface p-8 rounded-lg shadow-level-1 border border-kinetic-border">
            <h2 className="font-barlow font-bold text-2xl text-kinetic-primary mb-4 uppercase">Something went wrong</h2>
            <p className="font-inter text-kinetic-text-secondary text-sm mb-6">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-kinetic-accent-1 text-white font-inter font-semibold text-[15px] px-6 py-2.5 rounded hover:bg-[#007b94] transition-all cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
