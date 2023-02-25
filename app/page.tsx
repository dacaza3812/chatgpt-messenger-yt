import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div className='flex space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className='h-8 w-8'/>
                    <h2>Ejemplos</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Explícame algo a mí"</p>
                    <p className="infoText">"¿Cuál es la diferencia entre un perro y un gato?"</p>
                    <p className="infoText">"¿De qué color es el sol?"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className='h-8 w-8'/>
                    <h2>Capacidades</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Cambia el modelo de ChatGPT para usar"</p>
                    <p className="infoText">"Los mensajes se almacenan en Firestore de Firebase"</p>
                    <p className="infoText">"Notificaciones de tostado caliente cuando ChatGPT está pensando"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className='h-8 w-8'/>
                    <h2>Limitaciones</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Puede generar información incorrecta ocasionalmente"</p>
                    <p className="infoText">"Puede producir instrucciones dañinas o contenido sesgado ocasionalmente"</p>
                    <p className="infoText">"Conocimiento limitado del mundo y los eventos posteriores a 2021"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage