import { LitElement, html, css } from "lit";

import { MyLeftBar } from "./my-left-bar";
customElements.define('my-left-bar', MyLeftBar);

import { Cardnewmusic } from "./newMusic";

import { myTrack } from "./my-track";
customElements.define('my-track', myTrack);

import { Reproductor } from "./reproductor";
customElements.define('my-reproductor', Reproductor);

import { TrackList } from "./my-track-list";
customElements.define('my-trcklist', TrackList);



class myGrid extends LitElement {

    static styles = css`
    
    *{
        margin: none;
        padding: none;
        box-sizing: border-box;

    }

    .main{
        height: 100vh;
        display: grid;
        grid-template-columns: 80px 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
    }
    .main__aside{
        height: 100vh;
        background: #dfdfdf;
        padding: 10px;
        display: grid;
        grid-template-rows: 130px 1fr 130px
    }
    .aside__profile{
        border-bottom: 1px solid gray
    }
    .aside__buttons{
        
    }
    .aside__exit{
        
    }
    .main__section1{
        height: 100vh;
        background: white;
        box-shadow: 9px 0 20px -20px;
    }

    .main__section1 h1{
        font-size: 3em;
        margin-left: 5%
    }

    .top__chart__title{
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
    }

    .youmaylike h2{
        margin: 15px;
    }

    .main__section2{
        height: 100vh;
        z-index: -1
    }

    .main__section3{
        height: 100vh;
        overflow-y: scroll;
        background: white;
        box-shadow: 10px 10px 20px;
    }

    .trcklist {
        overflow-y: scroll;
    }

    .tracklistupper {
        margin-left: 20px;
    }


    @media (max-width: 849px){
        .main{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 80px;
        }
        .aside__profile{
            display: none
        }
        .aside__exit{
            display: none
        }
        .main__section1{
            display: none
        }
        .main__section2{
            display: none
        }
    }
    `

    render(){
        return html`
        <main class="main">
            <aside class="main__aside">
            <my-left-bar></my-left-bar>
            </aside>

            <section class="main__section1">
                <h1>Discover<br>New music</h1>
                    <div class="top__chart__title">
                        <h2>Top-chart</h2><h2>Week</h2>
                    </div>

            <new-music></new-music>

                <div class="youmaylike">
                    <h2>You may Like</h2>
                </div>

            <my-track></my-track>
            
            </section>
            <section class="main__section2">
            <my-reproductor><my-reproductor>
            
            </section>
            <section class="main__section3">
            <div class="tracklistupper"> 
            <h1>Track List</h1>
            <h2>Playing Next</h2>
            <div>

            <my-trcklist class="trcklist"></my-trcklist>
            </section>
        </main>
        `
    }
}

customElements.define("my-grid" , myGrid)
