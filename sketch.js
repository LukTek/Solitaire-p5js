let ID

let move

let mouse = false

let initial = []

let tab = [[], [], [], [], [], [], []]

let foundation = [[], [], [], []]


let mouseDown = false

function setup() {
  windowSize = windowWidth/1796
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
  
  
foundation[0].push(new card(1, 'tab', 290+3*187, 360, true))
    count++
  
  
  
  
  
  

  createCanvas(1796*windowSize, 1080*windowSize);

  heldCard = 0
  

}

counter = 0

function draw() {
  windowSize = windowWidth/1796
  background(220);
  imageMode(CORNER)
  scale(windowSize)
  image(backgroundImage, 0, 0)
  imageMode(CENTER)
  



  
moveAr = []
  
  


for(let i = 0; i<7; i++){
  for(let q = tab[i].length-1; q>=0; q--){

    
    if(tab[i][q]){
      if(tab[i][q].held){
      for(let a = q+1; a<tab[i].length; a++){
        tab[i][a].held = true
        tab[i][a].lerp = 0
        tab[i][a].location.x = mouseX/(1796*windowSize)*1796
        tab[i][a].location.y = mouseY/(1080*windowSize)*1080+(a-q)*30

      }
    }
    }
    

    if(tab[i][q].visible){
      move = false
      
      move = tab[i][q].update()
      
      if(heldCard==true){
        heldCard = [i, q]

      }
      
      

      if(tab[i][q].lerpP==0){
      if(move>=0){

        moveAr.push([heldCard, move, tab[heldCard[0]][heldCard[1]].location.y])
        
      }
      }
        
      
    }
    
    



  }
  
}


if(moveAr.length>0){
  if(tab[moveAr[0][1]].length>0){
  
  first = tab[heldCard[0]][heldCard[1]].ID%13+1
  
  sec = tab[moveAr[0][1]][tab[moveAr[0][1]].length-1].ID%13+1
  console.log()
  
  if(first!=sec-1){
        for(let k = 0; k<7; k++){
      for(let l = 0; l<tab[k].length; l++){    

        moveAr = []

        tab[k][l].held = false
      }
    }
  }

}
}
  
  
for(let f = moveAr.length-1; f>=0; f--){
  if(moveAr[f][2] <663-175/2){
    
    
    
    if(moveAr.length>1){
      console.log(true)
    
    for(let k = 0; k<7; k++){
      for(let l = 0; l<tab[k].length; l++){    

        moveAr = []

        tab[k][l].held = false
      }
    }
    
    
    break
    
    } else{
      
      
      
      
      
      
      
      
    }
  }

  
  
}

      
for(let f = moveAr.length-1; f>=0; f--){


  
  leng = tab[moveAr[f][0][0]].length-1
  



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
  
  
  
  
  
  
  
  




  
  
  
  
  
  
  
  



  
  
for(let i = 0; i<7; i++){
  for(let q = 0; q<tab[i].length; q++){
    tab[i][q].show()
  }
}
  
  
for(let i = 0; i<4; i++){
  for(let q = 0; q<foundation[i].length; q++){
    foundation[i][q].show()
  }
}


if(heldCard.length>1){
  

  for( r = heldCard[1]; r<tab[heldCard[0]].length; r++){
  
  tab[heldCard[0]][r].show()
  
    

  }
  

  
  counter = tab[heldCard[0]].length-heldCard[1]-1

}

}




