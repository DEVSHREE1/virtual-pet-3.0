class Food{
    constructor(){ 
        this.foodStock=0; 
        this.lastFed; 
        this.image=loadImage('images/milk.png');
             }

    updateFoodStock(foodStock){
      this.foodStock = foodStock;
          }

    getFedTime(lastFed){
        this.lastFed = lastFed;
             }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1;
            }
    }

     getFoodStock(){
      return this.foodStock;
     }

    display(){ 
        
        background(46, 139, 87);     

        var x=80,y =100;

        imageMode(CENTER);
        image(this.image,720,220,70,70)

         fill("black");
         textSize(22);
        if(this.foodStock!=0){
            for(var i = 0; i<this.foodStock; i++){
            if(i%10 === 0){
                x = 200;
                y = y+100;
            }
            }
        }

    }
    
    bedroom(){
        background(bedroom_img,900, 900);
    }

    garden(){
        background(garden_img,900, 900);
    }

    washroom(){
        background(washroom_img,900, 900);
    }
    
}