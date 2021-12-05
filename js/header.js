class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="w-100" style="position:fixed;top: 0;z-index: 1111;">
                <div class="row mx-0 mt-2">
                    <div class="col-6 mt-3">
                        <a href="index.html">
                            <img src="images/NavLogo.png" alt="" srcset=""  loading="lazy" width="106" >
                        </a>
                    </div>
                    <div class="col-6 text-right navLeft mt-3">
                        <div>
                            Design Firm in 
                        </div>
                        <div>
                            Delhi, India
                        </div>
                        <div>+91 7210519361</div>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('my-header', MyHeader);
