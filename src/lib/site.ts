export const siteName = 'Austin & Austin';
export const siteTag = 'Attorneys at law';
export const phoneDisplay = '(619) 588-2828';
export const phoneHref = 'tel:+16195882828';
export const established = 1983;
export const siteMeta = `Attorneys at law · El Cajon · established ${established}`;
export const homeDisclaimer =
  'Attorney advertising. The information on this website is for general information only and does not create an attorney-client relationship.';

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

export const practiceAreas = [
  {
    href: 'estate-planning',
    label: 'Estate planning',
    navLabel: 'Estate planning',
    summary: 'Wills, trusts, power of attorney, advance health care directives',
  },
  {
    href: 'probate-trust-administration',
    label: 'Probate',
    navLabel: 'Probate',
    summary: 'Probate, trust administration, accounting',
  },
  {
    href: 'personal-injury',
    label: 'Personal injury',
    navLabel: 'Personal injury',
    summary: 'Accidents, insurance, wrongful death claims',
  },
  {
    href: 'corporate-business-law',
    label: 'Corporate and business law',
    navLabel: 'Corporate',
    summary: 'Formation, contracts, litigation, dissolution',
  },
] as const;

export const attorneys = [
  {
    href: 'albert-john-austin-esq',
    name: 'Albert John Austin, Esq.',
    navLabel: 'John',
    role: 'Founding member',
    photo: 'photos/john.jpg',
    education: ['California Western School of Law', 'San Diego State University'],
  },
  {
    href: 'julia-austin-solaegui-esq',
    name: 'Julia Austin Solaegui, Esq.',
    navLabel: 'Julia',
    role: 'Estate planning',
    photo: 'photos/julia.jpg',
    education: ['University of California at Santa Barbara', 'California Western School of Law'],
  },
] as const;

export const navItems = [
  { href: 'attorneys', label: 'Attorneys' },
  { href: 'practice-areas', label: 'Practice areas' },
  { href: 'blog', label: 'Blog' },
  { href: 'contact', label: 'Contact' },
] as const;

const practiceRoutes = ['practice-areas', ...practiceAreas.map((area) => area.href)];
const attorneyRoutes = ['attorneys', ...attorneys.map((attorney) => attorney.href)];

export function isCurrentPath(pathname: string, href: string): boolean {
  const current = pathname.replace(/\/$/, '') || withBase('').replace(/\/$/, '');
  const target = withBase(href).replace(/\/$/, '');
  if (href === '') {
    return current === target || current.endsWith('/austin-and-austin');
  }
  if (href === 'practice-areas') {
    return practiceRoutes.some((route) => {
      const practiceTarget = withBase(route).replace(/\/$/, '');
      return current === practiceTarget || current.startsWith(`${practiceTarget}/`);
    });
  }
  if (href === 'attorneys') {
    return attorneyRoutes.some((route) => {
      const attorneyTarget = withBase(route).replace(/\/$/, '');
      return current === attorneyTarget || current.startsWith(`${attorneyTarget}/`);
    });
  }
  return current === target || current.startsWith(`${target}/`);
}
