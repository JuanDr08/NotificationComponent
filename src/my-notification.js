import { LitElement, html, css } from "lit";

class Mynotification extends LitElement {
  constructor(){
    super()
    this.title = "Money Machine";
    this.description = "1000 Gecks";
    this.background = "/notificationwallpaper.jpg"; 
    this.album = '/album.png'; 
}

  static styles = css`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
  }

  .notification {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 22rem;
    height: 25rem;
    overflow: hidden;
    border-radius: 30px;
  }

  .notification::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/src/assets/notificationwallpaper.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
    z-index: -1;
  }

  .atras {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 40px;
    left: 15px;
    z-index: 2;
  }

  .atras img {
    width: 100%;
    height: 100%;
  }

  .center {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    position: relative;
    z-index: 1;
  }


  .center img {
    display: flex;
    max-width: 260px;
    max-height: 260px;
    border-radius: 30px;
  }



  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 150px;
  }

  .buttons img {
    height: auto;
    max-width: 100%;
    flex-grow: 1;
  }
    `

  render(){
    return html`
      <div class="notification">
          
        <div class="atras"><img src="/src/assets/atras.svg"></div>

        <div class="center">
          <img src="${this.album}" />
          <h2>${this.title}</h2>
          <h3>${this.description}</h3>

          <div class="buttons">
              <img src="/src/assets/anterior.svg">
              <img src="/src/assets/play.svg" class="play">
              <img src="/src/assets/siguiente.svg">
          </div>
        </div>
      </div>
    `
  }
  _guardar(e){
    this.name
  }
}

customElements.define("my-notification", Mynotification);