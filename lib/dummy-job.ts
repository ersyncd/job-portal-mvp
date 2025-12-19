import { Job } from '@/types/job';

export const dummyJobs: Job[] = [
  {
    id: "1",
    slug: "senior-frontend-engineer-gojek",
    title: "Senior Frontend Engineer",
    company: {
      name: "Gojek",
      logoUrl: "https://ui-avatars.com/api/?name=Gojek&background=random",
      websiteUrl: "https://gojek.com"
    },
    location: "Jakarta Selatan",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 15000000,
      max: 25000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Kami mencari Frontend Engineer yang jago Next.js untuk tim GoFood.</p><p>Tanggung jawab: Optimasi performa web.</p>",
    requirements: [
      "Menguasai React.js & Next.js",
      "Paham TypeScript secara mendalam",
      "Minimal pengalaman 4 tahun"
    ],
    postedAt: "2023-12-18T09:00:00Z",
    closingDate: "2024-01-18T09:00:00Z",
    isFeatured: true,
    applyUrl: "https://career.gojek.com"
  },
  {
    id: "2",
    slug: "laravel-backend-developer-remote",
    title: "Laravel Backend Developer",
    company: {
      name: "StartUp Maju Jalan",
      logoUrl: "https://ui-avatars.com/api/?name=StartUp+Maju&background=random",
    },
    location: "Remote (Indonesia)",
    workMode: "REMOTE",
    jobType: "FREELANCE",
    salary: {
      min: 8000000,
      max: 12000000,
      currency: "IDR",
      isHidden: true
    },
    description: "<p>Dibutuhkan backend dev untuk bantu migrasi legacy code ke Laravel 10.</p>",
    requirements: [
      "Expert di Laravel & MySQL",
      "Bisa membuat REST API yang aman",
      "Disiplin kerja remote"
    ],
    postedAt: "2023-12-17T14:00:00Z",
    closingDate: "2023-12-30T00:00:00Z",
    isFeatured: false,
    applyUrl: "mailto:hrd@majujalan.com"
  },
  {
    id: "3",
    slug: "devops-engineer-tokopedia",
    title: "DevOps Engineer",
    company: {
      name: "Tokopedia",
      logoUrl: "https://ui-avatars.com/api/?name=Tokopedia&background=random",
      websiteUrl: "https://tokopedia.com"
    },
    location: "Jakarta Pusat",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 18000000,
      max: 28000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Mencari DevOps Engineer untuk infrastruktur cloud kami.</p>",
    requirements: [
      "Pengalaman dengan Kubernetes & Docker",
      "AWS atau GCP certified",
      "Minimal 3 tahun pengalaman"
    ],
    postedAt: "2023-12-19T10:00:00Z",
    closingDate: "2024-01-20T00:00:00Z",
    isFeatured: true,
    applyUrl: "https://careers.tokopedia.com"
  },
  {
    id: "4",
    slug: "mobile-developer-bukalapak",
    title: "Mobile Developer (React Native)",
    company: {
      name: "Bukalapak",
      logoUrl: "https://ui-avatars.com/api/?name=Bukalapak&background=random",
      websiteUrl: "https://bukalapak.com"
    },
    location: "Bandung",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 12000000,
      max: 20000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Developer React Native untuk aplikasi mobile Bukalapak.</p>",
    requirements: [
      "Mahir React Native",
      "Pengalaman dengan Firebase",
      "Minimal 2 tahun"
    ],
    postedAt: "2023-12-16T08:00:00Z",
    closingDate: "2024-01-15T00:00:00Z",
    isFeatured: false,
    applyUrl: "https://careers.bukalapak.com"
  },
  {
    id: "5",
    slug: "fullstack-developer-startup",
    title: "Fullstack Developer",
    company: {
      name: "TechStart Indonesia",
      logoUrl: "https://ui-avatars.com/api/?name=TechStart&background=random",
    },
    location: "Yogyakarta",
    workMode: "REMOTE",
    jobType: "FULL_TIME",
    salary: {
      min: 10000000,
      max: 16000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Fullstack developer untuk startup fintech kami.</p>",
    requirements: [
      "React & Node.js",
      "PostgreSQL knowledge",
      "Minimal 2 tahun"
    ],
    postedAt: "2023-12-15T11:00:00Z",
    closingDate: "2024-01-10T00:00:00Z",
    isFeatured: false,
    applyUrl: "https://techstart.com/careers"
  },
  {
    id: "6",
    slug: "data-scientist-grab",
    title: "Data Scientist",
    company: {
      name: "Grab",
      logoUrl: "https://ui-avatars.com/api/?name=Grab&background=random",
      websiteUrl: "https://grab.com"
    },
    location: "Jakarta Selatan",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 20000000,
      max: 32000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Data Scientist untuk analytics platform Grab.</p>",
    requirements: [
      "Python & SQL expert",
      "Machine Learning experience",
      "Minimal 3 tahun"
    ],
    postedAt: "2023-12-14T09:00:00Z",
    closingDate: "2024-01-25T00:00:00Z",
    isFeatured: true,
    applyUrl: "https://careers.grab.com"
  },
  {
    id: "7",
    slug: "qa-engineer-blibli",
    title: "QA Engineer",
    company: {
      name: "Blibli",
      logoUrl: "https://ui-avatars.com/api/?name=Blibli&background=random",
      websiteUrl: "https://blibli.com"
    },
    location: "Jakarta Barat",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 9000000,
      max: 15000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>QA Engineer untuk testing aplikasi e-commerce.</p>",
    requirements: [
      "Automation testing",
      "Selenium & Cypress",
      "Minimal 2 tahun"
    ],
    postedAt: "2023-12-13T07:00:00Z",
    closingDate: "2024-01-12T00:00:00Z",
    isFeatured: false,
    applyUrl: "https://blibli.com/careers"
  },
  {
    id: "8",
    slug: "backend-engineer-shopee",
    title: "Backend Engineer (Go)",
    company: {
      name: "Shopee",
      logoUrl: "https://ui-avatars.com/api/?name=Shopee&background=random",
      websiteUrl: "https://shopee.co.id"
    },
    location: "Jakarta Selatan",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 16000000,
      max: 26000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Backend Engineer Go untuk microservices Shopee.</p>",
    requirements: [
      "Go programming language",
      "Microservices architecture",
      "Minimal 3 tahun"
    ],
    postedAt: "2023-12-12T10:00:00Z",
    closingDate: "2024-01-22T00:00:00Z",
    isFeatured: true,
    applyUrl: "https://careers.shopee.co.id"
  },
  {
    id: "9",
    slug: "frontend-designer-agora",
    title: "Frontend Engineer & Designer",
    company: {
      name: "Agora Indonesia",
      logoUrl: "https://ui-avatars.com/api/?name=Agora&background=random",
    },
    location: "Surabaya",
    workMode: "REMOTE",
    jobType: "FULL_TIME",
    salary: {
      min: 11000000,
      max: 18000000,
      currency: "IDR",
      isHidden: true
    },
    description: "<p>Frontend Engineer dengan design skills untuk UI/UX.</p>",
    requirements: [
      "React & Vue.js",
      "Figma proficiency",
      "Minimal 2 tahun"
    ],
    postedAt: "2023-12-11T14:00:00Z",
    closingDate: "2024-01-08T00:00:00Z",
    isFeatured: false,
    applyUrl: "https://agora.id/careers"
  },
  {
    id: "10",
    slug: "cloud-architect-bca",
    title: "Cloud Architect",
    company: {
      name: "Bank BCA",
      logoUrl: "https://ui-avatars.com/api/?name=BCA&background=random",
      websiteUrl: "https://bca.co.id"
    },
    location: "Jakarta Pusat",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 25000000,
      max: 40000000,
      currency: "IDR",
      isHidden: true
    },
    description: "<p>Cloud Architect untuk transformasi digital BCA.</p>",
    requirements: [
      "AWS & Azure certified",
      "Enterprise architecture",
      "Minimal 5 tahun"
    ],
    postedAt: "2023-12-10T09:00:00Z",
    closingDate: "2024-02-01T00:00:00Z",
    isFeatured: true,
    applyUrl: "https://bca.co.id/careers"
  },
  {
    id: "11",
    slug: "security-engineer-bntech",
    title: "Security Engineer",
    company: {
      name: "BN Technology",
      logoUrl: "https://ui-avatars.com/api/?name=BNTech&background=random",
    },
    location: "Remote",
    workMode: "REMOTE",
    jobType: "FULL_TIME",
    salary: {
      min: 17000000,
      max: 27000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Security Engineer untuk penetration testing dan security audit.</p>",
    requirements: [
      "Cybersecurity knowledge",
      "OWASP familiarity",
      "Minimal 3 tahun"
    ],
    postedAt: "2023-12-09T11:00:00Z",
    closingDate: "2024-01-28T00:00:00Z",
    isFeatured: false,
    applyUrl: "https://bntech.io/careers"
  },
  {
    id: "12",
    slug: "product-manager-gojek",
    title: "Product Manager",
    company: {
      name: "Gojek",
      logoUrl: "https://ui-avatars.com/api/?name=Gojek&background=random",
      websiteUrl: "https://gojek.com"
    },
    location: "Jakarta Selatan",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 19000000,
      max: 30000000,
      currency: "IDR",
      isHidden: false
    },
    description: "<p>Product Manager untuk GoFood vertical.</p>",
    requirements: [
      "Product strategy experience",
      "Data analytics",
      "Minimal 4 tahun"
    ],
    postedAt: "2023-12-08T13:00:00Z",
    closingDate: "2024-02-05T00:00:00Z",
    isFeatured: true,
    applyUrl: "https://career.gojek.com"
  }
];