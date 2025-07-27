import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="M5.16,3.74,13,21,11.33,12.87,19.26,12,11.8,3.26,14.4,8.13,10.67,8.31Z"
      fill="currentColor"
      stroke="none"
    />
    <polygon
      points="19.2,5.2 18.2,4.8 17.8,3.8 17.4,4.8 16.4,5.2 17.4,5.6 17.8,6.6 18.2,5.6"
      fill="#A0F060"
      stroke="none"
    />
    <polygon
      points="21,7 20.2,6.8 20,6 19.8,6.8 19,7 19.8,7.2 20,8 20.2,7.2"
      fill="#A0F060"
      stroke="none"
    />
    <polygon
      points="17,8.4 16,8 15.6,7 15.2,8 14.2,8.4 15.2,8.8 15.6,9.8 16,8.8"
      fill="#A0F060"
      stroke="none"
    />
  </svg>
);
