import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <div className="row">
        <h1>Sample</h1>
      </div>
      <div className="row">
        <p>
          Project
        </p>
      </div>
    </SimpleLayout>
  )
}