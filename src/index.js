function makeEmailClickable() {
    const emailInBase64 = atob("dGFldWtAc3RhbmZvcmQuZWR1");

    const emailLinks = document.querySelectorAll(
        "[data-replace-href-with-email]"
    );

    emailLinks.forEach((link) => {
        link.onmouseover = link.ontouchstart = () =>
            link.setAttribute("href", `mailto:${emailInBase64}`);
    });
}

(() => {
    makeEmailClickable();
})();
