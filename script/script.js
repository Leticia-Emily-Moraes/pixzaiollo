function TelaGrande(){
    if(window.innerWidth >= 768){
        MenuTelaGrande.style.display = "block";
        MenuHabmurguer.style.display = "none";
    }
    else{
        MenuTelaGrande.style.display = "none";
        MenuHabmurguer.style.display = "block";
    }
}