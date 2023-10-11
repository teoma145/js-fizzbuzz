const containerel = document.getElementById('wrapper')

/*for(let i =1 ; i < 11 ; i++ ){
    for(let c = 1 ; c < 11 ; c++){
        let number = c + (i - 1) * 10 ;
        let scritta
        let color;
        if( number % 3 === 0 && number % 5 === 0){
            color = 'fizzbuzzcol';
            scritta = `fizzbuzz`
            
        }
        else if( number % 3 === 0){
            color = 'fizzcol'
            scritta = `Fizz`
        }
        else if (number % 5 === 0){
            color = 'buzzcol'
            scritta= `buzz`
        }
        else{
            color = 'numbers'
            scritta = number
        }
        const boxEl = document.createElement('div');
        boxEl.className = `box ${color} text-center `
        boxEl.innerHTML = scritta;
        containerel.append(boxEl);
    }
}*/

//rifatta con un solo ciclo for
for(let number =1 ; number  < 101; number++ ){
        
        let scritta
        let color;
        if( number % 3 === 0 && number % 5 === 0){
            color = 'fizzbuzzcol';
            scritta = `fizzbuzz`
            
        }
        else if( number % 3 === 0){
            color = 'fizzcol'
            scritta = `Fizz`
        }
        else if (number % 5 === 0){
            color = 'buzzcol'
            scritta= `buzz`
        }
        else{
            color = 'numbers'
            scritta = number
        }
        const boxEl = document.createElement('div');
        boxEl.className = `box ${color} text-center `
        boxEl.innerHTML = scritta;
        containerel.append(boxEl);
}
