from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
root=Path('out'); errors=[]; checked=0
class Page(HTMLParser):
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  for key in ['href','src']:
   u=d.get(key,'')
   if not u.startswith('/') or u.startswith('//'):continue
   p=unquote(urlparse(u).path).lstrip('/')
   target=root/p
   if not (target.is_file() or (target/'index.html').is_file()):errors.append((str(self.path),u))
for path in root.rglob('*.html'):
 if path.name=='404.html':continue
 page=Page();page.path=path;page.feed(path.read_text());checked+=1
 if 'bernini' in path.read_text().lower():errors.append((str(path),'Incorrect branding'))
print(f'Checked {checked} exported HTML documents, local links, assets and branding.')
if errors:
 for e in errors:print(e)
 raise SystemExit(1)
print('All checks passed.')
