import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mt-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-500 mt-2 mb-8">
        Maaf, lowongan yang kamu cari mungkin sudah dihapus atau URL-nya salah.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}