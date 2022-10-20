import { Button } from "gatsby-theme-material-ui"
import React from "react"

interface IButtonLink {
  label: string
  internalPage?: { slug: string }
  href?: string
  variant: "contained" | "outlined"
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined
}

const ButtonLink = ({
  label,
  internalPage,
  href,
  variant,
  color,
}: IButtonLink) => {
  const isInternal = !!internalPage?.slug

  console.log(variant)

  if (!isInternal && !href) {
    console.warn("Button Link needs either an internal page or href")
    return <></>
  }

  return (
    <Button
      {...(isInternal ? { to: internalPage.slug } : { href })}
      variant={variant}
      color={color || "inherit"}
    >
      {label}
    </Button>
  )
}

export default ButtonLink
