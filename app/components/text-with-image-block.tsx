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
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image className="w-full dark:hidden" src="https://i0.wp.com/tokyotreatblog.wpcomstaging.com/wp-content/uploads/2021/05/243d7a4742342b7a1ce8db2cd21d757ebd215a68_studio_ghibli_characters_by_ficklestix-d846q1x.jpg?fit=1216%2C657&ssl=1" alt="dashboard image" />
        <Image className="w-full hidden dark:block" src="https://i0.wp.com/tokyotreatblog.wpcomstaging.com/wp-content/uploads/2021/05/243d7a4742342b7a1ce8db2cd21d757ebd215a68_studio_ghibli_characters_by_ficklestix-d846q1x.jpg?fit=1216%2C657&ssl=1" alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unleash the Magic: Dive into the world of Studio Ghibli</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Explore the enchanting world of Studio Ghibli movies and easily find the films you&rsquo;re looking for. Our filmography database contains a wide range of beloved Ghibli films, including classics like &quot;Spirited Away,&quot; &quot;My Neighbor Totoro,&quot; and &quot;Princess Mononoke.&quot;</p>
          <Input
            placeholder="Search movies by title..."
            icon={<BsSearch size="1rem" />}
            value={searchQuery}
            onChange={handleSearchInput}
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default TextWithImageBlock
