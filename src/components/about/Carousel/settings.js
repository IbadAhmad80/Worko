//carousel setting
export const Slidersettings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2500,
  slidesToShow: 6,
  slidesToScroll: 2,
  customPaging: () => (
    <div
      style={{
        backgroundColor: "#ffc451",
        borderRadius: "50%",
        height: "9px",
        width: "9px",
        margin: "10px 0 0 0",
      }}
    ></div>
  ),
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
