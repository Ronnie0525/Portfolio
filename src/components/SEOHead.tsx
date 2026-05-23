import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schemaType?: 'home' | 'about' | 'service' | 'portfolio' | 'project' | 'proposals' | 'contact' | 'default';
  serviceName?: string;
  serviceDescription?: string;
  projectSchema?: {
    name: string;
    description: string;
    url: string;
  };
  faqItems?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const siteUrl = 'https://ronniebalonon.com';

const sharedSocialLinks = [
  'https://www.instagram.com/ronnieeee25/',
  'https://www.facebook.com/ronnieeee25',
  'https://www.tiktok.com/@ronnie.balonon',
];

const sharedContactPoints = [
  {
    '@type': 'ContactPoint',
    telephone: '+971543763091',
    contactType: 'sales',
    availableLanguage: ['English', 'Arabic'],
  },
  {
    '@type': 'ContactPoint',
    email: 'ronniebalonon1996@gmail.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Ronnie Balonon Jr.',
  jobTitle: 'Graphic Designer & AI Creative',
  description:
    'Dubai-based graphic designer with strong knowledge in Artificial Intelligence. Specializing in social media management, UI/UX & web design, photography, and video editing.',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/favicon.png`,
  },
  image: `${siteUrl}/og-image.jpg`,
  email: 'ronniebalonon1996@gmail.com',
  telephone: '+971543763091',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  sameAs: sharedSocialLinks,
  contactPoint: sharedContactPoints,
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#service`,
  name: 'Ronnie Balonon Jr. — Graphic Designer & AI Creative',
  description:
    'Freelance graphic designer based in Dubai with strong AI knowledge. Social media management, UI/UX & web design, photography, and video editing.',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/favicon.png`,
  email: 'ronniebalonon1996@gmail.com',
  telephone: '+971543763091',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2048',
    longitude: '55.2708',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  sameAs: sharedSocialLinks,
  contactPoint: sharedContactPoints,
};

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = `${siteUrl}/og-image.jpg`,
  ogType = 'website',
  noIndex = false,
  schemaType = 'default',
}: SEOHeadProps) => {
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullTitle = title.length > 50 ? title : `${title} | Ronnie Balonon Jr. Dubai`;

  const dubaiKeywords =
    'Dubai, UAE, graphic designer Dubai, AI designer Dubai, UI UX designer Dubai, social media manager Dubai, photographer Dubai, video editor Dubai, Ronnie Balonon';
  const allKeywords = keywords ? `${keywords}, ${dubaiKeywords}` : dubaiKeywords;
  const schemas = schemaType === 'home' ? [organizationSchema, localBusinessSchema] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Ronnie Balonon Jr." />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <link rel="canonical" href={fullCanonicalUrl} />

      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      <meta name="language" content="en" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="3 days" />
      <meta name="rating" content="general" />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Ronnie Balonon Jr. Dubai`} />
      <meta property="og:site_name" content="Ronnie Balonon Jr." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_AE" />
      <meta property="og:locale:alternate" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - Ronnie Balonon Jr.`} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
