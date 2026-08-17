function App() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 px-6 text-center">
            <h1 className="text-4xl font-bold text-white">React Vite Template</h1>
            <p className="max-w-md text-slate-400">
                A React + Vite + TypeScript boilerplate with Oxlint, Prettier, Tailwind, Vitest, and
                CI/CD already set up.
            </p>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <span>Edgar Hidalgo</span>
                <span>·</span>
                <a
                    href="https://github.com/TU_USUARIO"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                >
                    GitHub
                </a>
                <span>·</span>
                <a
                    href="https://linkedin.com/in/TU_USUARIO"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                >
                    LinkedIn
                </a>
                <span>·</span>
                <a
                    href="https://TU_WEB.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                >
                    Web
                </a>
            </div>
        </div>
    );
}

export default App;
