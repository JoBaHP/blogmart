import React, { useState, useEffect } from 'react'
/* import { BiBitcoin } from 'react-icons/bi'
 */ import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              Blogmart
            </span>
          </Link>
          {/*  <Link
            href="https://commerce.coinbase.com/checkout/ebae0c9b-c9da-4c53-a8a1-db2a06fed801"
            target="_blank"
          >
            <span
              className="cursor-pointer text-4xl font-bold text-white"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <BiBitcoin size={50} />
              logmart
            </span>
          </Link> */}
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
