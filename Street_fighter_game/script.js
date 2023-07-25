
    const characters = [
      "Ryu", "Ken", "E. Honda", "Chun-Li", "Blanka",
      "Zangief", "Guile", "Dhalsim", "Balrog", "Vega",
      "Sagat", "M. Bison"
    ];

    const actions = [
      "punch", "kick", "hadoken", "jump", "specialattack"
    ];

    let player1;
    let player2;
    let player1Health = 100;
    let player2Health = 100;
    let hadokenUsed = false;

    function getRandomCharacter() {
      return characters[Math.floor(Math.random() * characters.length)];
    }

    function getRandomAction() {
      return actions[Math.floor(Math.random() * actions.length)];
    }
    
    function showCharacter() {
      return document.write(`Select your character from the list:<br>  ${characters.join('<br>')} <br><br>`);
    
    }

    function selectCharacter() {
      let characterInput = prompt("Select your character from the list:\n" + characters.join(', '));
      player1 = characters.includes(characterInput) ? characterInput : getRandomCharacter();
    }

    function selectAction(player) {
      let actionInput = prompt(`${player}, choose your action: ${actions.join(', ')}`);
      return actions.includes(actionInput) ? actionInput : getRandomAction();
    }

    function performAttack(player, action) {
      let damage = 0;
      switch (action) {
        case "punch":
        case "kick":
          damage = 10;
          break;
        case "hadoken":
          if (!hadokenUsed) {
            damage = 15;
            hadokenUsed = true;
          } else {
            document.write("Hadoken can be used only once in the whole round.<br>");
          }
          break;
        case "specialattack":
          damage = 30;
          break;
        default:
          break;
      }
      return damage;
    }

    function fightRound() {
      const action1 = selectAction(player1);
      const action2 = getRandomAction();
      document.write(`${player1} used ${action1}<br> ${player2} used ${action2}.<br>`);

      const damage1 = performAttack(player1, action1);
      const damage2 = performAttack(player2, action2);

      player2Health -= damage1;
      player1Health -= damage2;

      // document.write(`${player1} dealt ${damage1} damage to ${player2}.<br>`);
      // document.write(`${player2} dealt ${damage2} damage to ${player1}.<br>`);

      document.write(`<b>Health remaining:</b> <br> ${player1}: ${player1Health}<br> ${player2}: ${player2Health}<br><br>`);
    }

    function checkWinner() {
      if (player1Health <= 0 && player2Health <= 0) {
        document.write("It's a tie!");
      } else if (player1Health <= 0) {
        document.write(`${player2} wins!`);
      } else if (player2Health <= 0) {
        document.write(`${player1} wins!`);
      }
    }
    
    function startGame() {
      document.write("<b>Welcome to the Two-Player Fighting Game!</b><br>");
      showCharacter();
      selectCharacter();
      player2 = getRandomCharacter();

      document.write(`<b>Player 1:</b> ${player1}<br>`);
      document.write(`<b>Player 2:</b> ${player2}<br><br>`);

      while (player1Health > 0 && player2Health > 0) {
        fightRound();
      }

      checkWinner();
    }

    startGame();
    

