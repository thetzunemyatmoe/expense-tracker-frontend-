import NavBar from "@/components/NavBar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* App Navigation */}
      <NavBar />

      {/* Main content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
