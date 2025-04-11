import Feed from '@components/Feed'

const page = () => {
  return (
    <section className='w-full flex-center flex-col'> 
    <h1 className='head_text text-center'>
    <br className='max-md'/>
    <span className='orange_gradient text-center'>
      Bienvenue dans l'application de prise de notes medicales
    </span>
    </h1>
    <p className='desc text-center'>
      Vous jouez un role essentiels dans la vie de chacun.
      Utiliser des gabarits preetablis pour ameliorer la qualite de votre quotidient.
    </p>

    <Feed />

    </section>
  )
}
export default page