class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a href="index.html">
                        <img src="images/NavLogo.png" alt="" srcset="" loading="lazy" width="106" >
                    </a>
                    <button type="button" id="sidebarCollapse" class="btn">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        `
    }
}

customElements.define('my-header', MyHeader);
