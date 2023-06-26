import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

interface HeroProps {
  image?: string,
  title?: string,
  original_title?: string,
  subtitle?: string,
  hasButton?: boolean,
}

const Hero: React.FC<HeroProps> = ({
  image,
  title,
  original_title,
  subtitle,
  hasButton
}) => {

  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundPosition: '50%', backgroundImage: `url(${image})`, height: '500px' }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          {hasButton &&
            <Link className="self-end" href='/'>
              <button className=" bg-gray-600 hover:bg-amber-700 transition-all ease duration-300 text-white font-bold py-2 px-4 rounded">
                Home
              </button>
            </Link>}
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              {title}<br />{original_title && <span>({original_title})</span>}
            </h1>
           {subtitle && <h3 className="mb-12 text-1xl font-bold tracking-tight md:text-3xl xl:text-5xl">
              {subtitle}
            </h3>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
