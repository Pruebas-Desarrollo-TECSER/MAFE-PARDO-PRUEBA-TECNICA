
from django.db import models


class Category(models.Model):
    idcategory = models.AutoField(db_column='idCategory', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CATEGORY'


class Gender(models.Model):
    idgender = models.AutoField(db_column='idGender', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'GENDER'


class Product(models.Model):
    idproduct = models.AutoField(db_column='idProduct', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    quantity = models.IntegerField(db_column='Quantity', blank=True, null=True)  # Field name made lowercase.
    img = models.CharField(max_length=300, db_collation='SQL_Latin1_General_CP1_CI_AS')
    category_idcategory = models.ForeignKey(Category, models.DO_NOTHING, db_column='Category_idCategory', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'PRODUCT'


class Sale(models.Model):
    idsale = models.AutoField(db_column='idSale', primary_key=True)  # Field name made lowercase.
    datesale = models.DateField(db_column='DateSale', blank=True, null=True)  # Field name made lowercase.
    product_idproduct = models.ForeignKey(Product, models.DO_NOTHING, db_column='Product_idProduct', blank=True, null=True)  # Field name made lowercase.
    seller_idseller = models.ForeignKey('Seller', models.DO_NOTHING, db_column='Seller_idSeller', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SALE'


class Seller(models.Model):
    idseller = models.IntegerField(db_column='idSeller', primary_key=True)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')  # Field name made lowercase.
    address = models.CharField(max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')
    email = models.CharField(max_length=45, db_collation='SQL_Latin1_General_CP1_CI_AS')
    image = models.CharField(max_length=300, db_collation='SQL_Latin1_General_CP1_CI_AS')
    birthdate = models.DateField(db_column='BirthDate', blank=True, null=True)  # Field name made lowercase.
    gender_idgender = models.ForeignKey(Gender, models.DO_NOTHING, db_column='Gender_idGender', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SELLER'


