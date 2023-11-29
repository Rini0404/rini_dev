import React from 'react'
import GithubSvg from '../socials/github'
import LinkedIn from '../socials/linkedin'
import Xsvg from '../socials/x'

export default function ContactMe() {
  return (
    <div className=" flex justify-between">
        <h2 className="text-2xl font-bold">Get in touch!
        <span
        className='point'
        >👉🏽</span>
        </h2>
        <div className="flex items-center">
          {/* Replace these with actual icons and links */}
          <a href="mailto:reneortega2468@gmail.com" className="mr-4">
            reneortega2468@gmail.com
          </a>
          <a
            href="https://github.com/rini0404"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <GithubSvg/>
          </a>
          <a
            href="https://www.linkedin.com/in/rene-ortega-a29564196/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <LinkedIn />
          </a>
          <a
            href="https://twitter.com/ReneOrt81345106"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Xsvg/>
          </a>
        </div>
      </div>
  )
}
