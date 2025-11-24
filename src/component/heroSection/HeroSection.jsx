import Image from "next/image";

function HeroSection() {
  return (
    <div className="carousel w-full h-[450px]">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="https://i.ibb.co/pBQm21xh/1.jpg"
          fill
          alt="Picture of the author"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="https://i.ibb.co/S4ZxjdZQ/7.webp"
          fill
          alt="Picture of the author"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="https://i.ibb.co/M5JC11Z9/9.webp"
          fill
          alt="Picture of the author"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="https://i.ibb.co/w5xDf4T/2.jpg"
          fill
          alt="Picture of the author"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
