import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Leda Erlandson</h1>
          <p className="lead text-muted">
            Portfolio
          </p>
        </div>
      </section>

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