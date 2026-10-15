import {properties} from '@/lib/data';
import {Gallery,PropertyInfo} from '@/components/site';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return properties.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=properties.find(p=>p.slug===decodeURIComponent(slug));return {title:p?.title||'Property not found',description:p?.description,alternates:{canonical:`/properties/${slug}`}}}
export default async function Property({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const index=properties.findIndex(p=>p.slug===decodeURIComponent(slug));if(index<0)notFound();return <><Gallery property={properties[index]} next={properties[(index+1)%properties.length]}/><PropertyInfo property={properties[index]}/></>}
