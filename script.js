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


//Crea una función llamada borrarAlFinal que reciba un arreglo y retorne el arreglo sin el último elemento.


function borrarAlFinal(arreglo){

    arreglo.splice(-1,1)

    return arreglo
}

//Crea una función llamada borrarYContarElementos que reciba un arreglo y un número (cantidad). La función debe eliminar la cantidad de elementos especificados desde la posición 0 del arreglo y luego retornar la cantidad de elementos del arreglo final.

function borrarYContarElementos(arreglo,numero){

    arreglo.splice(0,numero)

    return arreglo.length
}

/* Fin */



/*
Crea una función llamada rotarALaIzquierda, la cual debe recibir como parámetro un arreglo.

La función debe eliminar el primer elemento del arreglo y luego agregar este mismo elemento al final.

Retorna el arreglo modificado.

*/


function rotarALaIzquierda(arreglo){
    let primero = arreglo[0]

    arreglo.splice(0,1)

    arreglo.push(primero)

    return arreglo
}

//Crea una función llamada juntarArreglos que reciba dos parámetros, arreglo1 y arreglo2, y retorne un nuevo arreglo con los elementos de ambos arreglos exlcuyendo el primer elemento de cada arreglo.

/* Escribe tu código aquí */

function juntarArreglos(arreglo1,arreglo2){

    arreglo1.splice(0,1)
    arreglo2.splice(0,1)
    let arreglo3 = arreglo1.concat(arreglo2) 
    return arreglo3
}


/* Fin */
console.log(juntarArreglos([10, 20, 30, 40], [50, 60, 70, 80]))
console.log(juntarArreglos(["a", "b", "c"], ["d", "e", "f"]))


// Crea una función que reciba 3 valores arr1, valor y arr2, donde arr1 y arr2 serán arreglos y valor un número, la función debe retornar un nuevo arreglo juntando los elementos de arr1, el valor y los elementos de arr2.


function juntarElementos(arr1,valor,arr2){

    
    return arr1.concat(valor,arr2)

}

