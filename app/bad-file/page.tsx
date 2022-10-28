import { getBaseUrl }  from '../utils'


async function getData() {
  const dataBuffer = await fetch(
    `${getBaseUrl()}/lock.yaml`
  );

  const blobContent = await dataBuffer.text();

  return blobContent;
}

export default async function Home() {
  await getData()

  return (
    <div>  
      Bad File
    </div>
  )
}
