import { LitElement, html, css } from "lit"; 

class AppHeader extends LitElement {

  static styles = css`
    header {
      background: #1A0B2E;
      padding: 30px 250px;
    }

    nav {
      display: flex;
      gap: 160px;
      justify-content: flex-end;
    }

      a {
        color: var(--color-text, #f4f1ff);
        text-decoration: none;
        color: inherit;
        font-size: 20px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 100;
      }

    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Lab</a>
        </nav>
      </header>
    `;
  }}

customElements.define('app-header', AppHeader);
