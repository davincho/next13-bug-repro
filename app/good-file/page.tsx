import { getBaseUrl }  from '../utils'


async function getData() {
  const dataBuffer = await fetch(
    `${getBaseUrl()}/vercel.svg`
  );

  const blobContent = await dataBuffer.text();

  return blobContent;
}

export default async function Home() {
  await getData()

  return (
    <div>  
      Good File
    </div>
  )
}
