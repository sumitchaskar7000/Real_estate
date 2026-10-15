import type {Metadata} from 'next';
import {Navigation,Footer} from '@/components/site';
import {siteUrl} from '@/lib/data';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'Iclapss — A considered way of living',template:'%s | Iclapss'},description:'Explore a considered collection of homes in Pune, Maharashtra. Discover inspiring spaces and perspectives on living in Pune.',icons:{icon:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon.svg`}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navigation/><main id="main">{children}</main><Footer/></body></html>}
