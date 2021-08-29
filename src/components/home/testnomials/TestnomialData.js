export const testnomials_data = [
  {
    name: "Saul Goodman",
    title: "CEO & Founder",
    image: "testimonials-1",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Amma Beckin",
    title: "Freelancer",
    image: "testimonials-2",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
  },
  {
    name: "Bethy Cooper",
    title: "Score Owner",
    image: "testimonials-3",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "Alex Roddox",
    title: "Designer",
    image: "testimonials-4",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
  },
  {
    name: "John Larson",
    title: "Enterprenerur",
    image: "testimonials-5",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
];

//carousel setting
export const Slidersettings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => (
    <div
      style={{
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "50%",
        height: "12px",
        width: "13px",
        margin: "-50px 0 0 0",
      }}
    ></div>
  ),
  initialSlide: 0,
};
