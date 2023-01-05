using Cooking_App_Server.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cooking_App_Server.Models
{
    public class Recipe
    {
        int id;
        string name;
        string imageURL;
        string cookingMethod;
        float time;
        List<int> ingredientIds;
        List<string> ingrediendNames;

        public Recipe(string name, string imageURL, string cookingMethod, float time, List<int> ingredientIds)
        {
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
            IngredientIds = ingredientIds;
        }

        public Recipe(int id, string name, string imageURL, string cookingMethod,
            float time, List<int> ingredientIds)
        {
            Id = id;
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
            IngredientIds = ingredientIds;
        }


        public Recipe() { }

        public Recipe(int id, string name, string imageURL, string cookingMethod,
            float time, List<int> ingredientIds, List<string> ingrediendNames)
        {
            Id = id;
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
            IngredientIds = ingredientIds;
            IngrediendNames = ingrediendNames;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string ImageURL { get => imageURL; set => imageURL = value; }
        public string CookingMethod { get => cookingMethod; set => cookingMethod = value; }
        public float Time { get => time; set => time = value; }
        public List<int> IngredientIds { get => ingredientIds; set => ingredientIds = value; }
        public List<string> IngrediendNames { get => ingrediendNames; set => ingrediendNames = value; }

        // add Recipe to the DB
        internal string addRecipe()
        {
            DBservices ds = new DBservices();
            return ds.insertRecipe(this);
        }

        // read all Recipes from the DB
        internal List<Recipe> getAllRecipes()
        {
            DBservices ds = new DBservices();
            return ds.readAllRecipes();
        }
    }
}