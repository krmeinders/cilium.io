import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import SEO from 'components/shared/seo';
import CNCFLogo from 'icons/cncf.inline.svg';
import EccoLogo from 'icons/ecco.inline.svg';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import Form3Logo from 'icons/logo-form3.inline.svg';
import WildLifeLogo from 'icons/logo-wild-life.inline.svg';
import SicrediLogo from 'icons/sicredi.inline.svg';
import AstronautBee from 'images/pages/usecase/astronaut-bee.png';
import ClusterMeshImage1 from 'images/pages/usecase/clustermesh-1.png';
import ClusterMeshImage2 from 'images/pages/usecase/clustermesh-2.png';
import ClusterMeshImage3 from 'images/pages/usecase/clustermesh-3.png';
import ClusterMeshImage4 from 'images/pages/usecase/clustermesh-4.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Cluster Mesh',
  category: 'Networking',
  tagline: 'Unleashing the power of multi-cluster networking with Cilium Cluster Mesh',
  subHeading: 'Seamless connectivity for multiple Kubernetes clusters',
  description:
    'Multi-cluster Kubernetes setups are often adopted for reasons like fault isolation, scalability, and geographical distribution. This approach can lead to networking complexities. Traditional networking models, in this context, struggle with service discovery, network segmentation, policy enforcement, and load balancing across clusters. Additionally, managing security protocols and policies across multiple environments can be a challenging endeavour due to the distributed nature of services.',
  imageSrc: AstronautBee,
  imageAlt: 'Astronaut Bee',
  imageWidth: 350,
  imageHeight: 350,
};

const sectionContent1 = {
  title: "Cluster Mesh - Cilium's Multi-Cluster Networking Implementation",
  description:
    'Cilium Cluster Mesh allows you to connect the networks of multiple clusters in such as way that pods in each cluster can discover and access services in all other clusters of the mesh, provided all the clusters run Cilium as their CNI. This allows effectively joining multiple clusters into a large unified network, regardless of the Kubernetes distribution or location each of them is running.',
  videoSrc: 'https://www.youtube.com/embed/1fsXtqg4Pkw',
};

const sectionContent2 = {
  title: 'High Availability and Fault Tolerance',
  description:
    'Cluster Mesh enhances your services high availability and fault tolerance. It supports the operation of Kubernetes clusters in multiple regions or availability zones. If resources become temporarily unavailable, are misconfigured in one cluster, or offline for upgrades, it enables failover to other clusters, ensuring your services remain accessible at all times.',
  imageSrc: ClusterMeshImage1,
  imageWidth: 624,
  imageHeight: 329,
  imageAlt: 'multi-cluster illustration',
};

const sectionContent3 = {
  title: 'Transparent Service Discovery',
  description:
    'Cluster Mesh automates service discovery across your Kubernetes clusters. Using standard Kubernetes services, it automatically merges services with identical names and namespaces across clusters into a global service. This means your applications can discover and interact with services, irrespective of the cluster they reside in, greatly simplifying cross-cluster communication.  ',
  imageSrc: ClusterMeshImage2,
  imageWidth: 624,
  imageHeight: 335,
  imageAlt: 'multi-cluster illustration',
  imageRight: false,
};

const sectionContent4 = {
  title: 'Effortless Pod IP Routing',
  description:
    'Cluster Mesh is able to handle Pod IP routing across multiple Kubernetes clusters at native performance. By using either tunneling or direct-routing, it circumvents the need for any gateways or proxies. This allows your pods to communicate across clusters seamlessly, enhancing the overall efficiency of your microservice architecture.  ',
  videoSrc: 'https://www.youtube.com/embed/VBOONHW65NU',
};

const sectionContent5 = {
  title: 'Shared Services Across Clusters',
  description:
    'Cluster Mesh enables sharing of services such as secrets management, logging, monitoring, or DNS between all clusters. This reduces operational overhead, simplifies management, and maintains isolation between tenant clusters.',
  imageSrc: ClusterMeshImage3,
  imageWidth: 624,
  imageHeight: 409,
  imageAlt: 'shared services in multi-cluster illustration',
  imageRight: false,
};

const sectionContent6 = {
  title: 'Uniform Network Policy Enforcement',
  description:
    "Cluster Mesh extends Cilium's Layer 3-7 network policy enforcement to all clusters in the mesh. It standardizes the application of network policies, ensuring a consistent security approach across your entire Kubernetes deployment, irrespective of the number of clusters involved.",
  imageSrc: ClusterMeshImage4,
  imageWidth: 624,
  imageHeight: 362,
  imageAlt: 'multi-cluster Uniform Network Policy Enforcement',
};

