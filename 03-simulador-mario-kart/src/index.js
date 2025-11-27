const player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0,
};

const player2 = {
    name: "Peach",
    speed: 3,
    maneuverability: 4,
    power: 2,
    points: 0,
};

const player3 = {
    name: "Yoshi",
    speed: 2,
    maneuverability: 4,
    power: 3,
    points: 0,
};   
const player4 = {
    name: "Bowser",
    speed: 5,
    maneuverability: 2,
    power: 5,
    points: 0,
};  
const player5 = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    points: 0,
};
const player6 = {
    name: "Donkey Kong",
    speed: 2,
    maneuverability: 2,
    power: 5,
    points: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
   let random = Math.random();
   let result

   switch (true) {
    case random < 0.33:
        result = "RETA";
        break;
        case random < 0.66:
            result = "CURVA";
            break;
            default:
               result = "CONFRONTO";
}
    return result;
};

async function logRollResult(characterName, block, diceResult,attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}



async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {  
        console.log(`🏁 Rodada ${round} `);

        // sortear bloco da pista
       let block = await getRandomBlock();
       console.log(` Bloco : ${block}`); 

       // jogar dado
       let diceResult1 = await rollDice();
       let diceResult2 = await rollDice();

       //teste de habilidade 

       let totalTestSkill1 = 0;
       let totalTestSkill2 = 0;

       if (block === "RETA") {
        totalTestSkill1 = character1.speed + diceResult1;
        totalTestSkill2 = character2.speed + diceResult2;

       await logRollResult(character1.name, "velocidade", diceResult1, character1.speed);
       await logRollResult(character2.name, "velocidade", diceResult2, character2.speed);
    }
    
    if (block === "CURVA") {
        totalTestSkill1 = character1.maneuverability + diceResult1;
        totalTestSkill2 = character2.maneuverability + diceResult2;
        await logRollResult(character1.name, "manobrabilidade", diceResult1, character1.maneuverability);
       await logRollResult(character2.name, "manobrabilidade", diceResult2, character2.maneuverability);
}
if (block === "CONFRONTO") {
    let powerResult1 = character1.power + diceResult1;
    let powerResult2 = character2.power + diceResult2;

    console.log(`${character1.name} confrontou com ${character2.name}!🥊`);

    await logRollResult(character1.name, "poder", diceResult1, character1.power);
    await logRollResult(character2.name, "poder", diceResult2, character2.power);
    
    if(powerResult1 > powerResult2 && character2.points > 0) {
        console.log(`${character1.name} venceu o confronto e ${character2.name} perdeu 1 ponto 🐢!`);
        character2.points--;
    }

    if(powerResult2 > powerResult1 && character1.points > 0) {
        console.log(`${character2.name} venceu o confronto e ${character1.name} perdeu 1 ponto 🐢!`);
        character1.points--;
    }

    console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }
    

// verificar se o personagem venceu a rodada
if (totalTestSkill1 > totalTestSkill2) {
    console.log(`${character1.name} marcou 1 ponto!`);
    character1.points++;
    }
else if (totalTestSkill2 > totalTestSkill1) {
    console.log(`${character2.name} marcou 1 ponto!`);
    character2.points++;
}
    
console.log("-----------------------------");
  }
}

    async function declareWinner(character1, character2) {
        console.log(`🏆 Resultado Final:`);
        console.log(`${character1.name}: ${character1.points} ponto(s)`);
        console.log(`${character2.name}: ${character2.points} ponto(s)`);
    
        if (character1.points > character2.points) {
            console.log(`\n${character1.name} venceu a corrida! 🏆🎉`);
            
        }
        else if (character2.points > character1.points) {
            console.log(`\n${character2.name} venceu a corrida! 🏆🎉`);
        }
    
        }



(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.name} e ${player5.name} começando...\n`);

    await playRaceEngine(player1, player5);

    await declareWinner(player1, player5);
})();
