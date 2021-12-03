class breakfastExpand extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const breakfastStyle = document.createElement("style");
    const breakfastBody = document.createElement("body");

    breakfastBody.classList.add("hideScroll");

    breakfastStyle.innerHTML = `
        * {
        margin: 0;
        padding: 0;
        font-family: Didot;
        }

        body {
        width: 100vw;
        }

        .breakfast-hero {
        /*size the hero section */
        width: 100vw;
        height: 70vh;

        /* flex */
        display: flex;
        align-items: center;
        text-align: left;
        background-image: url(images/pexels-photo-4109384.jpeg);
        background-size: cover;
        background-repeat: no repeat;
        background-position: center center;
        background-attachment: fixed;
        }

        .breakfast-hero-module {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 10px;
        }

        .breakfast-hero-module-wrapper {
        justify-content: center;
        margin-bottom: 20px;
        margin: auto;
        border: 3px #ffcb3d inset;
        align-items: center;
        text-align: center;
        background-color: white;
        opacity: 0.7;
        height: 220px;
        width: 450px;
        }

        .breakfast-hero-module-wrapper h1 {
        opacity: 1;
        font-size: 1.8em;
        color: #402a26;
        text-decoration: 3px underline #ffcb3d;
        justify-content: center;
        margin: auto;
        padding: 1rem;
        }

        .breakfast-hero-module-wrapper p {
        font-size: 1em;
        color: #402a26;
        margin: auto;
        width: 300px;
        }

        .breakfast-hero-module-wrapper:hover {
        opacity: 0.9;
        transition: 0.4s;
        }

        .hero-search {
        margin: auto;
        display: flex;
        max-width: 350px;
        height: 40px;
        background: white;
        opacity: 0.45;
        border-radius: 10px;
        }

        .hero-search input {
        padding: 15px;
        width: 100%;
        border-radius: 30px;
        outline: none;
        border: none;
        font-size: 16px;
        }

        #hero-icon {
        background: #3b3838;
        color: white;
        width: 35px;
        height: 23px;
        border-radius: 50%;
        cursor: pointer;
        margin: 5px;
        }

        #hero-icon:hover {
        transform: scale(1.07);
        transition: all 0.3s ease-out;
        }

        label {
            padding: 4px;
        }
    `;

    breakfastBody.innerHTML = `
        
        <section class="breakfast-hero">
            <div class="breakfast-hero-image">
            </div>
            <section class="breakfast-hero-module"> 
                <div class="breakfast-hero-module-wrapper">
                    <h1> Breakfast Recipes </h1>
                    <p> From healthy breakfasts to indulgent dishes and everything in between, there's no doubt you'll find something easy and tasty you'll love.</p>
                </div>
            </br>
                <div class="hero-search">
                    <input type="text" placeholder="Search here...." />
                    <label for="" id="hero-icon">
                        <p> Go! </p>
                    </label>
                </div>
            </section>
        </section>
    </header>
    <main>

    <section class="section-recipes-display seen">
            
            <div class="recipes-wrapper">
                <a class="back">&#10094</a>
                <a class="forward">&#10095</a>
            </div>

            <div class="recipes-wrapper">
                <a class="back">&#10094</a>
                <a class="forward">&#10095</a>
            </div>

            <div class="recipes-wrapper">
                <a class="back">&#10094</a>
                <a class="forward">&#10095</a>
            </div>
        </section>
    </main>

    <footer>

    </footer>
    `;

    this.shadowRoot.append(breakfastStyle, breakfastBody);
  }
}

customElements.define("breakfast-expand-page", breakfastExpand);
