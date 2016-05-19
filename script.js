$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
window.onload = function () {
    var idToNodeMap = {};
    var root = null;
    for (var i = 0; i < tree.length; i++) {
        var datum = tree[i];
        datum.children = [];
        idToNodeMap[datum.id] = datum;
        if (datum.parentID == 0) {
            root = datum;
        } else {
            parentNode = idToNodeMap[datum.parentID];
            parentNode.children.push(datum);
        }
    }
    processTree(root, document.getElementById("list"),Math.floor((Math.random() * 16) + 1).toString());
}
    function processTree(node, element,color) {
        var li = document.createElement('li');
        li.style.color = "#" + color;
        li.innerText = node.title;
        var div = document.createElement('div');
        li.title = "id :" + node.id + ", parentID: " + node.parentID + ", gender: " + node.gender;
        li.setAttribute("data-toggle","tooltip");
        element.appendChild(li);
        if (node.children.length) {
            var ul = document.createElement('ul');
            li.appendChild(ul);
            color=(parseInt(color, 16) + Math.floor((Math.random() * 160000) + 1)).toString();
            for (var i = 0; i < node.children.length; i++) {
                processTree(node.children[i], ul, color);
            }
        }
    }

function getTreeHTML(node) {
    var html = "";
    if (node.parentID == 0)
        html += '<ul>';

    html += '<li>';
    html += node.name;
    if (node.children.length > 0) {
        html += '<ul>';
        for (var i in node.children) {
            html += getTreeHTML(node.children[i]);
        }
        html += '</ul>';
    }
    html += '</li>';

    if (node.parentID == 0)
        html += '</ul>';
    return html;
}
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
