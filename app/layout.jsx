import '@styles/globals.css'
import Nav from "@components/Nav"
import Provider from "@components/Provider"

export const metadata = {
  title: 'Minota',
  description: 'Une application pour la prise des notes medicales.'
}

const layout = ({ children }) => {
  return (
    <html lang="fr">
    <head>
      <title >Notitia</title>
      <link rel='icon' href='./public/assets/icons/notitia.png' sizes='32x32'/>
    </head>
    <body>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <main className='app'>
        <Nav />
        { children }
      </main>

    </body>
    </html>
  )
}
export default layout;