var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,r){n[e]=r},e.parcelRequired7c6=t);var i=t("99kNq"),d=t("79xYC"),o=t("04jNI"),l=t("I2Abx"),s=t("krGWQ");function a(){window.addEventListener("keydown",c),s.refs.modalFilm.classList.toggle("is-hidden"),s.refs.body.classList.toggle("no-scroll"),s.refs.modalFilm.classList.contains("is-hidden")&&window.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&a()}s.refs.sliderModal.addEventListener("click",(function(e){if(e.currentTarget===e.target)return;document.querySelector(".wrap-disc").innerHTML="";const r=e.target.closest(".js-item"),n=Number(r.dataset.id);(0,d.fetchModal)(n).then((e=>{(0,i.renderMarkupModal)(e)})).finally((()=>(0,o.spinnerOff)())),(0,o.spinnerOn)(),s.refs.trailerBtn.addEventListener("click",(()=>(0,l.fetchTrailer)(n)),{once:!0}),a()})),s.refs.closeModalSliderBtn.addEventListener("click",a),s.refs.backdropSlider.addEventListener("click",(function(e){e.currentTarget===e.target&&a()})),s.refs.closeModalBtn.addEventListener("click",(()=>{document.querySelector(".modal-trailer")&&(document.querySelector(".modal-trailer").innerHTML="")}));
//# sourceMappingURL=my-library.b714725a.js.map