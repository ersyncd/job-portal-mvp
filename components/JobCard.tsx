import Link from 'next/link';
import Image from 'next/image';
import { Job } from '@/types/job';
import { formatIDR } from '@/utils/currency';
import { formatDate } from '@/utils/date';

const getJobTypeColor = (type: string) => {
  switch (type) {
    case 'FULL_TIME': return 'bg-blue-100 text-blue-700';
    case 'PART_TIME': return 'bg-orange-100 text-orange-700';
    case 'FREELANCE': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  // Trik Avatar Fallback: Ambil inisial huruf pertama
  const companyInitial = job.company.name.charAt(0).toUpperCase();

  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="block group" // Group: untuk efek hover barengan
    >
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all duration-300">

        {/* HEADER: Logo & Title */},
        <div className="flex items-start gap-4 mb-4">

          {/* LOGO SECTION (Dengan Fallback Logic) */}
          <div className="flex shrink-0">
            {job.company.logoUrl ? (
              <Image
                src={job.company.logoUrl}
                alt={job.company.name}
                width={200}
                height={200}
                className="w-12 h-12 rounded-lg object-contain border border-gray-100"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-xl">
                {companyInitial}
              </div>
            )}
          </div>

          {/* TEXT SECTION */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500">{job.company.name}</p>
          </div>
        </div>

        {/* BADGES SECTION */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Badge 1: Job Type (Warna-warni) */}
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getJobTypeColor(job.jobType)}`}>
            {job.jobType.replace('_', ' ')}
          </span>

          {/* Badge 2: Work Mode (Simpel) */}
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-200">
            {job.workMode}
          </span>
        </div>

        {/* FOOTER: Gaji & Tanggal */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Salary</span>
            {/* Panggil Utility Function Currency di sini */}
            <span className="text-sm font-semibold text-gray-900">
              {formatIDR(job.salary.min, job.salary.isHidden)}
              {!job.salary.isHidden && ` - ${formatIDR(job.salary.max)}`}
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs text-gray-400">Posted</span>
            {/* Panggil Utility Function Date di sini */}
            <p className="text-xs text-gray-600 font-medium">
              {formatDate(job.postedAt)}
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
};