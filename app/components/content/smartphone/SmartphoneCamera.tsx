import { Aperture, Camera, CircleDot, Focus, ScanLine } from "lucide-react";
import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneCameraProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

export default function SmartphoneCamera({
  specs,
}: SmartphoneCameraProps) {
  const camera = specs.camera;

  if (!camera) {
    return null;
  }

  const getSpec = (label: string) =>
    camera.items.find((item) => item.label === label)?.value;

  const mainCamera = getSpec("Main Camera");
  const ultraWide = getSpec("Ultra-Wide");
  const telephoto = getSpec("Telephoto");
  const frontCamera = getSpec("Front Camera");

  // Safely extract the camera image
  const image = (camera as { image?: string }).image;

  return (
    <section
      id="camera"
      className="relative overflow-hidden border-t border-neutral-900 bg-black px-6 py-24 sm:py-32 text-white selection:bg-white selection:text-black"
    >
      {/* Subtle Silver Ambient Glow for Apple Pro Vibe */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-md">
            <Aperture className="h-3.5 w-3.5 animate-[spin_10s_linear_infinite]" />
            Pro Camera System
          </span>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {camera.heading || "Does it take great photos? The answer is yes."}
          </h2>

          <p className="text-lg leading-8 text-neutral-400">
            {camera.subheading || "A deeper look at the advanced sensor technology, computational photography, and multi-lens array that capture reality with stunning fidelity."}
          </p>
        </div>

        {/* Main Camera Grid */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          
          {/* Visual Panel: Camera Module Showcase */}
          <div className="group relative flex min-h-[480px] sm:min-h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/40 shadow-2xl backdrop-blur-xl lg:col-span-7">
            
            {/* Ambient Lighting FX behind image */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl transition-transform duration-[1.5s] ease-out group-hover:scale-150" />

            {/* Camera Image */}
            {image ? (
              <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
                <img
                  src={image}
                  alt="Pro Camera System"
                  className="h-auto max-h-[400px] sm:max-h-[480px] w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] transition-all duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Camera className="h-20 w-20 text-neutral-600" />
              </div>
            )}

            {/* Sweep glare effect on hover */}
            <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              <div className="absolute inset-0 -translate-x-full skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-[2s] ease-in-out group-hover:translate-x-[200%]" />
            </div>

            {/* Overlay Specs */}
            <div className="absolute bottom-8 left-8 z-30 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Primary Sensor
              </p>
              <p className="mt-1 text-4xl font-bold text-white drop-shadow-lg">
                {mainCamera ?? "—"}
              </p>
            </div>
          </div>

          {/* Camera Specs Cards Column */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <CameraStat icon={Camera} label="Main Camera" value={mainCamera} />
            <CameraStat icon={ScanLine} label="Ultra-Wide" value={ultraWide} />
            <CameraStat icon={Focus} label="Telephoto" value={telephoto} />
            <CameraStat icon={CircleDot} label="Front Camera" value={frontCamera} />
          </div>
        </div>

        {/* Editorial Camera Notes (Bottom row) */}
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          <CameraFeature
            title="Computational Light"
            description="Analyzes multiple exposures in real time to capture detail, maximize dynamic range, and lock in color consistency."
          />
          <CameraFeature
            title="Night Mode Architecture"
            description="Massive sensors and intelligent stabilization pull in dramatically more light for crisp, noise-free night shots."
          />
          <CameraFeature
            title="ProRes Video"
            description="End-to-end pro workflow with cinematic stabilization, HDR recording, and high-fidelity audio capture."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable micro-animated Stats Card
function CameraStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Camera;
  label: string;
  value?: string;
}) {
  return (
    <div className="group relative flex items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-900/70">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 transition-colors duration-500 group-hover:text-neutral-300">
          {label}
        </p>
        <p className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
          {value ?? "—"}
        </p>
      </div>

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-neutral-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}

// Reusable micro-animated Feature Note Card
function CameraFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/30 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-neutral-900/60 hover:shadow-2xl">
      <h3 className="text-lg font-bold text-white transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400 transition-colors duration-500 group-hover:text-neutral-300">
        {description}
      </p>
      
      {/* Subtle bottom edge gradient highlight on hover */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-neutral-300 to-white transition-all duration-500 ease-out group-hover:w-full" />
    </div>
  );
}