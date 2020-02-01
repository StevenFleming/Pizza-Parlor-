
//Contructor for Pizza
function Pizza(size, toppings, crust){
  this.size= size;
  this.toppings= toppings;
  this.cost = 10;
  this.crust = crust;
}

//Cost Modifyier for Large Pizza eventually medium as well 
  Pizza.prototype.sizeCost = function(){
    var largeSize = ["Large"]
    var mediumSize =["Medium"]
    if (largeSize.includes(this.size)) {
      return this.cost +=5
    } else if (mediumSize.includes(this.size)) {
      return this.cost += 3
      }
      else {
        return this.cost
      }
    }

  Pizza.prototype.toppingsCost = function(){
    var mushrooms =["Mushrooms"]
    var redPepers = ["Red Peppers"]
    if (mushrooms.includes(this.toppings)){
      return this.cost +=1
    } else if(redPepers.includes(this.toppings)){
      return this.cost +=2
    }
  }
  Pizza.prototype.crustCost = function(){
    var cheesyCrust = ["cheesy"]
    var garlicCrust = ["garlic"]
    if (cheesyCrust.includes(this.crust) ||garlicCrust.includes(this.crust) ){
      return this.cost +=1
    }
    else {
      return this.cost
    }
  }
  

    Pizza.prototype.calculateCost = function(){
      this.sizeCost();
      this.toppingsCost();
      this.crustCost();
      return this.cost;
    }
  
// FrontEnd



  $(document).ready(function(){
    $("#form").submit(function(event){
      var size = $("#size").val();
      var toppings =$("#Toppings").val();
      var crust =$("#crust").val();
      var newPizza = new Pizza(size, toppings, crust);
      console.log(newPizza);
      var finalCost = newPizza.calculateCost();

      $("#confirm").text("Your Pizza was a " + size + " with " + toppings + " and " + crust + " crust ");
      $("#pizzaPrice").text("Thank you for choosing Pizza Planet: Your Final Price will be $" + finalCost);

      event.preventDefault();
    }) 
  })

