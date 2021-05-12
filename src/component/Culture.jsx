import React, { useState } from 'react';

function Culture() {
  const movies = [
    {
      id: 1,
      name: 'Mars Attack',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Mars_attacks_ver1.jpg',
      plot:
        'A spaceship is seen departing from Earth and returning to Mars, where it gathers hundreds of other Martian ships and heads back to Earth. U.S. President James Dale (Jack Nicholson), along with his aides, addresses the United States concerning the historic event. Several days later, the President&apos;s science aides set up a first contact meeting with the Martians in Pahrump, Nevada, as Dale watches the development on television with his wife Marsha (Glenn Close) and his daughter Taffy (Natalie Portman)...',
    },
    {
      id: 2,
      name: 'The Martian',
      url: 'https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg',
      plot:
        'In 2035, the crew of the Ares III mission to Mars is exploring Acidalia Planitia on Martian solar day (sol) 18 of their 31-sol expedition. A severe dust storm threatens to topple their Mars Ascent Vehicle (MAV). The mission is scrubbed, but as the crew evacuates, astronaut Mark Watney is struck by debris. The telemetry from his suit&apos;s bio-monitor is damaged and Watney is presumed dead. With the MAV on the verge of toppling, the remaining crew takes off for their orbiting vessel, the Hermes...',
    },
    {
      id: 3,
      name: 'Total Recall',
      url: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Total_recall.jpg',
      plot:
        'In 2084, construction worker Douglas Quaid is having troubling dreams about Mars and a mysterious woman there. His wife Lori is dismissive of Mars, where the governor, Vilos Cohaagen, is fighting a rebellion. Quaid visits Rekall, a company that implants false memories of vacations, and chooses a "trip" to Mars as a secret agent. However, the procedure goes wrong because Quaid has suppressed memories of actually being a secret agent on Mars...',
    },
    {
      id: 4,
      name: 'John Carter',
      url: 'https://upload.wikimedia.org/wikipedia/en/a/aa/John_carter_poster.jpg',
      plot:
        'In 1881, Edgar Rice Burroughs attends the funeral of his uncle, John Carter, a former American Civil War Confederate Army captain who died suddenly. Per Carter&apos;s instructions, the body is put in a tomb that can be unlocked only from the inside. His attorney gives Carter&apos;s personal journal for Burroughs to read, in the hope of finding clues explaining Carter&apos;s cause of death...',
    },
    {
      id: 5,
      name: 'WALL-E',
      url: 'https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-Eposter.jpg',
      plot:
        'In the 29th century, rampant consumerism and environmental neglect have turned Earth into a garbage-strewn wasteland; humanity is nowhere to be found and has been evacuated by the megacorporation Buy-n-Large (BnL) on giant starliners seven centuries earlier. Of all the Waste Allocation Load-Lifter: Earth-class (WALL-E) robots left by BnL to clean up, only one remains operational. One day, WALL-E&apos;s routine of compressing trash and collecting interesting objects is broken by the arrival of an unmanned probe carrying an Extraterrestrial Vegetation Evaluator (EVE) robot, sent to scan the planet for human-sustainable life. WALL-E is smitten by the sleek, otherworldly robot, and the two begin to connect until EVE goes into standby when WALL-E shows her his most recent find: a living seedling. The probe then collects EVE and the plant, and—with WALL-E clinging on—returns to its mothership, the starliner Axiom...',
    },
    {
      id: 6,
      name: 'I, Robot',
      url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Movie_poster_i_robot.jpg',
      plot:
        'In the year 2035, humanoid robots serve humanity, which is protected by the Three Laws of Robotics of Isaac Asimov. Del Spooner, a homicide detective in the Chicago Police Department, has come to hate and distrust robots after a robot rescued him from a car crash while allowing a 12-year-old girl to drown, based purely on cold logic and odds of survival. When Dr. Alfred Lanning, co-founder of U.S. Robotics (USR), falls to his death from his office window, a message he left behind requests Spooner be assigned to the case. The police declare the death a suicide, but Spooner is skeptical, and Lawrence Robertson, the CEO and other co-founder of USR, reluctantly allows him to investigate...',
    },
  ];

  const astro = [
    {
      id: 1,
      sign: 'Chappie',
      earthSign: 'Aquarius',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/32/fish-759384_960_720.jpg',
      horoscope: 'Moon and Venus are aligned: a quiet day today',
    },
    {
      id: 2,
      sign: 'Gort',
      earthSign: 'Pisces',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/32/aquarius-759383_960_720.jpg',
      horoscope:
        'The aspect of the Moon in conjunction with Uranus creates a feeling of change, it is only a feeling except considering the waste lands in front of you',
    },
    {
      id: 3,
      sign: 'Marvin',
      earthSign: 'Aries',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/32/aries-759382_960_720.jpg',
      horoscope: 'Earth will never be closest : fly away !!!',
    },
    {
      id: 4,
      sign: 'Baymax',
      earthSign: 'Taurus',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/32/bull-759381_960_720.jpg',
      horoscope: 'Set concrete goals that you can achieve by the new moon.',
    },
    {
      id: 5,
      sign: 'R2D2 & 3PO',
      earthSign: 'Gemini',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/30/twins-759375_960_720.jpg',
      horoscope:
        'Under the leadership of Earth, you will need oxygen more than ever and not always think about the failures or other setbacks of the past.',
    },
    {
      id: 6,
      sign: 'Ash',
      earthSign: 'Cancer',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/31/cancer-759378_960_720.jpg',
      horoscope:
        'Your patience has limits, today, dear Cancer, this is what you will try to convey the robot who are not sharing your life and to those you love.',
    },
    {
      id: 7,
      sign: 'Goldorak',
      earthSign: 'Leo',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/30/lion-759374_960_720.jpg',
      horoscope: 'Sociable as hell, you may or may not stand out for your humor and your generosity.',
    },
    {
      id: 8,
      sign: 'Gigolo Joe',
      earthSign: 'Virgo',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/31/virgin-759376_960_720.jpg',
      horoscope:
        'You will have a good time examining your accounts with a magnifying glass, because you will have the common project of offering yourself the vacation of your dreams.',
    },
    {
      id: 9,
      sign: 'Optimus Prime',
      earthSign: 'Libra',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/31/horizontal-759380_960_720.jpg',
      horoscope: 'Single people, you can pride yourself on not meeting anyone.',
    },
    {
      id: 10,
      sign: 'BB8',
      earthSign: 'Scorpio',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/31/scorpio-759377_960_720.jpg',
      horoscope: 'The planets boost your power of seduction. The spring season makes you want to browse.',
    },
    {
      id: 11,
      sign: 'Robocop',
      earthSign: 'Sagittarius',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/30/contactors-759373_960_720.jpg',
      horoscope:
        'The power of bits! He is infinite, especially in terms of code ... Particularly gifted, today, under the influence of Mercury and Venus in Gemini, win the hackaton!',
    },
    {
      id: 12,
      sign: 'Dolores Abernathy',
      earthSign: 'Capricorn',
      url: 'https://cdn.pixabay.com/photo/2015/05/09/07/31/capricorn-759379_960_720.jpg',
      horoscope:
        'You will know perfectly the amount of your expenses, the foreseeable expenses which will be incumbent on you. However, you will not be able to avoid an unforeseen event, such as a repair to be made or a device to be replaced. You will do your accounts as accurately as possible.',
    },
  ];

  const [selectedSign, setSelectedSign] = useState('Astrological sign');

  return (
    <section className="culture">
      <div className="culture_Movies">
        <h2>Our favorite movies</h2>
        <div id="cultureContainer">
          <div id="slider">
            {movies.map((item) => (
              <figure key={item.name + item.id}>
                <h3>Title: &quot;{item.name}&quot;</h3>
                <div>
                  <img src={item.url} alt={item.name} />
                  <p>
                    <strong>Plot:</strong> <br />
                    {item.plot}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div className="culture_Horoscope">
        <h2>Daily horoscope</h2>
        <select
          id="signSelect"
          value={selectedSign}
          onBlur={(item) => setSelectedSign(item.target.value)}
          onChange={(item) => setSelectedSign(item.target.value)}>
          <option defaultValue="unselect">Astrological sign</option>
          {astro.map((item, index) => (
            <option key={index} value={item.earthSign}>
              {item.earthSign}
            </option>
          ))}
        </select>
        {selectedSign === 'Astrological sign' ? (
          <p>Select your Sign</p>
        ) : (
          astro
            .filter((item) => item.earthSign.includes(selectedSign))
            .map((item) => (
              <div key={item.sign + item.id} className="culture_sign">
                <div>
                  <h3>Robot astrological sign: {item.sign}</h3>
                  <img src={item.url} alt={item.name} />
                </div>
                <p>{item.horoscope}</p>
              </div>
            ))
        )}
      </div>
    </section>
  );
}

export default Culture;
