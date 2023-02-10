import React, {useState} from 'react';
import "./style.css";

const AboutDocum = ({foto}) => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };


  return (
    <section className='section-title'>
    <img src={foto} alt="" />

  <div className='section-title-tab'>
        <div className="bloc-tabs">
    <button
      className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(1)}
    >
      Our Mission
    </button>
    <button
      className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(2)}
    >
      Vision
    </button>
    <button
      className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(3)}
    >
      Department
    </button>
  </div>

  <div className="content-tabs">
    <div
      className={toggleState === 1 ? "content  active-content" : "content"}
    >
      <h2>Our Mission</h2>
      <hr />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
        Accusamus in quia odit aspernatur provident et ad vel distinctio
        recusandae totam quidem repudiandae omnis veritatis nostrum
        laboriosam architecto optio rem, dignissimos voluptatum beatae
        aperiam voluptatem atque. Beatae rerum dolores sunt.
      </p>
    </div>

    <div
      className={toggleState === 2 ? "content  active-content" : "content"}
    >
      <h2>Vision</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
        Accusamus in quia odit aspernatur provident et ad vel distinctio
        recusandae totam quidem repudiandae omnis veritatis nostrum
        laboriosam architecto optio rem, dignissimos voluptatum beatae
        aperiam voluptatem atque. Beatae rerum dolores sunt.
      </p>
    </div>

    <div
      className={toggleState === 3 ? "content  active-content" : "content"}
    >
      <h2>Department</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
        Accusamus in quia odit aspernatur provident et ad vel distinctio
        recusandae totam quidem repudiandae omnis veritatis nostrum
        laboriosam architecto optio rem, dignissimos voluptatum beatae
        aperiam voluptatem atque. Beatae rerum dolores sunt.
      </p>
    </div>
  </div>
</div>
</section>
  )
}

export default AboutDocum