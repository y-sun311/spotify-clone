import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <main>
           <Sidebar />
            { /* center */}
        </main>

        <div>{/* player */}</div>
    </div>
  );
}
