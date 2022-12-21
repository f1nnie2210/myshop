import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property='og:description' content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property='keywords' content={keywords} /> 
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to My Store!',
  description: 'We sell only the finest products',
  keywords: 'electronics, buy electronics, cheap electronics'
}

export default Meta
