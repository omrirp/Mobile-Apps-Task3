using Cooking_App_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Cooking_App_Server.Controllers
{
    public class RecipesController : ApiController
    {
        // GET: api/Recipes
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Recipes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Recipes
        public string Post([FromBody] Recipe r)
        {
            return "success";
            //return r.addRecipe(ingIds);
        }

        // PUT: api/Recipes/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Recipes/5
        public void Delete(int id)
        {
        }
    }
}
