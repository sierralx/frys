javascript:(async function(){
    function sleep(e){return new Promise(t=>setTimeout(t,e))}
    
    // Tu código original para el scroll que funciona perfecto
    for(var e=document.getElementsByClassName("btn load-more")[0]; void 0!==e;){
        e.click();
        await sleep(800); // Le di un poco más de tiempo para que cargue bien
        e=document.getElementsByClassName("btn load-more")[0];
    }
    
    // Nueva lógica infalible para los clics
    var btns = document.querySelectorAll('button, [role="button"]');
    var count = 0;
    
    for(var i=0; i<btns.length; i++){
        var texto = btns[i].innerText || btns[i].textContent || "";
        
        // Si el botón incluye "clip coupon" (sin importar qué más diga), le da clic
        if(texto.toLowerCase().includes("clip coupon")){
            btns[i].click();
            count++;
            await sleep(500); // Tu pausa original de 500ms para que cambie a "Clipped"
        }
    }
    alert("¡Listo! Se dio clic a " + count + " cupones.");
}());
