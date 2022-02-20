class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="sidebar">
                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about.html">About</a>
                    </li>
                    <li>
                        <a href="/projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="/cc.html">Cultures Calendar</a>
                    </li>
                </ul>
            </nav>
        `
    }
}

customElements.define('my-sidebar', MySidebar);