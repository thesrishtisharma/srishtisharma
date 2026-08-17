import { signal } from "@angular/core";

interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
}

export const certificatesList = signal<CertificateItem[]>([
    {
      title: 'Google AI Professional',
      issuer: 'Google - Coursera',
      year: '2026'
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Udemy',
      year: '2022'
    },
    {
      title: 'Google UX Design Professional',
      issuer: 'Coursera',
      year: '2022'
    },
    {
      title: 'Fullstack-Enterprise Java Professional',
      issuer: 'Wipro',
      year: '2021'
    }
]);