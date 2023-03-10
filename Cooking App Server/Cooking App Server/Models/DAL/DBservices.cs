using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace Cooking_App_Server.Models.DAL
{
    public class DBservices
    {
        public DBservices() {}

        // Insert Ingredient to the DB
        public string insertIngredient(Ingredient ing)
        {
            SqlConnection con = Connect();
            SqlCommand command = new SqlCommand();
            command.Parameters.AddWithValue("@Name", ing.Name);
            command.Parameters.AddWithValue("@ImageURL", ing.ImageURL);
            command.Parameters.AddWithValue("@Calories", ing.Calories);
            command.CommandText = "spInsertIngredient";//!!
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds
            command.ExecuteNonQuery();

            con.Close();
            return "success ";
        }

        // Read all Recipes from the DB
        internal List<Recipe> readAllRecipes()
        {
            SqlConnection con = Connect();
            string commandSTR = "select * from recipes";
            SqlCommand command = new SqlCommand(commandSTR,con);
            command.ExecuteNonQuery();
            SqlDataReader dr = command.ExecuteReader(CommandBehavior.CloseConnection);

            //----- Read all Recipes without ingredient Ids and Names from the DB -----
            List<Recipe> recipes = new List<Recipe>();
            while (dr.Read())
            {
                int id = Convert.ToInt32(dr["Id"]);
                string name = dr["Name"].ToString();
                string imageURL = dr["ImageURL"].ToString();
                string cookingMethod = dr["CookingMethod"].ToString();
                float time = float.Parse(dr["Time"].ToString());
                recipes.Add(new Recipe(id, name, imageURL, cookingMethod, time, 
                    new List<int>(), new List<string>()));
            }
            con.Close();
            //----- Done -----

            //----- For each Recipe: fill ingredient Ids and Names Lists -----            
            for (int i = 0; i < recipes.Count; i++) 
            {
                con = Connect();
                SqlCommand command2 = new SqlCommand();
                command2.Parameters.AddWithValue("@Id", recipes[i].Id);                
                command2.CommandText = "spGetIngredientsForRecipe";
                command2.Connection = con;
                command2.CommandType = System.Data.CommandType.StoredProcedure;
                command2.CommandTimeout = 10; // in seconds
                command2.ExecuteNonQuery();
                SqlDataReader dr2 = command2.ExecuteReader(CommandBehavior.CloseConnection);
                //----- Read ingredient Ids and Names -----
                while (dr2.Read())
                {
                    recipes[i].IngredientIds.Add(Convert.ToInt32(dr2["IngredientId"]));
                    recipes[i].IngrediendNames.Add(dr2["Name"].ToString());
                }
                con.Close();
            }            
            //----- Done -----
            return recipes;
        }

        // Insert Recipe to the DB
        internal string insertRecipe(Recipe recipe)
        {
            SqlConnection con = Connect();

            //----- Insert the Recipe to DB -----
            SqlCommand command = new SqlCommand();
            command.Parameters.AddWithValue("@Name", recipe.Name);
            command.Parameters.AddWithValue("@ImageURL", recipe.ImageURL);
            command.Parameters.AddWithValue("@CookingMethod", recipe.CookingMethod);
            command.Parameters.AddWithValue("@Time", recipe.Time);
            command.CommandText = "spInsertRecipe";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds
            command.ExecuteNonQuery();
            //----- Done -----

            //----- Get the input Recipe Id -----
            string commandSTR = "select Id " + "from recipes " + "where Name = '" + recipe.Name+"'";
            SqlCommand command2 = new SqlCommand(commandSTR, con);
            command2.ExecuteNonQuery();
            SqlDataReader dr = command2.ExecuteReader(CommandBehavior.CloseConnection);
            int id =0;
            while (dr.Read())// should run only once due to unique property of Recipe Name in the DB
            {
                id = Convert.ToInt32(dr["Id"]);                
            }
            if(id == 0)// check if something went wrong with the insert command
            {
                throw new Exception("something went wrong with inserting Recipe to the DB!");
            }
            con.Close();
            // ----- Done -----

            //----- Insert Ids to IngredientsInRecipes table -----
            SqlConnection con2 = Connect();
            for (int i = 0; i < recipe.IngredientIds.Count; i++) 
            {
                SqlCommand command3 = new SqlCommand();
                command3.Parameters.AddWithValue("@RecipeId",id);
                command3.Parameters.AddWithValue("@IngredientId", recipe.IngredientIds[i]);
                command3.CommandText = "spInsertIngredientInRecipe";
                command3.Connection = con2;
                command3.CommandType = System.Data.CommandType.StoredProcedure;
                command3.CommandTimeout = 10; // in seconds
                command3.ExecuteNonQuery();
            }
            //----- Done -----

            con2.Close();

            return "success";
        }       

        // Read all Ingredients from the DB
        internal List<Ingredient> readIngredients()
        {            
            SqlConnection con = Connect();

            SqlCommand command = new SqlCommand();
            command.CommandText = "spGetAllIngredients";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            SqlDataReader dr = command.ExecuteReader(CommandBehavior.CloseConnection);
            List<Ingredient> ingredients = new List<Ingredient>();
            while (dr.Read())
            {                
                int id = Convert.ToInt32(dr["Id"]);
                string name = dr["name"].ToString();
                string imageURL = dr["ImageURL"].ToString();
                float calories = float.Parse(dr["Calories"].ToString());
                ingredients.Add(new Ingredient(id, name, imageURL, calories));
            }
            con.Close();

            return ingredients;
        }

        // Connect to DB
        private SqlConnection Connect()
        {
            // read the connection string from the web.config file
            string connectionString = WebConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
            // create the connection to the db
            SqlConnection con = new SqlConnection(connectionString);
            // open the database connection
            con.Open();
            return con;
        }
    }
}