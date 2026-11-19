/** input para correo, para motivo, text para comentario, boton de enviar */

export default function ContactoPage(){
    return(
        <section className="py-14 px-4">
            <div className="max-w-md mx-auto bg-[url('/fondo_2.jpg')] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 bg-black/50 text-white">
                <h1 className="text-center font-bold text-2xl">Contacto</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="correo" className="block mb-2 text-lg font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Correo:</label>
                        <input className="w-full rounded-lg border px-4 py-2 focus:outline-none bg-black/40"
                        type="email" id="correo" name="correo" required />
                    </div>
                    
                    <div>
                        <label htmlFor="motivo" className="block mb-2 text-lg font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Motivo:</label>
                        <input className="w-full rounded-lg border px-4 py-2 focus:outline-none bg-black/40"
                        type="text" id="motivo" name="motivo" required />
                    </div>
                    
                    <div> 
                        <label htmlFor="comentario" className="block mb-2 text-lg font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Comentario:</label>
                        <textarea className="w-full rounded-lg border px-4 py-2 focus:outline-none bg-black/40"
                        id="comentario" name="comentario" required></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <button  className= "w-1/2 rounded-lg bg-red-800 py-2 hover:scale-95 transition-transform block mb-2 text-lg font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" type="submit">Enviar</button>
                    </div>
                        
                </form>
                </div>
            </div>
        </section>
    )
}