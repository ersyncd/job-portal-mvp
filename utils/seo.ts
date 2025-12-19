import { Job } from "@/types/job";

function generateJobSchema(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: job.company.name,
      value: job.id,
    },
    datePosted: job.postedAt,
    validThrough: job.closingDate,
    employmentType: job.jobType,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company.name,
      logo: job.company.logoUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'ID',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salary.currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: 'MONTH',
      },
    },
  };
}

export { generateJobSchema };