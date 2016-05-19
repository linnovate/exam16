var data = [
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
}
];


function bsd() {
    var idToNodeMap = {}; //Keeps track of nodes using id as key, for fast lookup
    var root = null; //Initially set our loop to null

    //loop over data
    for (var i = 0; i < data.length; i++) {
        var datum = data[i];

        //each node will have children, so let's give it a "children" poperty
        //datum["children"] = {};
        datum.children = [];
        //add an entry for this node to the map so that any future children can
        //lookup the parent
        idToNodeMap[datum.id] = datum;

        //Does this node have a parent?
        if (datum.parentID == 0)
        {
            //Doesn't look like it, so this node is the root of the tree
            root = datum;
        }
        else {
            //This node has a parent, so let's look it up using the id
            parentNode = idToNodeMap[datum.parentID];

            //We don't need this property, so let's delete it.
            delete datum.parent;

            //Let's add the current node as a child of the parent node.
            parentNode.children.push(datum);
            
        }
       
    }
    document.getElementById("list").innerHTML = root.title;
    d(root);
    document.getElementById("list").innerHTML+="         "+ root.children[0].title;
    function d(a)
    {
        for (j = 0; j < a.children.length; j++)
        {
            document.getElementById("list").append('<li>' + a.children[j].title + '</li>');
            if(a.children[j].children.length!=0)
                d(a.children[j])
        }
       

    }
        
    
   
    //for (var i = 0; i < root.length; i++)
    //{
    //    var datum = root[i];
    //    document.getElementById("div1").innerHTML += datum.title+"      ";
    //}
    //document.getElementById("div1").innerHTML = JSONTree.create(root);;
}

function g() {
    document.getElementById("div1").innerHTML = data;
   
}
function fg(root_tree)
{
   
}