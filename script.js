/*

Crea una función llamada ultimoYPrimero que reciba un arreglo y retorne la concantenación del último y el primer elemento del arreglo.

*/ 

function ultimoYPrimero(arreglo){
    return (arreglo[arreglo.length-1]+arreglo[0])
}



/*
Crea una función llamada agregarSi que reciba un arreglo y un parámetro llamado nombre. La función debe agregar el nombre al arreglo si el largo del arreglo es menor a 5. La función debe retornar el arreglo.
 */

function agregarSi(arreglo,nombre){

    if(arreglo.length < 5){
        arreglo.push(nombre)
    }

    return arreglo

    //return arreglo.length < 5? arreglo.push(nombre):arreglo

}


/*Crea una función llamada limpiarYAgregar que reciba un arreglo y un parámetro llamado nombre. La función debe limpiar el nombre removiendo los espacios vacíos al inicio y al final del nombre y luego agregar el nombre al final del arreglo. La función debe retornar el arreglo.*/

function limpiarYAgregar(arreglo,nombre){

    nombre.trim()
    arreglo.push(nombre)
    
    return arreglo
    
}

/*
Crea una función llamada reemplazar que reciba un arreglo y dos números. La función debe remplazar el primer elemento del arreglo por el primer número y el último elemento del arreglo por el segundo número.
*/


function reemplazar (arreglo,num1,num2){

    arreglo[0]=num1
    arreglo[arreglo.length-1]=num2
    
    //arreglo.splice(0,1,num1)
    //arreglo.splice(-1,1,num2)

    return arreglo

    
}

/***Crea una función llamada modificarPorElMayor que reciba un arreglo de números y dos parámetros llamado numero1 y numero2. La función debe cambiar el primer elemento del arreglo por el mayor de los dos números. */

function modificarPorElMayor(arreglo,numero1,numero2){
    if(numero1>numero2){
        arreglo[0] = numero1
    }else{
        arreglo[0] = numero2
    }

    return arreglo
}


