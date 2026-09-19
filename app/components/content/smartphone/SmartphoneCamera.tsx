import {
  Camera,
  CircleDot,
  Focus,
  ScanLine,
} from "lucide-react";

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

  return (
    <section
      id="camera"
      className="border-t border-neutral-200 bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Camera
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            More than megapixels.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/60">
            A look at the cameras behind the phone&apos;s photography and video
            capabilities.
          </p>
        </div>

        {/* Camera System */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Main Camera Visual */}
          <div className="relative min-h-[480px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:col-span-3">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Camera lenses */}
              <div className="relative h-64 w-64">
                <Lens
                  size="large"
                  className="left-1/2 top-2 -translate-x-1/2"
                />

                <Lens
                  size="medium"
                  className="bottom-2 left-5"
                />

                <Lens
                  size="medium"
                  className="bottom-2 right-5"
                />

                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <CircleDot className="h-4 w-4 text-white/50" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-7 left-7">
              <p className="text-sm text-white/40">
                Main camera
              </p>

              <p className="mt-1 text-3xl font-semibold">
                {mainCamera ?? "—"}
              </p>
            </div>
          </div>

          {/* Camera Specs */}
          <div className="grid gap-4 lg:col-span-2">
            <CameraStat
              icon={Camera}
              label="Main Camera"
              value={mainCamera}
            />

            <CameraStat
              icon={ScanLine}
              label="Ultra-Wide"
              value={ultraWide}
            />

            <CameraStat
              icon={Focus}
              label="Telephoto"
              value={telephoto}
            />

            <CameraStat
              icon={CircleDot}
              label="Front Camera"
              value={frontCamera}
            />
          </div>
        </div>

        {/* Editorial Camera Notes */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CameraFeature
            title="Daylight"
            description="Look at detail, dynamic range, color consistency, and highlight control in bright conditions."
          />

          <CameraFeature
            title="Low light"
            description="Night photography depends on sensor performance, stabilization, processing, and exposure control."
          />

          <CameraFeature
            title="Video"
            description="Video quality involves stabilization, dynamic range, frame rates, autofocus, and audio capture."
          />
        </div>
      </div>
    </section>
  );
}

function Lens({
  size,
  className,
}: {
  size: "large" | "medium";
  className?: string;
}) {
  const dimensions =
    size === "large" ? "h-28 w-28" : "h-24 w-24";

  return (
    <div
      className={`absolute ${dimensions} ${className ?? ""} flex items-center justify-center rounded-full border-[8px] border-neutral-700 bg-neutral-900 shadow-2xl`}
    >
      <div className="flex h-[65%] w-[65%] items-center justify-center rounded-full border border-white/10 bg-black">
        <div className="h-1/2 w-1/2 rounded-full bg-white/5 ring-1 ring-white/10" />
      </div>
    </div>
  );
}

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
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <Icon className="h-5 w-5 text-white/50" />

      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-white/40">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold">
        {value ?? "—"}
      </p>
    </div>
  );
}

function CameraFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-white/50">
        {description}
      </p>
    </div>
  );
}