function calculateBMI(weight , height){

    let BMI = weight / Math.pow(height,2);
    
    return BMI;
}

function main(){

    let weight = prompt('Enter the weight');
    let height = prompt('Enter the height');

    let result = calculateBMI(weight,height);

    alert('BMI is '+result);

    // console.log('BMI is '+result);
    //You can use other Math functions like math.round

}

main();