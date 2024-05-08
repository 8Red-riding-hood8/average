let a , d, c, res;
a = +prompt("Enter number");
b = +prompt("Enter number");
c = +prompt("Enter number");
if(a != 0 && b != 0 && c != 0)
    {
        res = (a + b + c)/3;
        alert(`${res}`);
    }
    else {
        alert("Your numbers is incorrect");
    }
