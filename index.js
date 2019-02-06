// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodCount = 0
let customerCount = 0
let mealCount = 0
let deliveryCount = 0
class Neighborhood{
  constructor(name){
    this.name = name
    store.neighborhoods.push(self)
  }
  deliveries(){
    return store.deliveries.filter(delivery =>{
      return delivery.neighborhoodId === this.id
    })
  }
  customers(){
    notUnique = this.deliveries().map(delivery =>{
      return delivery.customerId
    })
    return [... new set (notUnique)]
  }
  meals(){
    return this.deliveries().map(delivery =>{
      return delivery.mealId
    })
  }
}
class Customer{
  constructor(name){
    this.name = name
    store.neighborhoods.push(self)
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
