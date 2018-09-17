if (priceMin && priceMax){
  return c.price >= priceMin && c.price <=priceMax;
}else if(priceMin){
  return c.price >= priceMin;
}else if(priceMax){
  return c.price <= priceMax;
}else {
  return true;
}