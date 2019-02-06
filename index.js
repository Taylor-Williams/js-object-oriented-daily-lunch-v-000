// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodCount = 0
let customerCount = 0
let mealCount = 0
let deliveryCount = 0
class Neighborhood{
  constructor(name){
    this.name = name
    this.id = neighborhoodCount++
    store.neighborhoods.push(self)
  }
  deliveries(){
    return store.deliveries.filter(delivery =>{
      return delivery.neighborhoodId === this.id
    })
  }
  customers(){
    return this.deliveries().map(delivery =>{
      return delivery.customerId
    })
  }
  meals(){
    allMeals = this.deliveries().map(delivery =>{
      return delivery.mealId
    })
    return [... new set (allMeals)]
  }
}
class Customer{
  constructor(name, neighborhoodId){
    this.name = name
    this.id = customerCount++
    this.neighborhoodId = neighborhoodId
    store.customers.push(self)
  }
}
class Meal{
  constructor(name){
    this.name = name
    store.neighborhoods.push(self)
  }
}
class Delivery{
  constructor(mealId, neighborhoodId, customerId){

  }
}
