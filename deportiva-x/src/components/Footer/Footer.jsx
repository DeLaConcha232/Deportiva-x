
import './Footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  // MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

export default function App() {

  const Swal2 = () => {
    Swal.fire({title: "Aviso de privacidad",
      html: `
        <p><strong>1. Responsable del Tratamiento de Datos</strong></p>
        <p>DeportivaX, un comercio electrónico con presencia únicamente en línea, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
        <p><strong>2. Datos Personales Recabados</strong></p>
        <p>Para brindarte nuestros servicios, recabamos los siguientes datos personales:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Código postal</li>
          <li>Domicilio</li>
        </ul>
        <p><strong>3. Finalidad del Tratamiento de Datos</strong></p>
        <p>Tus datos personales serán utilizados para las siguientes finalidades:</p>
        <ul>
          <li>Gestionar tus compras y entregas de productos.</li>
          <li>Crear y mantener tu cuenta en nuestra plataforma.</li>
          <li>Comunicaciones sobre tus pedidos y seguimiento de compras.</li>
          <li>Atención al cliente a través de WhatsApp.</li>
        </ul>
        <p><strong>4. Medios de Contacto</strong></p>
        <p>Para cualquier consulta o para gestionar reembolsos, puedes contactarnos directamente a través de WhatsApp en el número 449-453-7534.</p>
        <p><strong>5. Modificaciones al Aviso de Privacidad</strong></p>
        <p>DeportivaX se reserva el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio será notificado a través de nuestra página web.</p>
      `,
      icon: "info"});
  }

  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=61561679826942' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/_deportivax_/?igsh=cms5cGtudGF3ZzYw&utm_source=qr' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.tiktok.com/@.deportivax?is_from_webapp=1&sender_device=pc' role='button'>
            <MDBIcon fab icon='tiktok' />
          </MDBBtn>
        </section>

        <section className='mb-4'>
          <button className='avisoPrivacidad' onClick={() => Swal2()}>Aviso de privacidad</button>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Mision</h5>

              <p>Inspirar a cada persona a alcanzar su máximo potencial físico y mental a través del deporte, ofreciendo productos de alta calidad, accesibles y con un servicio al cliente excepcional. Nos comprometemos a promover un estilo de vida saludable y activo, apoyando a nuestros clientes en su camino hacia la excelencia deportiva.</p>

            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Vision</h5>
              <p>Ser la tienda deportiva líder en México, reconocida por nuestra amplia gama de productos, innovación en el servicio al cliente, y nuestra dedicación para fomentar una comunidad deportiva unida y saludable. Aspiramos a ser la primera opción para deportistas y aficionados al deporte, brindando no solo productos, sino también inspiración y motivación para un futuro más activo y saludable.</p>
            </MDBCol>

          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: __ 
        <a className='text-white' href='#'>
          Deportiva - X
        </a>
      </div>
    </MDBFooter>
  );
}