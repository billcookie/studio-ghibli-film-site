

interface HeroProps {
  image?: string,
  title?: string,
  original_title?: string,
}

const Hero: React.FC<HeroProps> = ({
  image,
  title,
  original_title
}) => {

  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundPosition: '50%', backgroundImage: `url(${image})`, height: '500px' }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              {title}<br />{original_title && <span>({original_title})</span>}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
