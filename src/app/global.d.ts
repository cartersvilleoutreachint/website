type mediaType = {
    imageSrc: string,
    title: string,
    link: string
}

type eventType = {
  title: string,
  date: number,
  location: string,
  locationUrl: string,
  moreInfoUrl: string,
  shortDesc: string
}

type teamMemberType = {
    imgSrc: string,
    description: string,
    role: string,
    name: string
}

type blogType = {
    id: number,
    imgSrc: string,
    title: string,
    date: number,
    articleUrl: string
  }

  type fullBlogType = {
    id: number,
    content: string,
    imgSrc: string,
    title: string,
    date: number,
    articleUrl: string
  }