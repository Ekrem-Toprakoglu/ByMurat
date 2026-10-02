import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — BY MURAT Friseursalon',
  description: 'Datenschutzerklärung von BY MURAT Damen & Herren Friseursalon gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" className="legal-back">← Zurück zur Startseite</Link>
        <h1>Datenschutz&shy;erklärung</h1>
        <p className="legal-sub">Information nach Art. 13 DSGVO</p>
      </header>

      <section className="legal-block">
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          BY MURAT Damen &amp; Herren Friseursalon<br />
          Inhaber: Sükrü Murat Ayan<br />
          Radbrunnengasse 1, 71665 Vaihingen an der Enz<br />
          Telefon: <a href="tel:+4970421 3505">07042 / 13505</a>
        </p>
      </section>

      <section className="legal-block">
        <h2>2. Zugriffsdaten / Server-Logfiles</h2>
        <p>
          Beim Aufruf dieser Website werden durch unseren Hosting-Dienstleister (Vercel Inc.) automatisch
          Informationen in sogenannten Server-Logfiles gespeichert: IP-Adresse (anonymisiert), Datum und Uhrzeit,
          angeforderte URL, Referrer-URL, verwendeter Browser und Betriebssystem. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb). Die Logs werden nach
          spätestens 30 Tagen gelöscht.
        </p>
      </section>

      <section className="legal-block">
        <h2>3. Kontaktaufnahme per Formular oder Telefon</h2>
        <p>
          Wenn du uns über das Terminanfrage-Formular oder telefonisch kontaktierst, werden deine Angaben
          (Name, Telefonnummer, Wunschtermin, Nachricht) zur Bearbeitung deiner Anfrage und zur Terminvereinbarung
          verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr
          erforderlich sind, spätestens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen.
        </p>
      </section>

      <section className="legal-block">
        <h2>4. Cookies</h2>
        <p>
          Unsere Website setzt technisch notwendige Cookies ein, die für den Betrieb der Seite erforderlich sind
          (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO sowie § 25 Abs. 2 Nr. 2 TDDDG). Statistik-Cookies werden nur
          nach deiner ausdrücklichen Einwilligung über das Cookie-Banner gesetzt (Art. 6 Abs. 1 lit. a DSGVO,
          § 25 Abs. 1 TDDDG). Du kannst deine Einwilligung jederzeit widerrufen, indem du die Cookies in deinem
          Browser löschst.
        </p>
      </section>

      <section className="legal-block">
        <h2>5. Reichweitenmessung (Vercel Analytics)</h2>
        <p>
          Mit deiner Einwilligung verwenden wir Vercel Analytics (Anbieter: Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, USA). Vercel Analytics ist cookielos konzipiert und arbeitet mit aggregierten, nicht
          personenbezogenen Metriken (z.&nbsp;B. Seitenaufrufe, Herkunftsland). Es werden keine Profile einzelner
          Besucher gebildet. Weitere Informationen:{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            vercel.com/legal/privacy-policy
          </a>{'.'}
        </p>
      </section>

      <section className="legal-block">
        <h2>6. Einbindung externer Dienste</h2>
        <p>
          Unsere Website enthält Links zu Google Maps, Instagram und Facebook. Die Verbindung zu diesen Diensten
          wird erst beim aktiven Klick auf den jeweiligen Link hergestellt. Wir haben keinen Einfluss auf die dort
          erhobenen Daten; es gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
        </p>
      </section>

      <section className="legal-block">
        <h2>7. Deine Rechte</h2>
        <p>
          Du hast jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO).
          Zudem kannst du dich bei der zuständigen Aufsichtsbehörde beschweren – in Baden-Württemberg beim
          Landesbeauftragten für den Datenschutz und die Informationsfreiheit (LfDI):{' '}
          <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
            baden-wuerttemberg.datenschutz.de
          </a>{'.'}
        </p>
      </section>

      <section className="legal-block">
        <h2>8. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
          Anforderungen entspricht. Für deinen Besuch gilt die jeweils abrufbare Fassung.
        </p>
      </section>
    </main>
  )
}
