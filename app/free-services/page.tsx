import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-4 pt-12 pb-4">
      <div className="max-w-2xl w-full shadow-lg rounded-2xl p-6 bg-white/80 backdrop-blur">
        <div className="space-y-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              A Listening Ear
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sometimes, all we need is someone to listen. This isn&quot;t about advice,
              fixing things, or judgment — just a space where you can share
              what&quot;s on your mind and know you&quot;re heard.
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 italic text-lg">
              &ldquo;You talk, I&quot;ll listen — like a friend over coffee.&rdquo;
            </p>
          </div>

          <div>
            <p className="text-gray-600">
              If you&quot;d like to reach out, just click below. Whether it&quot;s five
              minutes or an hour, I&quot;ll be here.
            </p>
            <div className="mt-6 flex justify-center">
                <Link href="/free-services/chat">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md">
                Talk With Me
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center pb-10">
    <Link
    href="/"
    className="text-pink-600 hover:text-pink-800 underline text-sm absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    ← Go Back to Homepage
  </Link>
    </div>
    </>
  );
}
