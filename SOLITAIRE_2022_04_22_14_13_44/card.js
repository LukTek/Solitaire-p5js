

function card(ID, status, x, y, visible, tab){
  this.initialVisible = visible
  this.visible = visible
  
  this.tab = tab
  
  if(this.visible){
    console.log(true)
  }
  
  this.lerpP = 1
  
  this.lerpR = 0
  
  this.status = status
  
  this.ID = ID
  
  this.held = false
  
  this.lastHeld = false
  
  
  
  this.location = createVector(0, 0)

  this.baseLocation = createVector(x, y)

  this.cardSize = createVector(105, 175)
  

  
  this.show = function(){
    imageMode(CENTER)
    if(this.held){

      image(cardsImages[this.ID], this.location.x+offset.x, this.location.y+offset.y, 105*1.1, 175*1.1)
    } else{

      if(this.visible){
        if(!this.initialVisible){
        if(this.lerpR<1){
          this.lerpR+=0.05
          if(this.lerpR>0.5){
            image(cardsImages[this.ID], this.baseLocation.x, this.baseLocation.y, lerp(-this.cardSize.x, this.cardSize.x, this.lerpR), this.cardSize.y)
          } else{
            image(cardBack, this.baseLocation.x, this.baseLocation.y, lerp(-this.cardSize.x, this.cardSize.x, this.lerpR), this.cardSize.y)
          }
        } else{
          this.lerpR = 1
          this.initialVisible = true
        }
        
      
        } else if(this.lerpP<1){
        image(cardsImages[this.ID], lerp(this.location.x+offset.x, this.baseLocation.x, this.lerpP), lerp(this.location.y+offset.y, this.baseLocation.y, this.lerpP), this.cardSize.x, this.cardSize.y)
        this.lerpP+=0.05
        
      } else{
        
        this.lerpP = 1
        

        image(cardsImages[this.ID], this.baseLocation.x, this.baseLocation.y, lerp(-this.cardSize.x, this.cardSize.x, this.lerpR), this.cardSize.y)
      }
      } else{
        image(cardBack, this.baseLocation.x, this.baseLocation.y, this.cardSize.x, this.cardSize.y)
      }
      
    }
    

    

  }
  this.update = function(){
  
  move = false
      
  if(mouseIsPressed){
    if(press.x+this.cardSize.x/2>this.baseLocation.x&&press.x-this.cardSize.x/2<this.baseLocation.x&&press.y+this.cardSize.y/2>this.baseLocation.y&&press.y-this.cardSize.y/2<this.baseLocation.y&&this.lastHeld!=true){
          heldCard = true
          this.held = true
          offset.x = this.baseLocation.x-press.x
          offset.y = this.baseLocation.y-press.y
      }
  } else{
    if(this.held){
      heldCard = 0
      
      
      for(let i = 0; i<7; i++){

        if(this.location.x+this.cardSize.x/2>290+i*187&&this.location.x-this.cardSize.x/2<290+i*187){
  
          if(this.tab!=i){
            return i
          } console.log("HERE")
          
      

        }
        
      }
        
      

      
      
      
      this.lerpP = 0
      
    }
    this.held = false
    
  }


        
        

      if(this.held){
        this.location.x = mouseX/(1796*windowSize)*1796
        this.location.y = mouseY/(1080*windowSize)*1080
      }
    
    this.lastMouse = mouseIsPressed
    

  }
}


function mousePressed(){
  press.x = (mouseX/(1796*windowSize))*1796
  press.y = (mouseY/(1080*windowSize))*1080
}