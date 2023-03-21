import React, {useState} from "react";
import './IniciarSesion.css';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import * as alertify from "alertifyjs";

function IniciarSesion() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  function MostarMensaje(pMensaje, pTipo) {
    alertify.set('notifier','position', 'bottom-left');
    alertify.notify(pMensaje, pTipo, 10);
  }

  const frmLogin = async e => {
    e.preventDefault();
    await Ingresar({
      usuario,
      contrasena
    });
  }

  async function Ingresar() {
    if (usuario !== "" && contrasena !== "") {
      const lData = JSON.stringify({
        email: usuario,
        password: contrasena
      })
    
      fetch("https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: lData
      }).then((response) => response.json()).then((data) => {
        console.log(data);
        
        if (data.status === "success") {
          localStorage.setItem("session", JSON.stringify({"token": data.data.token, "email": usuario}));
          window.location.href = "/";
        }
        else{
          MostarMensaje(data.message, "error");
        }  
      }).catch((error) => {
        MostarMensaje(error, "error");
      });
    }
    else{
      MostarMensaje("Datos incorrectos", "warning");
    }
  }

  return (
    <Form onSubmit={frmLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Correo" onChange={e => setUsuario(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={e => setContrasena(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form> 
  );
}

export default IniciarSesion;