import React from 'react'


export default function Contact() {

  return (
    <div className='contact'>

      <h2 className='title_contact'> Contact me</h2>
      <div className='talk_to_me'>
        <form onSubmit={() => { alert('Email enviado com sucesso.') }} action='/contact' method='POST'>
          <div className='div_contact'>
            <div className='inputs'>
              <label>Name *</label>
              <input name='name' className='input_contact' type='text' placeholder='Seu nome' required></input>
            </div>

            <div className='inputs'>
              <label>Email *</label>
              <input name='email' className='input_contact' type='email' placeholder='email@exemplo.com' required></input>
            </div>

            <div className='inputs'>
              <label>Phone</label>
              <input name='phone' className='input_contact' type='text' placeholder='(99)99999-9999'></input>
            </div>

            <div className='inputs'>
              <label>Subject *</label>
              <input name='subject' className='input_contact' type='text' placeholder='Digite aqui' required></input>
            </div>

            <div className='inputs'>
              <button type='submit' className='btn_contact'>Send</button>
            </div>
          </div>

          <div className='div_textarea'>
            <label>Message *</label>
            <textarea name='message' required label='message' placeholder='Read your message' cols='20' rows='20'></textarea>
          </div>

        </form>
      </div>
      <div className='social_media'>
        <a href='https://github.com/MachadoMichael' id='github' className='social_icons'></a>
        <a href='https://www.linkedin.com/in/michael-machado-20955a244/' id='linkedin' className='social_icons'></a>
        <a href='https://wa.me/21991240450' id='whatsapp' className='social_icons'></a>
      </div>

    </div>
  )
}




