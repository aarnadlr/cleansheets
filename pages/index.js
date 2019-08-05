import Link from 'next/link';
import Header from '../components/header';

function Index() {
  return (
    <main style={{ padding: '32px', fontFamily: 'sans-serif' }}>
      <Header />

      <p>Select a city below to view/download the PDF:</p>

      <section style={{fontSize:"24px"}}>

        <Link href="/static/miami.pdf">
          <a>🏖 Miami</a>
        </Link>{' '}

        <br />

        <Link href="/static/montreal.pdf">
          <a>🏙 Montreal</a>
        </Link>{' '}

        <br />

        <Link href="/static/newyorkcity.pdf">
          <a>🗽 New York City</a>
        </Link>{' '}

        <br />

        <Link href="/static/montreal.pdf">
          <a>🏜 Phoenix</a>
        </Link>{' '}

        <br />

        <Link href="/static/montreal.pdf">
          <a>🏙 Chicago</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
