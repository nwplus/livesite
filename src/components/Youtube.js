import React from 'react'

export default ({ className, src }) => {
  const youtubeID = new URL(src).searchParams.get('v')
  const embedUrl = `https://youtube.com/embed/${youtubeID}`

  return (
    <iframe
      title="YouTube Video"
      id="ytplayer"
      type="text/html"
      className={className}
      src={embedUrl}
      frameborder="0"
      allowfullscreen
    />
  )
}
