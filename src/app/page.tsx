import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/admin">Admin</Link>
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
