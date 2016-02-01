using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HappiPugService.Models;
namespace HappiPugService.Controllers
{
    public class MoviesController : ApiController
    {
        // GET api/values
        happipugEntities ob = new happipugEntities();
        public List<Movie> Get()
        {
            return ob.Movies.AsEnumerable().ToList<Movie>();
        }

        // GET api/values/5
        public Movie Get(int id)
        {
            return ob.Movies.Single(x=>x.Id==id);
        }

        // POST api/values
        public void Post(Movie item)
        {
            Movie newItem = new Movie();
            newItem = item;
            ob.Movies.Add(newItem);
            ob.SaveChanges();

        }

        // PUT api/values/5
        public void Put(int id, Movie newValues)
        {
            var item = ob.Movies.Single(x => x.Id == id);
            item = newValues;
            ob.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            var item = ob.Movies.Single(x => x.Id == id);
            ob.Movies.Remove(item);
            ob.SaveChanges();
        
        }
    }
}