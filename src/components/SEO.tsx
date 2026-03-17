import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  url: string;
  image: string;
};

function setMetaTag(name: string, content: string) {
  let el = document.querySelector(`meta[name=\"${name}\"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setPropertyTag(property: string, content: string) {
  let el = document.querySelector(`meta[property=\"${property}\"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLinkRel(rel: string, href: string) {
  let el = document.querySelector(`link[rel=\"${rel}\"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data: object) {
  const scriptId = 'kodiscan-jsonld';
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    document.head.appendChild(script);
  }
  script.innerHTML = JSON.stringify(data);
}

export function SEO({ title, description, canonical, url, image }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Kodiscan');
    setLinkRel('canonical', canonical);

    setPropertyTag('og:type', 'website');
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    setPropertyTag('og:url', url);
    setPropertyTag('og:image', image);
    setPropertyTag('og:site_name', 'Kodiscan');

    setPropertyTag('twitter:card', 'summary_large_image');
    setPropertyTag('twitter:title', title);
    setPropertyTag('twitter:description', description);
    setPropertyTag('twitter:image', image);

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kodiscan',
      url: 'https://kodiscan.com',
      logo: 'https://kodiscan.com/src/assets/logo.png',
      description: 'Kodiscan provides medical equipment rental and leasing in Rwanda.',
      sameAs: [
        'https://www.facebook.com/kodiscan',
        'https://www.twitter.com/kodiscan',
        'https://www.linkedin.com/company/kodiscan'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+250-XXX-XXX-XXX',
        email: 'info@kodiscan.com'
      }
    });
  }, [title, description, canonical, url, image]);

  return null;
}
