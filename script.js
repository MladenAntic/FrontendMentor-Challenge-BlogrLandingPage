const productLink = document.querySelector(".product-link");
const companyLink = document.querySelector(".company-link");
const connectLink = document.querySelector(".connect-link");
const productDropdown = document.querySelector(".product-dropdown");
const companyDropdown = document.querySelector(".company-dropdown");
const connectDropdown = document.querySelector(".connect-dropdown");
const toggleMenu = document.querySelector(".toggle-menu");
const mobileNavigation = document.querySelector(".mobile-navigation-container");
const productLinkMobile = document.querySelector(".product-link-mobile");
const companyLinkMobile = document.querySelector(".company-link-mobile");
const connectLinkMobile = document.querySelector(".connect-link-mobile");
const productDropdownMobile = document.querySelector(".product-dropdown-mobile");
const companyDropdownMobile = document.querySelector(".company-dropdown-mobile");
const connectDropdownMobile = document.querySelector(".connect-dropdown-mobile");
const closeIcon = document.createElement("div");
closeIcon.innerHTML = '<img src="images/icon-close.svg" alt="Close Icon">';
closeIcon.style.cursor = "pointer";
closeIcon.style.position = "fixed";
closeIcon.style.right = "10%";

productLink.addEventListener("click", () => {
  productDropdown.classList.toggle("hide");
});

companyLink.addEventListener("click", () => {
  companyDropdown.classList.toggle("hide");
});

connectLink.addEventListener("click", () => {
  connectDropdown.classList.toggle("hide");
});

toggleMenu.addEventListener("click", () => {
  mobileNavigation.style.display = "block";
  toggleMenu.replaceWith(closeIcon);

  closeIcon.addEventListener("click", () => {
    mobileNavigation.style.display = "none";
    closeIcon.replaceWith(toggleMenu);
  });
});

function hideMobileMenu() {
  if (window.innerWidth >= 768) {
    mobileNavigation.style.display = "none";
    closeIcon.replaceWith(toggleMenu);
  }
}

window.addEventListener("resize", hideMobileMenu);

productLinkMobile.addEventListener("click", () => {
  productDropdownMobile.classList.toggle("hide");

  companyDropdownMobile.classList.add("hide");
  connectDropdownMobile.classList.add("hide");
});

companyLinkMobile.addEventListener("click", () => {
  companyDropdownMobile.classList.toggle("hide");

  productDropdownMobile.classList.add("hide");
  connectDropdownMobile.classList.add("hide");
});

connectLinkMobile.addEventListener("click", () => {
  connectDropdownMobile.classList.toggle("hide");

  productDropdownMobile.classList.add("hide");
  companyDropdownMobile.classList.add("hide");
});
