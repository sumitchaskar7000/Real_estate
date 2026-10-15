import urllib.request,concurrent.futures,json,os
photos={'hero':'photo-1600210492486-724fe5c67fb0','lounge':'photo-1600607687920-4e2a09cf159d','forest':'photo-1449158743715-0a90ebb6d2d8','seaview':'photo-1613490493576-7fde63acd811','apartment':'photo-1600210491892-03d54c0aaf87','adriatic':'photo-1600607687939-ce8a6c25118c','maison':'photo-1600566753086-00f18fb6b3ea','thalassa':'photo-1613977257363-707ba9348227','detail':'photo-1600607688969-a5bfcd646154','kitchen':'photo-1556912172-45b7abe8b7e1','exterior':'photo-1600585154340-be6161a56a0c','footer':'photo-1600607687920-4e2a09cf159d'}
def fetch(pair):
 name,id=pair; url=f'https://images.unsplash.com/{id}?auto=format&fit=crop&w={2000 if name in ["hero","footer","exterior"] else 1200}&q=85'
 try:
  urllib.request.urlretrieve(url,f'public/images/{name}.jpg'); return {'name':name,'source':url,'usage':'Architectural illustration; property images are illustrative, not verified listing photography','crop':'center cover','license':'Unsplash license: https://unsplash.com/license'}
 except Exception as e: print(name,str(e)); return None
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool: records=list(pool.map(fetch,photos.items()))
open('public/asset-manifest.json','w').write(json.dumps(records,indent=2))
