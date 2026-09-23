import {
  Activity,
  BatteryCharging,
  Cpu,
  Flame,
  Gamepad2,
  Gauge,
  Smartphone,
  Zap,
} from "lucide-react";

import type { SmartphonePerformance as PerformanceData } from "@/lib/content/types";

type SmartphonePerformanceProps = {
  performance: PerformanceData;
};

function MetricCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number | null;
  icon: typeof Cpu;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2 text-neutral-500">
        <Icon className="h-4 w-4" />
        <span className="text-sm">{label}</span>
      </div>

      <p className="text-xl font-semibold tracking-tight text-neutral-950">
        {value ?? "Not tested"}
      </p>
    </div>
  );
}

export default function SmartphonePerformanceAnalysis({
  performance,
}: SmartphonePerformanceProps) {
  return (
    <section
      id="performance"
      className="bg-white px-6 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            Performance Analysis
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            {performance.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
            {performance.subheading}
          </p>
        </div>

        {/* Architecture */}
        <div className="mt-14">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              CPU & GPU Architecture
            </h3>

            <p className="mt-2 max-w-2xl text-neutral-600">
              The hardware behind the phone's performance and what it is
              designed to handle.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard
              label="CPU"
              value={performance.architecture.cpu}
              icon={Cpu}
            />

            <MetricCard
              label="GPU"
              value={performance.architecture.gpu}
              icon={Gauge}
            />

            <MetricCard
              label="Process"
              value={performance.architecture.process}
              icon={Zap}
            />
          </div>

          <div className="mt-5 rounded-2xl bg-neutral-50 p-6">
            <p className="text-base leading-7 text-neutral-700">
              {performance.architecture.summary}
            </p>
          </div>
        </div>

        {/* Benchmarks */}
        <div className="mt-20">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Benchmark Performance
            </h3>

            <p className="mt-2 max-w-2xl text-neutral-600">
              Synthetic benchmarks help measure peak performance, but they are
              only one part of the overall picture.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Geekbench */}
            <div className="rounded-3xl border border-neutral-200 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Cpu className="h-5 w-5 text-neutral-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-950">
                    Geekbench
                  </h4>

                  <p className="text-sm text-neutral-500">
                    CPU performance
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <MetricCard
                  label="Single Core"
                  value={performance.benchmarks.geekbench.singleCore}
                  icon={Activity}
                />

                <MetricCard
                  label="Multi Core"
                  value={performance.benchmarks.geekbench.multiCore}
                  icon={Activity}
                />
              </div>
            </div>

            {/* AnTuTu */}
            <div className="rounded-3xl border border-neutral-200 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Gauge className="h-5 w-5 text-neutral-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-950">AnTuTu</h4>

                  <p className="text-sm text-neutral-500">
                    Overall system performance
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <MetricCard
                  label="Total"
                  value={performance.benchmarks.antutu.total}
                  icon={Gauge}
                />

                <MetricCard
                  label="CPU"
                  value={performance.benchmarks.antutu.cpu}
                  icon={Cpu}
                />

                <MetricCard
                  label="GPU"
                  value={performance.benchmarks.antutu.gpu}
                  icon={Zap}
                />

                <MetricCard
                  label="Memory"
                  value={performance.benchmarks.antutu.memory}
                  icon={Activity}
                />

                <MetricCard
                  label="UX"
                  value={performance.benchmarks.antutu.ux}
                  icon={Smartphone}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sustained Gaming */}
        <div className="mt-20">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Sustained Gaming Performance
            </h3>

            <p className="mt-2 max-w-2xl text-neutral-600">
              Short benchmark bursts can show peak power. Extended gaming
              reveals how well that performance can actually be maintained.
            </p>
          </div>

          {performance.gaming.games.length > 0 ? (
            <div className="overflow-hidden rounded-3xl border border-neutral-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead className="bg-neutral-50 text-sm text-neutral-500">
                    <tr>
                      <th className="px-5 py-4 font-medium">Game</th>
                      <th className="px-5 py-4 font-medium">Settings</th>
                      <th className="px-5 py-4 font-medium">Average FPS</th>
                      <th className="px-5 py-4 font-medium">FPS Range</th>
                      <th className="px-5 py-4 font-medium">Duration</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-neutral-200">
                    {performance.gaming.games.map((game) => (
                      <tr key={game.name}>
                        <td className="px-5 py-5 font-medium text-neutral-950">
                          {game.name}
                        </td>

                        <td className="px-5 py-5 text-neutral-600">
                          {game.settings}
                        </td>

                        <td className="px-5 py-5 text-neutral-600">
                          {game.averageFps}
                        </td>

                        <td className="px-5 py-5 text-neutral-600">
                          {game.fpsRange}
                        </td>

                        <td className="px-5 py-5 text-neutral-600">
                          {game.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
              <Gamepad2 className="mx-auto h-8 w-8 text-neutral-400" />

              <p className="mt-4 font-medium text-neutral-900">
                Gaming measurements coming soon
              </p>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-neutral-500">
                Sustained FPS, settings, temperature and performance
                observations will be added when tested.
              </p>
            </div>
          )}

          <div className="mt-5 rounded-2xl bg-neutral-50 p-6">
            <div className="flex gap-4">
              <Gamepad2 className="mt-1 h-5 w-5 shrink-0 text-neutral-600" />

              <div>
                <h4 className="font-semibold text-neutral-950">
                  Sustained performance
                </h4>

                <p className="mt-2 leading-7 text-neutral-600">
                  {performance.gaming.sustainedPerformance.summary}
                </p>

                {performance.gaming.sustainedPerformance.performanceDrop && (
                  <p className="mt-3 text-sm text-neutral-500">
                    Performance change:{" "}
                    {performance.gaming.sustainedPerformance.performanceDrop}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thermal */}
        <div className="mt-20">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Thermal Behavior
            </h3>

            <p className="mt-2 max-w-2xl text-neutral-600">
              Temperature matters because sustained heat can affect comfort,
              battery consumption and long-term performance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MetricCard
              label="Peak Temperature"
              value={performance.thermal.peakTemperature}
              icon={Flame}
            />

            <MetricCard
              label="Sustained Temperature"
              value={performance.thermal.sustainedTemperature}
              icon={Flame}
            />
          </div>

          <div className="mt-5 rounded-2xl bg-neutral-50 p-6">
            <p className="leading-7 text-neutral-700">
              {performance.thermal.summary}
            </p>
          </div>
        </div>

        {/* App Loading */}
        <div className="mt-20">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              App Loading & Multitasking
            </h3>

            <p className="mt-2 max-w-2xl text-neutral-600">
              How the phone's performance translates into everyday application
              use.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8">
            <div className="flex gap-4">
              <Smartphone className="mt-1 h-5 w-5 shrink-0 text-neutral-600" />

              <div>
                <p className="leading-7 text-neutral-700">
                  {performance.appLoading.summary}
                </p>

                {performance.appLoading.observations.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {performance.appLoading.observations.map(
                      (observation) => (
                        <li
                          key={observation}
                          className="flex gap-3 text-sm leading-6 text-neutral-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />

                          <span>{observation}</span>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Battery Impact */}
        <div className="mt-20">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Performance & Battery Impact
            </h3>

            <p className="mt-2 max-w-2xl text-neutral-600">
              Peak performance is useful, but demanding workloads also consume
              more power.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MetricCard
              label="Gaming Battery Impact"
              value={performance.batteryImpact.gaming}
              icon={Gamepad2}
            />

            <MetricCard
              label="Heavy Workload Impact"
              value={performance.batteryImpact.heavyUse}
              icon={BatteryCharging}
            />
          </div>

          <div className="mt-5 rounded-2xl bg-neutral-50 p-6">
            <p className="leading-7 text-neutral-700">
              {performance.batteryImpact.summary}
            </p>
          </div>
        </div>

        {/* TechBroom Analysis */}
        <div className="mt-20 rounded-3xl bg-neutral-950 p-7 text-white sm:p-10">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-neutral-300" />

            <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
              TechBroom Analysis
            </p>
          </div>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-200">
            {performance.analysis.summary}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white">
                Where it performs well
              </h4>

              <ul className="mt-4 space-y-3">
                {performance.analysis.strengths.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-neutral-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Things to keep in mind
              </h4>

              <ul className="mt-4 space-y-3">
                {performance.analysis.limitations.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-neutral-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}