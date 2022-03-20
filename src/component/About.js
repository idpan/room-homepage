export default function About(props) {
  return (
    <div id="about" className="lg:grid lg:grid-cols-7">
      <img src="/images/image-about-dark.jpg" alt="image-about-dark.jpg" className="w-full col-span-2 object-cover h-full" />
      <div className="py-14 pl-7 pr-9 col-span-3 lg:pt-20 lg:px-20">
        <h2 className="uppercase tracking-[.3rem] font-bold mb-2 ">about our furniture</h2>
        <p className="text-[#A1A1A1] md:pr-5">
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need,
          from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <img src="/images/image-about-light.jpg" alt="images-about-light.jpg" className="w-full col-span-2 object-cover h-full " />
    </div>
  );
}
