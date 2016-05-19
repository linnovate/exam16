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


function addtree()
{
    for (var i in tree)
    {
        var addul = document.createElement("ul");
        addul.setAttribute("id","ul"+tree[i].parentID);
        //////////////���� ����
        var addli = document.createElement("li");
        addli.setAttribute("id", "li" + tree[i].id);
        var text = document.createTextNode(tree[i].title );
        addli.appendChild(text);
        //����� ��� �� ���
        var p = document.getElementById("li" + tree[i].parentID);
        if (p == null) {//����� ���� ������
            addul.appendChild(addli);
            document.getElementById("list").appendChild(addul)
        }
        else {//�� �� ���, ������� ���� ���
            var u = document.getElementById("ul" + tree[i].parentID);
            if(u!=null)
            {//�� ���� ��� �� ����
                document.getElementById("ul" + tree[i].parentID).appendChild(addli);
            }
            else {//�� ��� �� ���� �����
                addul.appendChild(addli);
                p.appendChild(addul);
            }
        }


        //document.getElementById("li"+tree[i].id).addEventListener("click", function () {
        //    var p = document.createElement("p");
        //    var txt = document.createTextNode();
        //    for (var c in tree) {
        //        if (tree[c].parentID == tree[i].id)
        //            txt += " " + tree[c].title;
        //    }
        //    p.appendChild(txt);
            
        //    document.getElementById("children").appendChild(p);
        //});
    }
}
var flag = 0;
function showMaleFemale()
{
    if (flag) {
        for (var i in tree) {
            document.getElementById("li" + tree[i].id).style.color = "rgb(27, 112, 246)";
        }
        flag = 0;
    }
    else { flag = 1; 
    for (var i in tree)
    {
        if (tree[i].gender == "male") {
            document.getElementById("li" + tree[i].id).style.color = "black";
        }
        else {
            document.getElementById("li" + tree[i].id).style.color = "deeppink";
        }
    }
   }
    }
