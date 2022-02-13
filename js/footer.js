class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="mt-5" style="background-color: #4A2B93;">
        <div class="container  ">
            <div class="row pt-5 textCenter">
                <div class="col-md-2 pt-3">
                    <img src="images/Logo.svg" alt="" srcset="">
                </div>
                <div class="col-md-8">
                    <div>
                        <h1 class="color_green h1_size_footer d-none d-sm-block">Grow <span
                                class="color_lightblue">your</span> <span class="color_yellow">ideas</span><br>
                            <span class="color_white">with us.</span></h1>
                        <h1 class="color_green h1_size_footer d-block d-sm-none mt-5">Grow <span
                                class="color_lightblue">your</span> <br> <span class="color_yellow">ideas</span>
                            <span class="color_white">with us.</span></h1>
                    </div>
                </div>
                <div class="col-md-2 pt-2 d-none d-sm-block">
                    <div>
                        <a class="color_white" href="https://www.behance.net/design_prashant" target="_blank">Behance</a>
                    </div>
                    <div class="color_white mt-3">
                        <a class="color_white" href="https://dribbble.com/Prashant_Koli" target="_blank">Dribbble</a>
                    </div>
                </div>
                <div class="col-md-2 mt-5 d-block d-sm-none">
                    <div>
                        <a class="color_white" href="https://www.behance.net/design_prashant" target="_blank">Behance</a>
                    </div>
                    <div class="color_white mt-4">
                        <a class="color_white" href="https://dribbble.com/Prashant_Koli" target="_blank">Dribbble</a>
                    </div>
                </div>
            </div>
            <div class="row  pb-3 textCenter" style="padding-top: 8rem;">
                <div class="col-md-10 color_white mt-3">
                    Design Firm in Delhi, India </br>+91 7210519361
                </div>
                <div class="col-md-10 color_white mt-3">
                    Ugna design pvt ltd. All rights reserved.
                </div>
                <div class="col-md-2 mt-3">
                    <div class="color_white">
                        Made in India
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);
