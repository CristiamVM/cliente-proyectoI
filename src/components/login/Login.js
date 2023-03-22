import './Login.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import IniciarSesion from './IniciarSesion';
import Registro from '../registro/Registro';

function Login() {
  return (
    <div className="ingreso">
      <div className="header">
        <div className='Tab'>
          <div className='margen'>
            <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-2" justify defaultActiveKey="ingresar">
              <Tab eventKey="ingresar" title="Iniciar Sesión">
                <IniciarSesion />
              </Tab>
              <Tab eventKey="registrar" title="Registrar">
                <Registro />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;