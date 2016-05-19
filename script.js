$("#document").ready(function () {

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
	parentID: 23,
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
    parents = [];
    for (var i = 0; i < tree.length; i++)//find the first parents(that have no parent)
    {
        if (!tree[i].parentID) {
            parents.push({ id: tree[i].id, title: tree[i].title,gender:tree[i].gender ,children: [] });
        }

    }
    for (var i = 0; i < parents.length; i++) {
        $("#main").append("<li class=' " + parents[i].gender + "' >" + parents[i].title + "<ul  id='" + parents[i].id + "'></ul></li>");

        parents[i].children = getChildren(parents[i].id);

    }
    function getChildren(parentID)
    {

        var children = [];
        for (var i = 0; i < tree.length; i++) {

            if (tree[i].parentID == parentID)//finding a child;
            {2
            $("#" + parentID).append("<li class=' " + tree[i].gender + "'>" + tree[i].title + "<ul  id='" + tree[i].id + "'></ul></li>")
                children.push({ id: tree[i].id, title: tree[i].title, children: getChildren(tree[i].id) });
            }
        }
        return children;
    }
    //addition: option to click on the tree's item in order to open and close the sons
    //$('li').children().hide();
    //$('li').addClass('plus');
    //$('li').click(function (event) {
    //    event.stopPropagation();
    //    var $t = $(this);
    //    if ($t.is('.plus')) {
    //        $t.children().show();
    //        $t.removeClass('plus');
    //        $t.addClass('minus');
    //    }
    //    else {
    //        $t.children().hide();
    //        $t.removeClass('minus');
    //        $t.addClass('plus');

    //    }


    //});
   
})
  
