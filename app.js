console.log("Let's get this party started!");

const $searchInput = $("#gif-search");
let $divGif = $("#appendGif");
// appends gif to file
function addGif(res){
    let randomGif = Math.floor(Math.random()*50);
    let $newGif = $("<img>", 
    {src: res.data[randomGif].images.original.url
    });
    let gifURL = $newGif.get(0).src;
    let gifToAdd = document.createElement("img");
    gifToAdd.src = gifURL;
    $($divGif).append(gifToAdd);
}




$("#gif-form").on("submit", async function (evt){
    evt.preventDefault();
    let searchTerm = $searchInput.val();
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
        q: searchTerm,
        api_key : "S3ezO5F0Ob33iBNr2ItZStbwQ9yU2xCy"
        }
    })
    addGif(res.data);
})

$("#remove").on("click", "button", function (evt){
    $divGif.empty();
    console.log("empty");
})