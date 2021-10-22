function id(id) {
    return document.getElementById(id);
}
var A = "rod1", B = "rod2", C = "rod3";
function sleep(milliseconds,worker) {
    console.log("inside sleep");
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }else{
            worker;
        }
    }
}
function repeater(seconds,callback){
    var tar_date=new Date().getSeconds()+seconds;
    while(new Date().getSeconds()!==tar_date){
        callback();
    }

}
const TowerOfHanoi = (string, A, B, C) => {
    // rings
    if (string == 1) {
        // sleep(7000);
        console.log(`Move disk ${string} from ${A} to ${B} string 1`);
        id(B).appendChild(id(string));
        return;
    }
    // sleep(7000);
    TowerOfHanoi(string - 1, A, C, B);
    id(B).appendChild(id(string));
    console.log(`Move disk ${string} from ${A} to ${B} first call`);
    console.log("hello word");
    TowerOfHanoi(string - 1, C, B, A);
}
var arrayofwidths = ["30vmin", "25vmin", "20vmin", "15vmin", "10vmin"];
var arrayofcolors = ["red", "blue", "yellow", "pink", "darkgreen"];
var idcount;
console.log(window);
window.onload = () => {
    id("submit").addEventListener('click', async() => {
        var string = id("disks_input").value;
        idcount = string;
        id("disks_input").value = "";
        for (let i = 0; i < string; i++) {
            var rings = document.createElement("div");
            rings.id = idcount;
            rings.classList.add("disks");
            rings.style.backgroundColor = arrayofcolors[i];
            rings.style.width = arrayofwidths[i]
            id("rod1").appendChild(rings);
            idcount--;
        }
        await new Promise(r=>setTimeout(r,3000));
        TowerOfHanoi(string, A, B, C);
    })
}
