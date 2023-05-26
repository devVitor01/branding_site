import React from 'react';
import './style.css';

export default function Rodape(){
    let logo = 'assets/logo.png';
    let facebook = 'assets/facebook.png';
    let twitter = 'assets/twitter.png';
    let linkedin = 'assets/linkedin.png';
    let dribble = 'assets/dribble.png';
    let behance = 'assets/behance.png';
    let google = 'assets/google-plus.png';    

    return(
        <footer>
            <div className='footer-box'>
                <img src={logo} alt='logo' className='footer-logo'/>

                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                
                <div className='footer-imgs'>
                    <div className='footer-imgs-box'>
                        <img src={facebook} alt='logos'/>
                        <img src={twitter} alt='logos'/>
                        <img src={linkedin} alt='logos'/>
                    </div>

                    <div className='footer-imgs-box'>
                        <img src={dribble} alt='logos'/>
                        <img src={behance} alt='logos'/>
                        <img src={google} alt='logos'/>
                    </div>
                </div>

                <span>Copyright 2023 &copy; <a href='mailto:contato.dev.vitor@gmail.com'>Vitor L.</a></span>
            </div>
        </footer>
    )
}