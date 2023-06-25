'use client'
import Link from 'next/link'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = ({

}) => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ghibliography</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="flex items-center">
              <Link href="#" className="mr-4 hover:text-amber-700 transition-all ease duration-300 md:mr-6 "><AiFillFacebook size={30} /></Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="mr-4 hover:text-amber-700 transition-all ease duration-300 md:mr-6 "><AiFillInstagram size={30} /></Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="mr-4 hover:text-amber-700 transition-all ease duration-300 md:mr-6 "><AiFillYoutube size={30} /></Link>                </li>
            <li className="flex items-center">
              <Link href="#" className="mr-4 hover:text-amber-700 transition-all ease duration-300 md:mr-6 "><AiFillTwitterSquare size={30} /></Link>                </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Ghibliography</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
