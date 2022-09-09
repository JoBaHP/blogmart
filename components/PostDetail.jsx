import React from 'react'

import moment from 'moment'
import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer'

const PostDetail = ({ post }) => (
  <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
    <div className="relative mb-6 overflow-hidden shadow-md">
      <Image
        src={post.featuredImage.url}
        alt=""
        className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
      />
    </div>
    <div className="px-4 lg:px-0">
      <div className="mb-8 flex w-full items-center">
        <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      <RichText content={post.content.raw} />
      {/* {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type);
      })} */}
    </div>
  </div>
)

export default PostDetail

/* import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import moment from 'moment'
import Link from 'next/link'
import parse from 'html-react-parser'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )

      case 'heading-two':
        return (
          <h2 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )

      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      case 'bulleted-list':
        return (
          <ul key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </ul>
        )
      default:
        return modifiedText
    }
  }

  return (
    <>
      <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="mb-8 flex w-full items-center">
            <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="rounded-full align-middle"
                src={post.author.photo.url}
              />
              <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {parse(post.content.html)}
          <RichText
            content={post.content.children}
            renderers={{
              h1: ({ children }) => <h1 className="text-white">{children}</h1>,
              bold: ({ children }) => <strong>{children}</strong>,
              ul: ({ children }) => (
                <ul className="mb-8 text-3xl font-semibold">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="mb-8 text-3xl font-semibold">{children}</li>
              ),
              a: ({ children, openInNewTab, href, rel, ...rest }) => {
                if (href.match(/^https?:\/\/|^\/\//i)) {
                  return (
                    <a
                      href={href}
                      target={openInNewTab ? '_blank' : '_self'}
                      rel={rel || 'noopener noreferrer'}
                      {...rest}
                    >
                      {children}
                    </a>
                  )
                }
                return (
                  <div>
                    <Link href={href}>
                      <a {...rest}>{children}</a>
                    </Link>
                  </div>
                )
              },
            }}
          />
        </div>
      </div>
    </>
  )
}

export default PostDetail */
