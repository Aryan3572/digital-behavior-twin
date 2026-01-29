export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-[#0B0E14] flex">
            {/*sidebar (desktop only)*/}
            <aside className="hidden md:flex w-60 border-r border-[#1F2937] p-4">
                <h1 className="text-lg font-semibold">Digital Twin</h1>
            </aside>
            <MobileNav />
            {/* Main content */}
            <main className="flex-1 p-4 md:p-8">
                {children}
            </main>
        </div>
    );
}