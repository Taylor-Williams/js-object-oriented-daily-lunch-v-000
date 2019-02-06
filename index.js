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
  deliveries(){
    return store.delivies.filter(delivery =>{
      return delivery.customerId === this.id
    })
  }
  meals(){
    return this.deliveries().map(delivery =>{
      return delivery.mealId
    })
  }
  totalSpent(){
    total = 0
    this.meals().forEach(meal =>{
      total += meal.price
    })
    return total
  }
}
class Meal{
  constructor(title, price){
    this.title = title
    this.price = price
    this.id = mealCount++
    store.meals.push(self)
  }
  deliveries(){
    return store.delivies.filter(delivery =>{
      return delivery.mealId === this.id
    })
  }
  customers(){
    allMeals = this.deliveries().map(delivery =>{
      return delivery.customerId
    })
    return [... new set (allMeals)]
  }
  static byprice(){
    return store.meals.sort((a,b) => a.price - b.price)
  }
}
class Delivery{
  constructor(mealId, neighborhoodId, customerId){
    this.mealId = mealId
    this.neighborhoodCountId = neighborhoodCountId
    this.customerId = customerId
    this.id = deliveryCount++
    store.deliveries.push(self)
  }
  meal(){
    return store.meals[this.mealId]
  }
  customer(){
    return store.customers[this.customerId]
  }
  neighborhood(){
    return store.neighborhoods[this.neighborhoodId]
  }
}
