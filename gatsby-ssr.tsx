import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/ItalianPlateNo1Expanded-Demibold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ItalianPlateNo1Expanded"
    />,
    <link
      rel="preload"
      href="/fonts/ItalianPlateNo1Expanded-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ItalianPlateNo1Expanded"
    />,
    <link
      rel="preload"
      href="/fonts/ItalianPlateNo1Expanded-LightItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ItalianPlateNo1Expanded"
    />,
  ])
}
