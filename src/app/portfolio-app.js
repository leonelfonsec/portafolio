import { LitElement, html, css } from 'lit';
import '../components/layout/app-header.js';
import '../components/layout/app-footer.js';
import '../components/layout/section-container.js';

class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #11071F;
      foreground: #fff;
      color: var(--color-text, #f4f1ff);
      font-family: var(--font-poppins), Arial, Helvetica, sans-serif;
    }

    main {
      max-width: 2000px;
      margin: 0 auto;
    }

    h1 {
      margin: 0;
      font-size: 3rem;
      line-height: 1.1;
    }

    p {
      color: var(--color-text-muted, #b9add9);
    }
  `;

  render() {
    return html`
      <main>
        <app-header></app-header>
        <section-container></section-container>
        <app-footer></app-footer>
      </main>
    `;
  }
}

customElements.define('portfolio-app', PortfolioApp);