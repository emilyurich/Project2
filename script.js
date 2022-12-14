let name = prompt (`Welcome to GC mini golf! What's your name?`);
console.log(`Users Name: ${name}`);

let score = 0;
let partotal =0;

let holes = prompt (`Hi ${name}! Would you like to play 3 or 6 holes today?`);
console.log(`Holes of golf: ${holes}`);

if (holes === "3"){
    let holeOne = Number (prompt ("How Many putts for hole 1? (par is 3)"));
    console.log(`Hole 1 total: ${holeOne}`);
    let holetwo = Number (prompt ("How many putts for hole 2? (par is 3)"));
    console.log(`Hole 2 total: ${holetwo}`);
    let holethree =Number ( prompt ("How many putts for hole 3? (par is 3)"));
    console.log(`Hole 3 total: ${holethree}`);
    
    total = holeOne + holetwo + holethree;
    par = total- 9;
    console.log(`Total Score: ${total}`);
    
        if (total > 9) {
         console.log(`Nice try, ${name} your total par was: +${par}`);
         } else if (total < 9) {
         console.log(`Great job, ${name}! Your total par was: ${par}`);
         } else if (total === 9) {
         console.log(`Good game, ${name}. Your total par was: 0.`);
}

} 
else if (holes === "6"){
    let holeOne = Number (prompt ("How Many putts for hole 1? (par is 3)"));
    console.log(`Hole 1 total: ${holeOne}`);
    let holetwo = Number (prompt ("How many putts for hole 2? (par is 3)"));
    console.log(`Hole 2 total: ${holetwo}`);
    let holethree = Number (prompt ("How many putts for hole 3?(par is 3)"));
    console.log(`Hole 3 total: ${holethree}`);
    let holefour = Number (prompt ("How many putts for hole 4? (par is 3)"));
    console.log(`Hole 4 total: ${holefour}`);
    let holefive = Number (prompt ("how many putts for hole 5?(par is 3)"));
    console.log(`Hole 5 total: ${holefive}`);
    let holefivee = Number (prompt ("How many putts for hole 6? (par is 3)"));
    console.log(`Hole 6 total: ${holefivee}`);
    
    score = (holeOne + holetwo + holethree + holefour + holefive + holefivee);
    partotal = score -18;
    
    console.log(`Total Score: ${score}`);
      if (score > 18) {
         console.log(`Nice try, ${name} your total par was: +${partotal}`);
         } else if (score < 18) {
        console.log(`Great job, ${name}! Your total par was: ${partotal}`);
         } else if (score === 18) {
    console.log(`Good game, ${name}. Your total par was: 0.`);
}
}