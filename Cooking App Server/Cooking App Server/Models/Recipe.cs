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

        public Recipe(string name, string imageURL, string cookingMethod, float time, List<int> ingredientIds)
        {
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
            IngredientIds = ingredientIds;
        }

        public Recipe(int id, string name, string imageURL, string cookingMethod, float time, List<int> ingredientIds)
        {
            Id = id;
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
            IngredientIds = ingredientIds;
        }

        public Recipe() { }        

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string ImageURL { get => imageURL; set => imageURL = value; }
        public string CookingMethod { get => cookingMethod; set => cookingMethod = value; }
        public float Time { get => time; set => time = value; }
        public List<int> IngredientIds { get => ingredientIds; set => ingredientIds = value; }

        internal string addRecipe()
        {
            DBservices ds = new DBservices();
            return ds.insertRecipe(this);
        }
    }
}