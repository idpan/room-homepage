import ButtonAngle from "./ButtonAngle";
export default function Home(props) {
  return (
    <div id="home" className="lg:grid lg:grid-cols-5  justify-between  ">
      <img src={props.image} alt="hero-image" className=" lg:col-span-3 object-cover  h-full w-full min-w-0" />
      <div className="absolute right-0 -mt-16 lg:hidden">
        <ButtonAngle>
          <img src="/images/icon-angle-left.svg" alt="left" />
        </ButtonAngle>
        <ButtonAngle>
          <img src="/images/icon-angle-right.svg" alt="right" />
        </ButtonAngle>
      </div>
      <div className="  col-span-2 flex flex-col justify-between">
        <div className=" mt-16 xl:mt-36 xl:max-w-[565px]  xl:mx-auto xl:px-0 px-10 ">
          <h1 className="text-3xl font-semibold mb-7 xl:mb-16  xl:text-6xl  ">{props.headingText}</h1>
          <p className="text-[#A1A1A1] xl:text-xl  leading-tight">{props.paragraph}</p>
          <button className=" cta-button group hover:text-[#A1A1A1] lg:mt-10 mt-12 mb-14 flex gap-8 xl:text-2xl uppercase items-center font-semibold tracking-[.8em] ">
            shop now
            <svg className="fill-black group-hover:fill-[#A1A1A1]" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill-rule="nonzero" />
            </svg>
          </button>
        </div>
        <div className="lg:block hidden ">
          <ButtonAngle>
            <img src="/images/icon-angle-left.svg" alt="left" />
          </ButtonAngle>
          <ButtonAngle>
            <img src="/images/icon-angle-right.svg" alt="right" />
          </ButtonAngle>
        </div>
      </div>
    </div>
  );
}
