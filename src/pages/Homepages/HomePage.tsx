import { FeatureSection } from "@/layout/feature-section";

export default function Homepage() {
    return (
        <div>
            <section className="relative overflow-hidden py-36">
                <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
                    <img
                        alt="background"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
                        className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
                    />
                </div>
                <div className="relative z-10 container mx-auto">
                    <div className="mx-auto flex max-w-5xl flex-col items-center">
                        <div className="flex flex-col items-center gap-6 text-center">
                            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
                                {/* <Logo /> */}
                            </div>
                            <div>
                                <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                                    "Fast & Reliable Parcel Delivery"
                                    {/* <span className="">Bangladesh</span> */}
                                </h1>
                                <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                                    "Track, send, and receive packages effortlessly — secure, on-time, and hassle-free."
                                </p>
                            </div>
                            <div className=" flex justify-center gap-3 text-muted-foreground lg:text-xl">
                                <p>Sign in to access your parcel management dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FeatureSection />
        </div>
    );
}