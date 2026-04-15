import { LitElement, html, css } from "lit";

class AppFooter extends LitElement {
  static styles = css`
    footer {
      padding: 80px 24px 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      text-align: center;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 48px;
      margin-bottom: 24px;
      font-weight: bold;
    }

    .description {
      max-width: 600px;
      margin: 0 auto 24px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }

    .email {
      color: #a855f7;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.2s;
    }

    .email:hover {
      color: #c084fc;
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 40px;
    }

    .icon {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(168, 85, 247, 0.3);
      transition: all 0.2s ease;
    }

    .icon:hover {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(168, 85, 247, 0.5);
    }

    .icon img {
      width: 20px;
      height: 20px;
    }

    .bottom {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
    }
  `;

  render() {
    return html`
      <footer id="contact">
        <div class="container">
          
          <h2>Contact</h2>

          <p class="description">
            I'm currently looking to join a cross-functional team that values improving 
            people's lives through accessible design, or have a project in mind? Let's connect.
          </p>

          <a href="mailto:fonsecaleonel2@gmail.com" class="email">
            fonsecaleonel2@gmail.com
          </a>

          <!-- Social icons -->
          <div class="socials">
            <a class="icon" href="#">
              <img src="/assets/insta.webp" alt="Instagram">
            </a>

            <a class="icon" href="#">
              <!-- GitHub SVG -->
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 
                0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234
                c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756
                -1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237
                1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604
                -2.665-.305-5.467-1.334-5.467-5.931 
                0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 
                0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 
                1.02.005 2.047.138 3.006.404 
                2.291-1.552 3.297-1.23 3.297-1.23 
                .653 1.653.242 2.874.118 3.176 
                .77.84 1.235 1.911 1.235 3.221 
                0 4.609-2.807 5.624-5.479 5.921 
                .43.372.823 1.102.823 2.222v3.293
                c0 .319.192.694.801.576 
                4.765-1.589 8.199-6.086 8.199-11.386 
                0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a class="icon" href="#">
              <!-- LinkedIn SVG -->
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569
                c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                c.477-.9 1.637-1.85 3.37-1.85
                3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
              </svg>
            </a>
          </div>

          <div class="bottom">
            © ${new Date().getFullYear()} Leonel Fonseca. All rights reserved.
          </div>

        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);