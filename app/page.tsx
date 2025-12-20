import { JobCard } from '@/components/JobCard';
import JobPagination from '@/components/JobPagination';
import JobSearch from '@/components/JobSearch';
import { getJobs } from '@/services/getJobs';

interface ParamsProps {
  q?: string;
  page?: string;
}

interface HomeProps {
  searchParams: Promise<ParamsProps>
}

export default async function Home({ searchParams }: HomeProps) {
  const { q, page } = await searchParams;
  const query = q?.toLowerCase() || "";
  const pageNum = Number(page) || 1;

  const { data, totalPages } = await getJobs({ query: query, page: pageNum });

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="bg-white border-b border-gray-200 py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Temukan Pekerjaan Impianmu
          </h1>
          <p className="text-base text-gray-500 mb-8">
            Lowongan kerja terkurasi untuk developer Indonesia.
          </p>
          <JobSearch />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20 min-h-181">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {data.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <p className="text-sm font-medium">Belum ada lowongan tersedia saat ini.</p>
          </div>
        )}
      </div>

      <JobPagination currentPage={pageNum} totalPages={totalPages} />

    </main>
  );
}