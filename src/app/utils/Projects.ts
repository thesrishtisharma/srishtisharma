import { signal } from "@angular/core";

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  isOpen: boolean;
  link: string;
  linkText: string;
}

export const projects = signal<Project[]>([
    {
      title: 'Portofolio Website',
      category: 'Rank-S Mission',
      description: 'My professional portfolio website built with Angular, showcasing my skills, projects, and experience in a visually appealing and interactive manner. Currently v6 (anime based theme) is deployed.',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Bootstrap'],
      isOpen: true,
      link: '#',
      linkText: 'Go →'
    },
    {
      title: 'Packing Slip Generator',
      category: 'Rank-S Mission',
      description: 'An interactive modular web application engineered with custom components, dynamic age calculations, and responsive layouts.',
      tech: ['Java', 'Spring', 'Rest APIs', 'Oracle Cloud'],
      isOpen: false,
      link: 'https://github.com',
      linkText: 'Go →'
    },
    {
      title: 'SC Communication',
      category: 'Rank-A Mission',
      description: 'An angular based website that uses Google Cloud Storage and Firebase for storing and retrieving its unstructured data to demonstrate their work.',
      tech: ['Angular', 'Google APIs', 'GCS'],
      isOpen: false,
      link: 'https://sccommunication.vercel.app',
      linkText: 'Go →'
    },
    {
      title: 'Swagger - Spring - Google APIs',
      category: 'Rank-B Mission',
      description: 'A swagger rest API client based on Google cloud storage APIs. And a data collector services that uses the APIs and stores the specific data to database. Only users having access to the particular endpoint can now access the new API that gives result from the database.',
      tech: ['Swagger', 'Spring', 'Google APIs'],
      isOpen: false,
      link: 'https://github.com/thesrishtisharma/Swagger-SpringBoot-GoogleAPI',
      linkText: 'Go →'
    },
    {
      title: 'Anaplan Connector',
      category: 'Rank-B Mission',
      description: 'An interoperability connector that connects any http client (source system) with Anaplan with the help of Google Cloud Platform (Approaches: Real time & Bulk Data).',
      tech: ['Swagger', 'Spring', 'GCP', 'Angular'],
      isOpen: false,
      link: 'https://github.com',
      linkText: 'Go →'
    },
    {
      title: 'Restaurant App - UX Design',
      category: 'Rank-B Mission',
      description: 'UX Design project for ordering food from design. Supported devices: mobile',
      tech: ['UX Design', 'Figma'],
      isOpen: false,
      link: 'https://www.figma.com/proto/s0dNwxGXAIVK7nsm3N48r3/Google-UX-Invitation-Project?node-id=50-124&scaling=scale-down&page-id=46%3A2&starting-point-node-id=46%3A4',
      linkText: 'Go →'
    },
    {
      title: 'Recipe Guide - UX Design',
      category: 'Rank-B Mission',
      description: 'UX Design project for preparing food via recipes tutorials. Supported devices: laptop/desktop',
      tech: ['UX Design', 'Adobe XD'],
      isOpen: false,
      link: 'https://xd.adobe.com/view/297881c5-d1f9-40a9-91e0-4ebc43a7f448-7c2b/',
      linkText: 'Go →'
    }
  ]);