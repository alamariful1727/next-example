import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-center min-h-screen p-6">
      <Head>
        <title>Next Example</title>
        <meta name="description" content="This app will cover nextjs, tailwindcss, typescript, eslint and prettier." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl">
        Welcome to <span className="text-sky-800">Next Example</span>
      </h1>

    </div>
  )
}
