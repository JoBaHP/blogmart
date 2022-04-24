import React from 'react'

export default function () {
  return (
    <div>
      <footer className=" fixed inset-x-0 bottom-0 z-10 bg-gray-100 p-4 text-center">
        <div className="px-6 pt-6">
          <form action="">
            <div className="gird-cols-1 flex grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:ml-auto md:mb-6">
                <p className="text-pink-600">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
              form-control
              m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
            "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="button"
                  className="inline-block rounded-full bg-pink-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div
          className="p-4 text-center text-gray-700"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2) ' }}
        >
          © 2022 Copyright:
          <a className="text-pink-600" href="/">
            Blogmart.info
          </a>
        </div>
      </footer>
    </div>
  )
}
