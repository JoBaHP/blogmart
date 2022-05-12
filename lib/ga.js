export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
    path_url: url,
  })
}

export const event = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag('event', action, params)
  }
}
