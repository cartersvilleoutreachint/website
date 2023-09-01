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
    id: string,
    imgSrc: string,
    title: string,
    date: number,
    url: string
  }

  type newBlogType = {
    metadata: {
      imgSrc: string,
      title: string,
      date: number,
      url: string
    }
    content: string
  }
  type updateBlogType = {
    metadata?:{
      imgSrc?: string,
      title?: string,
      date?: number,
      imgSrc?: string
    }
    id: string,
    content?: string
  }

  type fullBlogType = {
    id: string,
    content: string,
    imgSrc: string,
    title: string,
    date: number,
    articleUrl: string
  }