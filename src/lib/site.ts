export const siteName = 'Austin & Austin';
export const siteTag = 'Attorneys at law';
export const phoneDisplay = '(619) 588-2828';
export const phoneHref = 'tel:+16195882828';
export const established = 1983;

export const offices = [
  {
    name: 'El Cajon',
    lines: ['275 E. Douglas Ave., Ste. 103', 'El Cajon, CA 92020'],
    lat: 32.7936461,
    lng: -116.9590154,
  },
  {
    name: 'Ramona',
    lines: ['713 D Street', 'Ramona, CA 92065'],
  },
] as const;

export const disclaimer =
  'The information on this website is for general information purposes only and should not be taken as legal advice for any individual case or situation. The information on this website and receipt or viewing of this information is not intended to create, nor does it constitute an attorney-client relationship. We are licensed to practice law in the State of California serving San Diego County, East County San Diego, Imperial County, San Bernardino County, Los Angeles County and Orange County, and locally, the cities of San Diego, Chula Vista, Ramona, Julian, Alpine, Bonita, La Mesa, Lemon Grove, Santee, Lakeside, Vista, El Cajon, Poway, Carmel Mountain Ranch, and Rancho Bernardo.';

export const attorneyAdvertising = 'Attorney advertising.';

export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, '');
  return clean ? `${base}${clean}` : base;
}

export const navItems = [
  { href: '', label: 'Home' },
  { href: 'attorneys', label: 'Attorneys' },
  { href: 'estate-planning', label: 'Estate planning' },
  { href: 'probate-trust-administration', label: 'Probate' },
  { href: 'personal-injury', label: 'Personal injury' },
  { href: 'corporate-business-law', label: 'Corporate' },
  { href: 'blog', label: 'Blog' },
  { href: 'contact', label: 'Contact' },
] as const;

export function isCurrentPath(pathname: string, href: string): boolean {
  const current = pathname.replace(/\/$/, '') || withBase('').replace(/\/$/, '');
  const target = withBase(href).replace(/\/$/, '');
  if (href === '') {
    return current === target || current.endsWith('/austin-and-austin');
  }
  return current === target || current.startsWith(`${target}/`);
}
