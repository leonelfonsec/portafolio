import { LitElement, html } from "lit";

class AppFooter extends LitElement {
  render() {
    return html`
      <footer>
        <p>Contact</p>
        <p>I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect. fonsecaleonel2@gmail.com</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);