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
      rank: 'S-RANK',
      village: 'Chennai, Tamil Nadu',
      duration: '2026 - Present',
      description: `
        - Developing and scaling Aqira - a cloud native application designed for sensor testing and engineering analysis
        - Building robust web-based solution that enables aeronautical and automotive leaders to process and visualise volumes of data
      `,
      status: 'ACTIVE',
      coordinates: { x: 30, y: 40 }
    },
    {
      id: 'm2',
      title: 'Application Developer',
      company: 'IBM',
      rank: 'D-RANK',
      village: 'Bangalore, Karnataka',
      duration: '2024 - 2026',
      description: `
        • Designed and developed microservices and front-end of the application
        • Developed additional libraries that can be imported in other microservices as jars
        • Managed database, maintained code versions using Git, 
        • Mock unit test cases for module functionalities
        • Upgraded from Java 8 to Java 21 
        • Migrated microservices from J2EE to Spring Boot Applications
        • Prepared HLDs and LLDs, and integrated APIs to enhance application performance
        `,
      status: 'COMPLETED',
      coordinates: { x: 70, y: 65 }
    },
    {
      id: 'm3',
      title: 'Integration Architect',
      company: 'Wipro',
      rank: 'C-RANK',
      village: 'Bangalore, Karnataka',
      duration: '2021 - 2023',
      description: `
        • Handled integration layer of the application architecture
        • Created sequence diagrams using Plant UML explaining step by step consumption of the APIs
        • Developed a product (POC) to connect any HTTP Client with Anaplan (SaaS)  via Google Cloud Platform
        • Also created high level design and low level design documentations for the connector.

        • Additionally worked as a Senior Technical Support Engineer (2019 - 2020)
            - Worked with Dell EMC’s CAS Storage (Centera – Linux server) for customer channel and escalations
            - Responsible for providing root case analysis for any software related issue
            - Helped colleagues with their case reviews and technical guidance along with providing knowledge transfers
      `,
      status: 'COMPLETED',
      coordinates: { x: 20, y: 75 }
    },
    {
      id: 'm3',
      title: 'Senior Technical Support Engineer',
      company: 'Wipro',
      rank: 'B-RANK',
      village: 'Bangalore, Karnataka',
      duration: '2019 - 2021',
      description: `
        • Worked with Dell EMC’s CAS Storage (Centera – Linux server) for customer channel and escalations
        • Responsible for providing root case analysis for any software related issue
        • Helped colleagues with their case reviews and technical guidance along with providing knowledge transfers
      `,
      status: 'COMPLETED',
      coordinates: { x: 23, y: 83 }
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
      coordinates: { x: 75, y: 25 }
    }
  ];