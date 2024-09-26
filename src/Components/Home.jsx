import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExternalLink } from 'lucide-react';
import logo from './logo.jpg'

const Home = () => {
  const portfolio = {
    name: "Dr. Gaurav Singal",
    title: "Assistant Professor in Computer Science and Engineering",
    about: `
      Dr Gaurav Singal is an Assistant Professor in Computer Science and Engineering Department at Netaji Subhas University of Technology, (formerly known as NSIT), Delhi, India. He obtained his Ph.D. and M. Tech in Computer Science Engineering department from Malaviya National Institute of Technology Jaipur. He received the total research grants approx 55L from various agencies such as SERB, DST, and DBT on women security, IoT Security and Assistive devices. He is actively working in research and teaching from last 11 years and published number of reputed conferences and journals. He is the member of scientific society such as IEEE, ACM. He is a certified as a NVIDIA Deep learning institute ambassador.
    `,
    researchInterests: `
      Wireless Ad hoc Networking, Internet of Things, Edge computing, Machine learning, Robotic Process Automation, Deep leaning, Deep Reinforcement Learning, Drones, Wireless Sensor Networks, Software Defined Networks (SDN).
    `,
    internshipInfo: `
      For internship, interested students can mail to me directly in the above research areas. For good students, our team also provide minimal funds to support the candidate. For PHD program, we have institue scholarship.
    `,
    specialIssues: [
      {
        title: "Compression of Deep Learning Models for Resource-Constrained Devices",
        journal: "Computational Intelligence and Neuroscience",
        impactFactor: 3.5
      },
      {
        title: "Human Disease Classification and Segmentation using Machine and Deep Learning",
        journal: "Journal of Healthcare Engineering",
        impactFactor: 2.7
      }
    ],
    contact: {
      email: "gaurav.singal@nsut.ac.in", 
      phone: "+91 9680054031",
      location: "Delhi, India"
    },
    webProfiles: [
      { name: "ACM Member", url: "#" },
      { name: "IEEE Senior Member", url: "#" },
      { name: "Google Scholar", url: "https://scholar.google.com/citations?user=XXXXXXXX" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/gauravsingal789" },
      { name: "Twitter", url: "https://twitter.com/gaurav_singal" },
      { name: "Scopus ID", url: "#" },
      { name: "DBLP", url: "#" },
      { name: "ResearchGate", url: "#" },
      { name: "ORCID", url: "https://orcid.org/0000-0001-7570-6292" }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardContent className="flex flex-col md:flex-row items-center p-6">
          <Avatar className="w-32 h-32 md:w-48 md:h-48 md:mr-6 mb-4 md:mb-0">
            <AvatarImage src={logo} alt={portfolio.name} />
            <AvatarFallback>{portfolio.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{portfolio.name}</h1>
            <p className="text-xl text-muted-foreground">{portfolio.title}</p>
            <div className="mt-4">
              <p><strong>Email:</strong> {portfolio.contact.email}</p>
              <p><strong>Phone:</strong> {portfolio.contact.phone}</p>
              <p><strong>Location:</strong> {portfolio.contact.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{portfolio.about}</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Research Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{portfolio.researchInterests}</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Web Profiles and Memberships</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {portfolio.webProfiles.map((profile, index) => (
              <li key={index} className="flex items-center">
                <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                  {profile.name}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Internship Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{portfolio.internshipInfo}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Special Issues (Closed)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {portfolio.specialIssues.map((issue, index) => (
              <li key={index} className="mb-2">
                <strong>{issue.title}</strong>, in {issue.journal}, IF: {issue.impactFactor}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;