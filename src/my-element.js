import { LitElement, html, css } from "lit";
class Ntfy extends LitElement {
    static properties = {
        back: { type: String }
    }
    constructor() {
        super();
        this.back = 'https://i.scdn.co/image/ab6761610000f178318961954ebb114c9d79792e'
        this.artistIds = ['3tW7oxLDm9fGjPYCFnqnBY', '53XhwfbYqKCa1cC15pYq2q', '4gzpq5DPGxSnKTe4SA8HAU']
        this.actual = '3tW7oxLDm9fGjPYCFnqnBY'
        this.title = ""
        this.autor = ""
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
            width: 130px;
            height: 130px;
            box-sizing: border-box;
            filter: drop-shadow(0px 0px 10px #ffffff19);
            border-radius: 15px;
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
        .controlers > button:nth-child(2) {
            background: none;
            border: none;
        }
        .controlers > button:nth-child(2) > i {
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
            transform: translateX(12px);
            z-index: -1;
        }
        .next > i:last-child {
            transform: translateX(-12px);
            z-index: -1;
        }
        .prev, .next {
            background: none;
            border: none;
            cursor: pointer;
        }
        .prev > i , .next > i{
            font-size: 1.1rem;
            background: none;
            border: none;
            color: #27ae60;
        }
        
    `;
    render() {
        return html`
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>    
    <div class="container">
        <div class="separators img__container">
        <i class='bx bx-chevron-left' ></i>
            <img src=${this.back}>
        </div>
        <div class="separators">
            <div class="text">
                <h3>money machine</h3>
                <p>1000 gecks</p>
            </div>
            <div class="controlers">
                <button class="prev" @click="${this._prev}">
                    <i class='bx bxs-left-arrow' ></i>
                    <i class='bx bxs-left-arrow' ></i>
                </button>
                <button><i class='bx bxs-right-arrow'></i></button>
                <button class="next" @click="${this._next}">
                    <i class='bx bxs-right-arrow'></i>
                    <i class='bx bxs-right-arrow'></i>
                </button>
            </div>
        </div>
    </div>
    `;
    }
    async _next() {
        for (let val in this.artistIds) {
            if (this.artistIds[val] == this.actual) {
                console.log(this.actual);
                if(val == this.artistIds.length - 1){
                    this.actual = this.artistIds[this.artistIds.length - this.artistIds.length]
                }else {
                    this.actual = this.artistIds[Number(val) + 1]
                }
                console.log(this.actual);
                break
            };
        }
        // this.requestUpdate()
    }
    async _prev() {
        for (let val in this.artistIds) {
            if (this.artistIds[val] == this.actual) {
                console.log(this.actual);
                if(val == 0){
                    this.actual = this.artistIds[this.artistIds.length - 1]
                }else {
                    this.actual = this.artistIds[Number(val) - 1]
                }
                console.log(this.actual);
                break
            };
        }
        // this.requestUpdate()
    }
}
customElements.define("my-notification", Ntfy)