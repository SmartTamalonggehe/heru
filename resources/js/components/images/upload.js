// get id foto
const foto = document.getElementById("foto");
// show image preview to .image-preview
const showImages = () => {
    foto.addEventListener("change", (e) => {
        const imagePreview = document.querySelector(".image-preview");
        // reset image preview
        imagePreview.innerHTML = "";
        // create element class fotoPreview
        const fotoPreview = document.createElement("div");
        fotoPreview.classList.add("fotoPreview");
        // add fotoPreview to imagePreview
        imagePreview.appendChild(fotoPreview);

        fotoPreview.style.backgroundImage = `url(${URL.createObjectURL(
            e.target.files[0]
        )})`;

        fotoPreview.style.backgroundSize = "cover";
        fotoPreview.style.display = "block";
        fotoPreview.style.backgroundRepeat = "no-repeat";
        fotoPreview.style.backgroundPosition = "center";
        fotoPreview.style.backgroundColor = "transparent";
        fotoPreview.style.border = "none";
        fotoPreview.style.borderRadius = "20px";
        fotoPreview.style.height = "200px";
        fotoPreview.style.width = "100%";
        fotoPreview.style.display = "block";
        fotoPreview.style.margin = "0 auto";
        fotoPreview.style.boxShadow = "0 0 0 1px #ccc";
        fotoPreview.style.border = "1px solid #ccc";
        fotoPreview.style.padding = "0";
        fotoPreview.style.margin = "0";
        fotoPreview.style.overflow = "hidden";
        fotoPreview.style.position = "relative";
        fotoPreview.style.zIndex = "1";
        fotoPreview.style.transition = "all 0.3s ease-in-out";

        // add button delete
        const buttonDelete = document.createElement("button");
        buttonDelete.classList.add("remove-image");
        buttonDelete.innerHTML = "X";
        buttonDelete.style.position = "absolute";
        buttonDelete.style.top = "0";
        buttonDelete.style.right = "0";
        buttonDelete.style.backgroundColor = "transparent";
        buttonDelete.style.border = "none";
        buttonDelete.style.zIndex = "100";
        buttonDelete.style.cursor = "pointer";
        buttonDelete.style.color = "black";
        // add to parent fotoPreview
        fotoPreview.parentElement.appendChild(buttonDelete);
        // add event listener to button delete
        buttonDelete.addEventListener("click", (e) => {
            e.preventDefault();
            // transition to hide image
            fotoPreview.style.transition = "all 0.3s ease-in-out";
            fotoPreview.style.opacity = "0";
            // remove image
            setTimeout(() => {
                // delete background image from fotoPreview
                fotoPreview.style.backgroundImage = "";
                // hide fotoPreview
                fotoPreview.style.display = "none";
                foto.value = "";
            }, 300);
            // remove button delete
            buttonDelete.remove();
        });
    });
};

if (foto) {
    showImages();
}
