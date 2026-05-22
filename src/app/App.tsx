import { Header } from "./components/dashboard/Header";
import { HeroInputCard } from "./components/dashboard/HeroInputCard";
import { RunSummaryCard } from "./components/dashboard/RunSummaryCard";
import { useAgentStore } from "./store/useAgentStore";
import { toast, Toaster } from "sonner";

export default function App() {
  const {
    repo,
    isRunning,
    results,
    setRepo,
    setIsRunning,
    setResults,
    reset,
  } = useAgentStore();

  const handleLaunch = async () => {
    if (!repo) {
      toast.error("Please fill in repository URL");
      return;
    }

    setIsRunning(true);
    toast.info("Agent deploying...");

    // Extract repo name from URL
    const repoName = repo.split("/").pop() || "REPO";
    const branch = `${repoName.toUpperCase()}_AI_Fix`;

    // Simulate agent running
    setTimeout(() => {
      const mockResult = {
        status:
          Math.random() > 0.3
            ? ("passed" as const)
            : ("failed" as const),
        repo,
        branch,
        failures: Math.floor(Math.random() * 8) + 1,
        fixes: Math.floor(Math.random() * 6) + 1,
        time: Math.floor(Math.random() * 45) + 15,
      };

      setResults(mockResult);
      setIsRunning(false);
      toast.success(
        mockResult.status === "passed"
          ? "Agent completed successfully!"
          : "Agent completed with errors",
      );
    }, 3000);
  };

  const handleSimulate = () => {
    if (!repo) {
      toast.error("Please fill in repository URL");
      return;
    }

    setIsRunning(true);
    toast.info("Running simulation...");

    // Extract repo name from URL
    const repoName = repo.split("/").pop() || "REPO";
    const branch = `${repoName.toUpperCase()}_AI_Fix`;

    // Simulate agent running
    setTimeout(() => {
      const mockResult = {
        status: "passed" as const,
        repo,
        branch,
        failures: 3,
        fixes: 3,
        time: 28,
      };

      setResults(mockResult);
      setIsRunning(false);
      toast.success("Simulation completed!");
    }, 2000);
  };

  const handleReset = () => {
    reset();
    toast.info("Reset complete");
  };

  return (
    <div className="min-h-screen relative">
      <Toaster position="top-right" theme="dark" />

      {/* Floating orb 2 */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(187, 0, 255, 0.05), transparent 70%)",
          filter: "blur(80px)",
          bottom: "10%",
          right: "15%",
          animation: "float 30s ease-in-out infinite",
          animationDelay: "-10s",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-12 px-4">
        {!results ? (
          <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
            <HeroInputCard
              repo={repo}
              setRepo={setRepo}
              onLaunch={handleLaunch}
              onSimulate={handleSimulate}
              isRunning={isRunning}
            />
          </div>
        ) : (
          <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
            <RunSummaryCard
              result={results}
              onReset={handleReset}
            />
          </div>
        )}
      </div>
    </div>
  );
}