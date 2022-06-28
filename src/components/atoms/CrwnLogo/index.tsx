import React from 'react'
import { IViewProps } from './types'

function CrwnLogo({ className }: IViewProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="39"
      viewBox="0 0 50 39"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-90 -38)">
          <g transform="translate(90 38)">
            <path
              fill="#808282"
              d="M3 14L25 26.5 47 14 40.855176 39 9.08421785 39z"
            ></path>
            <path
              fill="#101A1A"
              fillOpacity="0.263"
              d="M25 8L40 39 10 39z"
            ></path>
            <circle cx="2" cy="9" r="2" fill="#5E6363"></circle>
            <circle cx="25" cy="2" r="2" fill="#5E6363"></circle>
            <circle cx="48" cy="9" r="2" fill="#5E6363"></circle>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default CrwnLogo
