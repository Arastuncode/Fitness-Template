$( () => {
    let flag = true;
    if($("nav").width() < 768){
        $("#hamburger").html('<i class="fas fa-times" style="color:red"></i>')
        $("#hamburger").click( () =>{
            $("#menu").slideToggle(2000, () => {
                flag = !flag;
                $("#hamburger").html(flag ? '<i class="fas fa-times" style="color:red"></i>' : '<i class="fas fa-bars"></i>')
            })
        })
    } 
})