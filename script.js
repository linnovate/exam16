var tree = [
{
    id: 1,
    title: "Alex",
    parentID: 0,
    gender: "male"
},
{
    id: 2,
    title: "Avi",
    parentID: 1,
    gender: "male"
},
{
    id: 3,
    title: "Aviva",
    parentID: 1,
    gender: "female"
},
{
    id: 4,
    title: "Bonita",
    parentID: 3,
    gender: "female"
},
{
    id: 5,
    title: "Boaz",
    parentID: 3,
    gender: "male"
},
{
    id: 6,
    title: "Joe",
    parentID: 2,
    gender: "male"
},
{
    id: 7,
    title: "Judy",
    parentID: 1,
    gender: "female"
},
{
    id: 8,
    title: "Deborah",
    parentID: 6,
    gender: "female"
},
{
    id: 9,
    title: "Hadas",
    parentID: 1,
    gender: "female"
},
{
    id: 10,
    title: "William",
    parentID: 2,
    gender: "male"
},
{
    id: 11,
    title: "Jacky",
    parentID: 10,
    gender: "male"
},
{
    id: 12,
    title: "Zvulun",
    parentID: 9,
    gender: "male"
},
{
    id: 13,
    title: "Chava",
    parentID: 9,
    gender: "female"
},
{
    id: 14,
    title: "Teddy",
    parentID: 10,
    gender: "male"
},
{
    id: 15,
    title: "Yevgeni",
    parentID: 7,
    gender: "male"
},
{
    id: 16,
    title: "Kochava",
    parentID: 1,
    gender: "female"
},
{
    id: 17,
    title: "Leon",
    parentID: 16,
    gender: "male"
},
{
    id: 18,
    title: "Meir",
    parentID: 15,
    gender: "male"
},
{
    id: 19,
    title: "Mary",
    parentID: 15,
    gender: "female"
},
{
    id: 20,
    title: "Nava",
    parentID: 15,
    gender: "female"
},
{
    id: 21,
    title: "Sigalit",
    parentID: 15,
    gender: "female"
},
{
    id: 22,
    title: "Susann",
    parentID: 6,
    gender: "female"
},
{
    id: 23,
    title: "Pablo",
    parentID: 1,
    gender: "male"
},
{
    id: 24,
    title: "Charles",
    parentID: 6,
    gender: "male"
},
{
    id: 25,
    title: "Karen",
    parentID: 15,
    gender: "female"
},
{
    id: 26,
    title: "Raul",
    parentID: 6,
    gender: "male"
},
{
    id: 27,
    title: "Shaul",
    parentID: 16,
    gender: "male"
},
{
    id: 28,
    title: "Tehila",
    parentID: 2,
    gender: "female"
},
{
    id: 29,
    title: "Tom",
    parentID: 2,
    gender: "male"
}];

function f() {
    var k = father(tree[0]);
    var x = document.createElement("ul");
    x.setAttribute("id", "ul");
    var element = document.getElementById("list");
    element.appendChild(x);
    x.innerHTML = tree[k].title + ' ' + tree[k].gender;
    children(tree[k]);
}

var d, j = 0, t;
function father(t) {
    if (t.id == 1)
        return j;
    else {
        for (var i = 0; i < tree.length; i++) {
            if (t.parentID == tree[i].id)
                j = i;
        }
        return father(tree[j]);
    }
}
var arr = [];
var q = -1;
function children(t) {
    for (var i = 0; i < tree.length; i++) {
        if (tree[i].parentID == t.id) {
                var x = document.createElement("li");
                var element = document.getElementById("ul");
                element.appendChild(x);
                x.innerHTML = tree[i].title + " " + tree[i].gender;
                arr +=i+" "; 
        }
    }
    q++;
    children(tree[(arr[q])]);

}
