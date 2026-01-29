export default function AppLayout({children}) {
    return (
        <div className="min-h-screen bg-bg flex">
            {/*Sidebar (Desktop) */}
            <aside className="hidden md:flex w-64 border-r border-border p-6">
                <div>
                    <h1 className="text-lg font-semibold">Digital Behavior Twin</h1>

                    <nav className="mt-10 space-y-3 text-sm text-textMuted">
                        <p className="hover:text-white cursor-pointer">Dashboard</p>
                        <p className="hover:text-white cursor-pointer">Insights</p>
                        <p className="hover:text-white cursor-pointer">Settings</p>
                    </nav>
                </div>
            </aside>

                        {/* Mobile Top Bar */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-border">
            <h1 className="font-semibold">Digital Twin</h1>

            <button className="text-textMuted text-sm">
                Menu
            </button>
            </div>


            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10">
                {children}
            </main>
        </div>
    );
}