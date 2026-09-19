import {
  BatteryCharging,
  Clock3,
  PlugZap,
  ShieldCheck,
} from "lucide-react";

import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneBatteryProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

export default function SmartphoneBattery({
  specs,
}: SmartphoneBatteryProps) {
  const battery = specs.battery;

  if (!battery) {
    return null;
  }

  const getSpec = (label: string) =>
    battery.items.find((item) => item.label === label)?.value;

  const capacity = getSpec("Capacity");
  const wiredCharging = getSpec("Wired Charging");
  const wirelessCharging = getSpec("Wireless Charging");

  return (
    <section
      id="battery"
      className="border-t border-neutral-200 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Battery
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Power that keeps up.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            Battery capacity is only part of the story. Charging speed,
            efficiency, software, and everyday usage all affect how long a
            phone lasts.
          </p>
        </div>

        {/* Main Battery Layout */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Battery Visual */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 lg:col-span-3 lg:p-12">
            <div className="flex min-h-[360px] flex-col items-center justify-center">
              {/* Battery */}
              <div className="relative h-40 w-72 rounded-3xl border-4 border-neutral-800 p-2">
                <div className="h-full w-[75%] rounded-2xl bg-neutral-800" />

                <div className="absolute right-[-14px] top-1/2 h-10 w-3 -translate-y-1/2 rounded-r-md bg-neutral-800" />

                <BatteryCharging className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white" />
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Battery capacity
              </p>

              <p className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                {capacity ?? "—"}
              </p>
            </div>
          </div>

          {/* Charging Information */}
          <div className="grid gap-4 lg:col-span-2">
            <BatteryStat
              icon={PlugZap}
              label="Wired charging"
              value={wiredCharging}
            />

            <BatteryStat
              icon={BatteryCharging}
              label="Wireless charging"
              value={wirelessCharging}
            />

            <BatteryStat
              icon={Clock3}
              label="Everyday endurance"
              value="Depends on usage"
            />

            <BatteryStat
              icon={ShieldCheck}
              label="Battery health"
              value="Usage and charging dependent"
            />
          </div>
        </div>

        {/* Battery Context */}
        <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              What affects battery life?
            </p>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Screen brightness, refresh rate, mobile network strength,
              gaming, camera usage, background applications, and software
              optimization can all significantly change real-world battery
              life. Capacity alone does not tell the whole story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BatteryStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof PlugZap;
  label: string;
  value?: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-neutral-200">
        <Icon className="h-5 w-5 text-neutral-700" />
      </div>

      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </p>

      <p className="mt-2 text-base font-semibold text-neutral-900">
        {value ?? "—"}
      </p>
    </div>
  );
}