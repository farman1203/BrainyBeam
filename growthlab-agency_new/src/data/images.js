// DUMMY photos from loremflickr.com — keyword-matched (people, office, marketing, design …).
// Swap for real images any time: put files in /public/images and return `/images/xyz.jpg` here.
export const topic = (tags, lock = 1, w = 1000, h = 760) => `https://loremflickr.com/${w}/${h}/${tags}?lock=${lock}`
