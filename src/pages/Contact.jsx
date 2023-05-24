
import React from 'react';

import style from "../css/Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.containerForm}>
        <h1>Entre em contato comigo pelo email!</h1>

        <form action='https://formsubmit.co/jonaswdev@gmail.com' method='POST'>
          <input className={style.formName} type='text' name='Nome: ' placeholder='Nome do usuário' required></input>
          <input className={style.formEmail} type='email' name='Email: ' placeholder='Email do usuário' required></input>
          <textarea className={style.formMessage} name='Mensagem: ' placeholder='Mensagem: ' required></textarea>

          <input className={style.btnSend} type='submit' value={"Enviar"}></input>
          <input type='hidden' name='_next' value={"/obrigadopelocontato"}></input>
        </form>
      </div>
    </div>
  )
}

export default Contact;
