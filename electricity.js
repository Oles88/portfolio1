/**Функция Скрывает/Показывает блок HAGER**/
function showHide(element_electricity) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_electricity)) { 
        //Записываем ссылку на элемент в переменную obj
         var obj = document.getElementById(element_electricity); 
            //Если css-свойство display не block, то: 
            if (obj.style.display != "block") { 
                obj.style.display = "block"; //Показываем элемент
}
            else obj.style.display = "none"; //Скрываем элемент
}
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_electricity + " не найден!"); 
} 

/**Функция Скрывает/Показывает блок IEK**/
function showHide(element_kz) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_kz)) { 
        //Записываем ссылку на элемент в переменную obj
         var obj = document.getElementById(element_kz); 
            //Если css-свойство display не block, то: 
            if (obj.style.display != "block") { 
                obj.style.display = "block"; //Показываем элемент
}
            else obj.style.display = "none"; //Скрываем элемент
}
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_kz + " не найден!"); 
} 