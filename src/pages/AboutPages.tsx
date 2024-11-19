export const AboutPages = () => {
    return (
        <div className='space-y-5'>
            <h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
                Nuestra empresa
            </h1>

            <img src="https://img.freepik.com/fotos-premium/edificio-es-moderno-edificio-oficinas-fachada-cristal-logotipo-empresa_662214-125831.jpg" 
                alt="Imagen de fondo" 
                className='h-[400px] w-full object-cover'
            
            />

            <div className='flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800'>
                <p>
                    CelularesBaratos es una tienda en linea que se dedica a la
                    venta de celulares, fundada en 2024. Nuestro objetivo es
                    ofreer a nuestros clientes la mejor calidad y precio en
                    celulares. Contamos con un equipo de profesionales que se 
                    engargan de seleccionar los mejores productos para ti.
                </p>

                <p>
                    En CelularesBaratos podrias encontrar una amplia variedad de 
                    celulares de las mejores marcas. Ademas, contamos con 
                    promociones y descuentos exclusivos para que puedas comprar
                    tu celular al mejor precio.
                </p>

                <h2 className='text-3xl font-semibold tracking-tight mt-8 mb-4'>
                    No esperes mas y compra tu celular en CelularesBaratos
                </h2>

                <p>
                    Para mas informacion no dudes en ponerte en contacto con nosotros a travez de nuestro correo electronico
                    <a href="mainto:correo@celularesbaratos.com">correo@celularesbaratos.com</a> o llamando al
                    <a href="tel:3333333">3333333</a>
                </p>
            </div>
        </div>
    );
};
