
$(document).ready(function () {
    var g;
    for (var i = 0; i < tree.length; i++) {
        if (tree[i].gender == 'male')
            g = '  M';
        else g = '  F'
        if (i == 0) {
            $("#list").append('<li id=' + (i + 1) + '>' + tree[i].title + g + '</li>');
        }

        $('#' + (i + 1)).append('<ul id=' + i + 1 + '>').addClass("c1");
        for (var j = 0; j < tree.length; j++) {
            if (tree[j].gender == 'male')
                g = ' M';
            else g = ' F'
            if (tree[j].parentID == tree[i].id)
                $('#' + i + 1).append('<li id=' + (j + 1) + '>' + tree[j].title + g + '</li>').addClass("c1");
        }
    }
    $("#list").append(+ +'</ul>')

    });


//$(document).ready(function () {
//    var x = 0;
//    var pa = 100;
//    for (var i = 0; i < tree.length; i++) {
//        //find the parent id
//        if (tree[i].id < pa)
//            pa = tree[i].id;
//    }
//    var obj;
//    for (var i = 0; i < tree.length; i++) {
//        if (tree[i].id == pa)
//            obj = tree[i];//the first obj ifrom the json
//    }
//    var myDiv= $("#list").text(obj.title).append('<ul id=' + x+ '>');
//    myDiv.append('<li id=' + pa + '>' + tree[pa].title + '</li>');
   
//    var first = $("#list").append('<li id=' + (x + 1) + '>' + tree[x].title + g + '</li>');
//    makeElements(pa,tree)
//    $("#list").append(+ +'</ul>') 
//});



//var myDiv = d3.select('#list')
//.append("ul")//root ul
//.append("li")//root li
//.text(tree.title)//root li name
//.append("ul");//to this add ul

////note i am iterating through the data via recursion.
//function makeElements(parentDOM, myData) {
//    myData.children.forEach(function (child) {
//        //add li element
//        parentDOM.append("li").text(child.title);
//        //if children then make ul
//        if (child.children.length > 0) {
//            var ul = parentDOM.append("ul");
//            //recurse pass ul as parentDOM

//            makeElements(ul, child);
//        }
//    });
//}

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


