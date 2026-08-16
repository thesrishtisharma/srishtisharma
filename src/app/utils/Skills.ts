import { signal } from "@angular/core";

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories = signal<SkillCategory[]>([
    { title: 'Frontend', skills: ['Angular', 'TypeScript', 'Tailwind', 'Bootstrap'] },
    { title: 'Backend', skills: ['Java', 'Spring', 'Spring Boot', 'Spring Security'] },
    { title: 'Tools & Core', skills: ['RxJS', 'Git', 'REST APIs', 'PostgreSQL', 'IBM DB2', 'GCP', 'K8S'] }
  ]);