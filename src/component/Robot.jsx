import React from 'react';
import './Robot.css';

function Robot() {
    return (
        <div className='robotContainer'>
            <section className='robotAlign'>
                <img src="./src/perseverance-NASA-.jpg" className='robotPerseverance' />
                <section className='robotFlex'>
                    <p className='robotDescription'>Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA's Mars 2020 mission.</p>
                    <figure className="robotFigure">
                        <img src="https://robohash.org/alien" className='robotAvatar' />
                        <figcaption className='robotDamien'>
                            Avatar de Perseverance
                        </figcaption>
                    </figure>
                </section>
            </section>
            <section className='robotAlign'>
                <img src="./src/ingenuity.jpg" className='robotPerseverance' />
                <section className='robotFlex'>

                    <p className='robotDescription'>Ingenuity is a small robotic solar helicopter operating on Mars as part of NASA's Mars 2020 mission.</p>
                    <figure className="robotFigure">
                        <img src="https://robohash.org/robot" className='robotAvatar' />
                        <figcaption className='robotDamien'>
                            Avatar de ingenuity
                        </figcaption>
                    </figure>
                </section>
            </section>
        </div>
    )
}

export default Robot
