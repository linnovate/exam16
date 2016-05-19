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
function onload1() {

   


   

    




    var flat = {};
    for (var i = 0; i < tree.length; i++) {
        var key = tree[i].id;
        flat[key] = tree[i];
    }

    // add child container array to each node
    for (var i in flat) {
        flat[i].children = []; // add children container
    }

    // populate the child container arrays
    for (var i in flat) {
        var parentkey = flat[i].parentID;
        if (flat[parentkey]) {
            flat[parentkey].children.push(flat[i]);
        }
    }

    // find the root nodes (no parent found) and create the hierarchy tree from them
    var root = [];
    for (var i in flat) {
        var parentkey = flat[i].parentID;
        if (!flat[parentkey]) {
            root.push(flat[i]);
        }
    }
    console.log("", flat);
   
    populate();
    function populate() {
        console.log(false);
        var list = $("<ul>").attr({ id: "person" });
       

            $.each(root, function (i, person) {
                var color;
                if (person.gender == "female")
                    color = "pink";
                else
                    color = "blue";
                var item = $("<li>").html('<span id=' + person.id + ' style="background-color:' + color + '" >' + person.title +
                                '</span> ');
               
                    checkChild(person.children, person.id,item,color);
                    console.log(item);
                    list.append(item);
                   
            });
            $('#list').append(list);

        }

        function checkChild(children, parentid,parent,color) {
            $.each(children, function (i, person) {
                
               if (person.parentID == parentid) {
                  var children = $('<ul>');
                  var item = $("<li>").html('<span id=' + person.id + ' style="background-color:' + color + '">' + person.title
                             + '</span></li>');
                  if (person.gender == "female")
                      color = "pink";
                  else
                      color = "blue";
                    children.append(item);
                    checkChild(person.children, person.id, item,color);
                   


                    parent.append(children);
                }
                else
                    return;
            });
        }

        d3.selectAll('div')
  .on('mouseover', function () {
      this.style.backgroundColor = 'yellow';
  })


       
    }
