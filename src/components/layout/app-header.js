import { LitElement, html, css } from "lit";
import logo from "../../app/assets/logo.png";

class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(26, 11, 46, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 22px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo img {
      height: 32px;
      width: auto;
      display: block;
      transform: scale(2);
      transform-origin: left center;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 110px;
    }

    a {
      color: #f4f1ff;
      text-decoration: none;
      font-size: 20px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 400;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #a855f7;
    }

    @media (max-width: 1024px) {
      .container {
        padding: 18px 20px;
      }

      nav {
        gap: 40px;
      }

      a {
        font-size: 18px;
      }

      .logo img {
        height: 34px;
      }
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 16px;
      }

      nav {
        gap: 24px;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="container">
          <a class="logo" href="#home">
            <img src="${logo}" alt="Logo" />
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#lab">Lab</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);