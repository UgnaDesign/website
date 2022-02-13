class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar navbar-light w-100 mt-2" style="position:fixed;top: 0;z-index: 1111;">
                <a href="index.html">
                    <img src="images/NavLogo.png" alt="" srcset="" loading="lazy" width="106" >
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style="background-color: bisque; text-align: center;">
                        <li class="nav-item active">
                            <a class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cc.html">Cultures Calendar</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `
    }
}

customElements.define('my-header', MyHeader);
