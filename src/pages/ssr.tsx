import * as React from "react";
import fetch from "node-fetch";
import { Link, PageProps } from "gatsby";

interface ISsrPage extends PageProps {
  serverData: {
    image: string;
  };
}

export default function SSR(props: ISsrPage) {
  const { image } = props.serverData;

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <h1>SSR: Server Side Rendering</h1>
      <img alt="doggo" src={image} />
    </>
  );
}

//@ts-ignore //params not used, but kept for reference
export async function getServerData({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`).then(
    (res) => res.json()
  );

  return {
    props: {
      // data has the shape of "message", "status" where message is the image src
      image: data.message,
    },
  };
}
