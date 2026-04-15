import { LitElement, html,css } from "lit";  
import favicon from '../../app/assets/favicon.ico';
import meImg from "../../app/assets/me.png";
import glowImg from "../../app/assets/me-glow.png";

class SectionContainer extends LitElement {
  
  static styles = css`
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    section {
      display: flex;
      flex-direction: column;
      padding: 60px 220px;
      font-family: 'Preahvihear', sans-serif;
    }
    .top-row {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 16px;
    }
    .top-texts {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    div {
      font-family: 'Preahvihear', sans-serif;
    }
    .highlight-name {
      color: #7127BA;
    }
    .software-engineer {
      font-size: 50px;
    }
    .judes {
      font-size: 50px;
    }
    .work-experience {
      font-size: 50px;
    }
  `;

  render() {
    return html`
      <section>
        <div>Hello! I Am <span class="highlight-name">Leonel Fonseca</span></div>
        <div class="top-row">
          <img src="${favicon}" alt="Favicon">
          <div class="top-texts">
            <div>A Designer who</div>
            <div class="judes">Judges a book<br>by its <span class="highlight-name">cover</span>...</div>
            <div>Because if the cover does not impress you what else can?</div>
          </div>
        </div>
        <div class="software-engineer">I'm a Software Engineer.| </div>
        <div>Currently, I'm a Software Engineer at BBVA,</div>
       <div>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goals.</div>
<div class="work-experience">Work Experience</div>        
</section>
    `;
  }
}

customElements.define('section-container', SectionContainer);