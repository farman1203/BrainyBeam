// DUMMY photos (picsum.photos). Swap for real images — e.g. put files in /public/images and return `/images/${seed}.jpg`.
export const photo = (seed, w = 1000, h = 760) => `https://picsum.photos/seed/${seed}/${w}/${h}`
