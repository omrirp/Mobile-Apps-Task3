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

        public Recipe(string name, string imageURL, string cookingMethod, float time)
        {
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
        }

        public Recipe(int id, string name, string imageURL, string cookingMethod, float time)
        {
            Id = id;
            Name = name;
            ImageURL = imageURL;
            CookingMethod = cookingMethod;
            Time = time;
        }

        public Recipe() { }

        internal string addRecipe(List<int> ingIds)
        {
            DBservices ds = new DBservices();
            return ds.insertRecipe(this, ingIds);
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string ImageURL { get => imageURL; set => imageURL = value; }
        public string CookingMethod { get => cookingMethod; set => cookingMethod = value; }
        public float Time { get => time; set => time = value; }
    }
}