import React from 'react'
import { useState } from 'react'

export default function () {
  const [state, setState] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  // 0 - initial , 1 - loading, 2 - success, 2 - error
  const subscribe = async (e) => {
    e.preventDefault()

    setState(1)
    setErrorMsg('')
    console.log(e.target[0].value)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: e.target[0].value,
      })

      const data = await res.json()
      if (data.error !== null) {
        throw data.error
      }
      setState(2)
    } catch (e) {
      setErrorMsg(e)
      setState(3)
    }
  }
  return (
    <div>
      <footer className=" fixed inset-x-0 bottom-0  bg-gray-100 text-center">
        <div className="px-4">
          {state == 2 ? (
            <p className=" text-gray-700">
              Thanks for subscribing. Don't worry, we won't spam you!
            </p>
          ) : (
            <form onSubmit={subscribe} className="mb-0.1 mt-4 flex flex-col">
              <div className="gird-cols-1 flex grid items-center justify-center gap-4 md:grid-cols-3">
                <div className="md:ml-auto md:mb-6">
                  <p className="text-pink-600">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="md:mb-6">
                  <input
                    required
                    placeholder="Email address"
                    type="email"
                    className="
              form-control
              m-0
              block
              w-full
             rounded-full
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
            "
                  />
                </div>
                <div className="mb-6 md:mr-auto">
                  <button
                    type="submit"
                    className="inline-block rounded-full bg-pink-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg"
                  >
                    Subscribe
                  </button>
                  {state === 3 ? (
                    <p className="mt-3 text-red-500">{errorMsg}</p>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
        <div
          className="p-1 text-center text-gray-700"
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
