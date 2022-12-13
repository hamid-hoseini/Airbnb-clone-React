### In Progress...

# Airbnb clone with REACT
  A copy of the Airbnb app to learn and improve coding skills with the React framework.
  (Next.js, Tailwind CSS, Mapbox, Calendar & Date Picker)
  
  Setting up Tailwind CSS in a Next.js v12 project:

  ```bash
  yarn create next-app --example with-tailwindcss <Project Name>
  
  # Run the application:
  npm run dev
  ```

## What I have learned in this project are:

  1. Using Next.JS image component instead of regular `<img />` element because of a variety of built-in performance optimizations <sub>[Read More...](https://nextjs.org/docs/basic-features/image-optimization)</sub>
  2. Learning `Flex` css <sub>[Read More...](https://flexboxfroggy.com/)</sub>
  3. Using React Date Range, a date library agnostic React component for choosing dates and date ranges <sub>[Read More...](https://github.com/hypeserver/react-date-range)</sub>

## Dependencies
  - Tailwind @heroicons/react [link](https://github.com/tailwindlabs/heroicons)
  - Tailwind Scrollbar Hide [link](https://www.npmjs.com/package/tailwind-scrollbar-hide)
  - React Date Range [link](https://github.com/hypeserver/react-date-range)


## Note

While we are using a Next.JS image component with a hostname in `src`, we need to add that hostname in `next.config.js` like this: <sub>[Read More...](https://nextjs.org/docs/api-reference/next/image#domains)</sub>

```tsx
module.exports = {
  images: {
    domains: ['links.papareact.com']
  }
}
``` 

#### DISCLAIMER: 

This code is developed for learning purposes only. Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” of this code for education purposes.