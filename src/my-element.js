import { LitElement, html, css } from "lit";
class Ntfy extends LitElement {
    constructor() {
        super();
    }
    static styles = css`
        *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        }
        .container {
            display: flex;
            flex-direction: column;
            height: 224px;
            width: 184px;
            background: linear-gradient(to left bottom, #86819a, #333b5c, #444a25 80%);
            color: #fff;
            border-radius: 20px;
            padding: 3px 0px;
            position: relative;
            z-index: -100;
        }
        .separators {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .img__container {
            height: 65%;
        }
        .img__container img {
            width: 140px;
            height: 140px;
            box-sizing: border-box;
            filter: drop-shadow(0px 0px 10px #ffffff19)
        }
        .img__container > i {
            height: max-content;
            position: absolute;
            top: 15px;
            left: 3px;
            font-size: 1.5rem;
            font-weight: 500;
        }
        .separators:last-child{
            flex-direction: column;
            text-transform: capitalize;
            text-align: center;
            display: flex;
            height: 35%;
            text-shadow: 0px 0px 10px #00000061;
        }
        .text {
            height: max-content;
        }
        h3, p {
            margin: 0px;
            font-size: .9rem;
            font-weight: 600;
        }
        p {
            font-weight: 525;
        }
        .controlers {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            width: 100%;
            height: 100%;
        }
        .controlers > i {
            font-size: 1.3rem;
            font-weight: 500;
            cursor: pointer;
            color: #fff;
            text-shadow: none;
            box-shadow: 0px 0px 10px #00000061;
            background: #27ae60;
            border-radius: 50%;
            padding: 7px;
            position: relative;
        }
        .prev > i:first-child {
            transform: translateX(8px);
            z-index: -1;
        }
        .next > i:last-child {
            transform: translateX(-8px);
            z-index: -1;
        }
        .prev, .next{
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            color: #27ae60;
        }
        
    `
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