import { Button } from '@/components/ui/button';

function App() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 px-6 text-center">
            <h1 className="text-4xl font-bold text-white">React Vite Template</h1>
            <p className="max-w-md text-slate-400">
                A React + Vite + TypeScript boilerplate with Tailwind, Oxlint, Prettier, Vitest, and
                CI/CD already set up — plus shadcn/ui configured (Button included as an example; add
                more components as needed).
            </p>

            <div className="mt-8">
                <div className="mt-2 flex items-center gap-3">
                    <p className="text-xs text-white">Edgar Hidalgo</p>
                    <Button
                        className="text-slate-400"
                        render={
                            <a href="https://github.com/fronted7" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        }
                        size="xs"
                        variant="link"
                    />
                    <Button
                        className="text-slate-400"
                        render={
                            <a
                                href="https://linkedin.com/in/edgarhidalgo"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        }
                        size="xs"
                        variant="link"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
