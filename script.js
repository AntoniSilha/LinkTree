/***
 * generate copy link address
 */
const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
/**
 * generate  toast allert
 */
        document.getElementById("toast").innerHTML = `
        <div class="toast-container">
                <p>✅Link ${action.parentElement.innerText} berhasil disalin!</p>
            </div>
        </div>
        `;
/**
 * remove toast
 */
        setTimeout(() => {
            document.querySelector("#toast .toast-container").classList.add("toast-gone");
        },300);

        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        },2000);
    })
});


/**
 * generate toast hoaver
 */
document.querySelectorAll(".links-icon i").forEach((linksicon) => {
    linksicon.addEventListener("mouseenter", () =>  {
        linksicon.classList.remove("ph");
        linksicon.classList.add("ph-fill");
    });

    linksicon.addEventListener("mouseleave", () =>  {
        linksicon.classList.remove("ph-fill");
        linksicon.classList.add("ph");
    });
})

/**
 * Animation text active scroll
 */
document.addEventListener("scroll", (e) => {
    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY}px)`;
});