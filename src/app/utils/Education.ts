import { signal } from "@angular/core";

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const educationList = signal<EducationItem[]>([
    {
      degree: 'M.Tech in Computing Systems & Infrastructure',
      institution: 'Birla Institute of Technology & Science, Pilani',
      period: '2019 — 2023'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Vivekananda Institute of Professional Studies (Affiliated to GGSIP University), Delhi',
      period: '2016 — 2019'
    }
]);