import {articles} from '@/lib/data';
import {JournalCard} from '@/components/site';
export const metadata={title:'The journal',alternates:{canonical:'/journal'}};
export default function Journal(){return <section className="section page-top journal-index"><div className="center-title"><span className="eyebrow">THE ICLAPSS JOURNAL</span><h1>A fresh perspective.</h1><p>Stories of spaces, thoughtful design, and the art of feeling at home. A little inspiration for the way you want to live.</p></div><div className="featured-article"><JournalCard article={articles[0]}/></div><div className="journal-grid">{articles.slice(1).map((a,i)=><JournalCard key={a.slug} article={a} index={i+1}/>)}</div></section>}
