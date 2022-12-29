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
        public IHttpActionResult Get()
        {
            return Ok(new string[] { "jojjjpjpj", "hello2" });
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
