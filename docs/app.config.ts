export default defineAppConfig({
  docus: {
    title: 'Unlighthouse',
    name: 'Unlighthouse',
    description: 'Like Google Lighthouse, but it scans every single page.',
    url: 'https://unlighthouse.dev/',
    layout: 'default',
    socials: {
      twitter: '@harlan_zw',
      github: 'harlan-zw/unlighthouse',
    },
    // github: {
    //   root: 'content',
    //   edit: true,
    // },
    aside: {
      level: 1,
    },
    header: {
      title: 'Unlighthouse',
      logo: true,
    },
    cover: {
      src: 'https://unlighthouse.dev/og.png',
    },
  }
})