const testimonials = [
  {
    logo: CNCFLogo,
    title: 'Most mature multi cluster application management technology',
    CTAs: [
      {
        CTAtext: 'Review The Survey',
        url: 'https://www.cncf.io/wp-content/uploads/2024/11/CNCF-Tech-Radar-Custom-Survey-Research-Insights.pdf',
      },
    ],
    description:
      'In the technology landscape radar survey conducted by the Cloud Native Computing Foundation(CNCF), Cilium was voted the most mature multi cluster application management technology. Cilium received the highest usefulness and maturity score, cementing its position as a technology that the community considers both the most useful and mature.',
  },
  {
    logo: EccoLogo,
    title: 'Transforming Networking with Cilium at Ecco',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/ecco/',
      },
    ],
    description:
      'Cilium’s documentation made it clear what we needed to do. It wasn’t like other solutions where you’re stuck figuring out why the mesh isn’t connecting. Cluster mesh enabled us to reduce storage costs by 50% and latency for critical operations by 33%.',
    quote: true,
    person: ' George Zubrienko - Data & AI lead Platform Engineer, Ecco',
  },

  {
    logo: Form3Logo,
    title: 'Multi-cluster networking with Cilium at Form3',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://www.youtube.com/watch?v=vKgRf4OzTIE',
      },
      {
        CTAtext: 'Read Case Study',
        url: 'https://www.cncf.io/case-studies/form3/',
      },
    ],
    description:
      'We have payment services deployed on GCP, Azure, and AWS on their managed Kubernetes offerings. Due to regulatory requirements, we also have FPS services deployed on bare metal Kubernetes clusters across two data centers clustered using Cilium Cluster Mesh. Our engineers only need to support and understand only one technology. Cilium is the company standard for networking and security, it has allowed us to secure our environment and gives us the possibility to merge our cloud services in the future.',
    quote: true,
    person: 'Adelina Simion -  Technology Evangelist, Form3',
  },
  {
    title: 'Building ClickHouse Cloud From Scratch in a Year',
    logo: ClickHouseLogo,
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://www.cncf.io/case-studies/clickhouse/',
      },
    ],
    description:
      'We didn’t plan to use ClusterMesh in the beginning, but we later realized that we have another great feature that we leverage for Ingress.',
    quote: true,
    person: 'Timur Solodovnikov, SRE, ClickHouse',
  },
  {
    logo: WildLifeLogo,
    title: 'How Wildlife Studios built a Global Multi Cluster Gaming Infrastructure with Cilium',
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform/',
      },
    ],
    description:
      'Cilium Cluster Mesh configuration was easy, requiring only basic VPC peering, routing tables, and firewalling setup. We directed Cilium to the etcd endpoints in the other clusters, but it now supports CRD-backed IPAM mode. We have deployed Cilium in over 20 Kubernetes production clusters, with at least 3 clusters per game in the same configuration. This infrastructure handles over 50k client requests per second and supports millions of daily active users.',
    quote: true,
    person: 'Luan Guimarães -  Site Reliability Engineer, Wildlife Studios',
  },
  {
    logo: SicrediLogo,
    title: 'Strengthening Security Across Distributed Kubernetes Clusters',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://youtu.be/MSqI-gBiCrc?si=ktIHXkxhuHpuwC6a',
      },
    ],
    description:
      "Cilium Cluster Mesh gave us possibilities that we didn't have before. We can run the same application across our data centers and AWS. It provides us with a consistent networking experience wherever we need to go. Applications in different clusters can communicate with each other without needing to go through an ingress controller. We are expanding this capability for more applications because this value is already proven. Cluster Mesh works, it's fast, and it's reliable",
    quote: true,
    person: 'Matheus Morais - IT Infrastructure Analyst, Sicredi',
  },
  {
    logo: EccoLogo,
    title: ' High Performance Data Backend for Your AI/ML with MinIO and Cilium Cluster Mesh',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://www.youtube.com/watch?v=Ennjmo9TFaM',
      },
    ],
    description:
      'Cilium Cluster mesh allows bypass using a load balancer; instead, we use direct node-to-node communication, and we can have transparent service discovery. Each application connects to the local service gateway instead of an ingress. This approach creates network disruption tolerance. If one of these clusters dies, the error is not propagated across all the clusters.',
    quote: true,
    person: ' Vitalii Savitskii - Software Engineer, Ecco',
  },
];

const ClusterMeshPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <FeatureSection {...sectionContent4} />
    <FeatureSection {...sectionContent5} />
    <FeatureSection {...sectionContent6} />
    <UseCaseCard
      heading="Who’s using Cilium for Multi Cluster networking?"
      testimonials={testimonials}
    />
    <JoinUsCard />
  </MainLayout>
);

export default ClusterMeshPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
