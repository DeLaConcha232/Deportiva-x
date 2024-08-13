import './Whatsapp.css';


export default function Whatsapp() {

    
    const handleClickWhatsapp = () => {
        const phoneNumber = '4494537534'; // Reemplaza con el número de teléfono al que deseas redirigir
        const message = 'Hola, me gustaría obtener más información'; // Mensaje opcional prellenado
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    return (
        <>
            <section className='container-Icons'>
                <img src="../../../public/assets/MainPage/Whatsapp-Icon.png" alt="Whatsapp-Icon" className='chats-icon' onClick={handleClickWhatsapp} />
                {/* <img src="../../../public/assets/MainPage/Chat-icon.png" alt="Chat-Icon" className='chats-icon chatbot' /> */}
            </section>
        </>
    )
}