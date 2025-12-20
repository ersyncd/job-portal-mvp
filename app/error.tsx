'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white">
      <h2 className="text-xl font-bold text-red-600">
        Oops! Gagal memuat lowongan.
      </h2>
      <p className="text-gray-600">{error.message}</p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Coba Lagi
      </button>
    </div>
  );
}