// class dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
// const rex = new dog(
//
// )

class school {
    constructor(gender, color, room, table, chair, height, weight,board, closet, camera, computeer, lamp, door, window, floorColor,) {
        this.gender = gender;
        this.color = color;
        this.room = room;
        this.table = table;
        this.chair = chair;
        this.height = height;
        this.weight = weight;
        this.board = board;
        this.closet = closet;
        this.camera = camera;
        this.comuter = computeer;
        this.lamp = lamp;
        this.door = door;
        this.window = window;
        this.floorColor = floorColor;
    }

}
const school1 = new school(
    "mall",
    "orange",
    "35",
    "500",
    "1000",
    "150",
    "20",
    "35",
    "70",
    "40",
    "20",
    "140",
    "35",
    "70",
    "topas",
)
console.log(school1)

class home extends school {
    constructor(gender, color, room, table, chair, height, weight, closet, camera, computeer, lamp, window, floorColor,sofa) {
        super(gender, color, room, table, chair, height, weight, closet, camera, computeer, lamp);
        this.sofa = sofa;
        this.window = window;
        this.floorColor = floorColor;
    }
    purpose () {
        console.log(`home sofa: ${this.sofa}`)
    }
}
const home1 = new home (
    "mall",
    "orange",
    "4",
    "2",
    "15",
    "8",
    "3",
    "2",
    "3",
    "1",
    "6",
    "4",
    "topas",
    "2",
)

home1.purpose();
console.log(home1)