let ID

let move

let mouse = false

let initial = []

let tab = [[], [], [], [], [], [], []]

let windowSize = 0.8

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
    tab[i].push(new card(initial[count], 'tab', 290+i*187, 663+q*30, q==i, i, q))
    count++
  }
}
  
  

  
  
  
  
  
  

  createCanvas(1796*windowSize, 1080*windowSize);


  

}

counter = 0

function draw() {

  background(220);
  imageMode(CORNER)
  scale(windowSize)
  image(backgroundImage, 0, 0)
  imageMode(CENTER)
  


heldCard = 0
  
moveAr = []
  
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

        console.log(tab[heldCard[0]][heldCard[1]].location.y)
        moveAr.push([heldCard, move])
      }
        
      
    }
    
    



  }
  
}
  
  if(moveAr.length>0){
  if(tab[heldCard[0]][heldCard[1]].location.y+tab[heldCard[0]][heldCard[1]].cardSize.y/2<663){
    console.log(true)
   
    
  } else{
      
for(let f = moveAr.length-1; f>=0; f--){


  
  leng = tab[moveAr[f][0][0]].length-1
  
  console.log()


tab[moveAr[f][1]].push(new card(tab[moveAr[f][0][0]][tab[moveAr[f][0][0]].length-f-1].ID, 'tab', 290+moveAr[f][1]*187, 663+(tab[moveAr[f][1]].length)*30, true, moveAr[f][1], tab[moveAr[f][1]].length))
  
tab[moveAr[f][1]][tab[moveAr[f][1]].length-1].location.x = tab[moveAr[f][0][0]][tab[moveAr[f][0][0]].length-f-1].location.x
  
tab[moveAr[f][1]][tab[moveAr[f][1]].length-1].location.y = tab[moveAr[f][0][0]][tab[moveAr[f][0][0]].length-f-1].location.y
  
tab[moveAr[f][1]][tab[moveAr[f][1]].length-1].lerpP = f/10
  
  


  
}
  
  
for(let x = 0; x<moveAr.length; x++){
  tab[moveAr[x][0][0]].pop()
  
}
  
  
if(moveAr.length>0){
  if(tab[moveAr[0][0][0]].length>0){
  tab[moveAr[0][0][0]][tab[moveAr[0][0][0]].length-1].visible = true
}
}
  
  
  }
}



  
  
  
  
  
  
  
  
  
  


  
  
for(let i = 0; i<7; i++){
  for(let q = 0; q<tab[i].length; q++){
    tab[i][q].show()
  }
}

if(heldCard.length>1){
  

  for( r = heldCard[1]; r<tab[heldCard[0]].length; r++){
  
  tab[heldCard[0]][r].show()
  
    

  }
  

  
  counter = tab[heldCard[0]].length-heldCard[1]-1

}

}




