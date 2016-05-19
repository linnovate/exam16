var tree = [
{
	id : 1,
	title: "Alex",
	parentID: 0,
	gender: "male"
},
{
	id : 2,
	title: "Avi",
	parentID: 1,
	gender: "male"
},
{
	id : 3,
	title: "Aviva",
	parentID: 1,
	gender: "female"
},
{
	id : 4,
	title: "Bonita",
	parentID: 3,
	gender: "female"
},
{
	id : 5,
	title: "Boaz",
	parentID: 3,
	gender: "male"
},
{
	id : 6,
	title: "Joe",
	parentID: 2,
	gender: "male"
},
{
	id : 7,
	title: "Judy",
	parentID: 1,
	gender: "female"
},
{
	id : 8,
	title: "Deborah",
	parentID: 6,
	gender: "female"
},
{
	id : 9,
	title: "Hadas",
	parentID: 1,
	gender: "female"
},
{
	id : 10,
	title: "William",
	parentID: 2,
	gender: "male"
},
{
	id : 11,
	title: "Jacky",
	parentID: 10,
	gender: "male"
},
{
	id : 12,
	title: "Zvulun",
	parentID: 9,
	gender: "male"
},
{
	id : 13,
	title: "Chava",
	parentID: 9,
	gender: "female"
},
{
	id : 14,
	title: "Teddy",
	parentID: 10,
	gender: "male"
},
{
	id : 15,
	title: "Yevgeni",
	parentID: 7,
	gender: "male"
},
{
	id : 16,
	title: "Kochava",
	parentID: 1,
	gender: "female"
},
{
	id : 17,
	title: "Leon",
	parentID: 16,
	gender: "male"
},
{
	id : 18,
	title: "Meir",
	parentID: 15,
	gender: "male"
},
{
	id : 19,
	title: "Mary",
	parentID: 15,
	gender: "female"
},
{
	id : 20,
	title: "Nava",
	parentID: 15,
	gender: "female"
},
{
	id : 21,
	title: "Sigalit",
	parentID: 15,
	gender: "female"
},
{
	id : 22,
	title: "Susann",
	parentID: 6,
	gender: "female"
},
{
	id : 23,
	title: "Pablo",
	parentID: 1,
	gender: "male"
},
{
	id : 24,
	title: "Charles",
	parentID: 6,
	gender: "male"
},
{
	id : 25,
	title: "Karen",
	parentID: 15,
	gender: "female"
},
{
	id : 26,
	title: "Raul",
	parentID: 6,
	gender: "male"
},
{
	id : 27,
	title: "Shaul",
	parentID: 16,
	gender: "male"
},
{
	id : 28,
	title: "Tehila",
	parentID: 2,
	gender: "female"
},
{
	id : 29,
	title: "Tom",
	parentID: 2,
	gender: "male"
}];


//var nodes = [
//    {
//        "id": "12",
//        "parentId": "0",
//        "text": "Man",
//        "level": "1",
//        "children": null
//    }, { /*...*/ }];

var map = {}, node, roots = [];
for (var i = 0; i < tree.length; i += 1) {
    node = tree[i];
    node.children = [];
    map[node.id] = i; // use map to look-up the parents
    if (node.parentID != 0) {
        tree[map[node.parentID]].children.push(node);
    } else {
        roots.push(node);
    }
}
console.log(roots); // <-- there's your tree


function to_ul(obj) {
    var i, li, g, list = document.createElement("ul");
    
    for (i = 0; i < obj.length; i++) {
        if (obj[i].gender == "male")
            g = " M";
        else g = " F";

        document.getElementById('list').innerHTML += '<ul>' + obj.title + g + '</ul>';
        
        li = document.createElement("li");
        li.appendChild(document.createTextNode(obj[i].title));
        
        if (obj[i]) {
            li.appendChild(to_ul(obj[i].children));
            document.getElementById('list').innerHTML += '<li>' + obj[i].title + g + '</li>';
        }
        list.appendChild(li);
    }
    return list;
}


function to_ul2(branches) {
    var list = document.createElement("ul");

    for (var i = 0; i < branches.length; i++) {
        var branch = branches[i];
        var li = document.createElement("li");

        var text = document.createTextNode(branch.title);
        li.appendChild(text);

        if (branch.branches) {
            document.getElementById('list').innerHTML += '<ul>' + text + '</ul>';
            li.appendChild(to_ul2(branch.branches));
        }
        document.getElementById('list').innerHTML += '<li>' + text + '</li>';
        list.appendChild(li);
    }
    return list;
}

function renderTree() {
    to_ul(roots);
}