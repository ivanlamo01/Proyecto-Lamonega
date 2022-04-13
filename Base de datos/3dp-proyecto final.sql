create database 3DP;
use 3DP;
create table proyectos(
nombre varchar(100) not null,
apellido varchar(100) not null,
email varchar (250) not null,
telefono varchar(30) not null,
empresa varchar (100),
instEducativa varchar(100),
descripcion varchar(1000) not null,
archivo longblob not null
);

create table contacto(
	nombre_contacto varchar (100) ,
    apellido_contacto varchar(100) ,
    email_contacto varchar(250) ,
    telefono_contacto varchar(30)
    );


create table productos(
idProducto int unsigned not null auto_increment,
nombreProducto varchar(70),
tipo varchar(20),
precio decimal unsigned not null,
primary key (idProducto)
);

insert into productos values (null, "Impresora 3D creality CR30", "impresora 3d",100000);
insert into productos values (null, "Impresora 3D ender 3", "impresora 3d",35000);
insert into productos values (null, "Filamento 1.5mm", "insumo",10000);
insert into productos values (null, "Impresora 3D ender 3 pro", "impresora 3d",40000);
insert into productos values (null, "Filamento 1.75mm ", "insumo",13000);
insert into productos values (null, "Impresora 3D ender 5 black", "impresora 3d",74000);
insert into productos values (null, "Filamento 1.75mm rojo ", "insumo",13000);
insert into productos values (null, "Filamento 1.75mm azul", "insumo",13000);
insert into productos values (null, "Filamento 1.75mm amarillo", "insumo",13000);
insert into productos values (null, "Filamento 1.75mm naranja", "insumo",13000);
insert into productos values (null, "Filamento 1.5mm rojo", "insumo",10000);
insert into productos values (null, "Filamento 1.5mm azul", "insumo",10000);
insert into productos values (null, "Filamento 1.5mm amarillo", "insumo",10000);
insert into productos values (null, "Filamento 1.5mm naranja", "insumo",10000);



