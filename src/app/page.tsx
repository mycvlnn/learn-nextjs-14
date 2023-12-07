import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/youtube">Youtube</Link>
      </div>
      <div>
        <Link href="/tiktok">Tiktok</Link>
      </div>
    </main>
  )
}
