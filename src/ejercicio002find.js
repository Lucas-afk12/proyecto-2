/*Utilizar find y queris*/
db.ordenadores.find({marca:"asus",estado:"reacondicionado"})
db.ordenadores.find({uso:"gaming"})
db.ordenadores.find({gama:"alta",marca:"msi"})
db.ordenadores.find({uso:"trabajo",estado:"nuevo",precio:{$lt:500}})
