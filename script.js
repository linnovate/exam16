


//    אך לא הצלחתי לגשת עליהם מתוך התוכנית ע"מ להציגם על הדפדפןDATA הנתונים נכנסו נכון לתוך המערך 






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


var obj = {};
obj.rootElements = [];


function func ()
{
    {
        for (i in tree) {
            var _elem = tree[i];
            if (_elem.parentID) {
                var _parentID = _elem.parentID;
                if (_parentID == _elem.id) {
                    // check children, if false - add
                    if (!_elem.children) {
                        _elem.children = [];
                    }
                    _elem.children.push(_elem);
                }
                else {
                    addChildToParent(_elem, _parentID);
                }
            }
            else // is root
            {
                obj.rootElements.push(_elem);
            }

        }
    }
}




function addChildToParent(child, parentID, root) {
    for (j in tree) {
        if (tree[j].id.toString() == parentID.toString()) {
            if (!tree[j].children) {
                tree[j].children = [];
            }
            tree[j].children.push(child);
        }
    }
}

//res.send(obj.rootElements);

function prints()
{
    var i = 6;
    while (i) {
        var _elem = obj[i];
        window.alert(obj.rootElements[0].title);
        i--;
      
        obj.rootElements[0]
    }
    
}


//נסיונות להצגה על הדפדפן


function rec() { recIn(obj.rootElements[0].children); }

///var factorial =
 
function recIn(obj) {
    //if (obj.rootElements[0].children.title == null) { // terminal case
    //    (rec(obj.rootElements[0].children));
    //} else { // block to execute
    //    window.alert(obj.rootElements[0].title);
    //}




// simulates operations for walking through tree using iteration
    var stack = [{
        depth: 0,
        element: treeHeadNode
    }];
    var stackItem = 0;
    var current;
    var children, i, len;
    var depth;
    parentElement.depth = 0;
parentElement.next = null;


current = obj.rootElements[0].children;
last = current;

while (current) {
    children = current.rootElements[0].children;
    for (i = 0, len = children.length; i < len; i++) {
        child = children[i];
        child.depth = current.depth + 1;
        child.next = null;
        //place new item at the tail of the list
        last.next = child;
        last = child;
    }
    //removes this item from the linked list
    current = current.next;
}}