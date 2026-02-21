import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm border">
        <h1 className="text-3xl font-bold">🛡️ DisasterShield</h1>
        <p className="mt-2 text-gray-700">
          A real-time disaster coordination platform to manage help requests,
          volunteers, and rescue progress — all in one place.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/victim"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Request Help
          </Link>
          <Link
            href="/volunteer"
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Become a Volunteer
          </Link>
          <Link
            href="/admin"
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Control Room
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "⚡ Real-time", desc: "Requests update instantly for admins & volunteers." },
          { title: "🗺️ Map-ready", desc: "Show requests on a map using coordinates." },
          { title: "✅ Track Status", desc: "Pending → Assigned → In Progress → Resolved." },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl bg-white p-5 shadow-sm border">
            <h3 className="font-semibold">{x.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{x.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}