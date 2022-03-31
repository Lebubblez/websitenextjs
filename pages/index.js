import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import Image from 'next/image'

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <div className="row py-5">
        <h1>About Me</h1>
      </div>
      <div className="row">
      <Image
        priority
        src="/public/Images/photoofme.jpeg"
        height={200}
        width={200}
      />
        <p class="app-description">
          I am an Full-Stack Software Engineer with a <em>bachelors degree of Computer Science.</em>
          I program web-apps, websites, mobile and desktop applications.
        </p>
        <p>
          I went to Univeristy of Utah & Western Governors Univeristy for my undegrad, where I studied for
          both my Biology and Computer Science degree. When i'm
          not programming, I am outdoors following my passion of surfing everyday after work.
        </p>
        <p>
          Many of my applications have been made around my passions. Working for an accounting software company, I
          found it applicable to make both a software management, and scheduling based desktop software. <br></br>
          I also have made a surf forcasting application that was inspired by my love of surfing
          and the outdoors.
        </p>
        <p>Thanks for checking out my site!</p>
      </div>
    </SimpleLayout>
  )
}