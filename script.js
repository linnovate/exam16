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
var getParent = function (rootNode, rootId) {

    if (rootNode.id === rootId)
        return rootNode;

    for (var i = 0; i < rootNode.children.length; i++) {
        var child = rootNode.children[i];
        if (child.id === rootId) return child;

        if (child.children.length > 0)
            var childResult = getParent(child, rootId);

        if (childResult != null) return childResult;
    }
    return null;
};

// Traverse data and build the tree
var buildTree = function (tree) {
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (elem.name === "root")
            continue;
        elem["children"] = [];

        var rootId = elem.parentAreaRef.id;
        var parent = getParent(tree.root, rootId);

        parent.children.push(elem);

        // Debug info
        console.log("Elem: " + elem.name + " with parent_id: " + elem.parentAreaRef.id);
        console.log("Got parent with name: " + parent._id);
    }
};

// Print the tree
var htmlStr = "";
var printTree = function (node) {
    console.log(node);
    htmlStr = htmlStr + "<ul>";
    htmlStr = htmlStr + "<li>";
    htmlStr = htmlStr + node.name;
    htmlStr = htmlStr + "</li>";
    for (var i = 0; i < node.children.length; i++)
        printTree(node.children[i], htmlStr);
    htmlStr = htmlStr + "</ul>";
    return htmlStr;
}

// I have not handled scope and pretty print that well, but the implementation shows the concept of an implementation
buildTree(tree);
printTree(tree.root);
console.log(htmlStr);
$("#tree").html(htmlStr);

//var options = {
//    childKey  : 'id',
//    parentKey : 'parentId'
//};
//var tre = walkTree(listToTree(tree, options), pruneChildren);

//document.body.innerHTML = '<pre>' + JSON.stringify(tree, null, 4) + '</pre>';

//function listToTree(list, options) {
//    options = options || {};
//    var childKey    = options.childKey    || 'child';
//    var parentKey   = options.parentKey   || 'parent';
//    var childrenKey = options.childrenKey || 'children';
//    var nodeFn      = options.nodeFn      || function(node, name, children) {
//        return { name : name, children : children };
//    };
//    var nodeCache = {};
//    return list.reduce(function(tre, node) {
//        node[childrenKey] = [];
//        nodeCache[node[childKey]] = node;
//        if (typeof node[parentKey] === 'undefined' || node[parentKey] === '') {
//            tre = nodeFn(node, node[childKey], node[childrenKey]);
//        } else {
//            parentNode = nodeCache[node[parentKey]];
//            parentNode[childrenKey].push(nodeFn(node, node[childKey], node[childrenKey]));
//        }
//        return tre;
//    }, {})
//var ul = $('<ul>').appendTo('body');
//var json = { tree: ['item 1', 'item 2', 'item 3'] };
//$(json.tree).each(function (index, item) {
//    ul.append(
//        $(document.createElement('li')).text(item)
//    );
})
// Data
//var arr = [{
//    "name": "root",
//    "_id": "root_id",
//}, {
//    "name": "a1",
//    "parentAreaRef": {
//        "id": "root_id",
//    },
//    "_id": "a1_id",
//}, {
//    "name": "a2",
//    "parentAreaRef": {
//        "id": "a1_id",
//    },
//    "_id": "a2_id",
//}, {
//    "name": "a3",
//    "parentAreaRef": {
//        "id": "a2_id",
//    },
//    "_id": "a3_id",
//}, {
//    "name": "b1",
//    "parentAreaRef": {
//        "id": "root_id",
//    },
//    "_id": "b1_id",
//}, {
//    "name": "b2",
//    "parentAreaRef": {
//        "id": "b1_id",
//    },
//    "_id": "b2_id",
//}, {
//    "name": "b3",
//    "parentAreaRef": {
//        "id": "b1_id",
//    },
//    "_id": "b3_id",
//}];

//// Define root
//var root = {
//    name: "root",
//    _id: "root_id",
//    children: []
//}

//// Define tree
//var tree = {
//    root: root
//};

// Get parent of node (recursive)
