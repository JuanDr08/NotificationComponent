import { LitElement, html, css } from "lit";
class Ntfy extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>    
    <div class="container">
        <div class="separators img__container">
        <i class='bx bx-chevron-left' ></i>
            <img src="./src/assets/image20.png">
        </div>
        <div class="separators">
            <div class="text">
                <h3>money machine</h3>
                <p>1000 gecks</p>
            </div>
            <div class="controlers">
                <div class="prev">
                    <i class='bx bxs-left-arrow' ></i>
                    <i class='bx bxs-left-arrow' ></i>
                </div>
                <i class='bx bxs-right-arrow'></i>
                <div class="next">
                    <i class='bx bxs-right-arrow'></i>
                    <i class='bx bxs-right-arrow'></i>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
customElements.define("my-notification", Ntfy)