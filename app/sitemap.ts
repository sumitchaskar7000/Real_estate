export const dynamic = 'force-static';
import {properties,articles,siteUrl} from '@/lib/data';
export default function sitemap(){return ['','/about','/properties','/journal','/contact','/legal/privacy-policy','/legal/terms-of-use',...properties.map(p=>`/properties/${encodeURIComponent(p.slug)}`),...articles.map(a=>`/journal/${a.slug}`)].map(path=>({url:siteUrl+path}))}
