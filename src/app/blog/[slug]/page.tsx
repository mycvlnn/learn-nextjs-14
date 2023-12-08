interface IProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: IProps) {
  return (
    <main>
      <h1>Blog Post Detail {params.slug}</h1>
    </main>
  )
}
