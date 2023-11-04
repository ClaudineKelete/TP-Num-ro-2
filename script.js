$("#click-on").click(function() {
    let val=1

    val=Math.floor(Math.random() * 6) + 1

    switch (val) {
        case 1:
            console.log("mot 1")
            $('#msg').html("Bonjour")
            break;

        case 2:
            console.log("mot 2")
            $('#msg').html("jeu")
            break;

        case 3:
            console.log("mot 3")
            $('#msg').html("bracage")
            break;

        case 4:
            console.log("mot 4")
            $('#msg').html("voyage")
            break;

        case 5:
            console.log("mot 5")
            $('#msg').html("saga")
            break;
        default:
            console.log("mot 6")
            $('#msg').html("A plus")
            break;
    }
})