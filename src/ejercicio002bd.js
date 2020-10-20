/*insertar ordenadores en  base de datos*/

db.ordenadores.insertMany([{
    id:1,
    marca:"asus",
    modelo:"rog",
    gama:"media",
    uso:"trabajo",
    estado:"nuevo",
    precio:675.5
},
{   id:2,
    marca:"alienware",
    modelo:"monster",
    gama:"alta",
    uso:"gaming",
    estado:"nuevo",
    precio:870
},
{   id:3,
    marca:"alienware",
    modelo:"monster",
    gama:"media",
    uso:"gaming",
    estado:"reacondicionado",
    precio:680
},
{   id:4,
    marca:"msi",
    modelo:"mag infinite",
    gama:"media",
    uso:"gaming",
    estado:"nuevo",
    precio:700
},
{
    id:5,
    marca:"msi",
    modelo:"trident a plus",
    gama:"alta",
    uso:"gaming",
    estado:"nuevo",
    precio:1600
},
{   id:6,
    marca:"asus",
    modelo:"x509j",
    gama:"baja",
    uso:"trabajo",
    estado:"reacondicionado",
    precio:400
},
{   id:7,
    marca:"asus",
    modelo:"m509da",
    gama:"baja",
    uso:"trabajo",
    estado:"nuevo",
    precio:458
}])
