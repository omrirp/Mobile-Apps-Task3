using Cooking_App_Server.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cooking_App_Server.Models
{
    public class Ingredient
    {
        int id;
        string name;
        string imageURL;
        float calories;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string ImageURL { get => imageURL; set => imageURL = value; }
        public float Calories { get => calories; set => calories = value; }

        public Ingredient(string name, string imageURL, float calories)
        {
            Name = name;
            ImageURL = imageURL;
            Calories = calories;
        }

        public Ingredient(int id, string name, string imageURL, float calories)
        {
            Id = id;
            Name = name;
            ImageURL = imageURL;
            Calories = calories;
        }

        public Ingredient() { }
   
        // add the Ingredient to the DB
        public string addIngredient()
        {
            DBservices ds = new DBservices();
            return ds.insertIngredient(this);
        }

        // get all ingredients from the DB
        public  List<Ingredient> getIngredients()
        {
            DBservices ds = new DBservices();
            return ds.readIngredients();
        }
    }
}