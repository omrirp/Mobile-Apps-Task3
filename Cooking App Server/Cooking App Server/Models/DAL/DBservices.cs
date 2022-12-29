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
                string uEmail = dr["user_email"].ToString();
                DateTime FromDate = Convert.ToDateTime(dr["from_date"]);
                DateTime ToDate = Convert.ToDateTime(dr["to_date"]);

                int id = Convert.ToInt32(dr["Id"]);
                string name = dr["name"].ToString();
                string imageURL = dr["ImageURL"].ToString();
                float calories = float.Parse(dr["Calories"].ToString());
                ingredients.Add(new Ingredient(id, name, imageURL, calories));
            }
            con.Close();

            return ingredients;
        }
    }
}