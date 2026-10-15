import {Hero,Philosophy,SectionIntro,JournalCard} from '@/components/site';
import {articles} from '@/lib/data';
export const metadata={title:'Our perspective',alternates:{canonical:'/about'}};
export default function About(){return <><Hero about/><Philosophy/><section className="section"><SectionIntro kicker="02 / THE JOURNAL" title="Ideas for a considered life." text="Architecture, places, and the spaces in between. Explore perspectives that invite you to see home a little differently." href="/journal" label="Explore the journal"/><div className="journal-grid about-journal">{articles.slice(0,7).map((a,i)=><JournalCard key={a.slug} article={a} index={i}/>)}</div></section></>}
