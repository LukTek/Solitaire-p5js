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
    tab[i].push(new card(initial[count], 'tab', 290+i*187, 663+q*30, q===i, i, q))
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
  for(let q = tab[i].length-1; q>=0; q--){
    tab[i][q].offset.y = 0
    
    
    if(tab[i][q].held){
      for(let a = q+1; a<tab[i].length; a++){
        tab[i][a].held = true
        tab[i][a].lerp = 0
        tab[i][a].location.x = mouseX/(1796*windowSize)*1796
        tab[i][a].location.y = mouseY/(1080*windowSize)*1080+(a-q)*30

      }
    }
    

    if(tab[i][q].visible){
      move = false
      
      move = tab[i][q].update()
      
      if(heldCard==true){
        heldCard = [i, q]

      }
      
      if(move>=0){
        
        tab[move].push(new card(tab[i][tab[i].length-1].ID, 'tab', 290+move*187, 663+tab[move].length*30, true, move, tab[move].length))
        

        
        
        
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
  
  for(let r = heldCard[1]; r<tab[heldCard[0]].length; r++){
  tab[heldCard[0]][r].show()

  }
}

}




