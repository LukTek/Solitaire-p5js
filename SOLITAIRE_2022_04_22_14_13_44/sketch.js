let ID

let move

let mouse = false

let initial = []

let tab = [[], [], [], [], [], [], []]

let windowSize = 0.5

let mouseDown = false

function setup() {
  press = createVector(0, 0)
  offset = createVector(0, 0)
  
for(let i = 0; i<52; i++){
  initial.push(i)
}
  
  
shuffle(initial, true)

let count = 0

  
for(let i = 0; i<7; i++){
  for(let q = 0; q<i+1; q++){
    tab[i].push(new card(initial[count], 'tab', 290+i*187, 663+q*20, q===i, i))
    count++
  }
}
  
  

  
  
  
  
  
  

  createCanvas(1796*windowSize, 1080*windowSize);


  

}

function draw() {
  background(220);
  imageMode(CORNER)
  scale(windowSize)
  image(backgroundImage, 0, 0)
  imageMode(CENTER)
  


heldCard = 0
  
for(let i = 0; i<7; i++){
  for(let q = 0; q<tab[i].length; q++){
    

    if(tab[i].length == q+1){
      move = false
      
      move = tab[i][q].update()
      
      if(heldCard==true){
        heldCard = [i, q]

      }
      
      if(move>=0){
        
        tab[move].push(new card(tab[i][tab[i].length-1].ID, 'tab', 290+move*187, 663+tab[move].length*20, true, move))
        
        
        
        tab[move][tab[move].length-1].location.x=tab[i][tab[i].length-1].location.x
        tab[move][tab[move].length-1].location.y=tab[i][tab[i].length-1].location.y
        

        
        tab[move][tab[move].length-1].lerpP=0


        tab[i].pop()
        if(tab[i].length>0){
          tab[i][tab[i].length-1].visible = true
        }

        break
      }
        
      
    }
    
    

      tab[i][q].show()

  }
  
}
  
for(let i = 0; i<7; i++){
  for(let q = 0; q<tab[i].length; q++){
    tab[i][q].show()
  }
}


if(heldCard.length>1){
  tab[heldCard[0]][heldCard[1]].show()
}

}




