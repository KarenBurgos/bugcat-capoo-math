import ErrorImg from '../Assets/img/error.png'

function Error() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center '>
      <h1 className='font-fredoka text-2xl '>¡Upps! Ah ocurrido un error</h1>
      <img src={ErrorImg} className='h-1/2 md:h-3/4'/>
    </div>
  )
}

export default Error;
