'use client'
import { Image, Input } from "@mantine/core"
import { BsSearch } from 'react-icons/bs'

interface TextWithImageBlockProps {
  text?: string,
  image?: string,
  searchQuery: string,
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({
  image,
  text,
  searchQuery,
  handleSearchInput
}) => {

  return (
    <section className="bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image className="w-full hidden" src="https://3.bp.blogspot.com/-83lObXjUGVA/WLyCzcIlCQI/AAAAAAAAF74/fCH5k1PxATkRnIEbYaL4K8mvxC_0AaFRACLcB/s1600/22863764_p0.jpg" alt="dashboard image" />
        <Image className="w-full block" src="https://3.bp.blogspot.com/-83lObXjUGVA/WLyCzcIlCQI/AAAAAAAAF74/fCH5k1PxATkRnIEbYaL4K8mvxC_0AaFRACLcB/s1600/22863764_p0.jpg" alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Unleash the Magic: Dive into the world of Studio Ghibli</h2>
          <p className="mb-6 font-light md:text-l text-gray-400">Explore the enchanting world of Studio Ghibli movies and easily find the films you&rsquo;re looking for. Our filmography database contains a wide range of beloved Ghibli films, including classics like &quot;Spirited Away,&quot; &quot;My Neighbor Totoro,&quot; and &quot;Princess Mononoke.&quot;</p>
          <Input
            placeholder="Search movies by title..."
            icon={<BsSearch size="1rem" />}
            value={searchQuery}
            onChange={handleSearchInput}
          />
        </div>
      </div>
    </section>
  )
}

export default TextWithImageBlock
