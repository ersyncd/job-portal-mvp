import { db } from '@/db';
import { jobs } from '@/db/schema';
import { Job } from '@/types/job';
import { count, desc, ilike } from 'drizzle-orm';

interface getJobsProps {
  query?: string;
  page?: number;
  limit?: number;
}

interface getJobResPorps {
  data: Job[];
  totalPages: number;
}

export const getJobs = async ({
  query = "",
  page = 1,
  limit = 9,
}: getJobsProps): Promise<getJobResPorps> => {
  try {
    const safePage = Math.max(1, page);
    const safeSize = Math.min(50, limit);
    const offset = (safePage - 1) * safeSize;
    const whereCondition = query ? ilike(jobs.title, `%${query}%`) : undefined;

    const dataPromise = await db
      .select()
      .from(jobs)
      .where(whereCondition)
      .limit(safeSize)
      .offset(offset)
      .orderBy(desc(jobs.postedAt));

    const countPromise = db
      .select({ value: count() })
      .from(jobs)
      .where(whereCondition);

    const [data, totalResult] = await Promise.all([dataPromise, countPromise]);

    const totalPages = Math.ceil(totalResult[0].value / safeSize);

    return {
      data,
      totalPages,
    };
  } catch (error) {
    console.log("[SERVICE_ERROR]: ", error);
    throw error;
  }
}