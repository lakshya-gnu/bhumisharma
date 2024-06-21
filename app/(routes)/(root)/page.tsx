import { Hero } from "./_components/Hero/hero";

export default function RootPage() {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden lg:flex-row">
            <Hero />
        </div>
    );
}
