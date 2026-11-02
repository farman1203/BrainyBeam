

// key → [remote file name, alt text]
export const files = {
  'hero-facade': ['hero-facade.1r4wqzgf7ylo5.webp', 'The corner of a glass and bronze facade with slender vertical fins against a clear blue sky'],
  'material-brick': ['material-brick.1ujaaaocc75x0.webp', 'Brick laid in a projecting pattern, catching low sun'],
  'studio-model-white': ['studio-model-white.0xoha0kv3nasp.webp', 'White card model of a small pavilion on a plinth'],
  'library-cover': ['library-cover.3gaa3hyg9nfqb.webp', 'Two pale brick volumes against a clear sky'],
  'library-brick-detail': ['library-brick-detail.0u4fqruhtyo5j.webp', 'A brick wall crossed by a dark steel handrail'],
  'studio-drafting': ['studio-drafting.319dm00xsef3y.webp', 'An architect drawing at a timber desk under a lamp'],
  'studio-model-desk': ['studio-model-desk.2b_iz3y4ca4v1.webp', 'Architect working on a white model at a desk covered in tools'],
  'studio-model-section': ['studio-model-section.3lowrpjmvfscx.webp', 'A sectional card model showing a stair and a deep window'],
  'studio-model-site': ['studio-model-site.1llcfh-cb0szv.webp', 'White site model of a town with houses and streets'],
  'kyst-cover': ['kyst-cover.080lbi_ny0dch.webp', 'Long, low timber house in front of a stand of tall pines'],
  'kyst-dusk': ['kyst-dusk.14or_k0hs7nen.webp', 'A long timber house at dusk, its windows lit, with the dunes behind'],
  'kyst-porch': ['kyst-porch.0kl9piygtv7kb.webp', 'Covered porch looking out over white sand and dune grass'],
  'chapel-cover': ['chapel-cover.2fdv0oqokk71y.webp', 'Angular white concrete walls against a pale sky'],
  'copper-house': ['copper-house.3dmj9tl6izjq8.webp', 'A copper-clad house'],
  'stone-corner': ['stone-corner.3-sn62r_cf4eu.webp', 'A sharp corner of pale travertine cladding against a clear blue sky'],
  'fjordhus-waterfront': ['fjordhus-waterfront.0e9237rwm_-ni.webp', 'A brick apartment building on the waterfront'],
  'saltvaerket-commons': ['saltvaerket-commons.41ldz9cezbjjn.webp', 'People at tables in a planted commons'],
  'school-corridor': ['school-corridor.3_hf9zhlf1-6z.webp', 'A covered walkway in low sun'],
  'life-window': ['life-window.1-w3x---o5wxg.webp', 'People at a tall window looking out over a city'],
  'life-gallery': ['life-gallery.0dgnasky7u1uj.webp', 'Visitors walking through a vaulted hall'],
  'life-courtyard': ['life-courtyard.3si4058tl8iua.webp', 'An indoor courtyard with a tree and people at a counter'],
  'life-balcony': ['life-balcony.2jtplgiuynbw-.webp', 'People on a gallery overlooking a city through glass'],
  'life-entrance': ['life-entrance.2znw0jhsphwl-.webp', 'A glazed entrance under a deep timber roof'],
}

export const imgUrl = key => {
  if (!files[key]) { console.warn(`[images] unknown key "${key}"`); return '' }
  return  `/images/${key}.webp` 
}

// <Img {...pic('hero-facade')} />   or   <Img {...pic('hero-facade', '')} />  (empty alt = decorative)
export const pic = (key, alt) => ({ src: imgUrl(key), alt: alt ?? (files[key] ? files[key][1] : '') })
