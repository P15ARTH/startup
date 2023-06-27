let sideshow = document.getElementById("show");
let sidebar = document.getElementById("side-bar");
let sideclose = document.getElementById("hide");


// close sidebar using close button 

sideclose.addEventListener("click" ,myfunction);

function myfunction()
{
    sidebar.style.display = 'none';
}


sideshow.addEventListener("click", myfunction);

function myfunction()
{
    if(sidebar.style.display === 'block'){
        sidebar.style.display = 'none';
    }
    else
    {
        sidebar.style.display = 'block';
    }
}

