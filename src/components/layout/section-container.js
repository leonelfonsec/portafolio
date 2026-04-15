import { LitElement, html,css } from "lit";  
import favicon from '../../app/assets/favicon.ico';
import meImg from "../../app/assets/me.png";
import glowImg from "../../app/assets/me-glow.png";

class SectionContainer extends LitElement {
  
  static styles = css`
  section {
    display: flex;
    flex-direction: column;
    padding: 120px 220px 60px;
    font-family: 'Preahvihear', sans-serif;
    color: white;
  }

  .top-row {
    display: flex;
    align-items: center;
    gap: 56px;
    margin-bottom: 24px;
  }

  .image-wrapper {
    position: relative;
    width: 320px;
    height: 320px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glow {
    width: 320px;
    height: 320px;
    object-fit: contain;
    display: block;
  }

  .avatar {
    position: absolute;
    width: 250px;
    height: 250px;
    object-fit: contain;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .top-texts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 620px;
  }

  .highlight-name {
    color: #7127BA;
  }

  .software-engineer {
    font-size: 50px;
  }

  .judes {
    font-size: 50px;
    line-height: 1.1;
  }

  .work-experience {
    font-size: 50px;
  }

  .intro-name {
    margin-bottom: 12px;
    font-size: 24px;
  }

  .subtitle {
    font-size: 22px;
  }

  .description {
    font-size: 16px;
    opacity: 0.85;
  }

  @media (max-width: 1024px) {
    section {
      padding: 80px 24px 40px 24px;
    }
  @media (max-width: 600px) {
    section {
      padding-top: 130px;
    }
  }

    .top-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    .image-wrapper {
      width: 260px;
      height: 260px;
    }

    .glow {
      width: 260px;
      height: 260px;
    }

    .avatar {
      width: 210px;
      height: 210px;
    }

    .judes,
    .software-engineer,
    .work-experience {
      font-size: 36px;
    }
  }
`;

  render() {
  return html`
    <section>
      <div class="intro-name">
        Hello! I Am <span class="highlight-name">Leonel Fonseca</span>
      </div>

      <div class="top-row">
        <div class="image-wrapper">
          <img class="glow" src="${glowImg}" alt="Glow background" />
          <img class="avatar" src="${meImg}" alt="Leonel Fonseca" />
        </div>

        <div class="top-texts">
          <div class="subtitle">A Designer who</div>
          <div class="judes">
            Judges a book<br />
            by its <span class="highlight-name">cover</span>...
          </div>
          <div class="description">
            Because if the cover does not impress you what else can?
          </div>
        </div>
      </div>

      <div class="software-engineer">I'm a Software Engineer</div>
      <div>Currently, I'm a Software Engineer at BBVA,</div>
      <div>
        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
        I make meaningful and delightful digital products that create an equilibrium
        between user needs and business goals.
      </div>
    </section>
  `;
}
}

customElements.define('section-container', SectionContainer);