var cardsArray = [
    {    'name': 'CSS',    'img': '../img/css3-logo.png'  },
    {    'name': 'HTML',    'img': '../img/html5-logo.png'  },
    {    'name': 'jQuery',    'img': '../img/jquery-logo.png'},
    {    'name': 'JS',    'img': '../img/js-logo.png' },
    {    'name': 'Node',    'img': '../img/nodejs-logo'  },
    {    'name': 'Photo Shop',    'img': '../img/photoshop-logo.png'  },
    {    'name': 'PHP',    'img': '../img/php-logo.png'  },
    {    'name': 'Python',    'img': '../img/python-logo.png'  },
    {    'name': 'Ruby',    'img': '../img/rails-logo.png'  },
    {    'name': 'Sass',    'img': '../img/sass-logo.png'  },
    {    'name': 'Sublime',    'img': '../img/sublime-logo.png'  },
    {    'name': 'Wordpress',    'img': '../img/wp-logo.png'  },
  ];

  var gameGrid=cardsArray.concat(cardsArray);

  gameGrid.sort(function(){
      return 0.5- Math.random();
  });
//   console.log(gameGrid);
  var game=document.getElementById('game-board');//game variable er modha game-board id k select korci  (parent)
 
  var grid=document.createElement('section');//child node => grid variable a store korci.  
  // ja pore section create korba
  game.appendChild(grid);// appendChild method() kaj kore parent.appendChild(child node)
  //child  parent div er modha ekta nuton section create korba 

  grid.setAttribute('class','grid'); // setAttribute() method 
  //nuton section er modha ekta class create korba grid name er. 

  for(var i=0;i<gameGrid.length;i++){

    var card=document.createElement('div');
    
    card.classList.add('card');

    card.dataset.name = gameGrid[i].name;

    // card.style.backgroundImage =`url(${gameGrid[i].img})`;

    // grid.appendChild(card);
    var front=document.createElement('div');
        front.classList.add('front');
    var back=document.createElement('div');
        back.classList.add('back');
    back.style.backgroundImage=`url(${gameGrid[i].img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

  }
  var firstGuess='';
  var secondGuess='';
  var count=0;
  var previousTarget=null;
  var delay=1200;
  
  

   var match=function(){
       var selected=document.querySelectorAll('.selected');
       for(i=0;i<selected.length;i++){
           selected[i].classList.add('match');
       }
   }
    
   var resetGuesses=function(){
       firstGuess='';
       secondGuess='';
       count=0;
       previousTarget=null;
       var selected=document.querySelectorAll('.selected');
       for(i=0;i<selected.length;i++){
           selected[i].classList.remove('selected');
       }
   }
  grid.addEventListener('click',function(kishor){
     
    var clicked=kishor.target;
    if(clicked.nodeName==='SECTION' || clicked===previousTarget || clicked.parentNode.classList.contains('match')||clicked.parentNode.classList.contains('selected')){
        return;
    }
    if(count<2){
        count++;
    
        if(count===1){
            firstGuess=clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }else{
            secondGuess=clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if(firstGuess!==''&& secondGuess!==''){
            if(firstGuess===secondGuess){
                setTimeout(match,delay);
                setTimeout(resetGuesses,delay);
            }else{
                setTimeout(resetGuesses,delay);
            }
        }
        previousTarget=clicked;
    }
  });