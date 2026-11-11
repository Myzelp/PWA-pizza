/** input para correo, para motivo, text para comentario, boton de enviar */


export default function ContactoPage(){
    return(
        <section>
            <div className="max-w-md mx-auto p-6 bg-blue-300 rounded-2xl">
                <h1 className="text-center font-bold text-2xl">Contacto</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="correo" className="block mb-2">Correo:</label>
                        <input className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                        type="email" id="correo" name="correo" required />
                    </div>
                    
                    <div>
                        <label htmlFor="motivo">Motivo:</label>
                        <input className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                        type="text" id="motivo" name="motivo" required />
                    </div>
                    
                    <div> 
                        <label htmlFor="comentario">Comentario:</label>
                        <textarea className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                         id="comentario" name="comentario" required></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <button  className= "w-1/2 rounded-lg bg-blue-400 py-2 hover:scale-95 transition-transform" type="submit">Enviar</button>
                    </div>
                        
                </form>
            </div>
        </section>
    )
}