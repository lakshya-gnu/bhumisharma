import { Hero } from "./_components/Hero/hero";
import { ScrollableContent } from "./_components/ScrollableContent/scrollable-content";

export default function RootPage() {
    return (
        <div className="flex flex-col lg:flex-row">
            <div>
                <Hero />
            </div>
            <div>
                <ScrollableContent />
            </div>
        </div>
    );
}
