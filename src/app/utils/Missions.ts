export interface Mission {
  id: string;
  title: string;
  company: string;
  rank: `${string}-RANK`;
  village: string;
  duration: string;
  description: string;
  status: 'COMPLETED' | 'ACTIVE';
  coordinates: { x: number; y: number }; // Percentage offsets for map positioning
}

export const missions: Mission[] = [
    {
      id: 'm1',
      title: 'Software Engineer',
      company: 'HBK - Hottinger Brüel & Kjær',
      rank: 'D-RANK',
      village: 'Chennai, Tamil Nadu',
      duration: '2026 - Present',
      description: `
        • Developing and scaling Aqira, a cloud native app designed for sensor testing and engineering analysis
        • Building robust web-based solution that enables aeronautical and automotive leaders to process & visualise volumes of data
      `,
      status: 'ACTIVE',
      coordinates: { x: 80, y: 67 }
    },
    {
      id: 'm2',
      title: 'Application Developer',
      company: 'IBM',
      rank: 'C-RANK',
      village: 'Bangalore, Karnataka',
      duration: '2024 - 2026',
      description: `
        • Designed and developed microservices and front-end of the application
        • Developed additional libraries that can be imported in other microservices as jars
        • Managed database, maintained code versions using Git, 
        • Upgraded from Java 8 to Java 21 
        • Migrated microservices from J2EE to Spring Boot Applications
        • Prepared HLDs and LLDs, and integrated APIs to enhance application performance
        `,
      status: 'COMPLETED',
      coordinates: { x: 40, y: 58 }
    },
    {
      id: 'm3',
      title: 'Integration Architect',
      company: 'Wipro',
      rank: 'B2-RANK',
      village: 'Bangalore, Karnataka',
      duration: '2021 - 2023',
      description: `
        • Handled integration layer of the application architecture
        • Created sequence diagrams using Plant UML explaining step by step consumption of the APIs
        • Developed a product (POC) to connect any HTTP Client with Anaplan (SaaS)  via Google Cloud Platform
        • Also created high level design and low level design documentations for the connector.
      `,
      status: 'COMPLETED',
      coordinates: { x: 21, y: 45 }
    },
    {
      id: 'm3',
      title: 'Senior Technical Support Engineer',
      company: 'Wipro',
      rank: 'B1-RANK',
      village: 'Bangalore, Karnataka',
      duration: '2019 - 2021',
      description: `
        • Worked with Dell EMC’s CAS Storage (Centera – Linux server) for customer channel and escalations
        • Responsible for providing root case analysis for any software related issue
        • Helped colleagues with their case reviews and technical guidance along with providing knowledge transfers
      `,
      status: 'COMPLETED',
      coordinates: { x: 16, y: 43 }
    },
    {
      id: 'm4',
      title: 'Summer Intern - Development',
      company: 'Ministry of Statistics & Programme Implementation',
      rank: 'A-RANK',
      village: 'R K Puram, New Delhi',
      duration: '2018 - 2018',
      description: `
        • Redesigned and developed the internal website of MoSPI.
        • Documented everything under the report for team to continue with the changes if required in future.
      `,
      status: 'COMPLETED',
      coordinates: { x: 37, y: 15 }
    }
  ];