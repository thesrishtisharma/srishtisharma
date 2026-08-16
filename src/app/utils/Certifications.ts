import { signal } from "@angular/core";

interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
}

export const certificatesList = signal<CertificateItem[]>([
    {
      title: 'AI Professional',
      issuer: 'Google - Coursera',
      year: '2026'
    },
    {
      title: 'Java - Full Stack Developer',
      issuer: 'Wipro',
      year: '2025'
    },
    {
      title: 'UX Design Professional',
      issuer: 'Google - Coursera',
      year: '2024'
    }
]);