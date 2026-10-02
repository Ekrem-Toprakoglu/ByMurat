import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum — BY MURAT Friseursalon',
  description: 'Impressum und Anbieterkennzeichnung von BY MURAT Damen & Herren Friseursalon.',
}

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" className="legal-back">← Zurück zur Startseite</Link>
        <h1>Impressum</h1>
        <p className="legal-sub">Angaben gemäß § 5 DDG</p>
      </header>

      <section className="legal-block">
        <h2>Anbieter</h2>
        <p>
          BY MURAT Damen &amp; Herren Friseursalon<br />
          Inhaber: Sükrü Murat Ayan<br />
          Radbrunnengasse 1<br />
          71665 Vaihingen an der Enz<br />
          Deutschland
        </p>
      </section>

      <section className="legal-block">
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4970421 3505">07042 / 13505</a>
          {/* TODO: E-Mail-Adresse ergänzen */}
        </p>
      </section>

      <section className="legal-block">
        <h2>Umsatzsteuer</h2>
        <p>
          {/* TODO: USt-IdNr. nach § 27 a UStG oder Hinweis auf Kleinunternehmerregelung (§ 19 UStG) ergänzen */}
          Angabe folgt.
        </p>
      </section>

      <section className="legal-block">
        <h2>Berufsbezeichnung &amp; berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Friseur / Friseurmeister (verliehen in Deutschland)<br />
          {/* TODO: Zuständige Handwerkskammer bestätigen (vermutlich HWK Region Stuttgart) */}
          Zuständige Kammer: Handwerkskammer Region Stuttgart<br />
          Es gelten die Handwerksordnung (HwO) sowie die Berufsordnung des Friseurhandwerks:{' '}
          <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer">
            gesetze-im-internet.de/hwo
          </a>
        </p>
      </section>

      <section className="legal-block">
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Sükrü Murat Ayan<br />
          Radbrunnengasse 1<br />
          71665 Vaihingen an der Enz
        </p>
      </section>

      <section className="legal-block">
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse findest du im Abschnitt „Kontakt".
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="legal-block">
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich (§ 7 Abs. 1 DDG). Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section className="legal-block">
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>
      </section>

      <section className="legal-block">
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
          gestattet.
        </p>
      </section>
    </main>
  )
}
