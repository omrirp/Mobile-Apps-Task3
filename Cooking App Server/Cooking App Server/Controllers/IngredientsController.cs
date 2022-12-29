using Cooking_App_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Cooking_App_Server.Controllers
{
    public class IngredientsController : ApiController
    {
        // GET: api/Ingredients
        public List<Ingredient> Get()
        {
            Ingredient i = new Ingredient();
            return i.getIngredients();
        }

        // GET: api/Ingredients/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Ingredients
        public string Post([FromBody] Ingredient ing)
        {
            return ing.addIngredient();
        }

        // PUT: api/Ingredients/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Ingredients/5
        public void Delete(int id)
        {
        }
    }
}
