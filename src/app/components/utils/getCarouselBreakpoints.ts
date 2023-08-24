

function getCarouselBreakpoints(mobileItems: number = 1, tabletItems: number = 1, laptopItems: number = 2, desktopItems: number|null = null){
if(desktopItems == null){
  desktopItems = laptopItems
}
  const carouselBreakpoints = {
    desktop: {
      breakpoint: { max: 9999, min: 1922 },
      items: desktopItems
    },
    laptop: {
      breakpoint: { max: 1921, min: 991 },
      items: laptopItems
    },
    tablet: {
      breakpoint: { max: 990, min: 650 },
      items: tabletItems
    },
    mobile: {
      breakpoint: { max: 649, min: 0 },
      items: mobileItems
    }
  };

  return carouselBreakpoints
}
  export default getCarouselBreakpoints