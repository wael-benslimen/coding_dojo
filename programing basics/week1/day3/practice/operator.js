function howmuchcakeleft(nbpc,nbp ) {
    x = nbpc - nbp
    if (x == 0) {
        console.log("you have no leftovers for you")
    }
    else {
        if (x <= 2) {
            console.log("you have leftovers")
        }
        else {
            if (3 >= x >= 5) {
                console.log("you have leftovers to share")
            }
            else {
                console.log("hold another party")
            }
        }
    }
}

howmuchcakeleft(12, 10)