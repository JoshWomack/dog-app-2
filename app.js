function watchForm() {
    $("form").submit(e => {
        e.preventDefault();
        const numDogs = $("#dog-breed-input").val();
        getDogImage(numDogs);
        $("#dog-breed-input").val("")
    });
}

function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === "success") {
                renderImages(data.message, breed)
            } else {
                renderError()
            };
        })
        .catch(err => console.error(err));

}

function renderImages(url, breed) {
    $(".image-container").html(
        `<img src="${url}" alt="photo of ${breed}">`
    )
}

function renderError() {
    $(".image-container").html(
        `<P>That breed was not found</p>`
    )
};

$(function () {
    watchForm();
})