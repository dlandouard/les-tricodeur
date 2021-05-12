import React from 'react';
import './Footer.css';

function Footer() {
    const alertMessage = (message) => {
        const myMessageSplit = message.split(' ');
        alert(message);
      };
    return (
        <div className='footerAll'>
            <section className='footerReseaux'>
                <a href='https://fr-fr.facebook.com/NASA/' target='blank' className='footerLien'>
                    <img src='./src/image/Facebook.png' className='footerFacebook' />
                </a>
                <a href='https://twitter.com/nasa' target='blank' className='footerLien'>
                    <img src='./src/image/Twitter.png' className='footerTwitter' />
                </a>
                <a href='https://www.instagram.com/nasa/' target='blank' className='footerLien'>
                    <img src='./src/image/Instagram.png' className='footerInsta' />
                </a>
            </section>
            <section className='footerMail'>
                <label className="footerFontMail">
                    Give us your Email
                </label>
                <input type="email" name="email" className="footerLong" />
                <button className="footerInput" onClick={() =>
                    alertMessage(
                        'Thanks for your message we will reply as soon as possible',
                    )
                }> Send </button>
            </section>
        </div>
    )
}

export default Footer
